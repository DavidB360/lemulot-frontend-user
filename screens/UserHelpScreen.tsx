import React from "react";
import {
	View,
	Text,
	TouchableOpacity,
	StyleSheet,
	ScrollView,
	TextInput,
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

type UserHelpScreenProps = {
	navigation: NavigationProp<ParamListBase>;
};

export default function UserHelpScreen({ navigation }: UserHelpScreenProps) {
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
			<View style={styles.textContainer}>
				<Text style={styles.textTitle}>Mes demandes D'aide</Text>
			</View>
			<View style={styles.researchContainer}>
				<TextInput
					style={styles.input}
					//onChangeText={(e) => setTutorial(e.target.value)}
					//value={tutorial}
					placeholder="Recherche..."
				/>
				<TouchableOpacity
					style={styles.btnResearch}
					// onPress={() => navigation.navigate("Tuto")}
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
					<TouchableOpacity
						onPress={() => navigation.navigate("Tuto")}
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
						onPress={() => navigation.navigate("Tuto")}
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
						onPress={() => navigation.navigate("Tuto")}
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
						onPress={() => navigation.navigate("Tuto")}
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
						onPress={() => navigation.navigate("Tuto")}
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
					</TouchableOpacity>
				</ScrollView>
			</View>
			<View style={styles.helprequest}>
				<TouchableOpacity
					style={styles.btnHelrequest}
					onPress={() =>
						navigation.navigate("TabNavigator", {
							screen: "Ecrite",
						})
					}
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

	textTitle: {
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
