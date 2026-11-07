import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import A from './screens/A'; 
import B from './screens/B'; 
import RootNavigator from './screens/Root';

const Tab = createBottomTabNavigator();
export default function App() {
  return (
    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    //   <StatusBar style="auto" />
    // </View>

    <NavigationContainer>
       <Tab.Navigator initialRouteName="A" screenOptions={{ headerShown: false }}>
         <Tab.Screen name="A" component={A} /> 
         <Tab.Screen name="B" component={B} /> 
         <Tab.Screen name="Root" component={RootNavigator} /> 
         </Tab.Navigator> 
     </NavigationContainer>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
