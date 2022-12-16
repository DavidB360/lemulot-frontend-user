import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";

export default function HomeScreen({ navigation }: any) {
	return (
		<View style={styles.container}>
			<View style={styles.btnTop}>
				<TouchableOpacity
					style={styles.btnAide}
					// onPress={() => navigation.navigate("Type")}
				>
					<Text style={styles.textBtnAide}>?</Text>
				</TouchableOpacity>
			</View>
			<TouchableOpacity
				style={styles.btn}
				onPress={() => navigation.navigate("Device")}
			>
				<Text style={styles.textBtn}>Les Leçons du Mulot</Text>
				<Image
					style={styles.imgBtn}
					source={require("../assets/mulot_professeur.jpg")}
				/>
			</TouchableOpacity>
			<TouchableOpacity
				style={styles.btn}
				onPress={() => navigation.navigate("Connection")}
			>
				<Text style={styles.textBtn}>Demande d'aide</Text>
				<Image
					style={styles.imgBtn}
					source={require("../assets/mulot_assistant.jpg")}
				/>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "flex-start",
		backgroundColor: "#ffffff",
	},

	btnTop: {
		flexDirection: "row",
		justifyContent: "flex-end",
		alignItems: "center",
		width: "100%",
		marginBottom: 30,
		marginTop: 50,
	},

	btnAide: {
		marginRight: 20,
		backgroundColor: "#fffb00",
		width: 80,
		height: 80,
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 40,
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

	textBtnAide: {
		color: "#000000",
		fontSize: 50,
		opacity: 0.6,
	},

	btn: {
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

	textBtn: {
		fontSize: 22,
		color: "#ffffff",
		textShadowColor: "#000000",
		textShadowOffset: { width: 0, height: 2 },
		textShadowRadius: 5,
		borderBottomWidth: 1,
		borderColor: "#a9a9a9",
	},

	imgBtn: {
		width: 205,
		height: 200,
	},
});
