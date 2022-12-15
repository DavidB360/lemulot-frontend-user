import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";

// import { faAddressBook } from '@fortawesome/free-solid-svg-icons';
// import { fas } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCoffee } from "@fortawesome/free-solid-svg-icons";
{
	/* <FontAwesomeIcon icon={faCoffee} /> */
}

export default function DeviceScreen({ navigation }: any) {
	return (
		<View style={styles.container}>
			<View style={styles.btnTop}>
				<TouchableOpacity
					style={styles.btnRetour}
					onPress={() => navigation.navigate("Home")}
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
					onPress={() => navigation.navigate("Category")}
				>
					<Text style={styles.textIcon}>Ordinateur</Text>
					<FontAwesome
						style={styles.iconComputer}
						name="desktop"
						size={100}
					/>
				</TouchableOpacity>
				<TouchableOpacity
					style={styles.iconContent}
					onPress={() => navigation.navigate("Category")}
				>
					<Text style={styles.textIcon}>Mobile</Text>
					<FontAwesome
						style={styles.iconMobile}
						name="mobile"
						size={100}
					/>
				</TouchableOpacity>
				<TouchableOpacity
					style={styles.iconContent}
					onPress={() => navigation.navigate("Category")}
				>
					<Text style={styles.textIcon}>Tablette</Text>
					<FontAwesome
						style={styles.iconTablet}
						name="tablet"
						size={100}
					/>
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
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		height: "80%",
		width: "100%",
		paddingBottom: 20,
	},

	iconContent: {
		marginBottom: 20,
		flexDirection: "column",
		justifyContent: "flex-start",
		alignItems: "center",
		width: "40%",
		height: "30%",
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
		color: "#fff",
		textShadowColor: "#000000",
		textShadowOffset: { width: 0, height: 2 },
		textShadowRadius: 5,
	},

	iconComputer: {
		color: "#5db194",
		backgroundColor: "#fff",
		borderWidth: 1,
		borderColor: "#000",
		width: 120,
		height: 120,
		paddingLeft: 6,
		paddingTop: 15,
	},

	iconMobile: {
		color: "#5db194",
		backgroundColor: "#fff",
		borderWidth: 1,
		borderColor: "#000",
		width: 120,
		height: 120,
		paddingLeft: 38,
		paddingTop: 10,
	},

	iconTablet: {
		color: "#5db194",
		backgroundColor: "#fff",
		borderWidth: 1,
		borderColor: "#000",
		width: 120,
		height: 120,
		paddingLeft: 28,
		paddingTop: 12,
	},
});