import React from 'react';
import { Txt, Vw } from './src/theme';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Home from './src/Home/Home';
import { colors } from './src/theme/colors';
import { createTables } from './api/api';

const AppStackNavigator = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      header: null,
      headerStyle: {
        backgroundColor: `${colors(0.75).blue}`
      }
    }
  }
});

createTables((forceDrop = true));

const AppContainer = createAppContainer(AppStackNavigator);
const App = () => {
  return <AppContainer />;
};

export default App;
