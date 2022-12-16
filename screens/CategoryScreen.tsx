import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
	faEllipsis,
	faWindowRestore,
	faGear,
	faGlobe,
} from "@fortawesome/free-solid-svg-icons";

export default function CategoryScreen({ navigation }: any) {
	return (
		<View style={styles.container}>
			<View style={styles.btnTop}>
				<TouchableOpacity
					style={styles.btnRetour}
					onPress={() => navigation.navigate("Device")}
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
			<View style={styles.iconContainer}>
				<TouchableOpacity
					style={styles.iconContent}
					onPress={() => navigation.navigate("Research")}
				>
					<Text style={styles.textIcon}>Système</Text>
					<View style={styles.icon}>
						<FontAwesomeIcon
							icon={faGear}
							style={styles.iconColor}
							size={130}
						/>
					</View>
				</TouchableOpacity>
				<TouchableOpacity
					style={styles.iconContent}
					onPress={() => navigation.navigate("Research")}
				>
					<Text style={styles.textIcon}>Internet</Text>
					<View style={styles.icon}>
						<FontAwesomeIcon
							icon={faGlobe}
							style={styles.iconColor}
							size={130}
						/>
					</View>
				</TouchableOpacity>
				<TouchableOpacity
					style={styles.iconContent}
					onPress={() => navigation.navigate("Research")}
				>
					<Text style={styles.textIcon}>Logiciel</Text>
					<View style={styles.icon}>
						<FontAwesomeIcon
							icon={faWindowRestore}
							style={styles.iconColor}
							size={130}
						/>
					</View>
				</TouchableOpacity>
				<TouchableOpacity
					style={styles.iconContent}
					onPress={() => navigation.navigate("Research")}
				>
					<Text style={styles.textIcon}>Autres</Text>
					<View style={styles.icon}>
						<FontAwesomeIcon
							icon={faEllipsis}
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

	iconContainer: {
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		flexWrap: "wrap",
		width: "100%",
	},

	iconContent: {
		marginTop: 20,
		marginBottom: 40,
		marginRight: 10,
		marginLeft: 10,
		flexDirection: "column",
		justifyContent: "flex-start",
		alignItems: "center",
		width: "42%",
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

	textIcon: {
		fontSize: 22,
		color: "#ffffff",
		textShadowColor: "#000000",
		textShadowOffset: { width: 0, height: 2 },
		textShadowRadius: 5,
	},

	iconColor: {
		color: "#778ed4",
	},

	icon: {
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#fff",
		width: "100%",
		height: 145,
		borderTopWidth: 1,
		borderColor: "#a9a9a9",
		color: "#778ed4",
	},
});
