import React, { useEffect, useState } from "react";
import {
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { useDispatch, useSelector } from "react-redux";
import { login, UserState } from "../reducers/user";
import { BACKEND_URL } from "@env";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const EMAIL_REGEX: RegExp =
	/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export default function SignIn({ navigation }: any) {
	const dispatch = useDispatch();

	const [email, setEmail] = useState("");
	const [emailError, setEmailError] = useState(false);
	const [password, setPassword] = useState("");

	const user = useSelector((state: { user: UserState }) => state.user.value);

	useEffect(() => {
		if (user.token) {
			navigation.navigate("TabNavigator", {
				screen: "Demandes",
			});
		}
	}, []);

	const handleConnection = () => {
		// console.log(BACKEND_URL)
		if (EMAIL_REGEX.test(email)) {
			// fetch("http://10.33.210.227:3000/users/signin", {
			fetch(BACKEND_URL + "users/signin", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ email: email, password: password }),
			})
				.then((response) => response.json())
				.then((data) => {
					console.log(data);
					if (data.result) {
						dispatch(
							login({
								token: data.token,
								firstName: data.firstName,
								lastName: data.lastName,
								favoriteLessons: data.favoriteLessons,
								avatar: data.avatar
							})
						);
						navigation.navigate("TabNavigator", {
							screen: "Demandes",
						});
					} else {
						setEmailError(true);
					}
				});
		} else {
			setEmailError(true);
		}
	};

	return (
		<KeyboardAwareScrollView style={styles.container}>
			<View style={styles.all}>
				<View style={styles.btnTop}>
					<TouchableOpacity
						style={styles.btnRetour}
						onPress={() => navigation.navigate("Connection")}
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
				<Text style={styles.title}>Connexion</Text>
				<View style={styles.inputContainer}>
					<TextInput
						onChangeText={(value) => setEmail(value)}
						value={email}
						placeholder="Email"
						placeholderTextColor="#808080"
						autoCapitalize="none"
						keyboardType="email-address"
						textContentType="emailAddress"
						autoComplete="email"
						style={styles.input}
					/>
					<TextInput
						onChangeText={(value) => setPassword(value)}
						value={password}
						secureTextEntry={true}
						placeholder="Mot de passe"
						placeholderTextColor="#808080"
						style={styles.input}
					/>
					{emailError && (
						<Text style={styles.error}>
							Email ou mot de passe incorrect.
						</Text>
					)}
				</View>
				<View style={styles.btnBottom}>
					<TouchableOpacity
						style={styles.btnConnection}
						onPress={() => handleConnection()}
					>
						<Text style={styles.textBtnConnection}>Connexion</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={styles.btnPassword}
						onPress={() => navigation.navigate("Dico")}
					>
						<Text style={styles.textBtnPassword}>
							Mot de passe oublie
						</Text>
					</TouchableOpacity>
				</View>
			</View>
		</KeyboardAwareScrollView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: "column",
		backgroundColor: "#ffffff",
	},

	all: {
		justifyContent: "center",
		alignItems: "center",
	},

	btnTop: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		width: "100%",
		marginBottom: 30,
		marginTop: 50,
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

	title: {
		fontSize: 35,
		color: "#191970",
		textShadowColor: "#696969",
		textShadowOffset: { width: 0, height: 3 },
		textShadowRadius: 5,
	},

	inputContainer: {
		marginTop: 30,
		alignItems: "center",
		justifyContent: "center",
		width: "100%",
	},

	input: {
		margin: 20,
		paddingLeft: 5,
		fontSize: 22,
		fontWeight: "bold",
		backgroundColor: "#ffffff",
		width: "75%",
		height: 50,
		borderColor: "#808080",
		borderRadius: 6,
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

	error: {
		color: "red",
		fontSize: 22,
		marginBottom: 10,
	},

	btnBottom: {
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		width: "100%",
	},

	btnConnection: {
		marginTop: 10,
		marginBottom: 120,
		backgroundColor: "#5db194",
		width: "90%",
		height: 60,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 10,
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

	textBtnConnection: {
		fontSize: 22,
		color: "#ffffff",
		textShadowColor: "#808080",
		textShadowOffset: { width: 0, height: 2 },
		textShadowRadius: 5,
	},

	btnPassword: {
		marginBottom: 100,
		backgroundColor: "#fffb00",
		width: "90%",
		height: 60,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 10,
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

	textBtnPassword: {
		fontSize: 22,
		color: "#000000",
		textShadowColor: "#ffffff",
		textShadowOffset: { width: 0, height: 2 },
		textShadowRadius: 5,
	},
});
