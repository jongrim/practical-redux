import React, { Component } from 'react';
import { Container, Header, Menu } from 'semantic-ui-react';
import TabBarContainer from './features/tabs/TabBarContainer';
import './App.css';

class App extends Component {
  render() {
    const tabs = [
      {name: 'unitInfo', label: 'Unit Info'},
      {name: 'pilots', label: 'Pilots'},
      {name: 'mechs', label: 'Mechs'},
      {name: 'unitOrganization', label: 'UnitOrganization'}
    ]

    return (
      <div className="App">
        <div className="App-header">
          <Header inverted as="h1">
            Project Mini-Mek
          </Header>
        </div>
        <Container>
          <Menu tabular size="massive">
            <TabBarContainer tabs={tabs} size="massive" />
          </Menu>
        </Container>
      </div>
    );
  }
}

export default App;
