import React, { useEffect, useState } from "react"
import {
	KeyboardAvoidingView,
	Platform,
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from "react-native"
import FontAwesome from "react-native-vector-icons/FontAwesome"
import { useDispatch } from "react-redux"
import { login, UserState } from "../reducers/user"

const EMAIL_REGEX: RegExp =
	/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

export default function SignIn({ navigation }: any) {
	const dispatch = useDispatch()

	const [email, setEmail] = useState("")
	const [emailError, setEmailError] = useState(false)
	const [password, setPassword] = useState("")

	const handleConnection = () => {
		if (EMAIL_REGEX.test(email)) {
			// fetch("http://192.168.1.48:3000/users/signin", {
			fetch(process.env.BACKEND_URL + "users/signin", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ email: email, password: password }),
			})
				.then((response) => response.json())
				.then((data) => {
					console.log(data)
					if (data.result) {
						dispatch(
							login({
								token: data.token,
								firstName: data.firstName,
								lastName: data.lastName,
								favoriteLessons: data.favoriteLessons,
							})
						)
						useEffect(() => {
							if (data.token) {
								navigation.navigate("Connection")
							}
						}, [])
					} else {
						setEmailError(true)
					}
				})
		} else {
			setEmailError(true)
		}
	}

	return (
		<KeyboardAvoidingView
			style={styles.container}
			behavior={Platform.OS === "ios" ? "padding" : "height"}
		>
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
					style={styles.input}
				/>
				{emailError && (
					<Text style={styles.error}>Email ou mot de passe incorrect.</Text>
				)}
			</View>
			<View style={styles.btnBottom}>
				<TouchableOpacity
					style={styles.btnPassword}
					onPress={() => navigation.navigate("Dico")}
				>
					<Text style={styles.textBtnPassword}>Mot de passe oublie</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={styles.btnConnection}
					//onPress={() => handleConnection()}
				>
					<Text style={styles.textBtnConnection}>Connexion</Text>
				</TouchableOpacity>
			</View>
		</KeyboardAvoidingView>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "flex-start",
		backgroundColor: "#ffffff",
	},
	title: {
		marginTop: 30,
		fontSize: 40,
		marginBottom: 20,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 12,
		},
		shadowOpacity: 0.7,
		shadowRadius: 16.0,
		elevation: 24,
	},
	inputContainer: {
		marginTop: 30,
		margin: 15,
		alignItems: "center",
		justifyContent: "center",
	},
	input: {
		margin: 20,
		paddingLeft: 20,
		width: 250,
		height: 40,
		borderWidth: 1,
		fontSize: 16,
	},
	error: {
		color: "red",
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
	textBtnRetour: {
		paddingBottom: 5,
		color: "#ffffff",
		fontSize: 15,
		textShadowColor: "#000000",
		textShadowOffset: { width: 0, height: 2 },
		textShadowRadius: 5,
	},

	iconContent: {
		marginTop: 20,
		marginBottom: 40,
		marginRight: 10,
		marginLeft: 10,
		flexDirection: "column",
		justifyContent: "flex-start",
		alignItems: "center",
		width: "42%",
		borderColor: "#a9a9a9",
		borderBottomWidth: 6,
		borderLeftWidth: 4,
		borderRightWidth: 4,
		borderRadius: 5,
		backgroundColor: "#778ed4",
		shadowColor: "#000000",
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
	btnBottom: {
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		width: "100%",
	},

	btnPassword: {
		marginTop: 50,
		marginBottom: 10,
		backgroundColor: "#778ed4",
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
		color: "#ffffff",
		textShadowColor: "#000000",
		textShadowOffset: { width: 0, height: 2 },
		textShadowRadius: 5,
	},
	btnConnection: {
		marginTop: 10,
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

	textBtnConnection: {
		fontSize: 22,
		color: "#000000",
	},
})
