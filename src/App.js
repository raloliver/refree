/*
 * File: App.js
 * Project: refree
 * Created: Wednesday, September 6th 2023, 7:23:01 am
 * Last Modified: Thursday, September 7th 2023, 5:17:49 am
 * Copyright © 2023 AMDE Agência
 */

import { Styles } from './components/GlobalStyles/Styles';
import { Card } from './components/Card';
import { Theme } from './components/ThemeProvider';

function App() {
  return (
    <Theme>
      <Styles />
      <Card>
        <h1>ReFree</h1>
      </Card>
    </Theme>
  );
}

export default App;
