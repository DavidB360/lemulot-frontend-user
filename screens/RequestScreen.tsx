import {
	View,
	Text,
	TouchableOpacity,
	StyleSheet,
	TextInput,
	Image,
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { useSelector, useDispatch } from "react-redux";
import { UserState } from "../reducers/user";
import React, { useState } from "react";
import { BACKEND_URL } from "@env";
import { updateHelpReq } from "../reducers/helpReq";

export default function RequestScreen({ navigation }: any) {
	const dispatch = useDispatch();

	// on charge le reducer user pour utiliser le token de l'utilisateur pour la route newHelpRequest
	const user = useSelector((state: { user: UserState }) => state.user.value);

	// intitiation d'un useState pour l'input du titre
	const [helpRequestTitle, setHelpRequestTitle] = useState("");

	// useStates pour gérer l'absence de saisie et les autres erreurs 
	const [inputError, setInputError] = useState(false);
	const [errorMessage, setErrorMessage] = useState("");

	const handleContinueHelpRequest = () => {
		if (helpRequestTitle !== '') {
			// on récupère l'ID de l'utilisateur
			fetch(BACKEND_URL + "users/getUserId/" + user.token)
			.then((response) => response.json())
				.then((data) => {
					if (data.result === true) {
						// création de la demande d'aide
						fetch(BACKEND_URL + "helprequests/newHelpRequest", {
							method: "POST",
							headers: { "Content-Type": "application/json" },
							body: JSON.stringify({
								title: helpRequestTitle,
								author: data.userId
							}),
						})
						.then((response) => response.json())
							.then((doc) => {
								if (doc.result === true) {
									setInputError(false);
									// ajout de l'id de la demande d'aide créée dans le tableau helpRequest de l'utilisateur
									fetch(BACKEND_URL + "users/addToHelpRequests/" + user.token + "/" + doc.helpRequestId, { method: "PUT" });
									// mise à jour du reducer helpReq avec l'id de la demande d'aide créée
									dispatch(updateHelpReq(doc.helpRequestId));
									// navigation vers page de rédaction de la demande d'aide
									navigation.navigate("TabNavigator2", {
										screen: "Ecrite",
									});
								} else {
									setErrorMessage(doc.error);
									setInputError(true);
								}
							});
					} else {
						// console.log('erreur');
						setErrorMessage(data.error);
						setInputError(true);
					}
				});
		} else {
			setErrorMessage('Entrez un titre');
			setInputError(true);
		}

	}

	return (
		<View style={styles.container}>
			<View style={styles.btnTop}>
				<TouchableOpacity
					style={styles.btnRetour}
					onPress={() =>
						navigation.navigate("TabNavigator", {
							screen: "Demandes",
						})
					}
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

			<View style={styles.titleRequest}>
				<Text style={styles.textRequest}>
					Indiquez la nature de votre demande :
				</Text>
				<View style={styles.checkContainer}>
					<TextInput
						style={styles.inputTitleRequest}
						// on envoie le texte tapé dans le useState helpRequestTitle à chaque changement
						onChangeText={(value) => setHelpRequestTitle(value)}
						value={helpRequestTitle}
						placeholder="Titre"
						placeholderTextColor="#808080"
						maxLength={33}
						multiline={true}
					/>
				</View>
			</View>

			<View style={styles.bottom}>
				<Text style={styles.textRequest}>
					Puis appuyez sur continuer afin de poursuivre votre demande
				</Text>

				{inputError && (
						<Text style={styles.error}>{errorMessage}</Text>
				)}

				<TouchableOpacity
					style={styles.btnNext}
					onPress={() => { handleContinueHelpRequest() }}
				>
					<Text style={styles.textBottom}>Continuer</Text>
				</TouchableOpacity>
			</View>
		</View>
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

	titleRequest: {
		marginTop: 20,
		flexDirection: "column",
		alignItems: "center",
		width: "90%",
		height: "40%",
	},

	textRequest: {
		textAlign: "center",
		marginLeft: 10,
		marginBottom: 20,
		fontSize: 22,
		textShadowColor: "#808080",
		textShadowOffset: { width: 0, height: 2 },
		textShadowRadius: 5,
	},

	checkContainer: {
		marginTop: 50,
		flexDirection: "column",
		justifyContent: "space-between",
		alignItems: "center",
		width: "90%",
		height: "60%",
	},

	inputTitleRequest: {
		paddingLeft: 5,
		marginRight: 15,
		fontSize: 22,
		fontWeight: "bold",
		backgroundColor: "#ffffff",
		width: "100%",
		height: 50,
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

	btnCheck: {
		marginTop: 20,
		backgroundColor: "#5db194",
		width: "60%",
		height: 60,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 10,
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

	textCheck: {
		fontSize: 22,
		color: "#ffffff",
		textShadowColor: "#000000",
		textShadowOffset: { width: 0, height: 2 },
		textShadowRadius: 5,
	},

	bottom: {
		flexDirection: "column",
		justifyContent: "space-around",
		alignItems: "center",
		width: "90%",
		height: "30%",
	},

	btnNext: {
		width: "90%",
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

	textBottom: {
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
