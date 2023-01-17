import {
	View,
	Text,
	TouchableOpacity,
	StyleSheet,
	ScrollView,
	Image,
	Dimensions,
} from "react-native";

import { NavigationProp, ParamListBase } from "@react-navigation/native";
import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	addToFavoriteLessons,
	removeFromFavoriteLessons,
	UserState,
} from "../reducers/user";
import { TutoState } from "../reducers/tuto";
import { PrevPageState } from "../reducers/prevPage";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faHeartCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { BACKEND_URL } from "@env";
import { Types } from 'mongoose';

type TutoScreenProps = {
	navigation: NavigationProp<ParamListBase>;
};

export default function TutoScreen({ navigation }: TutoScreenProps) {
	const dispatch = useDispatch();

	// on charge le reducer tuto pour connaître l'id du tutoriel à afficher
	const tuto = useSelector((state: { tuto: TutoState }) => state.tuto.value);

	// on charge le reducer prevPage pour indiquer la page précédente au bouton retour => obsolète remplacé par navigation.goBack()
	// const prevPage = useSelector((state: {prevPage: PrevPageState }) => state.prevPage.value);

	// on charge le reducer user pour savoir si l'utilisateur est connecté et connaître ses leçons favorites
	const user = useSelector((state: {user: UserState }) => state.user.value);

	// on crée un useState pour stocker l'objet tutoriel récupéré dans la base de données à partir de son id
	const [tutorialToDisplay, setTutorialToDisplay] = useState<any>({
		title: "",
		creationDate: "",
		author: "",
		content: [{type: 'text', content: 'chargement...'}],
		_id: "",
	});

	// l'utilisateur est-il connecté ?
	const isUserConnected = (user.token !== null);

	// le tutoriel est-il dans les favoris ?
	const isTutoLiked = user.favoriteLessons.some(e => e === tuto);

	// fonction pour ajouter le tutoriel aux favoris
	const handleClickAddToFavorites = (token: string|null, tutoId: Types.ObjectId|null) => {
		// console.log(BACKEND_URL + "users/addToFavorites/" + token + '/' + tutoId);
		fetch(BACKEND_URL + "users/addToFavorites/" + token + '/' + tutoId, 
		{
			method: "PUT"
		})
		.then((response) => response.json())
			.then((data) => {
				if (data.result === true) {
					dispatch(addToFavoriteLessons(tutoId));
				}
			});
	};

	// fonction pour retirer le tutoriel des favoris
	const handleClickRemoveFromFavorites = (token: string|null, tutoId: Types.ObjectId|null) => {
		fetch(BACKEND_URL + "users/removeFromFavorites/" + token + '/' + tutoId, { method: "DELETE"})
		.then((response) => response.json())
			.then((data) => {
				if (data.result === true) {
					dispatch(removeFromFavoriteLessons(tutoId));
				}
			});
	};

	useEffect(() => {
		// on récupère le tutoriel par son id dans la base de données
		fetch(BACKEND_URL + "tutorials/tutoId/" + tuto)
			.then((response) => response.json())
			.then((data) => {
				if (data.result === true) {
					// console.log(data.tutorial);
					setTutorialToDisplay(data.tutorial);
				}
			});
	}, []);

	const dateCrea = new Date(tutorialToDisplay.creationDate);

	// création d'un useRef pour dynamiquement stocker la taille des images lors du map du contenu sans entraîner de re-render de la page
	// chaque image occupera 90% de la largeur de l'écran, on définit dès la création un paramètre largeur qui sera commun à chaque image
	// puis les hauteurs des images successives seront stockées dans le tableau hauteur
	let picDimensions : any = useRef({ largeur: Dimensions.get('screen').width*0.9, hauteur: [] });

	// console.log(tutorialToDisplay.content);
	const tutorialContent = tutorialToDisplay.content.map((obj: any, i: number) => {
		// console.log(obj.content);
		if (obj.type === 'text') {
			return (
				<View key={i}><Text  style={styles.textContent}>{obj.content}</Text></View>
			);
		} else if (obj.type === 'image') {
			// console.log(obj.content);

			// On récupère les dimensions (largeur et hauteur) de l'image à afficher
			// On va utiliser les dimensions recueillies pour définir une hauteur qui s'adapte au ratio de l'image d'origine
			// On stocke la hauteur calculée dans le tableau hauteur
			Image.getSize(obj.content, (width, height) => {
				picDimensions.current.hauteur[i] = picDimensions.current.largeur*height/width;
				console.log(picDimensions.current.hauteur);				
			}, (errorMsg) => {
				console.log(errorMsg);
			});

			return (
				<View key={i}>
					<Image
						// on charge les dimensions de l'image à partir du useRef picDimensions
						style={[styles.img, {width: picDimensions.current.largeur, height: picDimensions.current.hauteur[i]}]} 
						source={{uri: obj.content}}
					/>
				</View>		
			);
		}
	});

	return (
		<View style={styles.container}>
			<View style={styles.btnTop}>
				<TouchableOpacity
					style={styles.btnRetour}
					// onPress={() => navigation.navigate(prevPage)}
					// Simplification de la gestion du bouton retour par utilisation de la méthode goBack() intégrée
					// à React Navgation pour revenir à la page précédente sans utilisation du reducer prevPage
					onPress={() => navigation.goBack()}
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
					<Text style={styles.tutoTitle}>
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
				{ isUserConnected &&
				<TouchableOpacity
					style={styles.btnFavorite}
					onPress={() => {
						isTutoLiked ? handleClickRemoveFromFavorites(user.token, tuto) : handleClickAddToFavorites(user.token, tuto);
					}}
				>
					<View style={styles.icon}>
						{isTutoLiked && <FontAwesome
							name="heart"
							size={40}
							style={styles.iconHeart}
						/>}
						{!isTutoLiked && <FontAwesomeIcon
							icon={faHeartCirclePlus}
							size={40}
							style={styles.iconHeartPlus}
						/>}
					</View>
				</TouchableOpacity>
				}
			</View>

			<View style={styles.tuto}>
				<ScrollView contentContainerStyle={styles.scrollView}>
					{tutorialContent}
				</ScrollView>
			</View>

			<View style={styles.btnBottom}>
				<TouchableOpacity
					style={styles.btnHelrequest}
					onPress={() => {
						// navigation conditionnelle : si l'utilisateur est connecté, on va sur la page de demande écrite
						// sinon on va sur la page de connexion
						if (isUserConnected) {
							navigation.navigate("Request");
						} else {
							navigation.navigate("Connection");
						}
					}}
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
	
	tutoTitle: {
		paddingBottom: 5,
		fontSize: 20,
		textShadowColor: "#fff",
		textShadowOffset: { width: 0, height: 2 },
		textShadowRadius: 5,
		fontWeight: "bold",
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

	iconHeartPlus: {
		marginLeft: 5,
		marginRight: 5,
		color: "gray",
		textShadowColor: "#000000",
		textShadowOffset: { width: 0, height: 3 },
		textShadowRadius: 3,
	},

	tuto: {
		marginTop: 20,
		padding: 10,
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

	textContent: {
		fontSize: 20,
		textAlign: "justify",
		marginBottom: 5,
	},

	img: {
		marginBottom: 5,
		resizeMode: 'contain',
		alignSelf: 'center',
	},

	scrollView: {
		paddingBottom: 10,
	},
});
