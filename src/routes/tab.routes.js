import React from 'react';
import {Text, TouchableOpacity, View, } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign, MaterialIcons, MaterialCommunityIcons, Ionicons  } from '@expo/vector-icons';
import fonts from '../styles/fonts';

import DrawerRoutes from './drawer.routes';
import EnconFretes from '../screens/EnconFretes';
import MeusTrabalhos from '../screens/MeusTrabalhos';
import Perfil from '../screens/Perfil';
import Login from '../screens/Login';

import { DrawerActions, useNavigation } from '@react-navigation/native';


const AppTab = createBottomTabNavigator();

const AuthRoutes = () => {
    const navigation = useNavigation();

    return (

        
        <AppTab.Navigator
        screenOptions={{
                tabBarActiveTintColor: "#f0f0f0",
                tabBarInactiveTintColor: '#f0f0f0',
                tabBarHideOnKeyboard: false,
                tabBarLabelPosition: 'below-icon',
                headerShown:false,
                
                
                tabBarStyle:{
                    height: 65,
                    paddingTop: 10,
                    backgroundColor: '#D24366',
                },
            }}

            >




                <AppTab.Screen
                    name="Inicio"
                    component={DrawerRoutes}
                    options={{
                        tabBarIcon: (({size, color}) => (
                            <Ionicons
                                name="home"
                                size={size}
                                color={color}

                            />
                        )),
                        
                        tabBarLabel: (({ focused, color}) => (
                            <View>
                                <Text
                                    style={ focused ? {
                                        color: color,
                                        fontFamily: fonts.text,
                                        fontSize: 12,
                                        textAlign: 'center',
                                    } : {
                                        color: color,
                                        fontFamily: fonts.text,
                                        fontSize: 12
                                    }}
                                >
                                    Inicio
                                </Text>
                                <View
                                    style={ focused ? {

                                        backgroundColor: color,
                                        borderColor: color,
                                        width: 45,
                                        height: 2,
                                        borderTopLeftRadius: 5,
                                        borderTopRightRadius: 5,
                                        marginTop: 5,
                                    } : {
                                        height: 2,
                                    }}
                                >
                                </View>
                            </View>
                        ))
                    }}
                />

                <AppTab.Screen
                    name="EnconFretes"
                    component={EnconFretes}
                    options={{
                        tabBarIcon: (({ size, color}) => (
                            <Ionicons
                                name="server"
                                size={size} 
                                color={color} 
                            />
                        )),

                        tabBarLabel: (({ focused, color}) => (
                            <View>
                                <Text
                                    style={ focused ? {
                                        color: color,
                                        fontFamily: fonts.text,
                                        fontSize: 12,
                                        textAlign: 'center',

                                    } : {
                                        color: color,
                                        fontFamily: fonts.text,
                                        fontSize: 12
                                    }}
                                >
                                    Encontrar Fretes
                                </Text>
                                <View
                                    style={ focused ? {
                                        backgroundColor: color,
                                        borderColor: color,
                                        width: 65,
                                        height: 2,
                                        borderTopLeftRadius: 5,
                                        borderTopRightRadius: 5,
                                        marginTop: 5,
                                    } : {
                                        height: 2,
                                    }}
                                >
                                </View>
                            </View>
                        ))
                    }}
                />

                <AppTab.Screen
                    name="MeusTrabalhos"
                    component={MeusTrabalhos}
                    options={{
                        tabBarIcon: (({size, color}) => (
                            <Ionicons
                                name="briefcase"
                                size={size}
                                color={color}
                            />
                        )),

                        tabBarLabel: (({ focused, color}) => (
                            <View>
                                <Text
                                    style={ focused ? {
                                        color: color,
                                        fontFamily: fonts.text,
                                        fontSize: 12,
                                        textAlign: 'center',
                                    } : {
                                        color: color,
                                        fontFamily: fonts.text,
                                        fontSize: 12
                                    }}
                                >
                                    Meus Trabalhos
                                </Text>
                                <View
                                    style={ focused ? {
                                        backgroundColor: color,
                                        borderColor: color,
                                        width: 90,
                                        height: 2,
                                        borderTopLeftRadius: 5,
                                        borderTopRightRadius: 5,
                                        marginTop: 5,
                                    } : {
                                        height: 2,
                                    }}
                                >
                                </View>
                            </View>
                        ))
                    }}
                />

                <AppTab.Screen
                    name="Perfil"
                    component={Perfil}

                    options={{
                        tabBarIcon: (({ size, color}) => (
                            <Ionicons
                                name="people"
                                size={size} 
                                color={color} 
                            />
                        )),

                        tabBarLabel: (({ focused, color}) => (
                            <View>
                                <Text
                                    style={ focused ? {
                                        color: color,
                                        fontFamily: fonts.text,
                                        fontSize: 12,
                                        textAlign: 'center',

                                    } : {
                                        color: color,
                                        fontFamily: fonts.text,
                                        fontSize: 12
                                    }}
                                >
                                    Meu Perfil
                                </Text>
                                <View
                                    style={ focused ? {
                                        backgroundColor: color,
                                        borderColor: color,
                                        width: 60,
                                        height: 2,
                                        borderTopLeftRadius: 5,
                                        borderTopRightRadius: 5,
                                        marginTop: 5,
                                    } : {
                                        height: 2,
                                    }}
                                >
                                </View>
                            </View>
                        ))
                    }}
                />
        </AppTab.Navigator>
    )
}

export default AuthRoutes;