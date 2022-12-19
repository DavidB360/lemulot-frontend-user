import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { logout } from "../reducers/user";

export default function UserSettingScreen({ navigation }: any) {
	const dispatch = useDispatch();

	return (
		<View style={styles.container}>
			<View style={styles.btnTop}>
				<TouchableOpacity
					style={styles.btnUsers}
					// onPress={() => navigation.navigate("Category")}
				>
					<FontAwesomeIcon
						icon={faUser}
						size={50}
						style={styles.iconUsers}
					/>
				</TouchableOpacity>
				<TouchableOpacity
					style={styles.btnAide}
					// onPress={() => navigation.navigate("Type")}
				>
					<Text style={styles.textBtnAide}>?</Text>
				</TouchableOpacity>
			</View>
			<View style={styles.btnContainer}>
				<TouchableOpacity
					style={styles.btnSetting}
					// onPress={() => }
				>
					<Text style={styles.textBtnSetting}>
						Changer mon avatar
					</Text>
				</TouchableOpacity>
				<View style={styles.user}>
					<FontAwesomeIcon
						icon={faUser}
						size={100}
						style={styles.iconUser}
					/>
				</View>
				<TouchableOpacity
					style={styles.btnSetting}
					// onPress={() => }
				>
					<Text style={styles.textBtnSetting}>
						Changer mes coordonnées
					</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={styles.btnSetting}
					// onPress={() => }
				>
					<Text style={styles.textBtnSetting}>
						Changer mon mot de passe
					</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={styles.btnSetting}
					onPress={() => {
						dispatch(logout());
						navigation.navigate("Home");
					}}
				>
					<Text style={styles.textBtnSetting}>SE DECONNECTER</Text>
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

	textDelete: {
		paddingBottom: 5,
		color: "#ffffff",
		fontSize: 14,
		textShadowColor: "#000000",
		textShadowOffset: { width: 0, height: 2 },
		textShadowRadius: 5,
	},

	btnContainer: {
		flexDirection: "column",
		justifyContent: "space-around",
		alignItems: "center",
		width: "100%",
		height: "80%",
	},

	btnSetting: {
		backgroundColor: "#778ed4",
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

	textBtnSetting: {
		fontSize: 22,
		color: "#ffffff",
		textShadowColor: "#000000",
		textShadowOffset: { width: 0, height: 2 },
		textShadowRadius: 5,
	},

	user: {
		borderRadius: 80,
		borderColor: "#808080",
		borderTopWidth: 1,
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
		width: 150,
		height: 150,
		backgroundColor: "#fff",
		justifyContent: "center",
		alignItems: "center",
	},

	iconUser: {
		color: "#5db194",
	},
});
