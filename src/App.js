import React from 'react';
import { Grommet, Box, Button, Heading, } from 'grommet';
import { Switch, Route, Link, } from 'react-router-dom';
import { Notification } from 'grommet-icons';
import { UsersTableContainer } from './components';
import { AppBar } from './components/layout';
import { DataTable } from './components/dataTable/dataTable';
import './App.css';

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
              <div className='navContainer'>
                <Link to='/'>Home</Link>
                <Link to='/usertable'>Users Table</Link>
                <Link to='/datatable'>Data Table</Link>
              </div>
          </Box>          
          <Box flex justify='center'>
            
            <Switch>
              <Route path='/datatable'>
                <DataTable />
              </Route>
              <Route path='/usertable'>
                <UsersTableContainer />
              </Route>      
              <Route path='/'>
                <div>home</div>
              </Route>
            </Switch>

          </Box>
        </Box>
      </Box>
    </Grommet>
  );
}

export default App;
