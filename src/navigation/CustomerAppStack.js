import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

// import CustomDrawer from '../components/CustomDrawer';
// import Ionicons from 'react-native-vector-icons/Ionicons';
import CustomDrawer from '../components/CustomDrawer';
import Cus_Home from '../screens/Customer/Cus_home';
import Cus_Profile from '../screens/Customer/Cus_Profile';
import Cus_Service from '../screens/Customer/Cus_Service';
import Cus_JobAD from '../screens/Customer/Cus_JobAD';
import Cus_RecentJob from '../screens/Customer/Cus_RecentJob';
import CusProfileStack from './CusStacks/CusProfileStack';
import CusHomeStack from './CusStacks/CusHomeStack';
import CusAdvertisementStack from './CusStacks/CusAdvertisementStack';
import CusServiceProviderStack from './CusStacks/CusSpList';

// import Cus_PostJobAD from '../screens/Customer/Cus_PostJobAD';
// import Cus_Jobs from '../screens/Customer/Cus_Jobs';
// import Cus_EditProfile from '../screens/Customer/Cus_EditProfile';
// import Cus_viewJobAD from '../screens/Customer/Cus_viewJobAD';
// import TabNavigator from './TabNavigator';
// import Cus_spProfileView from '../screens/Customer/Cus_spProfileView';

import customer_profile_stack from '../../src/navigation/CustomerStacks/Cus_ProfileStack'
import customer_myservicesStack from '../../src/navigation/CustomerStacks/MyServicesStack'

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
        // fontFamily: 'Roboto-Medium',
        fontSize: 15,
      },  }}>

      <Drawer.Screen name="Home" component={CusHomeStack} />
      <Drawer.Screen name="My Profile" component={CusProfileStack} />
      <Drawer.Screen name="My Service" component={CusServiceProviderStack} />
      <Drawer.Screen name="Job Advertisements" component={CusAdvertisementStack} />
      <Drawer.Screen name="Recently Placed Jobs" component={Cus_RecentJob} />
      

      {/* <Drawer.Screen name="Place Jobs" component={Cus_PlaceJobs} /> */}
      {/* <Drawer.Screen name="sp profile view" component={Cus_spProfileView} /> */}
      {/* <Drawer.Screen name="job ad view" component={Cus_viewJobAD} /> */} 
      {/* <Drawer.Screen name="Cus_Profile" component={Cus_Profile} /> */}
      {/* <Drawer.Screen name="Edit Profile" component={Cus_EditProfile} /> */}
      {/* <Drawer.Screen name="Post Job Advertisements" component={Cus_PostJobAD} /> */}
    </Drawer.Navigator>
  );
};

export default CustomerAppStack;