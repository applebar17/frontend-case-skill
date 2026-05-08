# Scoring Rubric

Use this rubric to guide interviewer evaluation. Keep it human-led and descriptive. Do not compute hiring decisions automatically.

## Dimensions

### Product Understanding

- Clarifies the user workflow and main success path.
- Handles edge cases without overcomplicating the solution.
- Makes reasonable tradeoffs for the available time.

### Frontend Architecture

- Chooses a coherent component structure.
- Keeps state ownership understandable.
- Separates presentation, data loading, and domain logic where useful.
- Avoids unnecessary abstractions.

### TypeScript and Code Quality

- Uses types to model important data and states.
- Keeps naming clear.
- Handles null, loading, empty, and error paths deliberately.
- Maintains readable, reviewable code.

### Accessibility

- Uses semantic markup.
- Supports keyboard navigation.
- Manages focus where interaction requires it.
- Provides accessible labels and meaningful status/error messaging.

### Testing

- Covers important behavior rather than implementation details.
- Includes useful tests for state changes, rendering paths, or user interactions.
- Keeps tests maintainable and understandable.

### Performance and Reliability

- Avoids obvious re-render, data loading, or bundle problems.
- Handles slow and failed data paths.
- Uses appropriate memoization or virtualization only when justified.

### Communication

- Explains assumptions and tradeoffs.
- Can discuss alternatives.
- Accepts feedback and reasons clearly during review.

## Suggested Rating Scale

Use a 1 to 4 scale per dimension:

- 1: Major gaps that block the expected level.
- 2: Partially meets expectations but needs significant guidance.
- 3: Meets expectations for the target level.
- 4: Exceeds expectations with clear, pragmatic judgment.

## Interviewer Notes

Capture evidence, not impressions. Prefer notes like "implemented keyboard selection and explained roving tabindex tradeoff" over generic statements like "good accessibility."
