import React, { useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { DrawerContent } from './screens/DrawerContent';

import MainTabScreen from './screens/MainTabScreen';
import SupportScreen from './screens/SupportScreen';
import SettingsScreen from './screens/SettingsScreen';
import BookmarkScreen from './screens/BookmarkScreen';

import { AuthContext } from './components/context';

import RootStackScreen from './screens/RootStackScreen';

const Drawer = createDrawerNavigator();


export default function App() {
  const [isLoading, setIsLoading] = React.useState(true);
  const [userToken, setUserToken] = React.useState(null); 

  const authContext = React.useMemo(() => ({
    signIn: () => {
      setUserToken('abc');
      setIsLoading(false);
    },
    signOut: () => {
      setUserToken(null);
      setIsLoading(false);
    },
    signUp: () => {
      setUserToken('abc');
      setIsLoading(false);
    },
  }));

  // when screen is rendering check if logged in
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  // if loading
  if( isLoading ) {
    return(
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <ActivityIndicator size="large"/>
      </View>
    );
  }

  return (
    <AuthContext.Provider value={authContext}>
    <NavigationContainer>

      {/* if user is not null */}
      { userToken !== null ? (
        <Drawer.Navigator drawerContent={props => <DrawerContent { ... props } />}>
          {/* initial route for navigator */}
          <Drawer.Screen name="HomeDrawer" component={MainTabScreen} /> 
          <Drawer.Screen name="SupportScreen" component={SupportScreen} />
          <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
          <Drawer.Screen name="BookmarkScreen" component={BookmarkScreen} />
      </Drawer.Navigator>
      )
    : // else root stack
      <RootStackScreen/>
    }
      
    </NavigationContainer>
    </AuthContext.Provider>
  );
}

