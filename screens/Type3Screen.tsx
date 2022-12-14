import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";

export default function Type3Screen({ navigation }: any) {
	return (
		<View style={styles.container}>
			<TouchableOpacity
				style={styles.btnAide}
				onPress={() => navigation.navigate("Type")}
			>
				<Text style={styles.textBtnAide}>?</Text>
			</TouchableOpacity>
			<TouchableOpacity
				style={styles.btnRetour}
				onPress={() => navigation.navigate("Type1")}
			>
				<FontAwesome
					name="long-arrow-left"
					size={32}
					style={styles.iconArrow}
				/>
				<Text style={styles.textBtnRetour}>Retour</Text>
			</TouchableOpacity>
			<TouchableOpacity
				style={styles.btnNavigation}
				onPress={() => navigation.navigate("Research")}
			>
				<Text style={styles.textBtnNavigation}>Navigation</Text>
				<Image
					style={styles.imgBtnNavigation}
					source={require("../assets/mulot_professeur.jpg")}
				/>
			</TouchableOpacity>
			<TouchableOpacity
				style={styles.btnWifi}
				onPress={() => navigation.navigate("Research")}
			>
				<Text style={styles.textBtnWifi}>Wifi</Text>
				<Image
					style={styles.imgBtnWifi}
					source={require("../assets/mulot_professeur.jpg")}
				/>
			</TouchableOpacity>
			<TouchableOpacity
				style={styles.btnAutre}
				onPress={() => navigation.navigate("Research")}
			>
				<Text style={styles.textBtnAutre}>Autre</Text>
				<Image
					style={styles.imgBtnAutre}
					source={require("../assets/mulot_professeur.jpg")}
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

	btnRetour: {
		position: "absolute",
		top: 55,
		left: 20,
		backgroundColor: "#5db194",
		width: 125,
		height: 50,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 10,
		borderColor: "#808080",
		borderBottomWidth: 4,
		borderLeftWidth: 2,
		borderRightWidth: 2,
		shadowOffset: {
			width: -10,
			height: 12,
		},
		shadowOpacity: 0.58,
		shadowRadius: 16.0,

		elevation: 25,
	},

	iconArrow: {
		paddingRight: 10,
		color: "#ffffff",
		textShadowColor: "#000000",
		textShadowOffset: { width: 0, height: 2 },
		textShadowRadius: 5,
	},

	textBtnRetour: {
		paddingBottom: 5,
		color: "#ffffff",
		fontSize: 22,
		textShadowColor: "#000000",
		textShadowOffset: { width: 0, height: 2 },
		textShadowRadius: 5,
	},

	btnNavigation: {
		marginBottom: 10,
		marginTop: 80,
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

	textBtnNavigation: {
		fontSize: 22,
		color: "#ffffff",
		textShadowColor: "#000000",
		textShadowOffset: { width: 0, height: 2 },
		textShadowRadius: 5,
	},

	imgBtnNavigation: {
		width: 180,
		height: 150,
	},

	btnWifi: {
		margin: 10,
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

	textBtnWifi: {
		fontSize: 22,
		color: "#ffffff",
		textShadowColor: "#000000",
		textShadowOffset: { width: 0, height: 2 },
		textShadowRadius: 5,
	},

	imgBtnWifi: {
		width: 180,
		height: 150,
	},

	btnAutre: {
		margin: 10,
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

	textBtnAutre: {
		fontSize: 22,
		color: "#ffffff",
		textShadowColor: "#000000",
		textShadowOffset: { width: 0, height: 2 },
		textShadowRadius: 5,
	},

	imgBtnAutre: {
		width: 180,
		height: 150,
	},
});
