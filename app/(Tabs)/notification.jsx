import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

const Notif = () => {
  const notifications = [
    { name: 'Yato Madox', action: 'reacted on your post.', avatar: 'https://example.com/avatar1.png' },
    { name: 'Miray Kuni', action: 'commented on your post.', avatar: 'https://example.com/avatar2.png' },
    { name: 'Cecilia Baddox', action: 'reacted on your post.', avatar: 'https://example.com/avatar3.png' },
    { name: 'Fame Yoshi', action: 'joined your community.', avatar: 'https://example.com/avatar4.png' },
    { name: 'Ciel Faustus', action: 'created Ankoku Kishi community.', avatar: 'https://example.com/avatar5.png' },
    { name: 'Elizabeth Sutcliff', action: 'created Kuroi kage no kimono community.', avatar: 'https://example.com/avatar6.png' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.time}>03:00 AM</Text>

      <ScrollView contentContainerStyle={styles.notificationList}>
        {notifications.map((notification, index) => (
          <View key={index} style={styles.notificationItem}>
            <Image source={{ uri: notification.avatar }} style={styles.avatar} />
            <View style={styles.textContainer}>
              <Text style={styles.notificationText}>
                <Text style={styles.boldText}>{notification.name}</Text> {notification.action}
              </Text>
            </View>
          </View>
        ))}
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
  notificationList: {
    paddingBottom: 20,
  },
  notificationItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#d3d3d3',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  notificationText: {
    color: '#000',
    fontSize: 14,
  },
  boldText: {
    fontWeight: 'bold',
  },
});

export default Notif;
