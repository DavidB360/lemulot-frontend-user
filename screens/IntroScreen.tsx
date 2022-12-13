import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function IntroScreen({ navigation }: any) {
	return (
		<View style={styles.container}>
			<TouchableOpacity onPress={() => navigation.navigate("Home")}>
				<Text>Go to HomeScreen</Text>
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
