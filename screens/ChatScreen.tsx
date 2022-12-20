import {
	View,
	Text,
	TouchableOpacity,
	StyleSheet,
	TextInput,
	ScrollView,
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";

export default function OralRequestScreen() {
	return (
		<View style={styles.container}>
			<View style={styles.btnTop}>
				<Text style={styles.title}>Scanner un document</Text>
				<TouchableOpacity
					style={styles.btnAide}
					// onPress={() => navigation.navigate("Type")}
				>
					<Text style={styles.textBtnAide}>?</Text>
				</TouchableOpacity>
			</View>
			<View style={styles.chatContainer}>
				<ScrollView>
					<Text>Hello World</Text>
				</ScrollView>
			</View>
			<View style={styles.messageContainer}>
				<TextInput
					style={styles.inputMessage}
					// on envoie le texte tapé dans le useState tutorialSearch à chaque changement
					// onChangeText={(value) => setTutorialSearch(value)}
					// value={tutorialSearch}
					placeholder="Message"
					placeholderTextColor="#808080"
				/>

				<TouchableOpacity
					style={styles.btnSend}
					// on affecte tutorialSearch au useState regexSearch au clic sur le bouton loupe
					// onPress={() => setRegexSearch(tutorialSearch)}
				>
					<Text style={styles.textSend}>Envoyer</Text>
				</TouchableOpacity>
				<View style={styles.btnBottom}>
					<TouchableOpacity
						style={styles.btnMicrophone}
						// onPress={() => navigation.navigate("Type")}
					>
						<FontAwesome
							name="microphone"
							size={80}
							color="#fff"
							style={styles.iconMicrophone}
						/>
					</TouchableOpacity>
					<TouchableOpacity
						style={styles.btnMicrophone}
						// onPress={() => navigation.navigate("Type")}
					>
						<FontAwesome
							name="microphone"
							size={80}
							color="#fff"
							style={styles.iconMicrophone}
						/>
					</TouchableOpacity>
					<TouchableOpacity
						style={styles.btnMicrophone}
						// onPress={() => navigation.navigate("Type")}
					>
						<FontAwesome
							name="times"
							size={80}
							color="#fff"
							style={styles.iconClose}
						/>
						<Text style={styles.textBtnClose}>Fermer</Text>
					</TouchableOpacity>
				</View>
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
});
