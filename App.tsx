import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FontAwesome from "react-native-vector-icons/FontAwesome";

import IntroScreen from "./screens/IntroScreen";
import HomeScreen from "./screens/HomeScreen";
import DeviceScreen from "./screens/DeviceScreen";
import CategoryScreen from "./screens/CategoryScreen";
import ResearchScreen from "./screens/ResearchScreen";
import TutoScreen from "./screens/TutoScreen";
import DicoScreen from "./screens/DicoScreen";

import ConnectionScreen from "./screens/ConnectionScreen";
import SignInScreen from "./screens/SignInScreen";
import SignUpScreen from "./screens/SignUpScreen";

import UserSettingScreen from "./screens/UserSettingScreen";
import UserFavoritScreen from "./screens/UserFavoritScreen";
import UserHelpScreen from "./screens/UserHelpScreen";

import { Provider } from "react-redux";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import user from "./reducers/user";
import device from "./reducers/device";
import category from "./reducers/category";
import tuto from "./reducers/tuto";

const reducers = combineReducers({ user, device, category, tuto });
const persistConfig = { key: "lemulot", storage: AsyncStorage };

const store = configureStore({
	reducer: persistReducer(persistConfig, reducers),
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({ serializableCheck: false }),
});

const persistor = persistStore(store);

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
	return (
		<Tab.Navigator
			screenOptions={({ route }) => ({
				tabBarIcon: ({ color, size }) => {
					let iconName: string = "";

					if (route.name === "Demandes") {
						iconName = "life-ring";
					} else if (route.name === "Favoris") {
						iconName = "heart";
					} else if (route.name === "Paramètre") {
						iconName = "cogs";
					} else if (route.name === "Dictionnaire") {
						iconName = "book";
					}

					return (
						<FontAwesome name={iconName} size={35} color={color} />
					);
				},
				tabBarActiveTintColor: "#778ed4",
				tabBarInactiveTintColor: "#b2b2b2",
				headerShown: false,
			})}
		>
			<Tab.Screen name="Demandes" component={UserHelpScreen} />
			<Tab.Screen name="Favoris" component={UserFavoritScreen} />
			<Tab.Screen name="Dictionnaire" component={DicoScreen} />
			<Tab.Screen name="Paramètre" component={UserSettingScreen} />
		</Tab.Navigator>
	);
};

export default function App() {
	return (
		<Provider store={store}>
			<PersistGate persistor={persistor}>
				<NavigationContainer>
					<Stack.Navigator screenOptions={{ headerShown: false }}>
						<Stack.Screen name="Intro" component={IntroScreen} />
						<Stack.Screen name="Home" component={HomeScreen} />
						<Stack.Screen
							name="Connection"
							component={ConnectionScreen}
						/>
						<Stack.Screen name="SignIn" component={SignInScreen} />
						<Stack.Screen name="SignUp" component={SignUpScreen} />
						<Stack.Screen name="Device" component={DeviceScreen} />
						<Stack.Screen
							name="Category"
							component={CategoryScreen}
						/>
						<Stack.Screen
							name="Research"
							component={ResearchScreen}
						/>
						<Stack.Screen name="Dico" component={DicoScreen} />
						<Stack.Screen name="Tuto" component={TutoScreen} />
						<Stack.Screen
							name="TabNavigator"
							component={TabNavigator}
						/>
					</Stack.Navigator>
				</NavigationContainer>
			</PersistGate>
		</Provider>
	);
}
