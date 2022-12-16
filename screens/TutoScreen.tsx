import {
	View,
	Text,
	TouchableOpacity,
	StyleSheet,
	ScrollView,
} from "react-native";

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	addToFavoriteLessons,
	removeFromFavoriteLessons,
	UserState,
} from "../reducers/user";

import FontAwesome from "react-native-vector-icons/FontAwesome";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeartCirclePlus } from "@fortawesome/free-solid-svg-icons";

export default function LeconScreen({ navigation }: any) {
	const dispatch = useDispatch();
	const user = useSelector((state: { user: UserState }) => state.user.value);

	return (
		<View style={styles.container}>
			<View style={styles.btnTop}>
				<TouchableOpacity
					style={styles.btnRetour}
					onPress={() => navigation.navigate("Research")}
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
			<View style={styles.titleTuto}>
				<View style={styles.tutoText}>
					<Text style={styles.textResult}>
						Title: "Envoyer une photo dans WhatsApp"
					</Text>
					<Text style={styles.textResult}>
						CreationDate: "13-12-2022"
					</Text>
					<Text style={styles.textResult}>
						Author: "Mulot Influenceur"
					</Text>
				</View>
				<TouchableOpacity
					style={styles.btnFavorite}
					// onPress={() => }
				>
					<View style={styles.icon}>
						<Text style={styles.textBtnFavoris}>J'</Text>
						<FontAwesome
							name="heart"
							size={40}
							style={styles.iconHeart}
						/>
						<Text style={styles.textBtnFavoris}>!!!</Text>
					</View>
				</TouchableOpacity>
			</View>
			<View style={styles.tuto}>
				<ScrollView>
					<Text style={styles.textTuto}>
						Lorem ipsum dolor sit amet. A omnis cumque ea quae sint
						ut distinctio doloribus aut error laborum. Ut amet
						soluta qui quam consequatur qui mollitia quam ad facilis
						harum.
					</Text>
					<Text style={styles.textTuto}>
						Sit voluptates velit et maiores molestiae eum internos
						fugit. Ex animi ratione et debitis repudiandae eum quis
						dignissimos ut aliquam ratione. Et corrupti similique
						eos omnis accusamus ad vero eius et quia aperiam sit
						recusandae sunt sit explicabo velit aut perspiciatis
						aperiam.
					</Text>
					<Text style={styles.textTuto}>
						Ut amet nobis est omnis sunt ad blanditiis suscipit et
						adipisci similique. Aut itaque molestiae qui enim
						reprehenderit et molestiae iste aut laborum officia est
						voluptas galisum ut voluptates ullam vel obcaecati
						natus. Qui impedit deleniti aut quos ipsum ex voluptas
						rerum sed inventore explicabo est tenetur expedita ut
						laborum consequuntur aut totam aspernatur? Non ratione
						rerum aut quas dolorum et facilis natus non commodi
						repellendus in enim quas sit repellat aperiam a
						explicabo velit.
					</Text>
				</ScrollView>
			</View>
			<View style={styles.btnBottom}>
				<TouchableOpacity
					style={styles.btnHelrequest}
					// onPress={() => navigation.navigate("HelpRequest")}
				>
					<Text style={styles.textBtnHelrequest}>
						Demander de l'aide
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

	titleTuto: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		width: "90%",
		height: "15%",
		borderColor: "#a9a9a9",
		backgroundColor: "#778ed4",
		borderTopWidth: 1,
		borderBottomWidth: 6,
		borderLeftWidth: 4,
		borderRightWidth: 4,
		borderRadius: 5,
	},

	tutoText: {
		marginTop: 5,
		marginLeft: 5,
		width: "70%",
	},

	textResult: {
		paddingBottom: 5,
		fontSize: 18,
		color: "#ffffff",
		textShadowColor: "#000000",
		textShadowOffset: { width: 0, height: 2 },
		textShadowRadius: 5,
	},

	btnFavorite: {
		marginRight: 10,
		width: 80,
		height: 80,
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 40,
		borderColor: "#0000ff",
		// backgroundColor: "#ffd700",
		borderBottomWidth: 4,
		borderLeftWidth: 2,
		borderRightWidth: 2,
		shadowOffset: {
			width: -10,
			height: 12,
		},
		shadowOpacity: 0.58,
		shadowRadius: 16.0,

		// elevation: 15,
	},

	icon: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
	},

	iconHeart: {
		marginLeft: 5,
		marginRight: 5,
		color: "#dc143c",
		textShadowColor: "#000000",
		textShadowOffset: { width: 0, height: 3 },
		textShadowRadius: 3,
	},

	textBtnFavoris: {
		paddingBottom: 5,
		color: "#ffffff",
		fontSize: 15,
		textShadowColor: "#000000",
		textShadowOffset: { width: 0, height: 2 },
		textShadowRadius: 5,
	},

	tuto: {
		marginTop: 20,
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		width: "90%",
		height: "50%",
		borderWidth: 1,
	},

	textTuto: {
		fontSize: 20,
	},

	btnBottom: {
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		width: "100%",
	},

	btnHelrequest: {
		marginTop: 20,
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
