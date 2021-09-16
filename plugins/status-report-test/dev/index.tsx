import React from 'react';
import { createDevApp } from '@backstage/dev-utils';
import { statusReportTestPlugin, StatusReportTestPage } from '../src/plugin';

createDevApp()
  .registerPlugin(statusReportTestPlugin)
  .addPage({
    element: <StatusReportTestPage />,
    title: 'Root Page',
    path: '/status-report-test'
  })
  .render();
