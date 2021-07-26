
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Navigation from './Navigation/Navigation';
//import Search from './Components/Search'
//import Navigation from './Navigation/Navigation'
//import { OverflowMenuProvider } from 'react-navigation-header-buttons';


//function componnent
export default function App() {
  return (
    <Navigation/>
   /* <Text>hello deracc</Text>*/
  );
}

// class component
/*export default class App extends React.Component {
  render() {
    return (
      <Search/>
    );
  }
}*/


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
