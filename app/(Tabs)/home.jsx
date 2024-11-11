import React from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';

const FeedScreen = () => {
  return (
    <View style={styles.container}>
      {/* Top Bar */}
      <View style={styles.topBar}>
        <Text style={styles.timeText}>03:00 AM</Text>
      </View>

      {/* What's Happening Section */}
      <View style={styles.happeningSection}>
        <TextInput
          style={styles.textInput}
          placeholder="What's Happening?"
          placeholderTextColor="black"
        />
      </View>

      {/* Posts Feed */}
      <ScrollView style={styles.postsFeed}>
        {/* First Post */}
        <View style={styles.postContainer}>
          <Image
            source={{ uri: 'https://example.com/profile1.jpg' }}  // Add your avatar image
            style={styles.avatar}
          />
          <View style={styles.postContent}>
            <Text style={styles.postText}>Anyone knows where to buy some antique merch?</Text>
            <View style={styles.postActions}>
              <Text style={styles.likedByText}>LIKED BY ELIE VILE</Text>
              <TouchableOpacity style={styles.commentButton}>
                <Text style={styles.commentIcon}>💬</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Image Thumbnails */}
        <View style={styles.thumbnailsContainer}>
          <Image
            source={{ uri: 'https://example.com/thumb1.jpg' }}  // Replace with thumbnail image
            style={styles.thumbnail}
          />
          <Image
            source={{ uri: 'https://example.com/thumb2.jpg' }}  // Replace with thumbnail image
            style={styles.thumbnail}
          />
          <Image
            source={{ uri: 'https://example.com/thumb3.jpg' }}  // Replace with thumbnail image
            style={styles.thumbnail}
          />
          <Image
            source={{ uri: 'https://example.com/thumb4.jpg' }}  // Replace with thumbnail image
            style={styles.thumbnail}
          />
        </View>

        {/* More Posts and Thumbnails */}
        {/* Add similar blocks to display more posts */}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7F1D1D',  // Red-900 equivalent
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    padding: 10,
  },
  timeText: {
    color: '#FFFFFF',
    fontSize: 18,
  },
  happeningSection: {
    backgroundColor: '#81E6D9',  // Teal-200 equivalent
    borderRadius: 999,
    margin: 10,
    padding: 15,
  },
  textInput: {
    color: '#000000',
  },
  postsFeed: {
    flex: 1,
    padding: 10,
  },
  postContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 15,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
  },
  postContent: {
    marginLeft: 15,
    backgroundColor: '#4FD1C5',  // Teal-400 equivalent
    padding: 10,
    borderRadius: 10,
  },
  postText: {
    color: '#FFFFFF',
  },
  postActions: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  likedByText: {
    color: '#EF4444',  // Red-500 equivalent
    fontSize: 12,
    fontWeight: 'bold',
  },
  commentButton: {
    marginLeft: 10,
  },
  commentIcon: {
    color: '#000000',
  },
  thumbnailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 15,
  },
  thumbnail: {
    width: 64,
    height: 64,
    borderRadius: 10,
  },
});

export default FeedScreen;
