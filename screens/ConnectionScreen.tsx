import {
	View,
	Text,
	TouchableOpacity,
	StyleSheet,
	Button,
	Image,
} from "react-native";

export default function ConnectionScreen({ navigation }: any) {
	return (
		<View style={styles.container}>
			<TouchableOpacity
				style={styles.button}
				onPress={() => navigation.navigate("SignIn")}
			>
				<Image
					style={styles.image}
					source={require("../assets/cle.jpg")}
				/>
				<Text style={styles.text}>Se connecter</Text>
			</TouchableOpacity>
			<TouchableOpacity
				style={styles.button}
				onPress={() => navigation.navigate("SignUp")}
			>
				<Image
					style={styles.image}
					source={require("../assets/stylo.jpg")}
				/>
				<Text style={styles.text}>S'inscrire</Text>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	},
	button: {
		borderRadius: 20,
		borderWidth: 1,
		width: 200,
		margin: 25,
		height: 200,
		alignItems: "center",
		justifyContent: "center",
	},
	image: {
		width: 100,
		height: 100,
		margin: 25,
	},
	text: {
		borderRadius: 20,
		height: 50,
		borderWidth: 1,
		width: 200,
	},
});
