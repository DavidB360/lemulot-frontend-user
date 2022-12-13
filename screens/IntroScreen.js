import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function IntroScreen({ navigation }) {
	return (
		<View style={styles.container}>
			<View>
				<Text style={styles.title}>Bienvenue sur le Mulot</Text>
			</View>
			<View style={styles.textcontent}>
				<Text style={styles.text}>
					Si tu en a marre de galérer, de tous le temps demander de
					l’aide à tes enfants ou petit enfants. Si tu cherches une
					assistance, un dépannage, ou simplement apprendre et
					comprendre comment utiliser internet ou ton mobile. Alors
					rassure toi tu es au bonne endroit !
				</Text>
				<Text style={styles.text}>
					Tu trouveras ici des guides, des tutoriels et toutes l’aide
					nécessaire pour résoudre tes difficultés et faire de toi un
					vrai pro de l’informatique. Bientôt c’est à toi qu’on
					demanderas de l’aide.
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
		fontSize: 25,
	},

	textcontent: {
		padding: 10,
	},

	text: {
		fontSize: 22,
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
		borderColor: "#a9a9a9",
		width: 150,
		height: 100,
	},

	textbtn: {
		color: "#fff",
		fontSize: 22,
		// padding: 20,
	},
});
