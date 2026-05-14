This PR refactors suspicious-site alert/detail UI creation in UIManager to use DOM APIs instead of large HTML strings, while improving color sanitization, link handling, and accessibility/focus behavior.

Changes:

Replaces suspicious-site alert and details modal HTML string construction with document.createElement/textContent.
Adds safe hex color validation and HTTP(S) report URL validation.
Updates suspicious alert rendering inside the main modal to use placeholders populated via textContent.
