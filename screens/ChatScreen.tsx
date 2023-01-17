import {
	View,
	Text,
	TouchableOpacity,
	StyleSheet,
	TextInput,
	ScrollView,
	KeyboardAvoidingView,
	Platform,
	Image,
	Dimensions,
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { updateProcessus } from "../reducers/processus";
import { useSelector, useDispatch } from "react-redux";
import { UserState } from "../reducers/user";
import { HelpReqState } from "../reducers/helpReq";
import { BACKEND_URL } from "@env";
import React, { useEffect, useState, useRef } from "react";
import { useIsFocused } from "@react-navigation/native";
import { Types } from 'mongoose';
// import { useSafeAreaFrame } from "react-native-safe-area-context";

export default function ChatScreen({ navigation }: any) {
	const dispatch = useDispatch();

	// on charge le reducer user pour utiliser le token de l'utilisateur pour récupérer son Id et pour
	// afficher l'avatar de l'utilisateur
	const user = useSelector((state: { user: UserState }) => state.user.value);

	// on charge le reducer helpReq pour renseigner l'Id de la demande d'aide en cours
	const helpReq = useSelector((state: { helpReq: HelpReqState }) => state.helpReq.value);

	// intitialisation d'un useState qui va stocker l'Id de l'utilisateur'
	const [userId, setUserId] = useState<Types.ObjectId|null>(null);

	// intitialisation d'un useState qui va servir à relancer le useEffect de mise à jour des messages du chat
	const [reRenderCount, setReRenderCount] = useState<number>(0);

	// intitialisation d'un useState qui va stocker le titre de la demande d'aide
	const [helpReqTitle, setHelpReqTitle] = useState<string>('');

	// intitialisation d'un useState qui va stocker les messages de la demande d'aide
	const [messages, setMessages] = useState<any>([]);

	// nous utilisons useIsFocused pour être sûrs que le useEffect suivant va se recharger à chaque retour 
	// sur la page même si l'utilisateur s'est déconnecté
	const isFocused = useIsFocused();

	useEffect(() => {
		// On va chercher l'Id de l'utilisateur pour le stocker dans l'état userId
		fetch(BACKEND_URL + "users/getUserId/" + user.token)
			.then((response) => response.json())
				.then((data) => {
					if (data.result === true) {
						setUserId(data.userId);
						// On va chercher la liste des messages de la demande d'aide courante
						fetch(BACKEND_URL + "helprequests/getById/" + helpReq)
						.then((response) => response.json())
						.then((data) => {
							if (data.result === true) {
								setMessages(data.helpRequest.messages);
								setHelpReqTitle(data.helpRequest.title);
							}
						});
					} else {
						console.log(data.error);
					}
				});				
	}, [isFocused, reRenderCount]);

	// Rafraîchissement du useEffect précédent avec un timer qui va mettre à jour
	// périodiquement l'état reRenderCount
	useEffect(() => {
		// on lance un timer, reRenderCount est mis à jour toutes les 5 secondes
		const interval = setInterval(() => {
			setReRenderCount(reRenderCount + 1);
		}, 5000);
		// on stoppe le timer lorsque l'on quitte la page
		return () => clearInterval(interval);
	}, [isFocused, reRenderCount]);

	// création d'un useRef pour dynamiquement stocker la taille des images lors du map du contenu sans entraîner de re-render de la page
	// chaque image occupera 90% de la largeur de l'écran, on définit dès la création un paramètre largeur qui sera commun à chaque image
	// puis les hauteurs des images successives seront stockées dans le tableau hauteur
	let picDimensions : any = useRef({ largeur: Dimensions.get('screen').width*0.9, hauteur: [] });

	const displayedMessages = messages.map( (msg: any, i: number) => {

		const messageDate = new Date(msg.messageTime);

		if (msg.type === 'image') {		
			// On récupère les dimensions (largeur et hauteur) de l'image à afficher
			// On va utiliser les dimensions recueillies pour définir une hauteur qui s'adapte au ratio de l'image d'origine
			// On stocke la hauteur calculée dans le tableau hauteur
			Image.getSize(msg.content, (width, height) => {
				picDimensions.current.hauteur[i] = picDimensions.current.largeur*height/width;
				console.log(picDimensions.current.hauteur);				
			}, (errorMsg) => {
				console.log(errorMsg);
			});
		}

		if (userId === msg.authorId) {
			return (
				<View key={i}>
					<Text style={styles.nameUser}>
						{user.firstName +', le '+ 
						messageDate.getDate() +'/'+ (messageDate.getMonth() + 1) +'/'+ messageDate.getFullYear() +' à '+
						messageDate.getHours() +':'+ messageDate.getMinutes()}
					</Text>

					{ msg.type === 'image' && 
						<Image 
							source={{uri: msg.content}} 
							// on charge les dimensions de l'image à partir du useRef picDimensions
							style={[styles.img, {width: picDimensions.current.largeur, height: picDimensions.current.hauteur[i]}]}
						/>
					}

					{ msg.type === 'text' &&
					<View style={styles.chatUser}>
						<View style={styles.iconContainer}>
							<View style={styles.iconChat}>
								{user.avatar === null && (
									<FontAwesomeIcon
										icon={faUser}
										size={28}
										style={styles.icon}
										color="#5db194"
									/>
								)}
								{user.avatar && (
									<Image
										style={styles.icon}
										source={{ uri: user.avatar }}
									/>
								)}
							</View>
						</View>						
						<Text style={styles.textChat}>{msg.content}</Text>
					</View>
					}
				</View>
			);		
		} else {
			return (
				<View key={i}>
					<Text style={styles.nameHelper}>
						Mulotin assistant{', le '+ 
						messageDate.getDate() +'/'+ (messageDate.getMonth() + 1) +'/'+ messageDate.getFullYear() +' à '+
						messageDate.getHours() +':'+ messageDate.getMinutes()}
					</Text>

					{ msg.type === 'image' && 
					<Image 
						source={{uri: msg.content}}
						// on charge les dimensions de l'image à partir du useRef picDimensions
						style={[styles.img, {width: picDimensions.current.largeur, height: picDimensions.current.hauteur[i]}]} 
					/>
					}
					
					{ msg.type === 'text' &&
					<View style={styles.chatHelper}>				
						<Text style={styles.textChat}>{msg.content}</Text>
						<View style={styles.iconContainer}>
							<View style={styles.iconChat}>
								<Image
									style={styles.icon}
									source={require("../assets/mulot_assistant.jpg")}
								/>
							</View>
						</View>
					</View>
					}
				</View>
			);
		}}
	);

	
	// intitiation d'un useState pour l'input d'ajout de message écrit
	const [writtenRequest, setWrittenRequest] = useState("");

	const addMessage = () => {
		if (writtenRequest !== '') {			
			// on ajoute à la demande d'aide en cours un message de type texte 
			// avec comme contenu le texte de l'input writtenRequest et comme auteur
			// l'utilisateur en cours
			fetch(BACKEND_URL + "helprequests/addMessage/", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					helpRequestId: helpReq,
					authorType: 'users',
					authorId: userId,
					type: 'text',
					content: writtenRequest
				}),
			})
			.then((response) => response.json())
				.then((doc) => {
					if (doc.result === true) {
						// on set l'état reRenderCount pour re-déclencher le useEffect d'affichage des messages
						setReRenderCount(reRenderCount + 1);
						setWrittenRequest('');
					}
				});
		}
	};

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
					// onPress={() => {} }
				>
					<Text style={styles.textBtnAide}>?</Text>
				</TouchableOpacity>
			</View>

			<View style={styles.title}>
				<Text style={styles.titleChat}>{helpReqTitle}</Text>
			</View>

			<View style={styles.chatContainer}>
				<ScrollView contentContainerStyle={styles.scrollView}>
					
					{ displayedMessages }

					{/* <Text style={styles.nameUser}>Hyrule Zelda</Text>
					<View style={styles.chatUser}>
						<View style={styles.iconContainer}>
							<View style={styles.iconChat}>
								{user.avatar === null && (
									<FontAwesomeIcon
										icon={faUser}
										size={28}
										style={styles.icon}
										color="#5db194"
									/>
								)}
								{user.avatar && (
									<Image
										style={styles.icon}
										source={{ uri: user.avatar }}
									/>
								)}
							</View>
						</View>
						<Text style={styles.textChat}>
							Bonjour, je n'arrive pas à imprimer un document.
						</Text>
					</View>
					<Text style={styles.nameHelper}>Gerudo Ganondorf</Text>
					<View style={styles.chatHelper}>
						<Text style={styles.textChat}>
							Pouvez-vous m'en dire plus ?
						</Text>
						<View style={styles.iconContainer}>
							<View style={styles.iconChat}>
								<Image
									style={styles.icon}
									source={require("../assets/mulot_assistant.jpg")}
								/>
							</View>
						</View>
					</View>
					<Text style={styles.nameUser}>Hyrule Zelda</Text>
					<View style={styles.chatUser}>
						<View style={styles.iconContainer}>
							<View style={styles.iconChat}>
								{user.avatar === null && (
									<FontAwesomeIcon
										icon={faUser}
										size={28}
										style={styles.icon}
										color="#5db194"
									/>
								)}
								{user.avatar && (
									<Image
										style={styles.icon}
										source={{ uri: user.avatar }}
									/>
								)}
							</View>
						</View>
						<Text style={styles.textChat}>
							Je ne sais pas comment faire. Aidez-moi !
						</Text>
					</View>
					<Text style={styles.nameHelper}>Gerudo Ganondorf</Text>
					<View style={styles.chatHelper}>
						<Text style={styles.textChat}>
							Avez-vous regardé le tuto dédié à l'impression de
							document ?
						</Text>
						<View style={styles.iconContainer}>
							<View style={styles.iconChat}>
								<Image
									style={styles.icon}
									source={require("../assets/mulot_assistant.jpg")}
								/>
							</View>
						</View>
					</View>
					<Text style={styles.nameUser}>Hyrule Zelda</Text>
					<View style={styles.chatUser}>
						<View style={styles.iconContainer}>
							<View style={styles.iconChat}>
								{user.avatar === null && (
									<FontAwesomeIcon
										icon={faUser}
										size={28}
										style={styles.icon}
										color="#5db194"
									/>
								)}
								{user.avatar && (
									<Image
										style={styles.icon}
										source={{ uri: user.avatar }}
									/>
								)}
							</View>
						</View>
						<Text style={styles.textChat}>
							Oui mais ça ne marche pas !
						</Text>
					</View>
					<Text style={styles.nameHelper}>Gerudo Ganondorf</Text>
					<View style={styles.chatHelper}>
						<Text style={styles.textChat}>
							Avez-vous mis de l'encre dans votre imprimante ?
						</Text>
						<View style={styles.iconContainer}>
							<View style={styles.iconChat}>
								<Image
									style={styles.icon}
									source={require("../assets/mulot_assistant.jpg")}
								/>
							</View>
						</View>
					</View>
					<Text style={styles.nameUser}>Hyrule Zelda</Text>
					<View style={styles.chatUser}>
						<View style={styles.iconContainer}>
							<View style={styles.iconChat}>
								{user.avatar === null && (
									<FontAwesomeIcon
										icon={faUser}
										size={28}
										style={styles.icon}
										color="#5db194"
									/>
								)}
								{user.avatar && (
									<Image
										style={styles.icon}
										source={{ uri: user.avatar }}
									/>
								)}
							</View>
						</View>
						<Text style={styles.textChat}>
							Ah non mince, je n'y ai pas pensé. Merci de votre aide.
							Bonne journée.
						</Text>
					</View>
					<Text style={styles.nameHelper}>Gerudo Ganondorf</Text>
					<View style={styles.chatHelper}>
						<Text style={styles.textChat}>
							Avec plaisir. Bonne journée à vous :)
						</Text>
						<View style={styles.iconContainer}>
							<View style={styles.iconChat}>
								<Image
									style={styles.icon}
									source={require("../assets/mulot_assistant.jpg")}
								/>
							</View>
						</View>
					</View> */}

				</ScrollView>
			</View>

			<View style={styles.messageContainer}>
				<TextInput
					style={styles.inputMessage}
					// on envoie le texte tapé dans le useState writtenRequest à chaque changement
					onChangeText={(value) => setWrittenRequest(value)}
					value={writtenRequest}
					placeholder="Message"
					placeholderTextColor="#808080"
					multiline={true}
				/>
				<TouchableOpacity
					style={styles.btnSend}
					// on envoie le message à l'appui sur le bouton Envoyer
					onPress={() => addMessage()}
				>
					<Text style={styles.textSend}>Envoyer</Text>
				</TouchableOpacity>
			</View>

			<View style={styles.bottom}>
				<TouchableOpacity
					style={styles.btnBottom}
					onPress={() => {
						dispatch(updateProcessus("Chat"));
						navigation.navigate("Picture");
					}}
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
					// onPress={() => {navigation.navigate("Orale")}}
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
		flexDirection: "column",
		justifyContent: "flex-start",
		borderWidth: 1,
		borderRadius: 5,
		borderColor: "#808080",
		width: "90%",
		height: "43%",
	},

	nameUser: {
		alignSelf: "flex-end",
		marginTop: 10,
		marginRight: 10,
		width: "85%",
		fontSize: 15,
	},

	nameHelper: {
		textAlign: "right",
		alignSelf: "flex-start",
		marginTop: 10,
		marginLeft: 10,
		width: "85%",
		fontSize: 15,
	},

	chatUser: {
		alignSelf: "flex-end",
		marginBottom: 10,
		marginRight: 10,
		borderWidth: 1,
		borderRadius: 10,
		backgroundColor: "#5db194",
		flexDirection: "row",
		justifyContent: "flex-end",
		alignItems: "flex-start",
		paddingTop: 5,
		paddingBottom: 5,
		width: "85%",
	},

	textChat: {
		alignSelf: "center",
		textAlign: "left",
		marginLeft: 10,
		fontSize: 18,
		color: "#ffffff",
		textShadowColor: "#000000",
		textShadowOffset: { width: 0, height: 2 },
		textShadowRadius: 5,
		width: "77%",
	},

	iconContainer: {
		justifyContent: "center",
		alignItems: "center",
	},

	iconChat: {
		justifyContent: "center",
		alignItems: "center",
		borderWidth: 1,
		height: 40,
		width: 40,
		borderRadius: 20,
		backgroundColor: "#fff",
		marginLeft: 10,
		marginRight: 10,
	},

	icon: {
		height: "100%",
		width: "100%",
		borderRadius: 20,
	},

	chatHelper: {
		alignSelf: "flex-start",
		marginBottom: 10,
		marginLeft: 10,
		borderWidth: 1,
		borderRadius: 10,
		backgroundColor: "#778ed4",
		flexDirection: "row",
		justifyContent: "flex-start",
		alignItems: "flex-start",
		paddingTop: 5,
		paddingBottom: 5,
		width: "85%",
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

	img: {
		marginBottom: 5,
		resizeMode: 'contain',
		alignSelf: 'center',
	},

	scrollView: {
		paddingBottom: 10,
	},
});
