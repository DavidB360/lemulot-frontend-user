import {
	View,
	Text,
	TouchableOpacity,
	StyleSheet,
	ScrollView,
} from "react-native";

import { NavigationProp, ParamListBase } from "@react-navigation/native";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	addToFavoriteLessons,
	removeFromFavoriteLessons,
	UserState,
} from "../reducers/user";
import { TutoState } from "../reducers/tuto";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faHeartCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { BACKEND_URL } from "@env";

type TutoScreenProps = {
	navigation: NavigationProp<ParamListBase>;
};

export default function TutoScreen({ navigation }: TutoScreenProps) {
	const dispatch = useDispatch();

	// on charge le reducer tuto pour connaître l'id du tutoriel à afficher
	const tuto = useSelector((state: { tuto: TutoState }) => state.tuto.value);

	// on crée une useState pour stocker l'objet tutoriel récupéré dans la base de données à partir de son id
	const [tutorialToDisplay, setTutorialToDisplay] = useState({
		title: "",
		creationDate: "",
		author: "",
		content: "leçon en chargement...",
		_id: "",
	});

	useEffect(() => {
		// on récupère le tutoriel par son id dans la base de données
		fetch(BACKEND_URL + "tutorials/tutoId/" + tuto)
			.then((response) => response.json())
			.then((data) => {
				if (data.result === true) {
					// console.log(data.tutorial);
					setTutorialToDisplay(data.tutorial[0]);
				}
			});
	}, []);

	const dateCrea = new Date(tutorialToDisplay.creationDate);

	return (
		<View style={styles.container}>
			<View style={styles.btnTop}>
				<TouchableOpacity
					style={styles.btnRetour}
					onPress={() => navigation.navigate("Research")}
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

			<View style={styles.titleTuto}>
				<View style={styles.tutoText}>
					<Text style={styles.textResult}>
						Titre : {tutorialToDisplay.title}
					</Text>
					<Text style={styles.textResult}>
						Date de création : {dateCrea.getDate()}/
						{dateCrea.getMonth() + 1}/{dateCrea.getFullYear()}
					</Text>
					<Text style={styles.textResult}>
						Auteur: {tutorialToDisplay.author}
					</Text>
				</View>
				<TouchableOpacity
					style={styles.btnFavorite}
					onPress={() => {
						// dispatch(addToFavoriteLessons(tutorialToDisplay._id));
					}}
				>
					<View style={styles.icon}>
						<FontAwesome
							name="heart"
							size={40}
							style={styles.iconHeart}
						/>
						{/* <FontAwesomeIcon
							icon={faHeartCirclePlus}
							size={40}
							style={styles.iconHeart}
						/> */}
					</View>
				</TouchableOpacity>
			</View>
			<View style={styles.tuto}>
				<ScrollView>
					<Text>{tutorialToDisplay.content}</Text>
				</ScrollView>
			</View>
			<View style={styles.btnBottom}>
				<TouchableOpacity
					style={styles.btnHelrequest}
					onPress={() =>
						navigation.navigate("TabNavigator", {
							screen: "Demandes",
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

	titleTuto: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		width: "90%",
		height: "15%",
		borderColor: "#a9a9a9",
		backgroundColor: "#dcdcdc",
		borderTopWidth: 1,
		borderBottomWidth: 2,
		borderLeftWidth: 2,
		borderRightWidth: 2,
		borderRadius: 5,
	},

	tutoText: {
		marginTop: 5,
		marginLeft: 5,
		width: "70%",
		height: "100%",
	},

	textResult: {
		paddingBottom: 5,
		fontSize: 18,
		textShadowColor: "#fff",
		textShadowOffset: { width: 0, height: 2 },
		textShadowRadius: 5,
	},

	btnFavorite: {
		marginRight: 10,
		width: 80,
		height: 80,
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 40,
		borderColor: "#000",
		backgroundColor: "#fff",
		borderBottomWidth: 4,
		borderLeftWidth: 2,
		borderRightWidth: 2,
	},

	icon: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
	},

	iconHeart: {
		marginLeft: 5,
		marginRight: 5,
		color: "#dc143c",
		textShadowColor: "#000000",
		textShadowOffset: { width: 0, height: 3 },
		textShadowRadius: 3,
	},

	tuto: {
		marginTop: 20,
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		width: "90%",
		height: "50%",
		borderWidth: 1,
		borderColor: "#a9a9a9",
		borderRadius: 5,
	},

	textTuto: {
		fontSize: 20,
	},

	btnBottom: {
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		width: "100%",
	},

	btnHelrequest: {
		marginTop: 20,
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
