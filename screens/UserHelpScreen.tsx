import {
	View,
	Text,
	TouchableOpacity,
	StyleSheet,
	ScrollView,
	TextInput,
	Image,
} from "react-native";
import { NavigationProp, ParamListBase } from "@react-navigation/native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
	faBell,
	faUser,
	faCircleCheck,
} from "@fortawesome/free-solid-svg-icons";
import { faHourglassHalf } from "@fortawesome/free-regular-svg-icons";
import { UserState } from "../reducers/user";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { BACKEND_URL } from "@env";
import { useIsFocused } from "@react-navigation/native";
import { updateHelpReq } from "../reducers/helpReq";

type UserHelpScreenProps = {
	navigation: NavigationProp<ParamListBase>;
};

export default function UserHelpScreen({ navigation }: UserHelpScreenProps) {
	const dispatch = useDispatch();

	// intitiation d'un useState pour l'input de recherche
	const [helpRequestSearch, setHelpRequestSearch] = useState("");

	// intitialisation d'un useState qui va stocker les demandes d'aide à afficher
	const [selectedHelpRequests, setSelectedHelpRequests] = useState<any>([]);

	// initialisation d'un useState pour gérer la recherche avec une regex
	const [regexSearch, setRegexSearch] = useState("");

	// on charge le reducer user pour afficher son prénom et connaître ses demandes d'aide
	const user = useSelector((state: { user: UserState }) => state.user.value);

	// nous utilisons useIsFocused pour être sûrs que le useEffect va se recharger même suite à l'appui 
	// sur un bouton retour d'une page suivante
	const isFocused = useIsFocused();

	useEffect(() => {
		// On va chercher la liste des demandes d'aide de l'utilisateur
		fetch(BACKEND_URL + "users/myHelpRequests/" + user.token)
			.then((response) => response.json())
			.then((data) => {
				if (data.result === true) {
					setSelectedHelpRequests(data.myHelpRequests);
				}
			});
	}, [isFocused]);

	// automatisation de l'affichage des demandes d'aide de l'utilisateur : on crée le contenu à partir  
	// du tableau de demandes d'aide avec un "map"
	const displayedHelpRequests = selectedHelpRequests.map(
		(helpRequest: any, i: number) => {
			// préparation d'une regex pour permettre la recherche par mot clé dans le titre des demandes d'aide
			const pattern = new RegExp(regexSearch, "i");
			// on charge la date dans un objet Date pour pouvoir formater l'affichage de la date à notre façon
			const date = new Date(helpRequest.creationDate);

			if (pattern.test(helpRequest.title)) {
				return (
					<TouchableOpacity
						key={i}
						onPress={() => {
							dispatch(updateHelpReq(helpRequest._id));
							navigation.navigate("Chat");
						}}
					>	
						<View style={styles.requestContainer}>
							<View style={styles.request}>
								<Text style={styles.textTitle}>
									Titre : {helpRequest.title}
								</Text>
								<Text style={styles.textDate}>
									Date de création : {date.getDate() + "/" +	(date.getMonth() + 1) + "/" + date.getFullYear()}
								</Text>
								<Text style={styles.textStatus}>
									Statut : { helpRequest.isSolved ? 'résolue' : 'en cours'}
								</Text>
							</View>

							{/* Pour afficher une cloche lorsque la fonctionnalité notification sera implémentée */}
							{/* <View style={styles.iconBell}>
								<FontAwesomeIcon
									icon={faBell}
									color={"#ff4500"}
									size={40}
								/>
								<Text style={styles.textBell}>Réponse</Text>
							</View> */}

							{ !helpRequest.isSolved &&
								<View style={styles.iconBell}>
									<FontAwesomeIcon
										style={styles.iconHourglass}
										icon={faHourglassHalf}
										color={"#808080"}
										size={40}
									/>
									<Text style={styles.textBell}>En cours</Text>
								</View>
							}

							{ helpRequest.isSolved &&
								<View style={styles.iconBell}>
									<FontAwesomeIcon
										icon={faCircleCheck}
										color={"#5db194"}
										size={40}
									/>
									<Text style={styles.textBell}>Résolue</Text>
								</View>
							}
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
					{/* Si l'utilisateur n'est pas connecté ou n'a pas de photo de profil, 
					on affiche une icone utilisateur générique : */}
					{user.avatar === null && (
						<FontAwesomeIcon
							icon={faUser}
							size={50}
							style={styles.iconUsers}
						/>
					)}

					{/* Si l'utilisateur est connecté et a une photo de profil, 
					on l'affiche */}
					{user.avatar && (
						<Image
							style={styles.avatar}
							source={{ uri: user.avatar }}
						/>
					)}
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
				<Text style={styles.pageTitle}>Mes demandes d'aide</Text>
			</View>

			<View style={styles.researchContainer}>
				<TextInput
					style={styles.input}
					// on envoie le texte tapé dans le useState helpRequestSearch à chaque changement
					onChangeText={(value) => setHelpRequestSearch(value)}
					value={helpRequestSearch}
					placeholder="Recherche..."
					placeholderTextColor="#808080"
				/>
				<TouchableOpacity
					style={styles.btnResearch}
					// on affecte helpRequestSearch au useState regexSearch au clic sur le bouton loupe
					onPress={() => setRegexSearch(helpRequestSearch)}
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

					{displayedHelpRequests}

					{/* <TouchableOpacity
						onPress={() => navigation.navigate("Chat")}
					>
						<View style={styles.requestContainer}>
							<View style={styles.request}>
								<Text style={styles.textRequest}>
									Title: "Envoyer une photo dans WhatsApp"
								</Text>
								<Text style={styles.textRequest}>
									Status: "Vous avez une réponse"
								</Text>
								<Text style={styles.textRequest}>
									CreationDate: "17-12-2022"
								</Text>
							</View>
							<View style={styles.iconBell}>
								<FontAwesomeIcon
									icon={faBell}
									color={"#ff4500"}
									size={40}
								/>
								<Text style={styles.textBell}>Réponse</Text>
							</View>
						</View>
					</TouchableOpacity>
					<TouchableOpacity
						onPress={() => navigation.navigate("Chat")}
					>
						<View style={styles.requestContainer}>
							<View style={styles.request}>
								<Text style={styles.textRequest}>
									Title: "Scanner un document"
								</Text>
								<Text style={styles.textRequest}>
									Status: "En cours, attente de réponse"
								</Text>
								<Text style={styles.textRequest}>
									CreationDate: "13-12-2022"
								</Text>
							</View>
							<View style={styles.iconBell}>
								<FontAwesomeIcon
									style={styles.iconHourglass}
									icon={faHourglassHalf}
									color={"#808080"}
									size={40}
								/>
								<Text style={styles.textBell}>En Cours</Text>
							</View>
						</View>
					</TouchableOpacity>
					<TouchableOpacity
						onPress={() => navigation.navigate("Chat")}
					>
						<View style={styles.requestContainer}>
							<View style={styles.request}>
								<Text style={styles.textRequest}>
									Title: "J'ai un virus"
								</Text>
								<Text style={styles.textRequest}>
									Status: "En cours, attente de réponse"
								</Text>
								<Text style={styles.textRequest}>
									CreationDate: "05-12-2022"
								</Text>
							</View>
							<View style={styles.iconBell}>
								<FontAwesomeIcon
									style={styles.iconHourglass}
									icon={faHourglassHalf}
									color={"#808080"}
									size={40}
								/>
								<Text style={styles.textBell}>En Cours</Text>
							</View>
						</View>
					</TouchableOpacity>
					<TouchableOpacity
						onPress={() => navigation.navigate("Chat")}
					>
						<View style={styles.requestContainer}>
							<View style={styles.request}>
								<Text style={styles.textRequest}>
									Title: "Mettre un fond écran"
								</Text>
								<Text style={styles.textRequest}>
									Status: "Traité"
								</Text>
								<Text style={styles.textRequest}>
									CreationDate: "05-10-2022"
								</Text>
							</View>
							<View style={styles.iconBell}>
								<FontAwesomeIcon
									icon={faCircleCheck}
									color={"#5db194"}
									size={40}
								/>
								<Text style={styles.textBell}>Résolue</Text>
							</View>
						</View>
					</TouchableOpacity>
					<TouchableOpacity
						onPress={() => navigation.navigate("Chat")}
					>
						<View style={styles.requestContainer}>
							<View style={styles.request}>
								<Text style={styles.textRequest}>
									Title: "Changer mot de passe wifi"
								</Text>
								<Text style={styles.textRequest}>
									Status: "Traité"
								</Text>
								<Text style={styles.textRequest}>
									CreationDate: "03-04-2022"
								</Text>
							</View>
							<View style={styles.iconBell}>
								<FontAwesomeIcon
									icon={faCircleCheck}
									color={"#5db194"}
									size={40}
								/>
								<Text style={styles.textBell}>Résolue</Text>
							</View>
						</View>
					</TouchableOpacity> */}

				</ScrollView>
			</View>

			<View style={styles.helprequest}>
				<TouchableOpacity
					style={styles.btnHelrequest}
					onPress={() => navigation.navigate("Request")}
				>
					<Text style={styles.textBtnHelrequest}>
						Nouvelle demande d'aide
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

	avatar: {
		width: "100%",
		height: "100%",
		borderRadius: 40,
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

	pageTitle: {
		fontSize: 22,
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

	request: {
		marginTop: 5,
		marginLeft: 5,
		width: "70%",
		height: "100%",
		flexDirection: "column",
		justifyContent: "space-around",
	},

	textRequest: {
		fontWeight: "bold",
		fontSize: 15,
		color: "#ffffff",
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

	textStatus: {
		fontSize: 16,
		color: "#ffffff",
		marginBottom: 20,
	},

	iconBell: {
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

	textBell: {
		fontSize: 18,
		textShadowColor: "#808080",
		textShadowOffset: { width: 0, height: 2 },
		textShadowRadius: 5,
	},

	iconHourglass: {
		opacity: 0.8,
	},

	helprequest: {
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		width: "100%",
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
