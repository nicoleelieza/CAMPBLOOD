import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const Group = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.time}>03:00 AM</Text>
      <Text style={styles.header}>COMMUNITIES</Text>
      
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>KUROI KAGE NO IKIMONO</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>ANKOKU KISHI</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>MIDNIGHT MASQUERADE</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>CRIMSON VEIL COVEN</Text>
        </TouchableOpacity>

        <Text style={styles.scrollText}>SCROLL DOWN FOR MORE</Text>
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
  header: {
    textAlign: 'center',
    backgroundColor: '#d3d3d3',
    color: '#000',
    fontSize: 20,
    paddingVertical: 10,
    marginBottom: 20,
  },
  scrollContainer: {
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#E10087',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginBottom: 15,
    width: '100%',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
  scrollText: {
    color: '#fff',
    marginTop: 10,
  },
});

export default Group;
