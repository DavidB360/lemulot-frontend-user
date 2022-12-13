import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";

export default function HomeScreen({ navigation }: any) {
	return (
		<View style={styles.container}>
			<TouchableOpacity
				style={styles.btnType}
				onPress={() => navigation.navigate("Type")}
			>
				<Text style={styles.textBtnType}>Go To TypeScreen</Text>
				<Image
					style={styles.imgBtnType}
					source={require("../assets/mulot_professeur.jpg")}
				/>
			</TouchableOpacity>
			<TouchableOpacity
				style={styles.btnConnection}
				onPress={() => navigation.navigate("Connection")}
			>
				<Text style={styles.textBtnConnection}>
					Go To ConnectionScreen
				</Text>
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
	},

	btnType: {},

	textBtnType: {},

	imgBtnType: {
		width: 200,
		height: 200,
	},

	btnConnection: {},

	textBtnConnection: {},
});
