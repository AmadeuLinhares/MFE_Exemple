import React from 'react';

const Shell = React.lazy(() => import('shell/Shell'));

function App() {
  return (
    <React.Suspense fallback={<LoadingShell />}>
      <Shell />
      <div>sem o Shell</div>
    </React.Suspense>
  );
}

function LoadingShell() {
  return <div>Loading Shell...</div>;
}

export default App;
