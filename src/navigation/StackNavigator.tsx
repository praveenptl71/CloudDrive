import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useWindowDimensions } from 'react-native';

import { SignupScreen } from "../screens/Signup";
import { LoginScreen } from "../screens/Login";
import { ChangePasswordScreen } from "../screens/ChangePassword";
import { ProfileScreen } from "../screens/Profile";
import { SettingsScreen } from "../screens/Settings";
import { StorageScreen } from "../screens/Storage";
import { HomeScreen } from "../screens/Home";
import { DrawerContent } from "../components/DrawerContent";

// const dimensions = useWindowDimensions();
// const isLargeScreen = dimensions.width >= 768;

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const MainDrawerNavigation = () => {
    return (
        <Drawer.Navigator
            initialRouteName="home"
            drawerStyle={{ width: '100%' }}
            drawerContent={(props) => (<DrawerContent {...props} />)}
            // openByDefault={true}
        >
            <Drawer.Screen name="Home" component={HomeScreen} />
            <Drawer.Screen name="Profile" component={ProfileScreen} />
            <Drawer.Screen name="Storage" component={StorageScreen} />
            <Drawer.Screen name="Shared" component={StorageScreen} />
            <Drawer.Screen name="Stats" component={StorageScreen} />
            {/* <Drawer.Screen name="change-password" component={ChangePasswordScreen} /> */}
            <Drawer.Screen name="Setting" component={SettingsScreen} />
            <Drawer.Screen name="Help" component={SettingsScreen} />
        </Drawer.Navigator>
    );
}

const MainStackNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="login">
            <Stack.Screen options={{ headerShown: false }} name="login" component={LoginScreen} />
            <Stack.Screen options={{ headerShown: false }} name="signup" component={SignupScreen} />
            <Stack.Screen options={{ headerShown: false }} name="main-drawer" component={MainDrawerNavigation} />
        </Stack.Navigator>
    );
}

export { MainStackNavigator };