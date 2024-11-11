import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Link } from 'expo-router';

export default function App() {
  return (
    <View style={styles.container}>
      {/* Welcome message with larger font size */}
      <Text style={styles.welcomeText}>WELCOME CHILD OF NIGHT!</Text>

      <View style={styles.header}>
        <Text style={styles.headerText}>CAMP BLOOD</Text>
      </View>

      <Image
        source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkLxxyaM5lk4OXAC2btm3-CqjjubHEWAXHtQMZ5BlbCjfjy85V' }}
        style={styles.image}
        resizeMode="cover"
      />

      <View style={styles.buttonContainer}>
        {/* Smaller Sign In and Sign Up buttons */}
        <Link href="/signin" style={styles.smallButton}>
          SIGN IN
        </Link>
        <Link href="/signup" style={styles.smallButton}>
          SIGN UP
        </Link>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#A5A3F3',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  welcomeText: {
    color: 'black',
    fontSize: 20, // Larger font size for emphasis
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  header: {
    marginBottom: 20,
    alignItems: 'center',
  },
  headerText: {
    color: 'black',
    fontSize: 24,
    fontWeight: 'bold',
  },
  image: {
    width: '70%',
    height: 200,
    marginBottom: 20,
    borderRadius: 20,
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
  },
  smallButton: {
    backgroundColor: 'black',
    color: 'white',
    paddingVertical: 6,
    paddingHorizontal: 14,
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 8,
    borderRadius: 5,
    width: '40%', // Adjust width to fit the content
    maxWidth: 150, // Optional max-width for smaller screens
  },
});

// SignIn Component
const SignIn = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>SIGN IN</Text>
      {/* Add your sign-in form here */}
    </View>
  );
};

// SignUp Component
const SignUp = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>SIGN UP</Text>
      {/* Add your sign-up form here */}
    </View>
  );
};

export { SignIn, SignUp };
