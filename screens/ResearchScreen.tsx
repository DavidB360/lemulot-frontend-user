import {
	View,
	Text,
	TouchableOpacity,
	StyleSheet,
	TextInput,
	ScrollView,
	SafeAreaView,
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";

import React, { useState } from "react";

export default function ResearchScreen({ navigation }: any) {
	// const [tutorial, setTutorial] = useState("");

	// un tableau de tutos à charger pour mon Daminou :
	const tutorials = [
		{
			title: "Créer une adresse email",
			author: "Professeur Mulot",
			creationDate: "13-12-2022",
			device: "ordinateur",
			category: "logiciel",
			difficulty: "débutant",
			content:
				"<View><Text>Nous allons créer une adresse gmail pas à pas avec toi ...</Text></View>",
		},
		{
			title: "Se connecter à un réseau wifi",
			author: "Mulot bricolo",
			creationDate: "13-12-2022",
			device: "ordinateur",
			category: "connexion",
			difficulty: "débutant",
			content:
				"<View><Text>Cliquer sur l'icone à droite de votre barre des tâches ...</Text></View>",
		},
		{
			title: "Envoyer une photo dans WhatsApp",
			author: "Mulot influenceur",
			creationDate: "13-12-2022",
			device: "smartphone",
			category: "communication",
			difficulty: "débutant",
			content:
				"<View><Text>en bas de votre écran, appuyer sur le bouton en forme d'appareil photo ...</Text></View>",
		},
		{
			title: "Nettoyer son ordinateur avec ccleaner",
			author: "Mulot hacker",
			creationDate: "13-12-2022",
			device: "ordinateur",
			category: "logiciel",
			difficulty: "avancé",
			content:
				"<View><Text>Télécharger l'application ccleaner à l'adresse suivante...</Text></View>",
		},
	];

	//	  ()_|)
	//	   |oo|	   |			|\  /|
	//	   (_p)	  <	  Je dis	| \/ |
	//	__{|_)}	   |			|    |
	//	  _| L

	return (
		<SafeAreaView style={styles.container}>
			<TouchableOpacity
				style={styles.btnAide}
				onPress={() => navigation.navigate("Type")}
			>
				<Text style={styles.textBtnAide}>?</Text>
			</TouchableOpacity>
			<TouchableOpacity
				style={styles.btnRetour}
				onPress={() => navigation.navigate("Home")}
			>
				<FontAwesome
					name="long-arrow-left"
					size={32}
					style={styles.iconArrow}
				/>
				<Text style={styles.textBtnRetour}>Retour</Text>
			</TouchableOpacity>
			<View style={styles.btnResearchContainer}>
				<View style={styles.btnInput}>
					<TextInput
						style={styles.input}
						//onChangeText={(e) => setTutorial(e.target.value)}
						//value={tutorial}
						placeholder="Recherche..."
					/>
				</View>
				<View style={styles.btnConfirm}>
					<TouchableOpacity
						style={styles.confirm}
						onPress={() => navigation.navigate("Research")}
					>
						<FontAwesome
							name="search"
							size={32}
							style={styles.iconConfirm}
						/>
						{/* <Text style={styles.textBtnConfirm}>Rechercher</Text> */}
					</TouchableOpacity>
				</View>
			</View>
			<View style={styles.resultResearch}>
				<ScrollView>
					<TouchableOpacity
						onPress={() => navigation.navigate("Research")}
					>
						<View style={styles.tuto}>
							<View>
								<Text style={styles.textBtnResult}>
									Title: "Créer une adresse email"
								</Text>
								<Text style={styles.textBtnResult}>
									Device: "Ordinateur"
								</Text>
								<Text style={styles.textBtnResult}>
									Category: "Connexion"
								</Text>
								<Text style={styles.textBtnResult}>
									CreationDate: "13-12-2022"
								</Text>
								<Text style={styles.textBtnResult}>
									Author: "Professeur Mulot"
								</Text>
							</View>
							<View style={styles.difficulty}>
								<FontAwesome
									name="battery-empty"
									size={40}
									color={"#5db194"}
								/>
								<Text style={styles.textBtndifficulty}>
									Facile
								</Text>
							</View>
						</View>
					</TouchableOpacity>
					<TouchableOpacity
						onPress={() => navigation.navigate("Research")}
					>
						<View style={styles.tuto}>
							<View>
								<Text style={styles.textBtnResult}>
									Title: "Créer une adresse email"
								</Text>
								<Text style={styles.textBtnResult}>
									Device: "Ordinateur"
								</Text>
								<Text style={styles.textBtnResult}>
									Category: "Connexion"
								</Text>
								<Text style={styles.textBtnResult}>
									CreationDate: "13-12-2022"
								</Text>
								<Text style={styles.textBtnResult}>
									Author: "Professeur Mulot"
								</Text>
							</View>
							<View style={styles.difficulty}>
								<FontAwesome
									name="battery-quarter"
									size={40}
									color={"#5db194"}
								/>
								<Text style={styles.textBtndifficulty}>
									Facile
								</Text>
							</View>
						</View>
					</TouchableOpacity>
					<TouchableOpacity
						onPress={() => navigation.navigate("Research")}
					>
						<View style={styles.tuto}>
							<View>
								<Text style={styles.textBtnResult}>
									Title: "Se connecter à un réseau wifi"
								</Text>
								<Text style={styles.textBtnResult}>
									Device: "Ordinateur"
								</Text>
								<Text style={styles.textBtnResult}>
									Category: "Logiciel"
								</Text>
								<Text style={styles.textBtnResult}>
									CreationDate: "13-12-2022"
								</Text>
								<Text style={styles.textBtnResult}>
									Author: "Mulot bricolo"
								</Text>
							</View>
							<View style={styles.difficulty}>
								<FontAwesome
									name="battery-half"
									size={40}
									color={"#ffd700"}
								/>
								<Text style={styles.textBtndifficulty}>
									Moyen
								</Text>
							</View>
						</View>
					</TouchableOpacity>
					<TouchableOpacity
						onPress={() => navigation.navigate("Research")}
					>
						<View style={styles.tuto}>
							<View>
								<Text style={styles.textBtnResult}>
									Title: "Se connecter à un réseau wifi"
								</Text>
								<Text style={styles.textBtnResult}>
									Device: "Ordinateur"
								</Text>
								<Text style={styles.textBtnResult}>
									Category: "Logiciel"
								</Text>
								<Text style={styles.textBtnResult}>
									CreationDate: "13-12-2022"
								</Text>
								<Text style={styles.textBtnResult}>
									Author: "Mulot bricolo"
								</Text>
							</View>
							<View style={styles.difficulty}>
								<FontAwesome
									name="battery-three-quarters"
									size={40}
									color={"#ffd700"}
								/>
								<Text style={styles.textBtndifficulty}>
									Moyen
								</Text>
							</View>
						</View>
					</TouchableOpacity>
					<TouchableOpacity
						onPress={() => navigation.navigate("Research")}
					>
						<View style={styles.tuto}>
							<View>
								<Text style={styles.textBtnResult}>
									Title: "Envoyer une photo dans WhatsApp"
								</Text>
								<Text style={styles.textBtnResult}>
									Device: "Smartphone"
								</Text>
								<Text style={styles.textBtnResult}>
									Category: "Communication"
								</Text>
								<Text style={styles.textBtnResult}>
									CreationDate: "13-12-2022"
								</Text>
								<Text style={styles.textBtnResult}>
									Author: "Mulot Influenceur"
								</Text>
							</View>
							<View style={styles.difficulty}>
								<FontAwesome
									name="battery-full"
									size={40}
									color={"#ff4500"}
								/>
								<Text style={styles.textBtndifficulty}>
									Expert
								</Text>
							</View>
						</View>
					</TouchableOpacity>
					<TouchableOpacity
						onPress={() => navigation.navigate("Research")}
					>
						<View style={styles.tuto}>
							<View>
								<Text style={styles.textBtnResult}>
									Title: "Envoyer une photo dans WhatsApp"
								</Text>
								<Text style={styles.textBtnResult}>
									Device: "Smartphone"
								</Text>
								<Text style={styles.textBtnResult}>
									Category: "Communication"
								</Text>
								<Text style={styles.textBtnResult}>
									CreationDate: "13-12-2022"
								</Text>
								<Text style={styles.textBtnResult}>
									Author: "Mulot Influenceur"
								</Text>
							</View>
							<View style={styles.difficulty}>
								<FontAwesome
									name="thermometer-empty"
									size={40}
									color={"#5db194"}
								/>
								<Text style={styles.textBtndifficulty}>
									Facile
								</Text>
							</View>
						</View>
					</TouchableOpacity>
					<TouchableOpacity
						onPress={() => navigation.navigate("Research")}
					>
						<View style={styles.tuto}>
							<View>
								<Text style={styles.textBtnResult}>
									Title: "Envoyer une photo dans WhatsApp"
								</Text>
								<Text style={styles.textBtnResult}>
									Device: "Smartphone"
								</Text>
								<Text style={styles.textBtnResult}>
									Category: "Communication"
								</Text>
								<Text style={styles.textBtnResult}>
									CreationDate: "13-12-2022"
								</Text>
								<Text style={styles.textBtnResult}>
									Author: "Mulot Influenceur"
								</Text>
							</View>
							<View style={styles.difficulty}>
								<FontAwesome
									name="thermometer-quarter"
									size={40}
									color={"#5db194"}
								/>
								<Text style={styles.textBtndifficulty}>
									Facile
								</Text>
							</View>
						</View>
					</TouchableOpacity>
					<TouchableOpacity
						onPress={() => navigation.navigate("Research")}
					>
						<View style={styles.tuto}>
							<View>
								<Text style={styles.textBtnResult}>
									Title: "Envoyer une photo dans WhatsApp"
								</Text>
								<Text style={styles.textBtnResult}>
									Device: "Smartphone"
								</Text>
								<Text style={styles.textBtnResult}>
									Category: "Communication"
								</Text>
								<Text style={styles.textBtnResult}>
									CreationDate: "13-12-2022"
								</Text>
								<Text style={styles.textBtnResult}>
									Author: "Mulot Influenceur"
								</Text>
							</View>
							<View style={styles.difficulty}>
								<FontAwesome
									name="thermometer-half"
									size={40}
									color={"#ffd700"}
								/>
								<Text style={styles.textBtndifficulty}>
									Moyen
								</Text>
							</View>
						</View>
					</TouchableOpacity>
					<TouchableOpacity
						onPress={() => navigation.navigate("Research")}
					>
						<View style={styles.tuto}>
							<View>
								<Text style={styles.textBtnResult}>
									Title: "Envoyer une photo dans WhatsApp"
								</Text>
								<Text style={styles.textBtnResult}>
									Device: "Smartphone"
								</Text>
								<Text style={styles.textBtnResult}>
									Category: "Communication"
								</Text>
								<Text style={styles.textBtnResult}>
									CreationDate: "13-12-2022"
								</Text>
								<Text style={styles.textBtnResult}>
									Author: "Mulot Influenceur"
								</Text>
							</View>
							<View style={styles.difficulty}>
								<FontAwesome
									name="thermometer-three-quarters"
									size={40}
									color={"#ffd700"}
								/>
								<Text style={styles.textBtndifficulty}>
									Moyen
								</Text>
							</View>
						</View>
					</TouchableOpacity>
					<TouchableOpacity
						onPress={() => navigation.navigate("Research")}
					>
						<View style={styles.tuto}>
							<View>
								<Text style={styles.textBtnResult}>
									Title: "Envoyer une photo dans WhatsApp"
								</Text>
								<Text style={styles.textBtnResult}>
									Device: "Smartphone"
								</Text>
								<Text style={styles.textBtnResult}>
									Category: "Communication"
								</Text>
								<Text style={styles.textBtnResult}>
									CreationDate: "13-12-2022"
								</Text>
								<Text style={styles.textBtnResult}>
									Author: "Mulot Influenceur"
								</Text>
							</View>
							<View style={styles.difficulty}>
								<FontAwesome
									name="thermometer-full"
									size={40}
									color={"#ff4500"}
								/>
								<Text style={styles.textBtndifficulty}>
									Expert
								</Text>
							</View>
						</View>
					</TouchableOpacity>
				</ScrollView>
			</View>
			<View style={styles.btnBottom}>
				<View style={styles.dico}>
					<TouchableOpacity
						style={styles.btnDico}
						onPress={() => navigation.navigate("Dico")}
					>
						<Text style={styles.textBtnDico}>Dictionnaire</Text>
					</TouchableOpacity>
				</View>
				<View style={styles.helprequest}>
					<TouchableOpacity
						style={styles.btnHelrequest}
						onPress={() => navigation.navigate("HelpRequest")}
					>
						<Text style={styles.textBtnHelrequest}>
							Demander de l'aide
						</Text>
					</TouchableOpacity>
				</View>
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "#ffffff",
	},

	btnAide: {
		position: "absolute",
		top: 40,
		right: 20,
		backgroundColor: "#fffb00",
		width: 80,
		height: 80,
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 40,
		borderWidth: 1,
	},

	textBtnAide: {
		color: "#000000",
		fontSize: 50,
	},

	btnRetour: {
		position: "absolute",
		top: 55,
		left: 20,
		backgroundColor: "#5db194",
		width: 125,
		height: 50,
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

	iconArrow: {
		paddingRight: 10,
		color: "#ffffff",
		textShadowColor: "#000000",
		textShadowOffset: { width: 0, height: 2 },
		textShadowRadius: 5,
	},

	textBtnRetour: {
		paddingBottom: 5,
		color: "#ffffff",
		fontSize: 22,
		textShadowColor: "#000000",
		textShadowOffset: { width: 0, height: 2 },
		textShadowRadius: 5,
	},

	btnResearchContainer: {
		flexDirection: "row",
		paddingTop: 120,
	},

	btnInput: {
		paddingRight: 10,
	},

	input: {
		paddingLeft: 5,
		fontSize: 22,
		fontWeight: "bold",
		backgroundColor: "#ffffff",
		width: 320,
		height: 40,
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

	btnConfirm: {
		backgroundColor: "#5db194",
		width: 60,
		height: 40,
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

	confirm: {
		alignItems: "center",
		justifyContent: "center",
	},

	iconConfirm: {
		color: "#ffffff",
		textShadowColor: "#000000",
		textShadowOffset: { width: 0, height: 2 },
		textShadowRadius: 5,
	},

	// textBtnConfirm: {},

	resultResearch: {
		backgroundColor: "#5db194",
		marginTop: 10,
		padding: 10,
		width: 390,
		height: 450,
		borderColor: "#808080",
		borderRadius: 5,
		borderWidth: 1,
	},

	tuto: {
		backgroundColor: "#ffffff",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		borderColor: "#808080",
		borderBottomWidth: 3,
		borderLeftWidth: 2,
		borderRightWidth: 2,
		borderTopWidth: 1,
		paddingLeft: 5,
		paddingRight: 8,
		width: 368,
		height: 135,
	},

	textBtnResult: {
		textShadowColor: "#808080",
		textShadowOffset: { width: 0, height: 1 },
		textShadowRadius: 5,
	},

	difficulty: {
		borderColor: "#808080",
		borderWidth: 1,
		height: 80,
		width: 80,
		justifyContent: "center",
		alignItems: "center",
	},

	textBtndifficulty: {
		fontSize: 22,
		textShadowColor: "#808080",
		textShadowOffset: { width: 0, height: 2 },
		textShadowRadius: 5,
	},

	btnBottom: {
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
	},

	dico: {
		paddingTop: 10,
	},

	btnDico: {
		backgroundColor: "#5db194",
		width: 400,
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

	textBtnDico: {
		fontSize: 22,
		color: "#ffffff",
		textShadowColor: "#000000",
		textShadowOffset: { width: 0, height: 2 },
		textShadowRadius: 5,
	},

	helprequest: {
		paddingTop: 10,
	},

	btnHelrequest: {
		backgroundColor: "#5db194",
		width: 400,
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

	textBtnHelrequest: {
		fontSize: 22,
		color: "#ffffff",
		textShadowColor: "#000000",
		textShadowOffset: { width: 0, height: 2 },
		textShadowRadius: 5,
	},
});
