For suspicious-site alerts and detail views in UIManager, prefer building UI with DOM APIs such as `document.createElement` and assigning user-visible content with `textContent` instead of assembling large HTML strings.

Project guidance:

Validate color inputs before applying them, and only allow safe hex color values.
Validate report links before rendering them, and only allow HTTP(S) URLs.
Preserve accessibility and focus behavior when rendering alerts and modal content.
Use placeholder elements populated through DOM property assignment for dynamic content inside modal UIs.
