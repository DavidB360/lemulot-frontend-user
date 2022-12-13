import React from "react"
import {
	View,
	Text,
	TouchableOpacity,
	StyleSheet,
	SafeAreaView,
	Button,
	TextInput,
} from "react-native"

export default function SignInScreen({ navigation }: any) {
	return (
		<View style={styles.container}>
			<SafeAreaView>
				<TextInput
					style={styles.input}
					//onChangeText={onChangeNumber}
					//value={number}
					placeholder="email ou numero de tel"
				/>
				<TextInput
					style={styles.input}
					//onChangeText={onChangeNumber}
					//value={number}
					placeholder="mot de passe"
				/>
				<TouchableOpacity
					style={styles.button}
					//onPress={onPress}
				>
					<Text>se connecter</Text>
				</TouchableOpacity>
			</SafeAreaView>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
	input: {
		margin: 20,
		padding: 10,
		height: 40,
		width: 250,
		fontWeight: "500",
		borderWidth: 1,
	},
	button: {
		height: 50,
		backgroundColor: "blue",
	},
})
