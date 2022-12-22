import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";

export default function DictionaireScreen({ navigation }: any) {
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
				<Text style={styles.title}>Dictionnaire</Text>
				<TouchableOpacity
					style={styles.btnAide}
					// onPress={() => navigation.navigate("Type")}
				>
					<Text style={styles.textBtnAide}>?</Text>
				</TouchableOpacity>
			</View>

			<View style={styles.content}>
				<Text style={[styles.bold, styles.font16]}>A</Text>
				<Text
					style={[styles.bottomMargin, styles.justify, styles.font16]}
				>
					ADSL : L'ADSL (ou liaison numérique à débit asymétrique) est
					une technologie d'accès à Internet qui tire parti des hautes
					fréquences de la ligne téléphonique pour transmettre des
					données numériques à très haute vitesse.
				</Text>

				<Text style={[styles.bold, styles.font16]}>B</Text>
				<Text style={[styles.justify, styles.font16]}>
					Bit : Le terme bit est une contraction des mots binary digit
					que l'on peut traduire par chiffre binaire en français.
					Cette unité, directement associée au système binaire, ne
					peut prendre que deux valeurs : 0 et 1.
				</Text>
				<Text style={[styles.bottomMargin, styles.font16]}>
					Byte : 8 bits{" "}
				</Text>

				<Text style={[styles.bold, styles.font16]}>C</Text>
				<Text style={[styles.justify, styles.font16]}>
					Chat : le chat est un espace de discussion en direct sur
					Internet où les Internautes vont pour parler ou faire de
					nouvelles rencontres.
				</Text>
				<Text style={[styles.justify, styles.font16]}>
					Chat bit : pour pousser les rencontres plus loin, jeu dérivé
					du traditionnel chat perché dans lequel l'un des
					participants doit toucher un de ses camarades de jeu sur les
					parties... digitales.
				</Text>
				<Text style={[styles.bottomMargin, styles.font16]}>
					Chat byte : idem mais à 8 participants
				</Text>
			</View>

			<Text>Page en construction...</Text>
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

	content: {
		flexDirection: "column",
		justifyContent: "flex-start",
		alignItems: "flex-start",
		width: 300,
	},

	bold: {
		fontWeight: "bold",
	},

	bottomMargin: {
		marginBottom: 10,
	},

	justify: {
		textAlign: "justify",
	},

	font16: {
		fontSize: 16,
	},
});
