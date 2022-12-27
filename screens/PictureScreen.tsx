import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { useSelector, useDispatch } from "react-redux";
import * as ImagePicker from "expo-image-picker";
import { ProcessusState } from "../reducers/processus";
import { UserState } from "../reducers/user";
// import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
// import { faUser } from "@fortawesome/free-solid-svg-icons";
import { BACKEND_URL } from "@env";
import { LOCAL_BACKEND_URL } from "@env";
import { updateAvatar } from "../reducers/user";

export default function CameraScreen({ navigation }: any) {
	const user = useSelector((state: { user: UserState }) => state.user.value);

	const dispatch = useDispatch();

	// on charge le reducer processus pour gérer la navigation du bouton retour
	const processus = useSelector(
		(state: { processus: ProcessusState }) => state.processus.value
	);

	// useState image pour tester fonction image-picker
	const [image, setImage] = useState<string | undefined>(undefined);

	// demande permission d'accès à la galerie d'image pour la fonctionnalité image-picker
	const [hasGalleryPermission, setHasGalleryPermission] = useState(false);

	useEffect(() => {
		(async () => {
			const { status } =
				await ImagePicker.requestMediaLibraryPermissionsAsync();
			setHasGalleryPermission(status === "granted");
		})();
	}, []);

	const PickImage = async () => {
		let result = await ImagePicker.launchImageLibraryAsync({
			// mediaTypes: ImagePicker.MediaTypeOptions.All,
			mediaTypes: ImagePicker.MediaTypeOptions.Images,
			allowsEditing: true,
			aspect: [4, 3],
			quality: 0.3,
		});
		if (!result.canceled) {
			// console.log(result);
			// setImage(result.uri);
			setImage(result.assets[0].uri);

			// préparation de l'envoi de la photo sélectionnée au backend
			const formData = new FormData();
			
			formData.append('photoFromFront', {
				uri: result.assets[0].uri,
				name: 'photo.jpg',
				type: 'image/jpeg',
			} as unknown as Blob);

			// envoi de la photo au backend, on commence par uploader dans cloudinary
			// console.log(BACKEND_URL + 'uploadPic');
			fetch(LOCAL_BACKEND_URL + 'uploadPic', {
			// fetch(BACKEND_URL + 'uploadPic', {
				method: 'POST',
				body: formData,
			})
			.then((response) => response.json())
			.then((data) => {
				// on récupère de la route précédente l'url cloudinary
				// et on l'enregistre dans la base de données mongoDB du projet

				if (processus === "Paramètre") {
					// si la page Camera a été appelée à partir de la page Paramètre, alors la photo est une photo de profil
					// on met à jour l'url de la photo de profil dans la base de données user
					fetch(BACKEND_URL + 'users/updateAvatar/', {
						method: "PUT",
						headers: { "Content-Type": "application/json" },
						body: JSON.stringify({
							token: user.token,
							url: data.url,
						}) 
					})
					.then((response) => response.json())
					.then((doc) => {
						// on met à jour l'url de la photo de profil dans le reducer user du store
						dispatch(updateAvatar(doc.url));
						// on revient à la page Paramètres
						navigation.navigate(processus);
					})
				} else if (processus === "PictureRequest") {
					// si la page Camera a été appelée à partir du processus de demande d'aide, alors la photo est
					// ajoutée au flux de discussion de la demande d'aide en cours
				}
			});

		}
	};

	// if (!hasGalleryPermission) {
	// 	return <Text>Pas d'accès au stockage interne</Text>;
	// }

	return (
		<View style={styles.container}>

			<View style={styles.btnTop}>
				<TouchableOpacity
					style={styles.btnRetour}
					onPress={() => navigation.navigate(processus)}
				>
					<FontAwesome
						name="long-arrow-left"
						size={50}
						style={styles.iconArrow}
					/>
					<Text style={styles.textBtnRetour}>Retour</Text>
				</TouchableOpacity>

				{/* Test affichage de l'image issue de image-picker */}
				{image &&
				<TouchableOpacity style={styles.btnUsers} >
					<Image source={{ uri: image }} style={styles.avatar} />
				</TouchableOpacity>}

				<TouchableOpacity
					style={styles.btnAide}
					// onPress={() => {}}
				>
					<Text style={styles.textBtnAide}>?</Text>
				</TouchableOpacity>
			</View>

			<View style={styles.profile}>
				{/* Affichage du bouton Utiliser mon image si l'autorisation d'accès à la galerie a été accordée */}
				{ hasGalleryPermission && 
				<TouchableOpacity style={styles.btnProfile} onPress={() => PickImage()}>
					<Text style={styles.textBtnProfile}>
						Utiliser mon image
					</Text>
					<View style={styles.icon}>
						<FontAwesome
							name="picture-o"
							style={styles.iconColor}
							size={130}
						/>
					</View>
				</TouchableOpacity> }

				<TouchableOpacity
					style={styles.btnProfile}
					onPress={() => {
						navigation.navigate("Camera");
					}}
				>
					<Text style={styles.textBtnProfile}>Prendre une photo</Text>
					<View style={styles.icon}>
						<FontAwesome
							name="camera-retro"
							style={styles.iconColor}
							size={130}
						/>
					</View>
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
		marginLeft: 20,
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
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

	btnUsers: {
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
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
		flexDirection: "column",
		justifyContent: "space-around",
		width: "90%",
		height: "40%",
		color: "#5db194",
	},

	avatar: {
		width: "100%",
		height: "100%",
		borderRadius: 40,
	},

	profile: {
		marginTop: 50,
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		height: "60%",
		width: "80%",
	},

	btnProfile: {
		marginBottom: 50,
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		width: "65%",
		height: "45%",
		borderColor: "#a9a9a9",
		borderBottomWidth: 6,
		borderLeftWidth: 4,
		borderRightWidth: 4,
		borderRadius: 5,
		backgroundColor: "#778ed4",
		shadowColor: "#000000",
		shadowOffset: {
			width: -10,
			height: 12,
		},
		shadowOpacity: 0.58,
		shadowRadius: 16.0,

		elevation: 25,
	},

	textBtnProfile: {
		fontSize: 22,
		color: "#fff",
		textShadowColor: "#000000",
		textShadowOffset: { width: 0, height: 2 },
		textShadowRadius: 5,
	},

	icon: {
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#fff",
		width: "100%",
		height: "89%",
		borderTopWidth: 1,
		borderColor: "#a9a9a9",
		color: "#778ed4",
	},

	iconColor: {
		color: "#778ed4",
	},
});
