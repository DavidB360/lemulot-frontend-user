import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { useDispatch } from "react-redux";
import * as ImagePicker from "expo-image-picker";

export default function CameraScreen({ navigation }: any) {
	const dispatch = useDispatch();

	const [hasGalleryPermission, setHasGalleryPermission] = useState(false);
	const [image, setImage] = useState<string | undefined>(undefined);

	useEffect(() => {
		(async () => {
			const { status } =
				await ImagePicker.requestMediaLibraryPermissionsAsync();
			setHasGalleryPermission(status === "granted");
		})();
	}, []);

	const PickImage = async () => {
		let result = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.All,
			allowsEditing: true,
			aspect: [4, 3],
			quality: 1,
		});
		if (!result.canceled) {
			setImage(result.uri);
		}
	};

	if (!hasGalleryPermission) {
		return <Text>Pas d'accès au stockage interne</Text>;
	}

	return (
		<View style={styles.container}>
			<View style={styles.btnTop}>
				<TouchableOpacity
					style={styles.btnRetour}
					onPress={() =>
						navigation.navigate("TabNavigator", {
							screen: "Paramètre",
						})
					}
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
			<View style={styles.profile}>
				<TouchableOpacity style={styles.btnProfile} onPress={PickImage}>
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
				</TouchableOpacity>
				<TouchableOpacity
					style={styles.btnProfile}
					onPress={() => navigation.navigate("Camera")}
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

	iconUsers: {
		flexDirection: "column",
		justifyContent: "space-around",
		width: "90%",
		height: "40%",
		color: "#5db194",
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
