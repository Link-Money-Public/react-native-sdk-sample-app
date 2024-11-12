import {
  LinkPayContextProvider,
  LinkPayView,
} from '@link.money/linkpay-reactnative';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Home from './components/home';

const App = () => {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <LinkPayContextProvider>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: '#35494A',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}>
          <Stack.Group>
            <Stack.Screen
              name="Home"
              component={Home}
              options={{title: 'Link Demo'}}
            />
          </Stack.Group>
          <Stack.Group screenOptions={{presentation: 'modal'}}>
            <Stack.Screen name="LinkPayView" component={LinkPayView} />
          </Stack.Group>
        </Stack.Navigator>
      </LinkPayContextProvider>
    </NavigationContainer>
  );
};

export default App;
