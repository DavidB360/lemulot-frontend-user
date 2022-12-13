import { View, Text, TouchableOpacity, StyleSheet, Button, Image } from "react-native"

export default function ConnectionScreen({ navigation }: any) {
	return (
		<View style={styles.container}>
			<TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
				<Image
					style={styles.button}
					source={require("../assets/cle.jpg")}
				/>
				<Text style={styles.button}>Se connecter</Text>
			</TouchableOpacity>
			<TouchableOpacity onPress={() => navigation.navigate("SignIn")}>
				<Image
					style={styles.button}
					source={require("../assets/stylo.jpg")}
				/>
				<Text style={styles.button}>S'inscrire</Text>
			</TouchableOpacity>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "white",
	},
	button: {
		borderStyle: "solid",
		borderColor: "black",
		width: 100,
		height: 100,
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		margin: 25,
	},
})
