import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
// import React, { useState } from "react";

export default function OralRequestScreen({ navigation }: any) {
	// const [disable, setDisable] = React.useState(true);

	return (
		<View style={styles.container}>
			<View style={styles.btnTop}>
				<TouchableOpacity
					style={styles.btnRetour}
					onPress={() => navigation.navigate("Request")}
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
					// onPress={() => navigation.navigate("Type")}
				>
					<Text style={styles.textBtnAide}>?</Text>
				</TouchableOpacity>
			</View>
			<View style={styles.request}>
				<Text style={styles.textRequest}>Faire une demande orale</Text>
				<View style={styles.microphone}>
					<TouchableOpacity
						style={styles.btnMicrophone}
						// onPress={() => navigation.navigate("Type")}
					>
						<FontAwesome
							name="microphone"
							size={100}
							color="#fff"
							style={styles.iconMicrophone}
						/>
						<Text style={styles.textBtnMicrophone}>Appuyer</Text>
					</TouchableOpacity>
				</View>
				<View style={styles.bottom}>
					<TouchableOpacity style={styles.btnCheck}>
						{/* <TouchableOpacity
						disabled={disable}
						onPress={() => setDisable(false)}

						activeOpacity={disable ? 1 : 0.7}
						onPress={!disable && onPress}
					> */}
						<Text style={styles.textBottom}>Vérification</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={styles.btnNext}
						onPress={() => navigation.navigate("PictureRequest")}
					>
						<Text style={styles.textBottom}>Continuer</Text>
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
		marginBottom: 20,
		marginTop: 50,
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

	request: {
		marginTop: 50,
		flexDirection: "column",
		justifyContent: "space-between",
		alignItems: "center",
		width: "95%",
		height: "60%",
	},

	textRequest: {
		marginLeft: 10,
		marginBottom: 20,
		fontSize: 25,
		textShadowColor: "#808080",
		textShadowOffset: { width: 0, height: 2 },
		textShadowRadius: 5,
	},

	microphone: {
		justifyContent: "center",
		alignItems: "center",
	},

	btnMicrophone: {
		justifyContent: "center",
		alignItems: "center",
		width: 200,
		height: 200,
		fontSize: 22,
		fontWeight: "bold",
		backgroundColor: "#778ed4",
		borderColor: "#808080",
		borderRadius: 100,
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

	iconMicrophone: {
		textShadowColor: "#000",
		textShadowOffset: { width: 0, height: 3 },
		textShadowRadius: 5,
	},

	textBtnMicrophone: {
		fontSize: 22,
		color: "#ffffff",
		textShadowColor: "#000000",
		textShadowOffset: { width: 0, height: 2 },
		textShadowRadius: 5,
	},

	bottom: {
		marginTop: 20,
		justifyContent: "space-between",
		alignItems: "center",
		width: "100%",
		height: "50%",
	},

	btnCheck: {
		backgroundColor: "#5db194",
		width: "60%",
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

	textBottom: {
		fontSize: 22,
		color: "#ffffff",
		textShadowColor: "#000000",
		textShadowOffset: { width: 0, height: 2 },
		textShadowRadius: 5,
	},

	btnNext: {
		width: "90%",
		height: 60,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 10,
		borderColor: "#808080",
		backgroundColor: "#5db194",
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
});
