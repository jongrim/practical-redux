import React, { Component } from 'react';
import { Container, Header } from 'semantic-ui-react';
import './App.css';

import TabBarContainer from 'features/tabs/TabBar';

import Mechs from 'features/mechs/Mechs';
import Pilots from 'features/pilots/Pilots';
import UnitInfo from 'features/unitInfo/UnitInfo';
import UnitOrganization from 'features/unitOrganization/UnitOrganization';

class App extends Component {
  render() {
    const tabs = [
      { name: 'unitInfo', label: 'Unit Info', component: UnitInfo },
      { name: 'pilots', label: 'Pilots', component: Pilots },
      { name: 'mechs', label: 'Mechs', component: Mechs },
      {
        name: 'unitOrganization',
        label: 'UnitOrganization',
        component: UnitOrganization
      }
    ];

    return (
      <div className="App">
        <div className="App-header">
          <Header inverted as="h1">
            Project Mini-Mek
          </Header>
        </div>
        <Container>
          <TabBarContainer tabs={tabs} size="massive" />
        </Container>
      </div>
    );
  }
}

export default App;
