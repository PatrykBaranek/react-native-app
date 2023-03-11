import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { Provider as ReduxProvider } from 'react-redux';
import { ThemeProp } from 'react-native-paper/lib/typescript/src/types';
import { TabNavigator } from './src/navigation/TabNavigator';
import { store } from './src/app/store/store';

const theme: ThemeProp = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#2081C3',
  },
};

const App: React.FC = () => {
  return (
    <ReduxProvider store={store}>
      <PaperProvider theme={theme}>
        <TabNavigator />
      </PaperProvider>
    </ReduxProvider>
  );
};

export default App;
