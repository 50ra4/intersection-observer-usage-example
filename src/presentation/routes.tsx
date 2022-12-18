import React, { lazy } from 'react';
import { RouteProps, useParams } from 'react-router-dom';

const TopPage = lazy(() => import('src/presentation/pages/TopPage/TopPage'));
export const ErrorPage = lazy(
  () => import('src/presentation/pages/ErrorPage/ErrorPage'),
);

const Example1Page = lazy(
  () => import('src/presentation/pages/Example1Page/Example1Page'),
);
const Example2Page = lazy(
  () => import('src/presentation/pages/Example2Page/Example2Page'),
);
const Example3Page = lazy(
  () => import('src/presentation/pages/Example3Page/Example3Page'),
);
function ExamplePages() {
  const { no } = useParams();
  switch (no) {
    case '1':
      return <Example1Page />;
    case '2':
      return <Example2Page />;
    case '3':
      return <Example3Page />;
    default:
      return <ErrorPage statusCode={404} />;
  }
}

export const ROUTES: RouteProps[] = [
  {
    path: '/',
    element: <TopPage />,
  },
  {
    path: '/error',
    element: <ErrorPage />,
  },
  {
    path: 'examples/:no',
    element: <ExamplePages />,
  },
];
