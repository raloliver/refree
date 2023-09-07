/*
 * File: App.js
 * Project: refree
 * Created: Wednesday, September 6th 2023, 7:23:01 am
 * Last Modified: Thursday, September 7th 2023, 4:51:27 am
 * Copyright © 2023 AMDE Agência
 */

import { Styles } from './components/GlobalStyles/Styles';
import { Card } from './components/Card';

function App() {
  return (
    <div>
      <Styles />
      <Card>
        <h1>ReFree</h1>
      </Card>
    </div>
  );
}

export default App;
