import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { Link } from 'expo-router'; // Assuming you are using Expo Router for navigation

const Chat = () => {
  return (
    <View style={styles.container}>
      {/* Header with Time */}
      <View style={styles.header}>
        <Text style={styles.time}>03:00 AM</Text>
      </View>

      {/* Chat Messages */}
      <ScrollView style={styles.chatContainer}>
        <View style={styles.chatMessage}>
          <Image source={{ uri: 'https://example.com/user1.jpg' }} style={styles.profileImage} />
          <View style={styles.chatBubble}>
            <Text style={styles.chatText}>hey boo how are you doing?</Text>
          </View>
        </View>

        <View style={styles.chatMessage}>
          <Image source={{ uri: 'https://example.com/user2.jpg' }} style={styles.profileImage} />
          <View style={styles.chatBubble}>
            <Text style={styles.chatText}>Do you have an update about some merch?</Text>
          </View>
        </View>

        <View style={styles.chatMessage}>
          <Image source={{ uri: 'https://example.com/user3.jpg' }} style={styles.profileImage} />
          <View style={styles.chatBubble}>
            <Text style={styles.chatText}>I have this new antique collection interested?</Text>
          </View>
        </View>

        <View style={styles.chatMessage}>
          <Image source={{ uri: 'https://example.com/user4.jpg' }} style={styles.profileImage} />
          <View style={styles.chatBubble}>
            <Text style={styles.chatText}>I missed you, wish you were here with me :&lt;</Text>
          </View>
        </View>

        <View style={styles.chatMessage}>
          <Image source={{ uri: 'https://example.com/user5.jpg' }} style={styles.profileImage} />
          <View style={styles.chatBubble}>
            <Text style={styles.chatText}>I made goth cookies, do you want some?</Text>
          </View>
        </View>

        <View style={styles.chatMessage}>
          <Image source={{ uri: 'https://example.com/user6.jpg' }} style={styles.profileImage} />
          <View style={styles.chatBubble}>
            <Text style={styles.chatText}>Do you sell some goth inspired cups?</Text>
          </View>
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.navBar}>
        <Link href="/home">
          <Text style={styles.navIcon}>🏠</Text>
        </Link>
        <Link href="/chat">
          <Text style={styles.navIcon}>💬</Text>
        </Link>
        <Link href="/add">
          <Text style={styles.navIcon}>➕</Text>
        </Link>
        <Link href="/notifications">
          <Text style={styles.navIcon}>🔔</Text>
        </Link>
        <Link href="/profile">
          <Text style={styles.navIcon}>👥</Text>
        </Link>
      </View>

      {/* CHAT Component */}
      <View style={styles.chatComponent}>
        <Text style={styles.chatComponentText}>CHAT</Text>
      </View>
    </View>
  );
};

export default Chat;

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
  chatContainer: {
    flex: 1,
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  chatMessage: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  chatBubble: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 20,
    maxWidth: '70%',
  },
  chatText: {
    color: 'black',
  },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#de99d8',
    paddingVertical: 10,
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  navIcon: {
    fontSize: 24,
    color: 'black',
  },
  chatComponent: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#333',
  },
  chatComponentText: {
    color: 'white',
    fontSize: 20,
  },
});