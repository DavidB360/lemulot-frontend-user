import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function IntroScreen({ navigation }: any) {
	return (
		<View style={styles.container}>
			<View>
				<Text style={styles.title}>Bienvenue sur le Mulot</Text>
			</View>
			<View style={styles.textcontent}>
				<Text style={styles.text}>
					Si tu en as marre de galérer et de tout le temps demander de
					l’aide à tes enfants ou petit enfants.
				</Text>
				<Text style={styles.text}>
					Si tu cherches une assistance, un dépannage, ou simplement
					apprendre comment utiliser internet ou ton mobile, alors
					rassure toi, tu es au bon endroit !
				</Text>
				<Text style={styles.text}>
					Tu trouveras ici des leçons et toute l’aide nécessaire pour
					résoudre tes difficultés et faire de toi un vrai pro de
					l’informatique.
				</Text>
			</View>
			<TouchableOpacity
				style={styles.btn}
				onPress={() => navigation.navigate("Home")}
			>
				<Text style={styles.textbtn}>Continuer</Text>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: "column",
		justifyContent: "space-around",
		alignItems: "center",
	},

	title: {
		fontSize: 30,
		color: "#191970",
		textShadowColor: "#696969",
		textShadowOffset: { width: 0, height: 3 },
		textShadowRadius: 5,
	},

	textcontent: {
		padding: 20,
	},

	text: {
		fontSize: 22,
		textAlign: "left",
	},

	btn: {
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "#5db194",
		borderBottomWidth: 8,
		borderLeftWidth: 3,
		borderRightWidth: 3,
		borderRadius: 30,
		borderStyle: "solid",
		borderColor: "#808080",
		width: 150,
		height: 100,
		shadowColor: "#000000",
		shadowOffset: {
			width: 0,
			height: 12,
		},
		shadowOpacity: 0.58,
		shadowRadius: 16.0,

		elevation: 25,
	},

	textbtn: {
		color: "#fff",
		fontSize: 22,
		textShadowColor: "#000000",
		textShadowOffset: { width: 0, height: 2 },
		textShadowRadius: 5,
	},
});
