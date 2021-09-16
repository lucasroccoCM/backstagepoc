import { createPlugin, createRoutableExtension } from '@backstage/core-plugin-api';

import { rootRouteRef } from './routes';

export const statusReportTestPlugin = createPlugin({
  id: 'status-report-test',
  routes: {
    root: rootRouteRef,
  },
});

export const StatusReportTestPage = statusReportTestPlugin.provide(
  createRoutableExtension({
    component: () =>
      import('./components/ExampleComponent').then(m => m.ExampleComponent),
    mountPoint: rootRouteRef,
  }),
);
