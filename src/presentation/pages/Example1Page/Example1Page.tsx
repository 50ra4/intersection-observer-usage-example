import React from 'react';
import { Link } from 'react-router-dom';
import { PageTemplate } from 'src/presentation/PageTemplate';

function Example1Page() {
  return (
    <PageTemplate title="Example1">
      under construction
      <Link to="/">TopPageに戻る</Link>
    </PageTemplate>
  );
}

export default Example1Page;
