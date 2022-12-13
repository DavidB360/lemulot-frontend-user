import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function TypeScreen({ navigation }: any) {
	return (
		<View style={styles.container}>
			<TouchableOpacity onPress={() => navigation.navigate("Research")}>
				<Text>Go To ResearchScreen</Text>
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
