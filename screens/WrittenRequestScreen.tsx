import {
	View,
	Text,
	TouchableOpacity,
	StyleSheet,
	TextInput,
	KeyboardAvoidingView,
	Platform,
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

export default function WrittenRequestScreen({ navigation }: any) {
	return (
		<KeyboardAvoidingView
			keyboardVerticalOffset={Platform.select({ ios: 0, android: -250 })}
			behavior="padding"
			style={styles.container}
		>
			<View style={styles.btnTop}>
				<TouchableOpacity
					style={styles.btnUsers}
					onPress={() =>
						navigation.navigate("TabNavigator", {
							screen: "Paramètre",
						})
					}
				>
					<FontAwesomeIcon
						icon={faUser}
						size={50}
						style={styles.iconUsers}
					/>
				</TouchableOpacity>
				<Text style={styles.title}>Demande d'aide</Text>
				<TouchableOpacity
					style={styles.btnAide}
					// onPress={() => navigation.navigate("Type")}
				>
					<Text style={styles.textBtnAide}>?</Text>
				</TouchableOpacity>
			</View>
			<View style={styles.request}>
				<Text style={styles.textRequest}>Faire une demande écrite</Text>
				<TextInput
					style={styles.inputRequest}
					//onChangeText={(e) => setTutorial(e.target.value)}
					//value={tutorial}
					placeholder="Recherche..."
					placeholderTextColor="#808080"
					maxLength={280}
					multiline={true}
					numberOfLines={6}
				/>
			</View>
			<View style={styles.btnBottom}>
				<TouchableOpacity
					style={styles.btnSend}
					onPress={() => navigation.navigate("PictureRequest")}
				>
					<Text style={styles.textSend}>Continuer</Text>
				</TouchableOpacity>
			</View>
		</KeyboardAvoidingView>
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
		justifyContent: "space-between",
		alignItems: "center",
		width: "100%",
		marginBottom: 20,
		marginTop: 50,
	},

	btnUsers: {
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
		marginLeft: 20,
		backgroundColor: "#fff",
		width: 80,
		height: 80,
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

	iconUsers: {
		color: "#5db194",
	},

	title: {
		fontSize: 25,
		color: "#191970",
		textShadowColor: "#696969",
		textShadowOffset: { width: 0, height: 2 },
		textShadowRadius: 5,
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

	request: {
		marginBottom: 10,
		flexDirection: "column",
		justifyContent: "flex-start",
		width: "95%",
		height: "48%",
	},

	textRequest: {
		marginLeft: 10,
		marginBottom: 20,
		fontSize: 22,
		textShadowColor: "#808080",
		textShadowOffset: { width: 0, height: 2 },
		textShadowRadius: 5,
	},

	inputRequest: {
		marginLeft: 10,
		paddingLeft: 5,
		width: "95%",
		height: "80%",
		textAlign: "center",
		fontSize: 22,
		fontWeight: "bold",
		backgroundColor: "#ffffff",
		borderColor: "#808080",
		borderRadius: 6,
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

	btnBottom: {
		marginBottom: 180,
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		width: "100%",
	},

	btnSend: {
		width: "60%",
		height: 60,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 10,
		borderColor: "#808080",
		backgroundColor: "#5db194",
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

	textSend: {
		fontSize: 22,
		color: "#ffffff",
		textShadowColor: "#000000",
		textShadowOffset: { width: 0, height: 2 },
		textShadowRadius: 5,
	},
});
