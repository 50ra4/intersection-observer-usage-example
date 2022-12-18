import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { PageTemplate } from 'src/presentation/PageTemplate';

function TopPage() {
  return (
    <PageTemplate>
      <List>
        <li>
          <Link to="/examples/1">
            1. 1番下までスクロールするとボタンが活性化する
          </Link>
        </li>
        <li>
          <Link to="/examples/2">
            2. スクロールしていくとサブタイトル通過後、URLに#が追加される
          </Link>
        </li>
        <li>
          <Link to="/examples/3">3. 無限スクロール</Link>
        </li>
      </List>
    </PageTemplate>
  );
}

const List = styled.ul`
  margin: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;

  & > li + li {
    margin-top: 8px;
  }
`;

export default TopPage;
