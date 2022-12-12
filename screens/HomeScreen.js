import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function HomeScreen({ navigation }) {
	return (
		<View style={styles.container}>
			<TouchableOpacity onPress={() => navigation.navigate("Type")}>
				<Text>Go To TypeScreen</Text>
			</TouchableOpacity>
			<TouchableOpacity onPress={() => navigation.navigate("Connection")}>
				<Text>Go To ConnectionScreen</Text>
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
});
