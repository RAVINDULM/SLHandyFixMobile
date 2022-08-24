import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

// import CustomDrawer from '../components/CustomDrawer';

// import Ionicons from 'react-native-vector-icons/Ionicons';
import CustomDrawer from '../components/CustomDrawer';
import Cus_Home from '../screens/Customer/Cus_home';
import Cus_Jobs from '../screens/Customer/Cus_Jobs';
import Cus_Profile from '../screens/Customer/Cus_Profile';

// import TabNavigator from './TabNavigator';

const Drawer = createDrawerNavigator();

const CustomerAppStack = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{  headerShown: false,drawerActiveBackgroundColor: '#ffff',
      drawerActiveTintColor: '#2538B8',
      drawerInactiveTintColor: '#fff',
      drawerLabelStyle: {
        // marginLeft: -25,
        fontFamily: 'Roboto-Medium',
        fontSize: 15,
      },  }}>
      <Drawer.Screen name="Home" component={Cus_Home} />
      <Drawer.Screen name="Cus_Jobs" component={Cus_Jobs} />
      <Drawer.Screen name="Cus_Profile" component={Cus_Profile} />
    </Drawer.Navigator>
  );
};

export default CustomerAppStack;