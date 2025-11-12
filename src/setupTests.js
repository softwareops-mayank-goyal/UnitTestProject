import '@testing-library/jest-dom';
import 'whatwg-fetch'; // so global fetch() exists in tests
// Polyfill TextEncoder/TextDecoder for libraries that rely on them (e.g., react-router)
try {
  // eslint-disable-next-line no-undef
  if (typeof TextEncoder === 'undefined') {
    const { TextEncoder, TextDecoder } = require('node:util');
    // eslint-disable-next-line no-undef
    global.TextEncoder = TextEncoder;
    // eslint-disable-next-line no-undef
    global.TextDecoder = TextDecoder;
  }
} catch (e) {
  // ignore if not available; tests that need it will fail explicitly
}
