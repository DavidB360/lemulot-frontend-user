<<<<<<< HEAD
import { View, Text, TouchableOpacity, StyleSheet, Button, Image } from "react-native"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import SignInScreen from "./SignInScreen"
import SignUpScreen from "./SignUpScreen"

const Stack = createNativeStackNavigator()

export default function ConnectionScreen({ navigation }: any) {
	return (
		<View style={styles.container}>
			<TouchableOpacity
				title="Go to SignIn"
				onPress={() => navigation.navigate("SignIn")}
			/>

			<TouchableOpacity onPress={this._onPressButton}>
				<Image
					style={styles.button}
					source={require("./myButton.png")}
				/>
			</TouchableOpacity>
			<TouchableOpacity onPress={this._onPressButton}>
				<Image
					style={styles.button}
					source={require("./myButton.png")}
				/>
			</TouchableOpacity>

			<TouchableOpacity
				title="Go to SignUp"
				onPress={() => navigation.navigate("SignUp")}
			/>
		</View>
	)
=======
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function ConnectionScreen({ navigation }: any) {
	return <View style={styles.container}></View>;
>>>>>>> Dams
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
<<<<<<< HEAD
		backgroundColor: "blue",
	},
})
=======
	},
});
>>>>>>> Dams
