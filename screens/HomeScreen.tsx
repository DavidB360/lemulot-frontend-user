import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";

export default function HomeScreen({ navigation }: any) {
	return (
		<View style={styles.container}>
			<TouchableOpacity
				style={styles.btnAide}
				// onPress={() => navigation.navigate("Type")}
			>
				<Text style={styles.textBtnAide}>?</Text>
			</TouchableOpacity>
			<TouchableOpacity
				style={styles.btnType}
				onPress={() => navigation.navigate("Device")}
			>
				<Text style={styles.textBtnType}>Les Leçons du Mulot</Text>
				<Image
					style={styles.imgBtnType}
					source={require("../assets/mulot_professeur.jpg")}
				/>
			</TouchableOpacity>
			<TouchableOpacity
				style={styles.btnConnection}
				onPress={() => navigation.navigate("Connection")}
			>
				<Text style={styles.textBtnConnection}>Demande d'aide</Text>
				<Image
					style={styles.imgBtnType}
					source={require("../assets/mulot_assistant.jpg")}
				/>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "#ffffff",
	},

	btnAide: {
		position: "absolute",
		top: 40,
		right: 20,
		backgroundColor: "#fffb00",
		width: 80,
		height: 80,
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 40,
		borderWidth: 1,
	},

	textBtnAide: {
		color: "#000000",
		fontSize: 50,
	},

	btnType: {
		margin: 20,
		borderColor: "#a9a9a9",
		borderBottomWidth: 4,
		borderLeftWidth: 2,
		borderRightWidth: 2,
		borderRadius: 5,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "#5db194",
		shadowColor: "#000000",
		shadowOffset: {
			width: -10,
			height: 12,
		},
		shadowOpacity: 0.58,
		shadowRadius: 16.0,

		elevation: 25,
	},

	textBtnType: {
		fontSize: 22,
		color: "#ffffff",
		textShadowColor: "#000000",
		textShadowOffset: { width: 0, height: 2 },
		textShadowRadius: 5,
	},

	imgBtnType: {
		width: 205,
		height: 200,
	},

	btnConnection: {
		margin: 20,
		borderColor: "#a9a9a9",
		borderBottomWidth: 4,
		borderLeftWidth: 2,
		borderRightWidth: 2,
		borderRadius: 5,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "#5db194",
		shadowColor: "#000000",
		shadowOffset: {
			width: -10,
			height: 12,
		},
		shadowOpacity: 0.58,
		shadowRadius: 16.0,

		elevation: 25,
	},

	textBtnConnection: {
		fontSize: 22,
		color: "#ffffff",
		textShadowColor: "#000000",
		textShadowOffset: { width: 0, height: 2 },
		textShadowRadius: 5,
	},
});
