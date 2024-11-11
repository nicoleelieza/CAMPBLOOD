// // import { StatusBar } from 'expo-status-bar';
// // import { StyleSheet, Text, View } from 'react-native';

// // export default function App() {
// //   return (
// //     <View style={styles.container}>
// //       <Text>WELCOME TO BLOODY HOUNDS!</Text>
// //       <StatusBar style="auto" />
// //     </View>
// //   );
  
// // }
// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     backgroundColor: '#fff',
// //     alignItems: 'center',
// //     justifyContent: 'center',
// //   },
// // });

// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
// import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Home from "./pages/Home";
// import Discover from "./pages/Discover";
// import Messages from "./pages/Messages";
// import Upload from "./pages/Upload";
// import Notifications from "./pages/Notifications";
// import Communities from "./pages/Communities";
// import Profile from "./pages/Profile";

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>WELCOME TO BLOODY HOUNDS!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
  
// }



// const App = () => {
//   return (
//     <Router>
//       <div className="min-h-screen bg-gray-900 text-gray-100">
//         <Navbar />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/discover" element={<Discover />} />
//           <Route path="/messages" element={<Messages />} />
//           <Route path="/upload" element={<Upload />} />
//           <Route path="/notifications" element={<Notifications />} />
//           <Route path="/communities" element={<Communities />} />
//           <Route path="/profile" element={<Profile />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// };

// export default App;

import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import { Slot, Stack, SplashScreen } from 'expo-router';
import { useFonts } from 'expo-font';

SplashScreen.preventAutoHideAsync(); // Ensure the splash screen does not auto-hide

const MainLayout = () => {
  // Load custom fonts
  const [fontsLoaded, error] = useFonts({
    "Taviraj-SemiBold": require("../assets/fonts/Taviraj-SemiBold.ttf"),
    "Taviraj-Black": require("../assets/fonts/Taviraj-Black.ttf"),
    "Taviraj-ExtraLight": require("../assets/fonts/Taviraj-ExtraLight.ttf"),
  });

  useEffect(() => {
    if (error) throw error;

    if (fontsLoaded) {
      SplashScreen.hideAsync(); // Hide splash screen when fonts are loaded
    }
  }, [fontsLoaded, error]);

  // Show nothing while fonts are loading
  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <Stack>
      {/* Define the stack screens */}
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Slot /> {/* This renders the appropriate screen depending on the route */}
    </Stack>
  );
};

export default MainLayout;