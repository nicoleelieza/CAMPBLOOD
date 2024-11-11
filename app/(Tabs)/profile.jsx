import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

const Profile = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.time}>03:00 AM</Text>

      {/* Profile info section */}
      <View style={styles.profileSection}>
        <Image
          source={{ uri: 'https://example.com/profile-image.png' }} // replace with actual image URI
          style={styles.profileImage}
        />
        <View style={styles.profileStats}>
          <Text style={styles.statsText}>5M FOLLOWERS</Text>
          <Text style={styles.statsText}>150 POSTS</Text>
        </View>
      </View>

      {/* Welcome message */}
      <View style={styles.welcomeSection}>
        <Text style={styles.welcomeText}>HELLO!</Text>
        <Text style={styles.welcomeText}>Welcome to my Page :)</Text>
      </View>

      {/* Image gallery section */}
      <ScrollView contentContainerStyle={styles.gallerySection}>
        <Image source={{ uri: 'https://example.com/image1.png' }} style={styles.galleryImage} />
        <Image source={{ uri: 'https://example.com/image2.png' }} style={styles.galleryImage} />
        <Image source={{ uri: 'https://example.com/image3.png' }} style={styles.galleryImage} />
        <Image source={{ uri: 'https://example.com/image4.png' }} style={styles.galleryImage} />
        <Image source={{ uri: 'https://example.com/image5.png' }} style={styles.galleryImage} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25010B',
    padding: 20,
  },
  time: {
    textAlign: 'center',
    color: '#F2ECE4',
    fontSize: 18,
    marginBottom: 10,
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 10,
  },
  profileStats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
  },
  statsText: {
    backgroundColor: '#d3d3d3',
    padding: 10,
    borderRadius: 10,
    textAlign: 'center',
    fontSize: 14,
    color: '#000',
  },
  welcomeSection: {
    backgroundColor: '#d3d3d3',
    paddingVertical: 15,
    borderRadius: 10,
    marginBottom: 20,
    alignItems: 'center',
  },
  welcomeText: {
    color: '#000',
    fontSize: 16,
  },
  gallerySection: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  galleryImage: {
    width: '48%',
    height: 120,
    borderRadius: 10,
    marginBottom: 10,
  },
});

export default Profile;
