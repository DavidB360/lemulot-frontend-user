import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function DictionaireScreen({ navigation }: any) {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Dictionnaire</Text>

			<View style={styles.content}>
				<Text style={[styles.bold, styles.font16]}>A</Text>
				<Text style={[styles.bottomMargin, styles.justify, styles.font16]}>ADSL : L'ADSL (ou liaison numérique à débit asymétrique) est une technologie d'accès à Internet qui tire parti des hautes fréquences de la ligne téléphonique pour transmettre des données numériques à très haute vitesse.</Text>
				
				<Text style={[styles.bold, styles.font16]}>B</Text>
				<Text style={[styles.justify, styles.font16]}>Bit : Le terme bit est une contraction des mots binary digit que l'on peut traduire par chiffre binaire en français. Cette unité, directement associée au système binaire, ne peut prendre que deux valeurs : 0 et 1.</Text>
				<Text style={[styles.bottomMargin, styles.font16]}>Byte : 8 bits </Text>

				<Text style={[styles.bold, styles.font16]}>C</Text>
				<Text style={[styles.justify, styles.font16]}>Chat : le chat est un espace de discussion en direct sur Internet où les Internautes vont pour parler ou faire de nouvelles rencontres.</Text>
				<Text style={[styles.justify, styles.font16]}>Chat bit : pour pousser les rencontres plus loin, jeu dérivé du traditionnel chat perché dans lequel l'un des participants doit toucher un de ses camarades de jeu sur les parties... digitales.</Text>
				<Text style={[styles.bottomMargin, styles.font16]}>Chat byte : idem mais à 8 participants</Text>
			</View>

			<Text>Page en construction...</Text>
		</View>
	);
}

const styles = StyleSheet.create({

	container: {
		flex: 1,
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
	},

	title: {
		fontWeight: "bold",
		fontSize: 20,
	},

	content: {
		margin: 20,
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
	}
	
});