import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Pour fonction TabNavigation à laisser dans App.tsx
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import FontAwesome from "react-native-vector-icons/FontAwesome";

// A couper/coler dans ficher Page Utilisateur/Demande Aide
// import { NavigationProp, ParamListBase } from "@react-navigation/native";

// type TypeScreenProps = {
// 	navigation: NavigationProp<ParamListBase>;
// };

// export default function TypeScreen({ navigation }: "à remplir"ScreenProps) {
// 	return (

{
	/* <TouchableOpacity
				onPress={() =>
					navigation.navigate("TabNavigator", {
						screen: "à remplir",
					})
				}
			></TouchableOpacity> */
}

import HomeScreen from "./screens/HomeScreen";
import IntroScreen from "./screens/IntroScreen";
import ResearchScreen from "./screens/ResearchScreen";
import TutoScreen from "./screens/TutoScreen";
import DeviceScreen from "./screens/DeviceScreen";
import CategoryScreen from "./screens/CategoryScreen";
import DicoScreen from "./screens/DicoScreen";
import ConnectionScreen from "./screens/ConnectionScreen";
import SignInScreen from "./screens/SignInScreen";
import SignUpScreen from "./screens/SignUpScreen";

import { Provider } from "react-redux";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import user from "./reducers/user";
import device from "./reducers/device";
import category from "./reducers/category";

const reducers = combineReducers({ user, device, category })
const persistConfig = { key: "lemulot", storage: AsyncStorage }

const store = configureStore({
	reducer: persistReducer(persistConfig, reducers),
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({ serializableCheck: false }),
})

const persistor = persistStore(store)

const Stack = createNativeStackNavigator();
// const Tab = createBottomTabNavigator();

// const TabNavigator = () => {
// 	return (
// 		<Tab.Navigator
// 			screenOptions={({ route }) => ({
// 				tabBarIcon: ({ color, size }) => {
// 					let iconName: string = "";

// 					if (route.name === "à remplir") {
// 						iconName = "à remplir";
// 					} else if (route.name === "à remplir") {
// 						iconName = "à remplir";
// 					}

// 					return (
// 						<FontAwesome
// 							name={iconName}
// 							size={size}
// 							color={color}
// 						/>
// 					);
// 				},
// 				tabBarActiveTintColor: "#e8be4b",
// 				tabBarInactiveTintColor: "#b2b2b2",
// 				headerShown: false,
// 			})}
// 		>
// 			<Tab.Screen name="à remplir" component={à remplir} />
// 			<Tab.Screen name="à remplir" component={à remplir} />
// 		</Tab.Navigator>
// 	);
// };

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
						{/* Pour fonction TabNavigation */}
						{/* <Stack.Screen
							name="TabNavigator"
							component={TabNavigator}
						/> */}
					</Stack.Navigator>
				</NavigationContainer>
			</PersistGate>
		</Provider>
	)
}
