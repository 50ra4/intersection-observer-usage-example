import React from 'react';
import styled from 'styled-components';

type Props = {
  className?: string;
  title: string;
  children: React.ReactNode;
};

export function PageTemplate({ className, title, children }: Props) {
  return (
    <Root className={className}>
      <ResponsiveContainer>
        <Title>{title}</Title>
        <Main>{children}</Main>
      </ResponsiveContainer>
    </Root>
  );
}

const Root = styled.div`
  background-color: #eee;
  min-height: 100vh;
  min-width: 100vw;
`;

const ResponsiveContainer = styled.div`
  max-width: 1280px;
  @media (min-width: 1280px) {
    margin: 0 auto;
  }
`;

const Title = styled.h1`
  color: #ffffff;
  background-color: #111111;
  text-align: center;
  line-height: 48px;
  font-weight: bold;
  font-size: 32px;
  padding: 8px 0;
  position: sticky;
  top: 0;
  z-index: 1200;
`;

const Main = styled.main`
  width: 100%;
`;
