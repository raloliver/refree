/*
 * File: App.js
 * Project: refree
 * Created: Wednesday, September 6th 2023, 7:23:01 am
 * Last Modified: Friday, September 8th 2023, 6:35:06 am
 * Copyright © 2023 AMDE Agência
 */

import { Styles } from './components/GlobalStyles/Styles';
import { Card } from './components/Card';
import { Theme } from './components/ThemeProvider';
import { Header } from './components/Header';
import { Typography } from './components/Typography';

function App() {
  return (
    <Theme>
      <Styles />
      <Header>
        <h1>Header</h1>
      </Header>
      <Card>
        <Typography
          element="h1"
          style="h1"
        >
          ReFree
        </Typography>
        <Typography
          element="body2"
          style="body1"
        >
          Nunca é demais lembrar o peso e o significado destes problemas, uma
          vez que a contínua expansão de nossa atividade assume importantes
          posições no estabelecimento das condições financeiras e
          administrativas exigidas.
        </Typography>
      </Card>
    </Theme>
  );
}

export default App;
