import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../screens/HomeScreen';
import Agent from '../screens/Agent';
import About from '../screens/About';
import Feature from '../screens/Feature';
import LogOut from "../screens/LogOut";
import Inquiry from '../screens/Inquiry';

import AboutUs from '../screens/AboutUs';
import AmusiScreen from '../screens/AmusiScreen';
import TSMHospitalScreen from '../screens/TSMHospitalScreen';
import BasantKheraScreen from '../screens/BasantKheraScreen';
import OuterRingRoad from '../screens/OuterRingRoad';
const Drawer = createDrawerNavigator();

const drawer = () => {
    return (
        <Drawer.Navigator drawerPosition="right">
            <Drawer.Screen name="Location of Plots" label="Location of Plots" component={HomeScreen} />
            <Drawer.Screen name="1). Amusi Location" component={AmusiScreen} />
            <Drawer.Screen name="2). TSM Hospital Location" component={TSMHospitalScreen} />
            <Drawer.Screen name="3). Basant Khera Location" component={BasantKheraScreen} />
            <Drawer.Screen name="4). Outer Ring Road Location" component={OuterRingRoad} />
            <Drawer.Screen name="Team Members" component={About} />
            <Drawer.Screen name="Our Owners" component={Agent} />
            <Drawer.Screen name="Features" component={Feature} />
            <Drawer.Screen name="About Us" component={AboutUs} />
            <Drawer.Screen name="Inquiry" component={Inquiry} />
            <Drawer.Screen name="Log Out" component={LogOut} />
        </Drawer.Navigator>
    );
}

export default drawer;