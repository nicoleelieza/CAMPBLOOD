import React from 'react';
import { View, Text, StyleSheet, TextInput, Image, ScrollView } from 'react-native';

const Discover = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.time}>03:00 AM</Text>
      </View>

      {/* Search Bar */}
      <View style={styles.searchBar}>
        <TextInput style={styles.input} placeholder="Search" placeholderTextColor="#666" />
      </View>

      {/* Image Grid */}
      <ScrollView contentContainerStyle={styles.imageGrid}>
        <Image source={{ uri: 'https://example.com/image1.jpg' }} style={styles.image} />
        <Image source={{ uri: 'https://example.com/image2.jpg' }} style={styles.image} />
        <Image source={{ uri: 'https://example.com/image3.jpg' }} style={styles.image} />
        <Image source={{ uri: 'https://example.com/image4.jpg' }} style={styles.image} />
      </ScrollView>
    </View>
  );
};

export default Discover;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3e1a1a',
  },
  header: {
    backgroundColor: '#4a0e0e',
    padding: 15,
  },
  time: {
    color: 'white',
    fontSize: 16,
  },
  searchBar: {
    padding: 10,
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    fontSize: 16,
  },
  imageGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 10,
  },
  image: {
    width: '48%',
    height: 200,
    marginBottom: 10,
    borderRadius: 10,
  },
});
