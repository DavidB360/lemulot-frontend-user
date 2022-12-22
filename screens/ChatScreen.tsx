import {
	View,
	Text,
	TouchableOpacity,
	StyleSheet,
	TextInput,
	ScrollView,
	KeyboardAvoidingView,
	Platform,
	Image,
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { updateProcessus } from "../reducers/processus";
import { useSelector, useDispatch } from "react-redux";
import { UserState } from "../reducers/user";

export default function OralRequestScreen({ navigation }: any) {
	const dispatch = useDispatch();

	const user = useSelector((state: { user: UserState }) => state.user.value);

	return (
		<KeyboardAvoidingView
			keyboardVerticalOffset={Platform.select({ ios: 0, android: -250 })}
			behavior="padding"
			style={styles.container}
		>
			<View style={styles.btnTop}>
				<TouchableOpacity
					style={styles.btnClose}
					onPress={() =>
						navigation.navigate("TabNavigator", {
							screen: "Demandes",
						})
					}
				>
					<FontAwesome
						name="times"
						size={50}
						style={styles.iconClose}
					/>
					<Text style={styles.textClose}>Fermer</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={styles.btnAide}
					// onPress={() => navigation.navigate("Type")}
				>
					<Text style={styles.textBtnAide}>?</Text>
				</TouchableOpacity>
			</View>
			<View style={styles.title}>
				<Text style={styles.titleChat}>Imprimer un document</Text>
			</View>
			<View style={styles.chatContainer}>
				<ScrollView>
					<Text style={styles.nameUser}>Hyrule Zelda</Text>
					<View style={styles.chatUser}>
						<View style={styles.iconContainer}>
							<View style={styles.iconChat}>
								{user.avatar === null && (
									<FontAwesomeIcon
										icon={faUser}
										size={28}
										style={styles.icon}
										color="#5db194"
									/>
								)}
								{user.avatar && (
									<Image
										style={styles.icon}
										source={{ uri: user.avatar }}
									/>
								)}
							</View>
						</View>
						<Text style={styles.textChat}>
							Bonjour, je n'arrive pas à imprimer un document.
						</Text>
					</View>
					<Text style={styles.nameHelper}>Gerudo Ganondorf</Text>
					<View style={styles.chatHelper}>
						<Text style={styles.textChat}>
							Pouvez-vous m'en dire plus ?
						</Text>
						<View style={styles.iconContainer}>
							<View style={styles.iconChat}>
								<Image
									style={styles.icon}
									source={require("../assets/mulot_assistant.jpg")}
								/>
							</View>
						</View>
					</View>
					<Text style={styles.nameUser}>Hyrule Zelda</Text>
					<View style={styles.chatUser}>
						<View style={styles.iconContainer}>
							<View style={styles.iconChat}>
								{user.avatar === null && (
									<FontAwesomeIcon
										icon={faUser}
										size={28}
										style={styles.icon}
										color="#5db194"
									/>
								)}
								{user.avatar && (
									<Image
										style={styles.icon}
										source={{ uri: user.avatar }}
									/>
								)}
							</View>
						</View>
						<Text style={styles.textChat}>
							Je ne sais pas comment faire. Aidez-moi !
						</Text>
					</View>
					<Text style={styles.nameHelper}>Gerudo Ganondorf</Text>
					<View style={styles.chatHelper}>
						<Text style={styles.textChat}>
							Avez-vous regardé le tuto dédié à l'impression de
							ducument ?
						</Text>
						<View style={styles.iconContainer}>
							<View style={styles.iconChat}>
								<Image
									style={styles.icon}
									source={require("../assets/mulot_assistant.jpg")}
								/>
							</View>
						</View>
					</View>
					<Text style={styles.nameUser}>Hyrule Zelda</Text>
					<View style={styles.chatUser}>
						<View style={styles.iconContainer}>
							<View style={styles.iconChat}>
								{user.avatar === null && (
									<FontAwesomeIcon
										icon={faUser}
										size={28}
										style={styles.icon}
										color="#5db194"
									/>
								)}
								{user.avatar && (
									<Image
										style={styles.icon}
										source={{ uri: user.avatar }}
									/>
								)}
							</View>
						</View>
						<Text style={styles.textChat}>
							Oui mais ça marche pas !
						</Text>
					</View>
					<Text style={styles.nameHelper}>Gerudo Ganondorf</Text>
					<View style={styles.chatHelper}>
						<Text style={styles.textChat}>
							Avez-vous mit de l'encre dans votre imprimante ?
						</Text>
						<View style={styles.iconContainer}>
							<View style={styles.iconChat}>
								<Image
									style={styles.icon}
									source={require("../assets/mulot_assistant.jpg")}
								/>
							</View>
						</View>
					</View>
					<Text style={styles.nameUser}>Hyrule Zelda</Text>
					<View style={styles.chatUser}>
						<View style={styles.iconContainer}>
							<View style={styles.iconChat}>
								{user.avatar === null && (
									<FontAwesomeIcon
										icon={faUser}
										size={28}
										style={styles.icon}
										color="#5db194"
									/>
								)}
								{user.avatar && (
									<Image
										style={styles.icon}
										source={{ uri: user.avatar }}
									/>
								)}
							</View>
						</View>
						<Text style={styles.textChat}>
							Ah non mince, j'y ai pas pensé. Merci de votre aide.
							Bonne journée.
						</Text>
					</View>
					<Text style={styles.nameHelper}>Gerudo Ganondorf</Text>
					<View style={styles.chatHelper}>
						<Text style={styles.textChat}>
							Avec plaisir. Bonne journée à vous :)
						</Text>
						<View style={styles.iconContainer}>
							<View style={styles.iconChat}>
								<Image
									style={styles.icon}
									source={require("../assets/mulot_assistant.jpg")}
								/>
							</View>
						</View>
					</View>
				</ScrollView>
			</View>
			<View style={styles.messageContainer}>
				<TextInput
					style={styles.inputMessage}
					// on envoie le texte tapé dans le useState tutorialSearch à chaque changement
					// onChangeText={(value) => setTutorialSearch(value)}
					// value={tutorialSearch}
					placeholder="Message"
					placeholderTextColor="#808080"
					multiline={true}
				/>
				<TouchableOpacity
					style={styles.btnSend}
					// on affecte tutorialSearch au useState regexSearch au clic sur le bouton loupe
					// onPress={() => setRegexSearch(tutorialSearch)}
				>
					<Text style={styles.textSend}>Envoyer</Text>
				</TouchableOpacity>
			</View>
			<View style={styles.bottom}>
				<TouchableOpacity
					style={styles.btnBottom}
					onPress={() => {
						dispatch(updateProcessus("Chat"));
						navigation.navigate("Picture");
					}}
				>
					<FontAwesome
						name="camera-retro"
						size={60}
						color="#fff"
						style={styles.iconBottom}
					/>
				</TouchableOpacity>
				<TouchableOpacity
					style={styles.btnBottom}
					// onPress={() => navigation.navigate("Type")}
				>
					<FontAwesome
						name="microphone"
						size={60}
						color="#fff"
						style={styles.iconBottom}
					/>
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

	btnClose: {
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
		marginLeft: 20,
		backgroundColor: "#5db194",
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

	iconClose: {
		color: "#fff",
		textShadowColor: "#000000",
		textShadowOffset: { width: 0, height: 2 },
		textShadowRadius: 3,
	},

	textClose: {
		marginTop: -10,
		marginBottom: 10,
		fontSize: 18,
		color: "#fff",
		textShadowColor: "#000000",
		textShadowOffset: { width: 0, height: 2 },
		textShadowRadius: 3,
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

	chatContainer: {
		flexDirection: "column",
		justifyContent: "flex-start",
		borderWidth: 1,
		borderRadius: 5,
		borderColor: "#808080",
		width: "90%",
		height: "43%",
	},

	nameUser: {
		alignSelf: "flex-end",
		marginTop: 10,
		marginRight: 10,
		width: "85%",
		fontSize: 15,
	},

	nameHelper: {
		textAlign: "right",
		alignSelf: "flex-start",
		marginTop: 10,
		marginLeft: 10,
		width: "85%",
		fontSize: 15,
	},

	chatUser: {
		alignSelf: "flex-end",
		marginBottom: 10,
		marginRight: 10,
		borderWidth: 1,
		borderRadius: 10,
		backgroundColor: "#5db194",
		flexDirection: "row",
		justifyContent: "flex-end",
		alignItems: "flex-start",
		paddingTop: 5,
		paddingBottom: 5,
		width: "85%",
	},

	textChat: {
		alignSelf: "center",
		textAlign: "left",
		marginLeft: 10,
		marginRight: 10,
		fontSize: 18,
		color: "#ffffff",
		textShadowColor: "#000000",
		textShadowOffset: { width: 0, height: 2 },
		textShadowRadius: 5,
		width: "77%",
	},

	iconContainer: {
		justifyContent: "center",
		alignItems: "center",
	},

	iconChat: {
		justifyContent: "center",
		alignItems: "center",
		borderWidth: 1,
		height: 40,
		width: 40,
		borderRadius: 20,
		backgroundColor: "#fff",
		marginLeft: 10,
		marginRight: 10,
	},

	icon: {
		height: "100%",
		width: "100%",
		borderRadius: 20,
	},

	chatHelper: {
		alignSelf: "flex-start",
		marginBottom: 10,
		marginLeft: 10,
		borderWidth: 1,
		borderRadius: 10,
		backgroundColor: "#778ed4",
		flexDirection: "row",
		justifyContent: "flex-start",
		alignItems: "flex-start",
		paddingTop: 5,
		paddingBottom: 5,
		width: "85%",
	},

	title: {
		justifyContent: "center",
		alignItems: "center",
		borderColor: "#808080",
		width: "90%",
		height: 50,
		borderWidth: 1,
		borderRadius: 5,
		marginBottom: 20,
	},

	titleChat: {
		fontSize: 22,
		color: "#191970",
		textShadowColor: "#696969",
		textShadowOffset: { width: 0, height: 2 },
		textShadowRadius: 5,
	},

	messageContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginTop: 20,
		width: "90%",
		height: "10%",
	},

	inputMessage: {
		paddingLeft: 5,
		fontSize: 22,
		fontWeight: "bold",
		backgroundColor: "#ffffff",
		width: "65%",
		height: 50,
		borderColor: "#808080",
		borderRadius: 10,
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

	btnSend: {
		justifyContent: "center",
		alignItems: "center",
		paddingLeft: 5,
		fontSize: 22,
		fontWeight: "bold",
		backgroundColor: "#5db194",
		width: "30%",
		height: 50,
		borderColor: "#808080",
		borderRadius: 10,
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

	bottom: {
		flexDirection: "row",
		justifyContent: "space-around",
		alignItems: "center",
		width: "100%",
	},

	btnBottom: {
		marginTop: 30,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#778ed4",
		width: "35%",
		height: 80,
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

	iconBottom: {
		textShadowColor: "#000",
		textShadowOffset: { width: 0, height: 2 },
		textShadowRadius: 5,
	},
});
