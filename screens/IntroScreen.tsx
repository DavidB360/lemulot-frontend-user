import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";

export default function IntroScreen({ navigation }: any) {
	return (
		<View style={styles.container}>
			<View>
				<Text style={styles.title}>Bienvenue chez Le Mulot</Text>
			</View>
			<View style={styles.textcontent}>
				<Text style={[styles.question, styles.yellow]}>Où ?</Text>
				<Text style={[styles.question, styles.green]}>Comment ??</Text>
				<Text style={[styles.question, styles.blue]}>Pourquoi ???</Text>
			</View>
			<View style={styles.textcontent}>
				<Text style={styles.text}>Des problèmes en informatique ?</Text>
				<Text style={styles.text}>
					L'équipe des Mulotins vous assiste !
				</Text>

				{/* <Text style={styles.text}>
					L'application à la petite souris qui va t'aider à résoudre tous tes soucis avec les outils numériques.
				</Text>
				<Text style={styles.text}>
					Consulte nos leçons.
				</Text>
				<Text style={styles.text}>
					Notre équipe de mulotins est à ton écoute pour te guider pas à pas.
				</Text> */}

				{/* <Text style={styles.text}>
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
				</Text> */}
			</View>
			<Image
				style={styles.img}
				source={require("../assets/double_mulot.png")}
			/>
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
		justifyContent: "space-between",
		alignItems: "center",
		backgroundColor: "#ffffff",
	},

	title: {
		fontSize: 30,
		color: "#191970",
		textShadowColor: "#696969",
		textShadowOffset: { width: 0, height: 3 },
		textShadowRadius: 5,
		marginTop: 60,
	},

	textcontent: {
		margin: 1,
	},

	question: {
		fontSize: 30,
		textAlign: "center",
		fontWeight: "bold",
		textShadowColor: "#000",
		textShadowOffset: { width: 0, height: 3 },
		textShadowRadius: 5,
		marginBottom: 10,
	},

	text: {
		fontSize: 22,
		textAlign: "center",
	},

	blue: {
		color: "#778ed4",
	},

	green: {
		color: "#5db194",
	},

	yellow: {
		color: "#fffb00",
	},

	img: {
		width: "70%",
		height: "25%",
	},

	btn: {
		marginBottom: 40,
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
