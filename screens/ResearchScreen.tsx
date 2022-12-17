import {
	View,
	Text,
	TouchableOpacity,
	StyleSheet,
	TextInput,
	ScrollView,
} from "react-native";
import { NavigationProp, ParamListBase } from "@react-navigation/native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { useSelector } from "react-redux";
import { DeviceState } from "../reducers/device";
import { CategoryState } from "../reducers/category";
import React, { useState } from "react";

type ResearchScreenProps = {
	navigation: NavigationProp<ParamListBase>;
};

export default function ResearchScreen({ navigation }: ResearchScreenProps) {
	// const [tutorial, setTutorial] = useState("");

	// const device = useSelector(
	// 	(state: { device: DeviceState }) => state.device.value
	// );
	// const category = useSelector(
	// 	(state: { category: CategoryState }) => state.category.value
	// );

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
		<View style={styles.container}>
			<View style={styles.btnTop}>
				<TouchableOpacity
					style={styles.btnRetour}
					onPress={() => navigation.navigate("Category")}
				>
					<FontAwesome
						name="long-arrow-left"
						size={50}
						style={styles.iconArrow}
					/>
					<Text style={styles.textBtnRetour}>Retour</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={styles.btnAide}
					// onPress={() => navigation.navigate("Type")}
				>
					<Text style={styles.textBtnAide}>?</Text>
				</TouchableOpacity>
			</View>
			<View style={styles.researchContainer}>
				<TextInput
					style={styles.input}
					//onChangeText={(e) => setTutorial(e.target.value)}
					//value={tutorial}
					placeholder="Recherche..."
				/>
				<TouchableOpacity
					style={styles.btnResearch}
					onPress={() => navigation.navigate("Tuto")}
				>
					<FontAwesome
						name="search"
						size={32}
						style={styles.iconResearch}
					/>
				</TouchableOpacity>
			</View>
			<View style={styles.resultResearch}>
				<ScrollView>
					<TouchableOpacity
						onPress={() => navigation.navigate("Tuto")}
					>
						<View style={styles.tuto}>
							<View style={styles.tutoText}>
								<Text style={styles.textResult}>
									Title: "Envoyer une photo dans WhatsApp"
								</Text>
								<Text style={styles.textResult}>
									Device: "Smartphone"
								</Text>
								<Text style={styles.textResult}>
									Category: "Communication"
								</Text>
								<Text style={styles.textResult}>
									CreationDate: "13-12-2022"
								</Text>
								<Text style={styles.textResult}>
									Author: "Mulot Influenceur"
								</Text>
							</View>
							<View style={styles.difficulty}>
								<FontAwesome
									name="thermometer-empty"
									size={40}
									color={"#5db194"}
								/>
								<Text style={styles.textDifficulty}>
									Facile
								</Text>
							</View>
						</View>
					</TouchableOpacity>
					<TouchableOpacity
						onPress={() => navigation.navigate("Tuto")}
					>
						<View style={styles.tuto}>
							<View style={styles.tutoText}>
								<Text style={styles.textResult}>
									Title: "Envoyer une photo dans WhatsApp"
								</Text>
								<Text style={styles.textResult}>
									Device: "Smartphone"
								</Text>
								<Text style={styles.textResult}>
									Category: "Communication"
								</Text>
								<Text style={styles.textResult}>
									CreationDate: "13-12-2022"
								</Text>
								<Text style={styles.textResult}>
									Author: "Mulot Influenceur"
								</Text>
							</View>
							<View style={styles.difficulty}>
								<FontAwesome
									name="thermometer-empty"
									size={40}
									color={"#5db194"}
								/>
								<Text style={styles.textDifficulty}>
									Facile
								</Text>
							</View>
						</View>
					</TouchableOpacity>
					<TouchableOpacity
						onPress={() => navigation.navigate("Tuto")}
					>
						<View style={styles.tuto}>
							<View style={styles.tutoText}>
								<Text style={styles.textResult}>
									Title: "Envoyer une photo dans WhatsApp"
								</Text>
								<Text style={styles.textResult}>
									Device: "Smartphone"
								</Text>
								<Text style={styles.textResult}>
									Category: "Communication"
								</Text>
								<Text style={styles.textResult}>
									CreationDate: "13-12-2022"
								</Text>
								<Text style={styles.textResult}>
									Author: "Mulot Influenceur"
								</Text>
							</View>
							<View style={styles.difficulty}>
								<FontAwesome
									name="thermometer-half"
									size={40}
									color={"#ffd700"}
								/>
								<Text style={styles.textDifficulty}>Moyen</Text>
							</View>
						</View>
					</TouchableOpacity>
					<TouchableOpacity
						onPress={() => navigation.navigate("Tuto")}
					>
						<View style={styles.tuto}>
							<View style={styles.tutoText}>
								<Text style={styles.textResult}>
									Title: "Envoyer une photo dans WhatsApp"
								</Text>
								<Text style={styles.textResult}>
									Device: "Smartphone"
								</Text>
								<Text style={styles.textResult}>
									Category: "Communication"
								</Text>
								<Text style={styles.textResult}>
									CreationDate: "13-12-2022"
								</Text>
								<Text style={styles.textResult}>
									Author: "Mulot Influenceur"
								</Text>
							</View>
							<View style={styles.difficulty}>
								<FontAwesome
									name="thermometer-half"
									size={40}
									color={"#ffd700"}
								/>
								<Text style={styles.textDifficulty}>Moyen</Text>
							</View>
						</View>
					</TouchableOpacity>
					<TouchableOpacity
						onPress={() => navigation.navigate("Tuto")}
					>
						<View style={styles.tuto}>
							<View style={styles.tutoText}>
								<Text style={styles.textResult}>
									Title: "Envoyer une photo dans WhatsApp"
								</Text>
								<Text style={styles.textResult}>
									Device: "Smartphone"
								</Text>
								<Text style={styles.textResult}>
									Category: "Communication"
								</Text>
								<Text style={styles.textResult}>
									CreationDate: "13-12-2022"
								</Text>
								<Text style={styles.textResult}>
									Author: "Mulot Influenceur"
								</Text>
							</View>
							<View style={styles.difficulty}>
								<FontAwesome
									name="thermometer-full"
									size={40}
									color={"#ff4500"}
								/>
								<Text style={styles.textDifficulty}>
									Expert
								</Text>
							</View>
						</View>
					</TouchableOpacity>
				</ScrollView>
			</View>
			<View style={styles.btnBottom}>
				<TouchableOpacity
					style={styles.btnDico}
					onPress={() => navigation.navigate("Dico")}
				>
					<Text style={styles.textBtnDico}>Dictionnaire</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={styles.btnHelrequest}
					onPress={() =>
						navigation.navigate("TabNavigator", {
							screen: "UserHelp",
						})
					}
				>
					<Text style={styles.textBtnHelrequest}>
						Demander de l'aide
					</Text>
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
		marginBottom: 30,
		marginTop: 50,
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

	researchContainer: {
		marginBottom: 20,
		flexDirection: "row",
		justifyContent: "center",
		width: "100%",
	},

	btnInput: {
		paddingRight: 10,
	},

	input: {
		paddingLeft: 5,
		marginRight: 10,
		fontSize: 22,
		fontWeight: "bold",
		backgroundColor: "#ffffff",
		width: "70%",
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

	btnResearch: {
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "#5db194",
		width: "20%",
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

	iconResearch: {
		color: "#ffffff",
		textShadowColor: "#000000",
		textShadowOffset: { width: 0, height: 2 },
		textShadowRadius: 3,
	},

	resultResearch: {
		backgroundColor: "#ffffff",
		marginTop: 10,
		padding: 10,
		width: "90%",
		height: "45%",
		borderColor: "#808080",
		borderRadius: 5,
		borderWidth: 1,
	},

	tuto: {
		backgroundColor: "#778ed4",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "flex-start",
		borderColor: "#808080",
		borderBottomWidth: 5,
		borderLeftWidth: 3,
		borderRightWidth: 3,
		width: "100%",
		height: 135,
		marginBottom: 15,
		borderRadius: 10,
	},

	tutoText: {
		marginTop: 5,
		marginLeft: 5,
		width: "70%",
	},

	textResult: {
		fontWeight: "bold",
		fontSize: 15,
		color: "#ffffff",
	},

	difficulty: {
		marginTop: 10,
		marginRight: 10,
		borderColor: "#808080",
		backgroundColor: "#ffffff",
		borderRadius: 10,
		borderWidth: 1,
		height: 80,
		width: 80,
		justifyContent: "center",
		alignItems: "center",
	},

	textDifficulty: {
		fontSize: 22,
		textShadowColor: "#808080",
		textShadowOffset: { width: 0, height: 2 },
		textShadowRadius: 5,
	},

	btnBottom: {
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		width: "100%",
	},

	btnDico: {
		marginTop: 20,
		marginBottom: 10,
		backgroundColor: "#778ed4",
		width: "90%",
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

	btnHelrequest: {
		marginTop: 10,
		backgroundColor: "#fffb00",
		width: "90%",
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
		color: "#000000",
	},
});
