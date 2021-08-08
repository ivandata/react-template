import React from 'react';
import { SPageHeader, SPageContainer, SLink } from './App.styles';

const App: React.FunctionComponent = () => {
  return (
    <SPageContainer>
      <SPageHeader>
        <SLink
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer">
          Learn React
        </SLink>
      </SPageHeader>
    </SPageContainer>
  );
};

export default App;
