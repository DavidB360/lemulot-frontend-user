import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function ResearchScreen({ navigation }: any) {

// un tableau de tutos à charger pour mon Daminou :
const tutorials = [
    {
        title: 'Créer une adresse email',
        author: 'Professeur Mulot',
        creationDate: '13-12-2022',
        device: 'ordinateur',
        category: 'logiciel',
        difficulty: 'débutant',
        content: '<View><Text>Nous allons créer une adresse gmail pas à pas avec toi ...</Text></View>'
    },
    {
        title: 'Se connecter à un réseau wifi',
        author: 'Mulot bricolo',
        creationDate: '13-12-2022',
        device: 'ordinateur',
        category: 'connexion',
        difficulty: 'débutant',
        content: '<View><Text>Cliquer sur l\'icone à droite de votre barre des tâches ...</Text></View>'
    },
    {
        title: 'Envoyer une photo dans WhatsApp',
        author: 'Mulot influenceur',
        creationDate: '13-12-2022',
        device: 'smartphone',
        category: 'communication',
        difficulty: 'débutant',
        content: '<View><Text>en bas de votre écran, appuyer sur le bouton en forme d\'appareil photo ...</Text></View>'
    },
    {
        title: 'Nettoyer son ordinateur avec ccleaner',
        author: 'Mulot hacker',
        creationDate: '13-12-2022',
        device: 'ordinateur',
        category: 'logiciel',
        difficulty: 'avancé',
        content: '<View><Text>Télécharger l\'application ccleaner à l\'adresse suivante...</Text></View>'
    },
];


//	  ()_|)
//	   |oo|	   |			|\  /|
//	   (_p)	  <	  Je dis	| \/ |
//	__{|_)}	   |			|    |
//	  _| L

	return (
		<View style={styles.container}>
			<TouchableOpacity onPress={() => navigation.navigate("Tuto")}>
				<Text>Go To TutoScreen</Text>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
});
