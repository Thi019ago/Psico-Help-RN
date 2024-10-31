import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Image, TouchableOpacity } from 'react-native';
import RegisterScreen from '../screens/RegisterScreen';
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import CalendarScreen from '../screens/CalendarScreen';
import InfoScreen from '../screens/InfoScreen';
import PerfilScreen from '../screens/PerfilScreen';
import ConfigScreen from '../screens/ConfigScreen';
import ConsultasScreen from '../screens/ConsultasScreen';
import FormasPagamentosScreen from '../screens/FormasPagamentoScreen';
import ConvideAmigoScreen from '../screens/ConvideAmigoScreen';
import AjudaSuporteScreen from '../screens/AjudaSuporteScreen';
import SobreScreen from '../screens/SobreScreen';
import PrivacidadeSegurancaScreen from '../screens/PrivacidadeSegurancaScreen';
import AcessibilidadeScreen from '../screens/AcessibilidadeScreen';
import NotificacaoScreen from '../screens/NotificacaoScreen';
import PixScreen from '../screens/PixScreen';
import CartaoScreen from '../screens/CartaoScreen';
import DinheiroScreen from '../screens/DinheiroScreen';
import ModoDarkScreen from '../screens/ModoDarkScreen';

//Importando icones
import HomeIconInactive from '../assets/image/navigator/home-Icon.png';
import HomeIconActive from '../assets/image/navigator/home-Icon-Full.png';
import CalendarIconInactive from '../assets/image/navigator/calendar-Icon.png';
import CalendarIconActive from '../assets/image/navigator/calendar-Icon-Full.png';
import InfoIconInactive from '../assets/image/navigator/info-Icon.png';
import InfoIconActive from '../assets/image/navigator/info-Icon-Full.png';
import PerfilIconInactive from '../assets/image/navigator/perfil-Icon.png';
import PerfilIconActive from '../assets/image/navigator/perfil-Icon-Full.png';





export default function StackNavigator() {

    const Tab = createBottomTabNavigator();

    const [activeTab, setActiveTab] = useState("Home")

    function BottomTabs({ navigation }) {
        return (
            <Tab.Navigator>
                <Tab.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{
                        headerShown: false,
                        tabBarIcon: ({ focused }) => (
                            <Image
                                source={focused ? HomeIconActive : HomeIconInactive}
                                style={{ width: 27, height: 27, marginBottom: 1 }}
                            />
                        ),
                        tabBarButton: (props) => (
                            <TouchableOpacity
                                onPress={() => {
                                    setActiveTab('home');
                                    navigation.navigate("Home");
                                }}
                                {...props}
                            />

                        ),
                        tabBarLabel: () => null,

                    }} />

                <Tab.Screen
                    name="Calendar"
                    component={CalendarScreen}
                    options={{
                        headerShown: false,
                        tabBarIcon: ({ focused }) => (
                            <Image
                                source={focused ? CalendarIconActive : CalendarIconInactive}
                                style={{ width: 27, height: 27, marginBottom: 1 }}
                            />
                        ),
                        tabBarButton: (props) => (
                            <TouchableOpacity
                                onPress={() => {
                                    setActiveTab('Calendar');
                                    navigation.navigate("Calendar");
                                }}
                                {...props}
                            />

                        ),
                        tabBarLabel: () => null,
                    }}
                />

                <Tab.Screen
                    name="Info"
                    component={InfoScreen}
                    options={{
                        headerShown: false,
                        tabBarIcon: ({ focused }) => (
                            <Image
                                source={focused ? InfoIconActive : InfoIconInactive}
                                style={{ width: 27, height: 27, marginBottom: 1 }}
                            />
                        ),
                        tabBarButton: (props) => (
                            <TouchableOpacity
                                onPress={() => {
                                    setActiveTab('info');
                                    navigation.navigate("Info");
                                }}
                                {...props}
                            />

                        ),
                        tabBarLabel: () => null,
                    }}
                />

                <Tab.Screen
                    name="Perfil"
                    component={PerfilScreen}
                    options={{
                        headerShown: false,
                        tabBarIcon: ({ focused }) => (
                            <Image
                                source={focused ? PerfilIconActive : PerfilIconInactive}
                                style={{ width: 27, height: 27, marginBottom: 1 }}
                            />
                        ),
                        tabBarButton: (props) => (
                            <TouchableOpacity
                                onPress={() => {
                                    setActiveTab('perfil');
                                    navigation.navigate("Perfil");
                                }}
                                {...props}
                            />

                        ),
                        tabBarLabel: () => null,
                    }}
                />
            </Tab.Navigator>


        )


    }

    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />

                <Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false }} />

                <Stack.Screen name="Main" component={BottomTabs} options={{ headerShown: false }} />

                <Stack.Screen name="Perfil" component={PerfilScreen} options={{ headerShown: false }} />

                <Stack.Screen name="Calendar" component={CalendarScreen} options={{ headerShown: false }} />

                <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />

                <Stack.Screen name="Config" component={ConfigScreen} options={{ headerShown: false }} />

                <Stack.Screen name="Consultas" component={ConsultasScreen} options={{ headerShown: false }} />

                <Stack.Screen name="FormaPagamento" component={FormasPagamentosScreen} options={{ headerShown: false }} />

                <Stack.Screen name='ConvideAmigo' component={ConvideAmigoScreen} options={{ headerShown: false }} />

                <Stack.Screen name='AjudaSuporte' component={AjudaSuporteScreen} options={{ headerShown: false }} />

                <Stack.Screen name='Sobre' component={SobreScreen} options={{ headerShown: false }} />

                <Stack.Screen name='Privacidade' component={PrivacidadeSegurancaScreen} options={{ headerShown: false }} />

                <Stack.Screen name='Acessibilidade' component={AcessibilidadeScreen} options={{ headerShown: false }} />

                <Stack.Screen name='Notificacao' component={NotificacaoScreen} options={{ headerShown: false }} />

                <Stack.Screen name='Pix' component={PixScreen} options={{ headerShown: false }} />

                <Stack.Screen name='Cartao' component={CartaoScreen} options={{ headerShown: false }} />

                <Stack.Screen name='Dinheiro' component={DinheiroScreen} options={{ headerShown: false }} />

                <Stack.Screen name='DarkMode' component={ModoDarkScreen} options={{ headerShown: false }} />


            </Stack.Navigator>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({})