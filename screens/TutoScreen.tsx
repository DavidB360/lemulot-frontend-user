import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function TutoScreen({ navigation }: any) {
	return (
		<View style={styles.container}>
			<Text>TutoScreen</Text>
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
