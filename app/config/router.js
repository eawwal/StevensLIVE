'use strict';
import React, { Component } from 'react';
import { Icon, } from 'react-native-elements';
import { StackNavigator, TabNavigator, NavigationActions } from 'react-navigation';
import Login from '../screens/Welcome/Login'
import ClassStream from '../screens/ClassStream';
import ClassList from '../screens/ClassList';
import Register from '../screens/Welcome/Register';
import Me from '../screens/Me';
import Name from '../screens/Welcome/Name';
import Settings from '../screens/Settings';

export const WelcomeStack = StackNavigator({
    Login: {
        screen: Login,
        navigationOptions: {
            //gesturesEnabled: false,
            header: null
            
        }
    },
  
    Register: {
      screen: Register,
      navigationOptions: {
          //gesturesEnabled: false,
          header: null
          
      }
  },
  Name: {
    screen: Name,
    navigationOptions: {
        //gesturesEnabled: false,
        header: null
        
    }
},

})

export const Tabs = TabNavigator({
 

  ClassList: {
      screen: ClassList,
      navigationOptions: {
          title: 'Class Selection',
          //gesturesEnabled: false,
          header: null,
          //gesturesEnabled: false
          tabBarIcon: ({ tintColor }) => <Icon name="home" type = 'feather' size={25} color={tintColor} />,
      }
  },

  Me: {
    screen: Me,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => <Icon name="user" size={25} type = 'feather' color={tintColor} />, 
      header: null
      }
     
  }
 
},
{
  tabBarOptions:{
    activeTintColor: "#3BA9FF",
    inactiveTintColor: '#FFF',
    style: {
      backgroundColor: '#43474f'
    },
    showLabel: false
  }
});


export const SettingsStack = StackNavigator({
  Settings: {
    screen: Settings,
    navigationOptions: {
      title: 'Settings',
      headerStyle: {
        backgroundColor: '#3BA9FF',
        height: 35,

      },
      headerTitleStyle: {
        fontWeight: 'bold',                                                                                   
        color: '#FFF'

      }
      
    },
  },

});

export const Stream = StackNavigator({
    ClassStream: {
        screen: ClassStream,
        navigationOptions: {
          title: 'Class Stream',
        }
      },
})

export const Root = StackNavigator({
    Welcome: {
      screen: WelcomeStack
    },
    Tabs: {
      screen: Tabs,
      
    },
    ClassStream: {
      screen: ClassStream
    },
    Settings: {
      screen: SettingsStack,
    }
  },
{
  headerMode: 'none',
});