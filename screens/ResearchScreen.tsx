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
import { useSelector, useDispatch } from "react-redux";
import { DeviceState } from "../reducers/device";
import { CategoryState } from "../reducers/category";
import React, { useState, useEffect } from "react";
import { updateTuto } from "../reducers/tuto";
import { BACKEND_URL } from "@env";
import { updatePrevPage } from "../reducers/prevPage";

type ResearchScreenProps = {
	navigation: NavigationProp<ParamListBase>;
};

export default function ResearchScreen({ navigation }: ResearchScreenProps) {
	const dispatch = useDispatch();

	// intitiation d'un useState pour l'input de recherche
	const [tutorialSearch, setTutorialSearch] = useState("");

	// on charge les reducers device et category pour connaître la navigation effectuée par
	// l'utilisateur sur les pages de menu précédentes
	const device = useSelector(
		(state: { device: DeviceState }) => state.device.value
	);
	const category = useSelector(
		(state: { category: CategoryState }) => state.category.value
	);

	// intitialisation d'un useState qui va stocker les tutoriels à afficher en fonction
	// des reducers device et category
	const [selectedTutorials, setSelectedTutorials] = useState<any>([]);

	// initialisation d'un useState pour gérer la recherche avec une regex
	const [regexSearch, setRegexSearch] = useState("");

	// tableau de tutoriels pour test
	const tutorials = [
		{
			_id: "1",
			title: "Créer une adresse email",
			author: "Professeur Mulot",
			creationDate: "12-12-2022",
			device: "computer",
			category: "internet",
			difficulty: "easy",
			content:
				"<View><Text>Nous allons créer une adresse gmail pas à pas avec toi ...</Text></View>",
		},
		{
			_id: "2",
			title: "Se connecter à un réseau wifi",
			author: "Mulot bricolo",
			creationDate: "14-12-2022",
			device: "computer",
			category: "system",
			difficulty: "easy",
			content:
				"<View><Text>Cliquer sur l'icone à droite de votre barre des tâches ...</Text></View>",
		},
		{
			_id: "3",
			title: "Envoyer une photo dans WhatsApp",
			author: "Mulot influenceur",
			creationDate: "15-12-2022",
			device: "mobile",
			category: "software",
			difficulty: "easy",
			content:
				"<View><Text>en bas de votre écran, appuyer sur le bouton en forme d'appareil photo ...</Text></View>",
		},
		{
			_id: "4",
			title: "Nettoyer son ordinateur avec ccleaner",
			author: "Mulot hacker",
			creationDate: "16-12-2022",
			device: "computer",
			category: "system",
			difficulty: "advanced",
			content:
				"<View><Text>Télécharger l'application ccleaner à l'adresse suivante...</Text></View>",
		},
		{
			_id: "5",
			title: "Repérer les emails frauduleux",
			author: "Mulot hacker",
			creationDate: "14-12-2022",
			device: "computer",
			category: "internet",
			difficulty: "intermediate",
			content:
				"<View><Text>Télécharger l'application ccleaner à l'adresse suivante...</Text></View>",
		},
		{
			_id: "6",
			title: "Se connecter à un réseau wifi",
			author: "Mulot bricolo",
			creationDate: "16-12-2022",
			device: "tablet",
			category: "system",
			difficulty: "easy",
			content:
				"<View><Text>Cliquer sur l'icone à droite de votre barre des tâches ...</Text></View>",
		},
	];

	// useEffect qui ne s'applique qu'au chargement de la page pour ne pas lancer le setter de SelectedTutorials à l'infini
	useEffect(() => {
		// Code pour travailler avec le tableau de test :
		// if (category !== null) {
		// 	setSelectedTutorials(tutorials.filter(tuto => tuto.device === device && tuto.category === category));
		// } else {
		// 	setSelectedTutorials(tutorials.filter(tuto => tuto.device === device));
		// }

		// Code pour travailler avec la base de données :
		const urlEnd: string = category !== null ? "/" + category : ""; // si category n'est pas null on l'ajoute en params à la route
		// console.log(BACKEND_URL + "tutorials/filter/" + device + urlEnd);
		fetch(BACKEND_URL + "tutorials/filter/" + device + urlEnd)
			.then((response) => response.json())
			.then((data) => {
				if (data.result === true) {
					// console.log(data.tutorials);
					setSelectedTutorials(data.tutorials);
				}
			});
	}, []);

	// automatisation de l'affichage des tutoriels : on crée le contenu à partir du tableau de tutoriels avec un "map"
	const displayedTutorials = selectedTutorials.map(
		(tutorial: any, i: any) => {
			// préparation d'une regex pour permettre la recherche par mot clé dans le titre des tutoriels
			const pattern = new RegExp(regexSearch, "i");
			// on charge la date dans un objet Date pour pouvoir formater l'affichage de la date à notre façon
			const date = new Date(tutorial.creationDate);

			if (pattern.test(tutorial.title)) {
				return (
					<TouchableOpacity
						key={i}
						onPress={() => {
							dispatch(updateTuto(tutorial._id));
							dispatch(updatePrevPage("Research"));
							navigation.navigate("Tuto");
						}}
					>
						<View style={styles.tuto}>
							<View style={styles.tutoText}>
								<Text style={styles.textTitle}>
									Titre : {tutorial.title}
								</Text>
								<Text style={styles.textDate}>
									Date de création :{" "}
									{date.getDate() +
										"/" +
										(date.getMonth() + 1) +
										"/" +
										date.getFullYear()}
								</Text>
								<Text style={styles.textAuthor}>
									Auteur : {tutorial.author}
								</Text>
							</View>
							
							{/* Affichage des icones "difficulté" fonction du paramètre difficulty */}
							{tutorial.difficulty === "easy" && (
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
							)}

							{tutorial.difficulty === "intermediate" && (
								<View style={styles.difficulty}>
									<FontAwesome
										name="thermometer-half"
										size={40}
										color={"#ffd700"}
									/>
									<Text style={styles.textDifficulty}>
										Moyen
									</Text>
								</View>
							)}

							{tutorial.difficulty === "advanced" && (
								<View style={styles.difficulty}>
									<FontAwesome
										name="thermometer-full"
										size={40}
										color={"#ff4500"}
									/>
									<Text style={styles.textDifficulty}>
										Avancé
									</Text>
								</View>
							)}
						</View>
					</TouchableOpacity>
				);
			}
		}
	);

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

				<View style={styles.titlesContainer}>
					{/* Affichage des titres en fonction des reducers device et category */}
					<Text style={styles.title}>
						{device === "computer" && "Ordinateur"}
						{device === "mobile" && "Téléphone"}
						{device === "tablet" && "Tablette"}
					</Text>

					{category === "system" && (
						<Text style={styles.title}>Système</Text>
					)}
					{category === "internet" && (
						<Text style={styles.title}>Internet</Text>
					)}
					{category === "software" && (
						<Text style={styles.title}>Logiciel</Text>
					)}
				</View>

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
					// on envoie le texte tapé dans le useState tutorialSearch à chaque changement
					onChangeText={(value) => setTutorialSearch(value)}
					value={tutorialSearch}
					placeholder="Recherche..."
				/>

				<TouchableOpacity
					style={styles.btnResearch}
					// on affecte tutorialSearch au useState regexSearch au clic sur le bouton loupe
					onPress={() => setRegexSearch(tutorialSearch)}
				>
					<FontAwesome
						name="search"
						size={32}
						style={styles.iconResearch}
					/>
				</TouchableOpacity>
			</View>

			<View style={styles.resultResearch}>
				<ScrollView>{displayedTutorials}</ScrollView>
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
						navigation.navigate("TabNavigator2", {
							screen: "Ecrite",
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

	titlesContainer: {
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
	},

	title: {
		fontSize: 25,
		color: "#191970",
		textShadowColor: "#696969",
		textShadowOffset: { width: 0, height: 3 },
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
		height: "100%",
		flexDirection: "column",
		justifyContent: "space-between",
	},

	textTitle: {
		fontWeight: "bold",
		fontSize: 18,
		color: "#ffffff",
		marginTop: 4,
	},

	textDate: {
		fontSize: 16,
		color: "#ffffff",
	},

	textAuthor: {
		fontSize: 16,
		color: "#ffffff",
		marginBottom: 20,
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
