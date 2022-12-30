import {
	View,
	Text,
	TouchableOpacity,
	StyleSheet,
	TextInput,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { useSelector } from "react-redux";
import { userSlice, UserState } from "../reducers/user";
import { HelpReqState } from "../reducers/helpReq";
import React, { useState } from "react";
import { BACKEND_URL } from "@env";

export default function WrittenRequestScreen({ navigation }: any) {

	// on charge le reducer user pour utiliser le token de l'utilisateur pour récupérer son Id
	const user = useSelector((state: { user: UserState }) => state.user.value);

	// on charge le reducer helpReq pour renseigner l'Id de la demande d'aide en cours
	const helpReq = useSelector((state: { helpReq: HelpReqState }) => state.helpReq.value);

	// intitiation d'un useState pour l'input de la demande écrite
	const [writtenRequest, setWrittenRequest] = useState("");

	// useStates pour gérer l'absence de saisie et les autres erreurs 
	const [inputError, setInputError] = useState(false);
	const [errorMessage, setErrorMessage] = useState("");

	const handleContinueHelpRequest = () => {
		if (writtenRequest !== '') {
			// récupération de l'id de l'utilisateur
			fetch(BACKEND_URL + "users/getUserId/" + user.token)
			.then((response) => response.json())
				.then((data) => {
					if (data.result === true) {
						// on ajoute à la demande d'aide en cours un message de type texte 
						// avec comme contenu le texte de l'input writtenRequest et comme auteur
						// l'utilisateur en cours
						fetch(BACKEND_URL + "helprequests/addMessage/", {
							method: "POST",
							headers: { "Content-Type": "application/json" },
							body: JSON.stringify({
								helpRequestId: helpReq,
								authorType: 'users',
								authorId: data.userId,
								type: 'text',
								content: writtenRequest
							}),
						})
						.then((response) => response.json())
							.then((doc) => {
								if (doc.result === true) {
									setInputError(false);
									navigation.navigate("PictureRequest")
								}
							});
					} else {
						setErrorMessage(data.error);
						setInputError(true);
					}
				});	
		} else {
			setErrorMessage('Entrez une description du problème');
			setInputError(true);
		}

	}

	return (
		<KeyboardAwareScrollView style={styles.all}>
			<View style={styles.container}>
				<View style={styles.btnTop}>
					<TouchableOpacity
						style={styles.btnRetour}
						onPress={() => navigation.navigate("Request")}
					>
						<FontAwesome
							name="long-arrow-left"
							size={50}
							style={styles.iconArrow}
						/>
						<Text style={styles.textBtnRetour}>Retour</Text>
					</TouchableOpacity>
					<Text style={styles.title}>Demande d'aide</Text>
					<TouchableOpacity
						style={styles.btnAide}
						// onPress={() => {} }
					>
						<Text style={styles.textBtnAide}>?</Text>
					</TouchableOpacity>
				</View>
				<View style={styles.request}>
					<Text style={styles.textRequest}>
						Faire une demande écrite
					</Text>
					<TextInput
						style={styles.inputRequest}
						onChangeText={(value) => setWrittenRequest(value)}
						value={writtenRequest}
						placeholder="Demande"
						placeholderTextColor="#808080"
						maxLength={280}
						multiline={true}
						numberOfLines={6}
					/>
				</View>

				{inputError && (
						<Text style={styles.error}>{errorMessage}</Text>
				)}

				<View style={styles.btnBottom}>
					<TouchableOpacity
						style={styles.btnSend}
						onPress={() => { handleContinueHelpRequest() }}
					>
						<Text style={styles.textSend}>Continuer</Text>
					</TouchableOpacity>
				</View>
			</View>
		</KeyboardAwareScrollView>
	);
}

const styles = StyleSheet.create({
	container: {
		justifyContent: "flex-start",
		alignItems: "center",
	},

	all: {
		flex: 1,
		flexDirection: "column",
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

	btnRetour: {
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

	iconArrow: {
		paddingRight: 5,
		marginBottom: -15,
		color: "#ffffff",
		textShadowColor: "#000000",
		textShadowOffset: { width: 0, height: 2 },
		textShadowRadius: 5,
	},

	textBtnRetour: {
		paddingBottom: 5,
		color: "#ffffff",
		fontSize: 15,
		textShadowColor: "#000000",
		textShadowOffset: { width: 0, height: 2 },
		textShadowRadius: 5,
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
		paddingLeft: 10,
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

	error: {
		color: "red",
		fontSize: 22,
	},
});
