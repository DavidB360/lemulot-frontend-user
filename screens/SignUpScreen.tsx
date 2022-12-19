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
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view"
import FontAwesome from "react-native-vector-icons/FontAwesome"
import { useDispatch } from "react-redux"
import { login, UserState } from "../reducers/user"
import {BACKEND_URL} from "@env"

const EMAIL_REGEX: RegExp =
	/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

export default function SignUp({ navigation }: any) {
	const dispatch = useDispatch()

	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const [lastName, setLastName] = useState("")
	const [firstName, setFirstName] = useState("")
	const [zipCode, setZipCode] = useState("")
	const [city, setCity] = useState("")
	const [phoneNumber, setPhoneNumber] = useState("")
	const [emailError, setEmailError] = useState(false)

	const handleSignUp = () => {
		if (EMAIL_REGEX.test(email)) {
			// fetch("http://10.33.210.227:3000/users/signup", {
			fetch(BACKEND_URL+"users/signup", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					email: email,
					password: password,
					lastName: lastName,
					firstName: firstName,
					zipCode: zipCode,
					city: city,
					phoneNumber: phoneNumber,
				}),
			})
				.then((response) => response.json())
				.then((data) => {
					if (data.result) {
						dispatch(
							login({
								token: data.token,
								firstName: data.firstName,
								lastName: data.lastName,
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
		}
	}

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
				<Text style={styles.title}>Inscription</Text>
				<View style={styles.inputContainer}>
					<TextInput
						onChangeText={(value) => setEmail(value)}
						value={email}
						placeholder="Adresse mail"
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
					<TextInput
						onChangeText={(value) => setLastName(value)}
						value={lastName}
						placeholder="Nom de famille"
						style={styles.input}
					/>
					<TextInput
						onChangeText={(value) => setFirstName(value)}
						value={firstName}
						placeholder="Prénom"
						style={styles.input}
					/>
					<TextInput
						onChangeText={(value) => setZipCode(value)}
						value={zipCode}
						placeholder="Code postal"
						style={styles.input}
					/>
					<TextInput
						onChangeText={(value) => setCity(value)}
						value={city}
						placeholder="Ville"
						style={styles.input}
					/>
					<TextInput
						onChangeText={(value) => setPhoneNumber(value)}
						value={phoneNumber}
						placeholder="Numéro de téléphone"
						style={styles.input}
					/>
					{emailError && (
						<Text style={styles.error}>Email ou mot de passe incorrect.</Text>
					)}
				</View>
				<TouchableOpacity
					onPress={() => handleSignUp()}
					style={styles.button}
					activeOpacity={0.8}
				>
					<Text style={styles.textButton}>S'inscrire</Text>
				</TouchableOpacity>
			</View>
		</KeyboardAwareScrollView>
	)
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
	title: {
		marginTop: 10,
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

	inputContainer: {
		marginTop: 5,
		margin: 15,
		alignItems: "center",
		justifyContent: "center",
	},
	input: {
		margin: 10,
		paddingLeft: 20,
		width: 250,
		height: 40,
		borderWidth: 1,
		fontSize: 16,
	},
	error: {
		color: "red",
	},
	button: {
		marginTop: 30,
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

	textButton: {
		fontSize: 22,
		color: "#ffffff",
	},
})
