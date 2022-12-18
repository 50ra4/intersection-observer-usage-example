import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { PageTemplate } from 'src/presentation/PageTemplate';

type StatusCode = 404 | 500;
type ButtonType = 'TopPage';

type ErrorContent = {
  title: string;
  detail: string;
  buttonType: ButtonType;
};

const createErrorContent = (code?: StatusCode): ErrorContent => {
  switch (code) {
    case 404:
      return {
        title: 'ページが見つかりません',
        detail: 'ページが見つかりませんでした。URLをお確かめください。',
        buttonType: 'TopPage',
      };

    default:
      return {
        title: 'エラーが発生しました',
        detail: '不明なエラーが発生しました。',
        buttonType: 'TopPage',
      };
  }
};

function ErrorPage({ statusCode }: { statusCode?: StatusCode }) {
  const { title, detail, buttonType } = createErrorContent(statusCode);

  return (
    <PageTemplate>
      <Container>
        <Section>
          <h2>{title}</h2>
          <p>{detail}</p>
          {buttonType === 'TopPage' && <Link to="/">TopPage</Link>}
        </Section>
      </Container>
    </PageTemplate>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const Section = styled.section`
  text-align: center;

  & > h2 {
    font-size: 18px;
    font-weight: bold;
    margin: 8px 0;
  }

  & > p {
    margin: 16px 0;
  }
`;

export default ErrorPage;
