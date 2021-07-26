import React from 'react';
import { View, TextInput, Button, Text,StyleSheet,FlatList,ActivityIndicator,TouchableHighlight } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import  Ionicons  from 'react-native-vector-icons/Ionicons';
import  Entypo from 'react-native-vector-icons/Entypo';
import  FontAwesome  from 'react-native-vector-icons/FontAwesome';
import  AccueilStack from '../Components/Accueil';
import  ReplayStack from '../Components/Replay';
import  DirectStack from '../Components/Direct';
import  ProgrammeStack from '../Components/Programme';
import  MenuStack from '../Components/Menu';
import  NewsStack from '../Components/News';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';




const Stack = createStackNavigator();

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('DetailsScreen')}
      />
    </View>
  );
}

function DetailsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
}


const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>

      <Tab.Navigator

      	screenOptions={({ route }) => ({
        	tabBarIcon: ({ focused, color, size }) => {

            let iconName;

            if (route.name === 'Accueil') {
              iconName =  'home';
            }
            else if (route.name === 'Actualité') {
              iconName = 'clock-o';
            } 
            else if (route.name === 'Replay') {
              iconName = 'repeat';
            } 
            else if (route.name === 'Direct') {
              iconName = 'play';
            }
            else if (route.name === 'Programme') {
              iconName = 'calendar';
            }
            else if (route.name === 'Menu') {
             
             return <Ionicons name="md-menu" size={size} color={color}   />
            }

            // You can return any component that you like here!
            return <FontAwesome name={iconName} size={size} color={color} />;
          },
        })}

        tabBarOptions={{
          activeTintColor: '#06B4FF',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Accueil"component={AccueilStack} />
        <Tab.Screen name="Actualité" component={NewsStack} />
        <Tab.Screen name="Replay" component={ReplayStack } />
        <Tab.Screen name="Programme" component={ProgrammeStack} />
        <Tab.Screen name="Menu" component={MenuStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}