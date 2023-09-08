/*
 * File: App.js
 * Project: refree
 * Created: Wednesday, September 6th 2023, 7:23:01 am
 * Last Modified: Friday, September 8th 2023, 5:33:53 am
 * Copyright © 2023 AMDE Agência
 */

import { Styles } from './components/GlobalStyles/Styles';
import { Card } from './components/Card';
import { Theme } from './components/ThemeProvider';
import { Header } from './components/Header';

function App() {
  return (
    <Theme>
      <Styles />
      <Header>
        <h1>Header</h1>
      </Header>
      <Card>
        <h3>ReFree</h3>
      </Card>
    </Theme>
  );
}

export default App;
