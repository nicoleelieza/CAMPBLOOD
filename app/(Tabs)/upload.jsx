import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

const Upload = () => {
  return (
    <View style={styles.container}>
      {/* Header with time */}
      <View style={styles.header}>
        <Text style={styles.time}>03:00 AM</Text>
      </View>

      {/* Main large image */}
      <View style={styles.mainImage}>
        <Image
          source={{ uri: 'https://example.com/large-image.jpg' }}
          style={styles.largeImage}
        />
      </View>

      {/* Row of smaller images */}
      <ScrollView horizontal={true} contentContainerStyle={styles.imageRow}>
        <Image source={{ uri: 'https://example.com/small-image1.jpg' }} style={styles.smallImage} />
        <Image source={{ uri: 'https://example.com/small-image2.jpg' }} style={styles.smallImage} />
        <Image source={{ uri: 'https://example.com/small-image3.jpg' }} style={styles.smallImage} />
        <Image source={{ uri: 'https://example.com/small-image4.jpg' }} style={styles.smallImage} />
      </ScrollView>

      {/* UPLOAD component */}
      <View style={styles.upload}>
        <Text style={styles.uploadText}>UPLOAD</Text>
      </View>
    </View>
  );
};

export default Upload;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  header: {
    backgroundColor: '#4a0e0e',
    padding: 15,
    position: 'relative',
  },
  time: {
    color: 'white',
    fontSize: 16,
    position: 'absolute',
    left: 10,
    top: 10,
  },
  mainImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  largeImage: {
    width: '90%',
    height: 300,
    borderRadius: 10,
  },
  imageRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
  smallImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginHorizontal: 5,
  },
  upload: {
    alignItems: 'center',
    padding: 20,
  },
  uploadText: {
    color: 'white',
    fontSize: 20,
  },
});


