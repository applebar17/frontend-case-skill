#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const { pathToFileURL } = require("url");

function usage() {
  console.error("Usage: node render_pdf.js <input.html> [output.pdf]");
}

function resolveInput(inputPath) {
  const absolute = path.resolve(process.cwd(), inputPath);
  if (!fs.existsSync(absolute)) {
    throw new Error(`Input HTML not found: ${absolute}`);
  }
  return absolute;
}

async function loadPlaywright() {
  try {
    return require("playwright");
  } catch (error) {
    if (error.code === "MODULE_NOT_FOUND") {
      const scriptsDir = __dirname;
      throw new Error(
        [
          "Missing dependency: playwright.",
          `Install it from the scripts folder: cd "${scriptsDir}" && npm install`,
          "Then install Chromium if needed: npx playwright install chromium",
        ].join("\n")
      );
    }
    throw error;
  }
}

async function renderPdf(inputHtml, outputPdf) {
  const { chromium } = await loadPlaywright();
  let browser;

  try {
    browser = await chromium.launch();
    const page = await browser.newPage();
    await page.emulateMedia({ media: "print" });
    await page.goto(pathToFileURL(inputHtml).href, { waitUntil: "networkidle" });
    await fs.promises.mkdir(path.dirname(outputPdf), { recursive: true });
    await page.pdf({
      path: outputPdf,
      format: "A4",
      printBackground: true,
      margin: {
        top: "14mm",
        right: "14mm",
        bottom: "14mm",
        left: "14mm",
      },
    });
  } catch (error) {
    if (
      /Executable doesn't exist|browserType\.launch|install chromium/i.test(
        error.message
      )
    ) {
      throw new Error(
        [
          error.message,
          "",
          "Chromium is not available for Playwright.",
          `Install it from the scripts folder: cd "${__dirname}" && npx playwright install chromium`,
        ].join("\n")
      );
    }
    throw error;
  } finally {
    if (browser) {
      await browser.close();
    }
  }
}

async function main() {
  const [, , inputArg, outputArg] = process.argv;

  if (!inputArg) {
    usage();
    process.exitCode = 2;
    return;
  }

  const inputHtml = resolveInput(inputArg);
  const outputPdf = path.resolve(
    process.cwd(),
    outputArg || inputHtml.replace(/\.html?$/i, ".pdf")
  );

  try {
    await renderPdf(inputHtml, outputPdf);
    console.log(outputPdf);
  } catch (error) {
    console.error(error.message);
    process.exitCode = 1;
  }
}

main();
