// import {
// 	View,
// 	Text,
// 	TouchableOpacity,
// 	StyleSheet,
// 	TextInput,
// 	KeyboardAvoidingView,
// 	Platform,
// } from "react-native";
// import FontAwesome from "react-native-vector-icons/FontAwesome";
// import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
// import { faUser } from "@fortawesome/free-solid-svg-icons";

// export default function PictureRequestScreen({ navigation }: any) {
// 	return (
// 		<View style={styles.container}>
// 			<View style={styles.btnTop}>
// 				<TouchableOpacity
// 					style={styles.btnUsers}
// 					onPress={() =>
// 						navigation.navigate("TabNavigator", {
// 							screen: "Paramètre",
// 						})
// 					}
// 				>
// 					<FontAwesomeIcon
// 						icon={faUser}
// 						size={50}
// 						style={styles.iconUsers}
// 					/>
// 				</TouchableOpacity>
// 				<Text style={styles.title}>Demande d'aide</Text>
// 				<TouchableOpacity
// 					style={styles.btnAide}
// 					// onPress={() => navigation.navigate("Type")}
// 				>
// 					<Text style={styles.textBtnAide}>?</Text>
// 				</TouchableOpacity>
// 			</View>
// 		</View>
// 	);
// }
