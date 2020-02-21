import React from 'react';
import { Grommet, Box, Button, Heading, } from 'grommet';
import { Notification } from 'grommet-icons';
import { UsersTableContainer } from './components';
import { AppBar } from './components/layout';

const theme = {
  global: {
    colors: {
      brandColor: '#7D4CDB'
    },
    font: {
      family: 'Roboto',
      size: '18px',
      height: '20px',
    },
  },
};

function App() {
  return (
    <Grommet theme={theme}>
      <Box fill>
        <AppBar>
          Powered by Grommet
          <Heading level='3' margin='none'>Koa Frontend</Heading>
          <Button icon={<Notification />} onClick={() => {}} />
        </AppBar>
        <Box direction='row' flex overflow={{ horizontal: 'hidden' }}>
          <Box
              width='small'
              background='light-2'
              elevation='small'
              align='center'
              justify='center'
            >
              sidenav
          </Box>          
          <Box flex justify='center'>
            <UsersTableContainer />
          </Box>
        </Box>
      </Box>
    </Grommet>
  );
}

export default App;
