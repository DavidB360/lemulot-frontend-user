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
						navigation.navigate("Connection")
					} else {
						setEmailError(true)
					}
				})
		}
	}

	return (
		<KeyboardAvoidingView
			style={styles.container}
			behavior={Platform.OS === "ios" ? "padding" : "height"}
		>
			<TouchableOpacity
				//onPress={() => handleSubmit()}
				style={styles.btnHelp}
				activeOpacity={0.8}
			>
				<Text>?</Text>
			</TouchableOpacity>
			<Text style={styles.title}>Inscription</Text>

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
				<TextInput
					onChangeText={(value) => setLastName(value)}
					value={lastName}
					placeholder="Last name"
					style={styles.input}
				/>
				<TextInput
					onChangeText={(value) => setFirstName(value)}
					value={firstName}
					placeholder="First name"
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
					placeholder="City"
					style={styles.input}
				/>
				<TextInput
					onChangeText={(value) => setPhoneNumber(value)}
					value={phoneNumber}
					placeholder="Numero de telephone"
					style={styles.input}
				/>
				{emailError && (
					<Text style={styles.error}>Email ou mot de passe incorrect.</Text>
				)}
				<TouchableOpacity
					onPress={() => handleSignUp()}
					style={styles.button}
					activeOpacity={0.8}
				>
					<Text style={styles.textButton}>S'inscrire</Text>
				</TouchableOpacity>
			</View>
		</KeyboardAvoidingView>
	)
}

const styles = StyleSheet.create({
	background: {
		width: "100%",
		height: "100%",
	},
	container: {
		flex: 1,
		backgroundColor: "white",
	},
	title: {
		fontSize: 40,
		marginBottom: 20,
	},
	inputContainer: {
		margin: 20,
		alignItems: "center",
		justifyContent: "center",
	},
	input: {
		margin: 12,
		paddingLeft: 20,
		width: 250,
		height: 40,
		borderWidth: 1,
		fontSize: 16,
	},
	button: {
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "#5db194",
		borderBottomWidth: 8,
		borderLeftWidth: 3,
		borderRightWidth: 3,
		borderRadius: 10,
		borderStyle: "solid",
		borderColor: "#a9a9a9",
		width: 300,
		height: 60,
	},
	textButton: {
		height: 30,
		fontSize: 22,
		color: "#fff",
	},
	error: {
		color: "red",
	},
	btnHelp: {
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "#fffb00",
		borderBottomWidth: 4,
		borderLeftWidth: 2,
		borderRightWidth: 2,
		borderRadius: 30,
		borderStyle: "solid",
		borderColor: "#a9a9a9",
		width: 55,
		height: 55,
		color: "#fff",
		fontSize: 22,
		shadowOffset: {
			width: -10,
			height: 12,
		},
		shadowOpacity: 0.58,
		shadowRadius: 16.0,
		elevation: 25,
	},
})
