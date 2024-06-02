import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function App() {
  return (
    // <SafeAreaView>
    <View style={styles.safeArea}>
      <View style={styles.mainContainer}>
        <View style={styles.header}>
          <View>
            <Text style={styles.helloText}>Hello, Devs</Text>
            <Text style={styles.taskText}>14 tasks today</Text>
          </View>

          <TouchableOpacity style={styles.profileBtn}>
            <Image source={require("./assets/person.png")} />
          </TouchableOpacity>
        </View>

        <View style={styles.searchContainer}>
          <TextInput
            placeholder='Search'
            style={styles.textInput}
          />
          <View style={styles.filterBtn}>
            <Image source={require("./assets/bx_slider.png")} />
          </View>
        </View>

        <View>
          
        </View>
      </View>
    </View>
    // </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f7f0e8',
    padding: 12,
    gap: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  helloText: {
    fontSize: 24,
    fontWeight: "bold",
  },
  taskText: {
    fontSize: 14,
    fontWeight: "normal",
  },
  profileBtn: {
    backgroundColor: "#fff",
    borderRadius: 50,
    padding: 8,
  },
  searchContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    top: 10
  },
  textInput: {
    backgroundColor: "#fff",
    width: "80%",
    height: 50,
    borderRadius: 10,
    padding: 5,
  },
  filterBtn: {
    backgroundColor: "#f0522f",
    padding: 8,
    borderRadius: 10,
  },
  categoriesContainer: {
    gap: 10,
  },
  categoriesTitle: {
    fontSize: 18,
    fontWeight: "bold",
    letterSpacing: 1.25,
  }
});
