import { render } from '@testing-library/react';
export * from '@testing-library/react';

// App already contains a Router. Keep this as a simple passthrough to avoid nested routers.
export function renderWithRouter(ui, { route = '/', ...opts } = {}) {
  return render(ui, opts);
}


