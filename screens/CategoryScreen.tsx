import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { useDispatch } from 'react-redux';
import { updateCategory } from '../reducers/category';

export default function CategoryScreen({ navigation }: any) {
	const dispatch = useDispatch();
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
					style={styles.btnIcon}
					onPress={() => {dispatch(updateCategory('system')); navigation.navigate("Research");}}
				>
					<Text style={styles.textIcon}>Système</Text>
					<Image
						style={styles.icon}
						source={require("../assets/mulot_professeur.jpg")}
					/>
				</TouchableOpacity>
				<TouchableOpacity
					style={styles.btnIcon}
					onPress={() => {dispatch(updateCategory('internet')); navigation.navigate("Research");}}
				>
					<Text style={styles.textIcon}>Internet</Text>
					<Image
						style={styles.icon}
						source={require("../assets/mulot_professeur.jpg")}
					/>
				</TouchableOpacity>
				<TouchableOpacity
					style={styles.btnIcon}
					onPress={() => {dispatch(updateCategory('software')); navigation.navigate("Research");}}
				>
					<Text style={styles.textIcon}>Logiciel</Text>
					<Image
						style={styles.icon}
						source={require("../assets/mulot_professeur.jpg")}
					/>
				</TouchableOpacity>
				<TouchableOpacity
					style={styles.btnIcon}
					onPress={() => {dispatch(updateCategory(null)); navigation.navigate("Research");}}
				>
					<Text style={styles.textIcon}>Autres</Text>
					<Image
						style={styles.icon}
						source={require("../assets/mulot_professeur.jpg")}
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
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		flexWrap: "wrap",
		width: "100%",
	},

	btnIcon: {
		marginTop: 20,
		marginBottom: 40,
		marginRight: 10,
		marginLeft: 10,
		borderColor: "#a9a9a9",
		borderBottomWidth: 5,
		borderLeftWidth: 3,
		borderRightWidth: 3,
		borderRadius: 5,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "#5db194",
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

	icon: {
		width: 170,
		height: 170,
	},

	// btnInternet: {
	// 	margin: 10,
	// 	borderColor: "#a9a9a9",
	// 	borderBottomWidth: 4,
	// 	borderLeftWidth: 2,
	// 	borderRightWidth: 2,
	// 	borderRadius: 5,
	// 	alignItems: "center",
	// 	justifyContent: "center",
	// 	backgroundColor: "#5db194",
	// 	shadowColor: "#000000",
	// 	shadowOffset: {
	// 		width: -10,
	// 		height: 12,
	// 	},
	// 	shadowOpacity: 0.58,
	// 	shadowRadius: 16.0,

	// 	elevation: 25,
	// },

	// textBtnInternet: {
	// 	fontSize: 22,
	// 	color: "#ffffff",
	// 	textShadowColor: "#000000",
	// 	textShadowOffset: { width: 0, height: 2 },
	// 	textShadowRadius: 5,
	// },

	// btnLogiciel: {
	// 	marginBottom: 10,
	// 	borderColor: "#a9a9a9",
	// 	borderBottomWidth: 4,
	// 	borderLeftWidth: 2,
	// 	borderRightWidth: 2,
	// 	borderRadius: 5,
	// 	alignItems: "center",
	// 	justifyContent: "center",
	// 	backgroundColor: "#5db194",
	// 	shadowColor: "#000000",
	// 	shadowOffset: {
	// 		width: -10,
	// 		height: 12,
	// 	},
	// 	shadowOpacity: 0.58,
	// 	shadowRadius: 16.0,

	// 	elevation: 25,
	// },

	// textBtnLogiciel: {
	// 	fontSize: 22,
	// 	color: "#ffffff",
	// 	textShadowColor: "#000000",
	// 	textShadowOffset: { width: 0, height: 2 },
	// 	textShadowRadius: 5,
	// },

	// btnAutres: {
	// 	margin: 10,
	// 	borderColor: "#a9a9a9",
	// 	borderBottomWidth: 4,
	// 	borderLeftWidth: 2,
	// 	borderRightWidth: 2,
	// 	borderRadius: 5,
	// 	alignItems: "center",
	// 	justifyContent: "center",
	// 	backgroundColor: "#5db194",
	// 	shadowColor: "#000000",
	// 	shadowOffset: {
	// 		width: -10,
	// 		height: 12,
	// 	},
	// 	shadowOpacity: 0.58,
	// 	shadowRadius: 16.0,

	// 	elevation: 25,
	// },

	// textBtnAutres: {
	// 	fontSize: 22,
	// 	color: "#ffffff",
	// 	textShadowColor: "#000000",
	// 	textShadowOffset: { width: 0, height: 2 },
	// 	textShadowRadius: 5,
	// },
});
