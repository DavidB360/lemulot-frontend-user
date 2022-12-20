import React from "react";
import { StyleSheet, View, Button, TouchableOpacity, Text } from "react-native";
import { Camera, CameraType, FlashMode } from "expo-camera";
import { useEffect, useState, useRef } from "react";
import { useIsFocused } from "@react-navigation/native";
// import { addPhoto } from "../reducers/user";
import { useDispatch } from "react-redux";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCameraRotate } from "@fortawesome/free-solid-svg-icons";

export default function SnapScreen({ navigation }: any) {
	// const dispatch = useDispatch();

	const [permission, setPermission] = useState(false);
	// const [flashMode, setFlashMode] = useState(FlashMode.off);
	const [type, setType] = useState(CameraType.back);
	const isFocused = useIsFocused();

	let cameraRef: any = useRef(null);

	useEffect(() => {
		(async () => {
			const { status } = await Camera.requestCameraPermissionsAsync();
			setPermission(status === "granted");
		})();
	}, []);

	const takePicture = async () => {
		const photo = await cameraRef.takePictureAsync({ quality: 0.3 });
		// dispatch(addPhoto(photo.uri));
		// console.log(photo);
	};

	if (!permission || !isFocused) {
		return <View></View>;
	}

	return (
		<Camera
			style={styles.container}
			// flashMode={flashMode}
			type={type}
			ref={(ref) => (cameraRef = ref)}
		>
			<View style={styles.btnTop}>
				<TouchableOpacity
					style={styles.btnRetour}
					onPress={() => navigation.navigate("Profile")}
				>
					<FontAwesome
						name="arrow-circle-left"
						size={55}
						color="#ffffff"
					/>
				</TouchableOpacity>
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
					<Text style={styles.textBtnFlip}>Changer de caméra :</Text>
					<FontAwesomeIcon
						icon={faCameraRotate}
						size={55}
						color="#ffffff"
					/>
				</TouchableOpacity>
				{/* <TouchableOpacity
					style={styles.btnFlash}
					onPress={() =>
						setFlashMode(
							flashMode === FlashMode.off
								? FlashMode.torch
								: FlashMode.off
						)
					}
				>
					<FontAwesome
						name="flash"
						size={50}
						color={
							flashMode === FlashMode.off ? "#ffffff" : "#e8be4b"
						}
					/>
				</TouchableOpacity> */}
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
	},

	btnFlip: {
		marginRight: 110,
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
	},

	textBtnFlip: {
		color: "#fff",
		paddingRight: 10,
		fontSize: 18,
	},

	btnSnap: {
		marginBottom: 20,
	},
});
