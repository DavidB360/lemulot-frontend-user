import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import {useDispatch } from "react-redux";
import { updateProcessus } from "../reducers/processus";

export default function PictureRequestScreen({ navigation }: any) {
	const dispatch = useDispatch()

	return (
		<View style={styles.container}>
			<View style={styles.btnTop}>
				<TouchableOpacity
					style={styles.btnRetour}
					onPress={() =>
						navigation.navigate("TabNavigator2", {
							screen: "WrittenRequest",
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
				<Text style={styles.title}>Demande d'aide</Text>
				<TouchableOpacity
					style={styles.btnAide}
					// onPress={() => {} }
				>
					<Text style={styles.textBtnAide}>?</Text>
				</TouchableOpacity>
			</View>
			<View style={styles.btnContainer}>
				<View style={styles.btn}>
					<Text style={styles.textbtnContainer}>
						Prendre une photo du problème
					</Text>
					<TouchableOpacity
						style={styles.iconbtn}
						onPress={() => {
							dispatch(updateProcessus("PictureRequest"))
							navigation.navigate("Picture")
						}}
					>
						<FontAwesome
							name="camera-retro"
							size={100}
							color="#fff"
							style={styles.icon}
						/>
					</TouchableOpacity>
				</View>
				<View style={styles.btn}>
					<Text style={styles.textbtnContainer}>
						Envoyer ma demande sans photo
					</Text>
					<TouchableOpacity
						style={styles.iconbtn}
						onPress={() => navigation.navigate("Chat")}
					>
						<FontAwesome
							name="paper-plane"
							size={100}
							color="#fff"
							style={styles.icon}
						/>
					</TouchableOpacity>
				</View>
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

	title: {
		fontSize: 25,
		color: "#191970",
		textShadowColor: "#696969",
		textShadowOffset: { width: 0, height: 2 },
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

	btnContainer: {
		// marginTop: 50,
		flexDirection: "column",
		justifyContent: "space-between",
		alignItems: "center",
		width: "90%",
		height: "70%",
	},

	btn: {
		flexDirection: "column",
		justifyContent: "space-around",
		alignItems: "center",
		width: "100%",
		height: "45%",
	},

	textbtnContainer: {
		marginBottom: 20,
		fontSize: 22,
		textShadowColor: "#808080",
		textShadowOffset: { width: 0, height: 2 },
		textShadowRadius: 5,
	},

	iconbtn: {
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#778ed4",
		width: 180,
		height: 180,
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

	icon: {
		textShadowColor: "#000",
		textShadowOffset: { width: 0, height: 2 },
		textShadowRadius: 5,
	},
});
