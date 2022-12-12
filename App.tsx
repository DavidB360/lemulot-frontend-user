import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "./screens/HomeScreen";
import IntroScreen from "./screens/IntroScreen";
import ResearchScreen from "./screens/ResearchScreen";
import TutoScreen from "./screens/TutoScreen";
import TypeScreen from "./screens/TypeScreen";
import ConnectionScreen from "./screens/ConnectionScreen";

import { Provider } from "react-redux";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import user from "./reducers/user";

const reducers = combineReducers({ user });
const persistConfig = { key: "lemulot", storage: AsyncStorage };

const store = configureStore({
	reducer: persistReducer(persistConfig, reducers),
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({ serializableCheck: false }),
});

const persistor = persistStore(store);

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// const TabNavigator = () => {
// 	return <Tab.Navigator></Tab.Navigator>;
// };

export default function App() {
	return (
		<Provider store={store}>
			<PersistGate persistor={persistor}>
				<NavigationContainer>
					<Stack.Navigator screenOptions={{ headerShown: true }}>
						<Stack.Screen name="Intro" component={IntroScreen} />
						<Stack.Screen name="Home" component={HomeScreen} />
						<Stack.Screen
							name="Connection"
							component={ConnectionScreen}
						/>
						<Stack.Screen name="Type" component={TypeScreen} />
						<Stack.Screen
							name="Research"
							component={ResearchScreen}
						/>
						<Stack.Screen name="Tuto" component={TutoScreen} />
					</Stack.Navigator>
				</NavigationContainer>
			</PersistGate>
		</Provider>
	);
}
