import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { FlatList, Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { categoriesData } from './catergories.mock';

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

        <View style={styles.categoriesContainer}>
          <Text style={styles.categoriesTitle}>Categories</Text>
          
          <FlatList data={categoriesData} renderItem={({item}) => (
            <View style={styles.catergoryItem}>
              <View>
              <Text style={styles.categoryName}>{item.name}</Text>
              <Text style={styles.catergoryDescription}>{item.description}</Text>
              </View>
              <Image source={item.img} />
            </View>
          )} 
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>

        <View style={styles.taskscontainer}>
          <Text style={styles.tasksTitle}></Text>
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
  },
  categoryItem: {
    backgroundColor: "#fff",
    marginRight: 20,
    padding: 20,
    borderRadius: 10,
    gap: 10,
  },
  categoryName: {
    fontSize: 18,
    fontWeight: "bold",
    letterSpacing: 1.25
  },
  taskscontainer: {
    gap: 20,
  },
  tasksTitle: {
    fontSize: 18,
    fontWeight: "bold",
    letterSpacing: 1.25,
  },
  tasksItem: {
    backgroundColor: "#fff",
    borderColor: "#e8d1ba",
    borderWidth: 1,
    marginRight: 20,
    padding: 20,
    borderRadius: 10,
    width: "100%",
    marginBottom: 20,
    justifyContent: "center",
    height: 150,
    gap: 10,
  },
});
