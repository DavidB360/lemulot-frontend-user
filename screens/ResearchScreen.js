import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function ResearchScreen({ navigation }) {
	return (
		<View style={styles.container}>
			<TouchableOpacity onPress={() => navigation.navigate("Tuto")}>
				<Text>Go To TutoScreen</Text>
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
