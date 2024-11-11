import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Alert, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Link } from 'expo-router';
import hidden_eye from "../assets/icons/hidden_eye.png"; 
import eye from "../assets/icons/eye.png"; 

const SignUp = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSignUp = () => {
    if (firstName && lastName && username && email && password && dateOfBirth) {
      Alert.alert('Sign Up Successful', `Welcome, ${firstName}!`);
    } else {
      Alert.alert('Error', 'Please fill in all fields.');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image 
        source={require('../assets/images/wolf.png')}
        style={styles.image}
        resizeMode="contain"
      />
      <Text style={styles.headerText}>SIGN UP</Text>

      <TextInput
        style={styles.input}
        placeholder="First Name"
        value={firstName}
        onChangeText={setFirstName}
      />

      <TextInput
        style={styles.input}
        placeholder="Last Name"
        value={lastName}
        onChangeText={setLastName}
      />

      <TextInput
        style={styles.input}
        placeholder="Date of Birth (YYYY-MM-DD)"
        value={dateOfBirth}
        onChangeText={setDateOfBirth}
        keyboardType="default"
      />

      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      {/* Password Input with Show/Hide Toggle */}
      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.passwordInput}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={!showPassword} // Toggle visibility
        />
        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
          <Image
            source={showPassword ? eye : hidden_eye}
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleSignUp}>
        <Text style={styles.buttonText}>SIGN UP</Text>
      </TouchableOpacity>

      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Already have an account?
        </Text>
        <Link 
          href="/signin"
          style={styles.link}
        >
          Sign In
        </Link>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#001F3F',
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  headerText: {
    fontSize: 24,
    marginBottom: 20,
    color: 'white',
  },
  input: {
    width: '100%',
    padding: 10,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    backgroundColor: '#fff',
    marginBottom: 15,
    paddingRight: 10,
  },
  passwordInput: {
    flex: 1,
    padding: 10,
  },
  icon: {
    width: 24,
    height: 24,
    tintColor: '#ccc',
  },
  button: {
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 20,
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
    textAlign: 'center',
  },
  footer: {
    marginTop: 20,
    alignItems: 'center',
  },
  footerText: {
    color: 'white',
  },
  link: {
    color: '#00BFFF',
    textDecorationLine: 'underline',
    marginTop: 5,
  },
});

export default SignUp;
