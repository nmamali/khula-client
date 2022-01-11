
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import {ColorSchemeName, Text, View} from 'react-native';
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import ModalScreen from '../screens/ModalScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import HomeScreen from '../screens/HomeScreen';
import FavouritesScreen from '../screens/FavouritesScreen';
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
import LinkingConfiguration from './LinkingConfiguration';
import HomeIcon from "../components/khula-icons/HomeIcon";
import ChatIcon from "../components/khula-icons/ChatIcon";
import HeartIcon from "../components/khula-icons/HeartIcon";
import {StyleSheet} from "react-native";
import {FAV_COUNTER} from "../graphql/cacheQueries";
import {useQuery, useReactiveVar} from "@apollo/client";
import {favCounterVar} from "../cache";
import theme from "../assets/theme";

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />

    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();
  const favCounter = useReactiveVar(favCounterVar);
  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
          tabBarStyle: localStyles.tabContainer
      }}
    >
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={({ navigation }: RootTabScreenProps<'Home'>) => ({
          title: 'Home',
          headerTitle: "SCHOOLINK",
          headerTitleStyle: {
              color: "#38587D",
              fontWeight: "bold",
              fontSize:24
            },
          tabBarIcon: ({ color }) => <HomeIcon fontSize={30} fill={color} style={{flex: 1, height: 23, width: 23}}/>,
        })}
      />
      <BottomTab.Screen
        name="Favourites"
        component={FavouritesScreen}
        options={{
          title: 'Favourites',
          tabBarIcon: ({ color }) => <View>
              {favCounter.length>0 && <View style={localStyles.counterContainer}>
                  <Text style={{color: theme.white}}>{favCounter.length}</Text>
              </View>
              }
              <HeartIcon fontSize={30} fill={color} style={{flex: 1, height: 23, width: 23}}/>


          </View>

        }}
      />

        <BottomTab.Screen
            name="Chat"
            component={FavouritesScreen}
            options={{
                title: 'Chat',
                tabBarIcon: ({ color }) => <ChatIcon fontSize={30} fill={color} style={{flex: 1, height: 23, width: 23}}/>,
            }}
        />
    </BottomTab.Navigator>
  );
}

const localStyles = StyleSheet.create({
    tabContainer: {
        backgroundColor: "#fff",
        paddingTop: 10,
        position: "absolute",
        shadowOpacity: 0.2,
        shadowOffset: { width: 1, height: 1 },
        shadowRadius: 12,
        elevation: 10,
        zIndex: 8,
        bottom: 30,
    },
    counterContainer:{
        left:10,
        top:13,
        backgroundColor:"red",
        borderRadius:14,
        alignItems:"center",
        width:17,
        height:17,
        zIndex: 1
    }
});