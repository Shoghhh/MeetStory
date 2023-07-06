import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BalanceScreen from '../screens/Balance/BalanceScreen';
import AddBalanceScreen from '../screens/Balance/AddBalanceScreen';
import PaymentMetod from '../screens/Balance/PaymentMetod';

const Stack = createNativeStackNavigator();

export const BalanceNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName={'BalanceScreen'}
            screenOptions={({ route }) => ({
                tabBarShowLabel: false,
            })}
        >
            <Stack.Screen
                name="BalanceScreen"
                component={BalanceScreen}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="AddBalanceScreen"
                component={AddBalanceScreen}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="PaymentMetod"
                component={PaymentMetod}
                options={{
                    headerShown: false
                }}
            />
        </Stack.Navigator>
    );
};