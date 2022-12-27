import React from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import { Camera, CameraType, FlashMode } from "expo-camera";
import { useEffect, useState, useRef } from "react";
import { useIsFocused } from "@react-navigation/native";
import { updateAvatar } from "../reducers/user";
import { useSelector, useDispatch } from "react-redux";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCameraRotate } from "@fortawesome/free-solid-svg-icons";
import { ProcessusState } from "../reducers/processus";
import { UserState } from "../reducers/user";
import { BACKEND_URL } from "@env";

export default function CameraScreen({ navigation }: any) {
	const dispatch = useDispatch();

	const isFocused = useIsFocused();

	const [permission, setPermission] = useState(false);
	const [flashMode, setFlashMode] = useState(FlashMode.off);

	const [type, setType] = useState(CameraType.back);

	// on charge le reducer processus pour gérer la caméra à activer par défaut (back ou front)
	const processus = useSelector((state: {processus: ProcessusState }) => state.processus.value);
	
	// useEffect au chargement de la page
	useEffect(() => {
		if (processus === "Paramètre") {
			setType(CameraType.front);
		}
	}, []);

	// on charge le reducer user pour avoir accès à son token pour permettre la mise à jour de son avatar
	const user = useSelector((state: {user: UserState }) => state.user.value);
	
	let cameraRef: any = useRef(null);

	useEffect(() => {
		(async () => {
			const { status } = await Camera.requestCameraPermissionsAsync();
			setPermission(status === "granted");
		})();
	}, []);

	const takePicture = async () => {
		// on prend la photo
		const photo = await cameraRef.takePictureAsync({ quality: 0.3 });

		// puis préparation de l'envoi de la photo prise au backend
		const formData = new FormData();
		
		formData.append('photoFromFront', {
			uri: photo.uri,
			name: 'photo.jpg',
			type: 'image/jpeg',
		} as unknown as Blob);

		// envoi de la photo au backend, on commence par uploader dans cloudinary
		console.log(BACKEND_URL + 'uploadPic');
		// fetch('http://192.168.1.20:3000/uploadPic', {
		fetch(BACKEND_URL + 'uploadPic', {
			method: 'POST',
			body: formData,
		})
		.then((response) => response.json())
		.then((data) => {
			// on récupère de la route précédente l'url cloudinary
			// et on l'enregistre dans la base de données mongoDB du projet

			// si la page Camera a été appelée à partir de la page Paramètre, alors la photo est une photo de profil
			if (processus === "Paramètre") {
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
			}	
		});
	};

	if (!permission || !isFocused) {
		return <View></View>;
	}

	return (
		<Camera
			style={styles.container}
			flashMode={flashMode}
			type={type}
			ref={(ref: any) => (cameraRef = ref)}
		>
			<View style={styles.btnTop}>
				<TouchableOpacity
					style={styles.btnRetour}
					onPress={() => navigation.navigate("Picture")}
				>
					<FontAwesome
						name="arrow-circle-left"
						size={55}
						color="#ffffff"
					/>
				</TouchableOpacity>
				<View style={styles.btnRight}>
					<TouchableOpacity
						style={styles.btnFlip}
						activeOpacity={0.8}
						onPress={() =>
							setType(
								type === CameraType.back
									? CameraType.front
									: CameraType.back
							)
						}
					>
						<Text style={styles.textBtnRight}>
							Changer de caméra :
						</Text>
						<FontAwesomeIcon
							icon={faCameraRotate}
							size={55}
							color="#ffffff"
						/>
					</TouchableOpacity>
					<TouchableOpacity
						style={styles.btnFlash}
						onPress={() =>
							setFlashMode(
								flashMode === FlashMode.off
									? FlashMode.torch
									: FlashMode.off
							)
						}
					>
						<Text style={styles.textBtnRight}>Flash :</Text>
						<FontAwesome
							name="flash"
							size={50}
							color={
								flashMode === FlashMode.off
									? "#ffffff"
									: "#e8be4b"
							}
						/>
					</TouchableOpacity>
				</View>
			</View>
			<View style={styles.btnSnap}>
				<TouchableOpacity
					activeOpacity={0.8}
					onPress={() => cameraRef && takePicture()}
				>
					<FontAwesome
						name="circle-thin"
						size={150}
						color="#ffffff"
					/>
				</TouchableOpacity>
			</View>
		</Camera>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "space-between",
		width: "145%",
		height: "100%",
		marginLeft: "-22%",
	},

	btnTop: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		width: "100%",
		marginTop: 30,
	},

	btnRetour: {
		marginLeft: 110,
		marginBottom: 60,
	},

	btnRight: {
		flexDirection: "column",
	},

	btnFlip: {
		marginRight: 110,
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
	},

	btnFlash: {
		marginTop: 10,
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
	},

	textBtnRight: {
		color: "#fff",
		paddingRight: 10,
		fontSize: 18,
	},

	btnSnap: {
		marginBottom: 20,
	},
});
