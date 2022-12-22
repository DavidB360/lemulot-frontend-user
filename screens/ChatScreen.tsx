import {
	View,
	Text,
	TouchableOpacity,
	StyleSheet,
	TextInput,
	ScrollView,
	KeyboardAvoidingView,
	Platform,
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

export default function OralRequestScreen({ navigation }: any) {
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
				<Text style={styles.titleChat}>Scanner un document</Text>
			</View>
			<View style={styles.chatContainer}>
				<ScrollView>
					<View style={styles.chatUser}>
						<View style={styles.chat}>
							<View style={styles.iconUsers}>
								<FontAwesomeIcon
									icon={faUser}
									size={28}
									style={styles.icon}
									color="#5db194"
								/>
							</View>
							<Text style={styles.user}>
								Lorem ipsum dolor sit amet.
							</Text>
						</View>
					</View>
					<View style={styles.chatHelper}>
						<View style={styles.chat}>
							<Text style={styles.helper}>
								Aut accusamus sequi a eveniet expedita qui
								dolorum voluptas sit voluptatum nihil.
							</Text>
							<View style={styles.iconUsers}>
								<FontAwesomeIcon
									icon={faUser}
									size={28}
									style={styles.icon}
									color="#5db194"
								/>
							</View>
						</View>
					</View>
					<View style={styles.chatUser}>
						<View style={styles.chat}>
							<View style={styles.iconUsers}>
								<FontAwesomeIcon
									icon={faUser}
									size={28}
									style={styles.icon}
									color="#5db194"
								/>
							</View>
							<Text style={styles.user}>
								Aut culpa voluptatem et illum quas ea tempora
								laboriosam qui possimus.
							</Text>
						</View>
					</View>
					<View style={styles.chatHelper}>
						<View style={styles.chat}>
							<Text style={styles.helper}>
								Sed quas facilis et molestias libero vel odio
								voluptas et modi tempora est consequatur amet.
							</Text>
							<View style={styles.iconUsers}>
								<FontAwesomeIcon
									icon={faUser}
									size={28}
									style={styles.icon}
									color="#5db194"
								/>
							</View>
						</View>
					</View>
					<View style={styles.chatUser}>
						<View style={styles.chat}>
							<View style={styles.iconUsers}>
								<FontAwesomeIcon
									icon={faUser}
									size={28}
									style={styles.icon}
									color="#5db194"
								/>
							</View>
							<Text style={styles.user}>
								Aut accusamus sequi a eveniet expedita qui
								dolorum voluptas sit voluptatum nihil.
							</Text>
						</View>
					</View>
					<View style={styles.chatHelper}>
						<View style={styles.chat}>
							<Text style={styles.helper}>
								Lorem ipsum dolor sit amet.
							</Text>
							<View style={styles.iconUsers}>
								<FontAwesomeIcon
									icon={faUser}
									size={28}
									style={styles.icon}
									color="#5db194"
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
					onPress={() => navigation.navigate("Picture")}
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
		borderWidth: 1,
		borderRadius: 5,
		borderColor: "#808080",
		width: "90%",
		height: "43%",
	},

	chatUser: {
		fontSize: 22,
		alignSelf: "flex-end",
		marginTop: 10,
		marginBottom: 10,
		borderWidth: 1,
		borderRadius: 10,
		backgroundColor: "#5db194",
		height: "15%",
		width: "80%",
	},

	chat: {
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		height: "100%",
		width: "100%",
		paddingTop: 5,
		paddingBottom: 5,
	},

	user: {
		textAlign: "left",
		marginLeft: 10,
		fontSize: 18,
		color: "#ffffff",
		textShadowColor: "#000000",
		textShadowOffset: { width: 0, height: 2 },
		textShadowRadius: 5,
		width: "80%",
	},

	iconUsers: {
		justifyContent: "center",
		alignItems: "center",
		borderWidth: 1,
		height: 40,
		width: 40,
		borderRadius: 20,
		backgroundColor: "#fff",
	},

	icon: {
		height: "100%",
		width: "100%",
		borderRadius: 20,
	},

	chatHelper: {
		fontSize: 22,
		alignSelf: "flex-start",
		marginTop: 10,
		marginBottom: 10,
		borderWidth: 1,
		borderRadius: 10,
		backgroundColor: "#778ed4",
		height: "15%",
		width: "80%",
	},

	helper: {
		textAlign: "left",
		marginRight: 10,
		fontSize: 18,
		color: "#ffffff",
		textShadowColor: "#000000",
		textShadowOffset: { width: 0, height: 2 },
		textShadowRadius: 5,
		width: "80%",
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
