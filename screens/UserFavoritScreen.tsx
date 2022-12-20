import {
	View,
	Text,
	TouchableOpacity,
	StyleSheet,
	ScrollView,
	TextInput,
} from "react-native";
import { NavigationProp, ParamListBase } from "@react-navigation/native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { BACKEND_URL } from "@env";
import { updatePrevPage } from "../reducers/prevPage";
import { UserState } from "../reducers/user";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateTuto } from "../reducers/tuto";


type UserFavoritScreenProps = {
	navigation: NavigationProp<ParamListBase>;
};

export default function UserFavoritScreen({	navigation }: UserFavoritScreenProps) {
	const dispatch = useDispatch();

	// intitiation d'un useState pour l'input de recherche
	const [tutorialSearch, setTutorialSearch] = useState("");

	// intitialisation d'un useState qui va stocker les tutoriels à afficher
	const [selectedTutorials, setSelectedTutorials] = useState<any>([]);

	// initialisation d'un useState pour gérer la recherche avec une regex
	const [regexSearch, setRegexSearch] = useState("");

	// on charge le reducer user pour afficher son prénom
	const user = useSelector((state: {user: UserState }) => state.user.value);

	useEffect(() => {
		// à faire : populate sur id de FavoriteLessons pour récupérer tableau de tutos favoris
			fetch(BACKEND_URL + "tutorials")
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
							dispatch(updatePrevPage("Favoris"));
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

	return (
		<View style={styles.container}>

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

				<Text style={styles.title}>Bonjour {user.firstName}</Text>

				<TouchableOpacity
					style={styles.btnAide}
					// onPress={() => navigation.navigate("Type")}
				>
					<Text style={styles.textBtnAide}>?</Text>
				</TouchableOpacity>
			</View>

			<View style={styles.textContainer}>
				<Text style={styles.textTitle}>Mes leçons favorites</Text>
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
				<ScrollView>
					{displayedTutorials}
				</ScrollView>
			</View>

			<View style={styles.lesson}>
				<TouchableOpacity
					style={styles.btnLesson}
					onPress={() => navigation.navigate("Device")}
				>
					<Text style={styles.textBtnLesson}>
						Les leçons du Mulot
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
		marginBottom: 20,
		marginTop: 50,
	},

	title: {
		fontSize: 25,
		color: "#191970",
		textShadowColor: "#696969",
		textShadowOffset: { width: 0, height: 3 },
		textShadowRadius: 5,
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

	textContainer: {
		justifyContent: "center",
		alignItems: "center",
		width: "90%",
		height: "10%",
		marginBottom: 20,
		borderColor: "#808080",
		borderRadius: 10,
		borderTopWidth: 1,
		borderBottomWidth: 2,
		borderLeftWidth: 2,
		borderRightWidth: 2,
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
		padding: 10,
		width: "90%",
		height: "45%",
		borderColor: "#808080",
		borderRadius: 5,
		borderWidth: 1,
	},

	requestContainer: {
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

	lesson: {
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		width: "100%",
	},

	btnLesson: {
		marginTop: 10,
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

	textBtnLesson: {
		fontSize: 22,
		color: "#ffffff",
		textShadowColor: "#000000",
		textShadowOffset: { width: 0, height: 2 },
		textShadowRadius: 5,
	},
});
