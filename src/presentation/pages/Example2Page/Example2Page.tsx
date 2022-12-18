import React from 'react';
import { Link } from 'react-router-dom';
import { PageTemplate } from 'src/presentation/PageTemplate';

function Example2Page() {
  return (
    <PageTemplate title="Example2">
      under construction<Link to="/">TopPageに戻る</Link>
    </PageTemplate>
  );
}

export default Example2Page;
