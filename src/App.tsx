import React from 'react';

import { ChakraProvider } from '@chakra-ui/react';

import { chakraTheme } from './styles/chakraTheme';

const App: React.FC = () => {
  return (
    <ChakraProvider theme={chakraTheme}>
      <h1>Hello Leo Madeiras</h1>
    </ChakraProvider>
  );
};

export default App;