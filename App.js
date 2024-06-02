import React from 'react';
// import { StatusBar } from 'expo-status-bar';
import { FlatList, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { categoriesData } from './catergories.mock';
import { taskData } from './tasks.mock';

export default function App() {
  return (
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
          <View style={styles.searchInputContainer}>
            <TextInput
              placeholder='Search'
              style={styles.textInput}
            />
            <Image source={require("./assets/search_icon.png")} style={styles.searchIcon} />
          </View>
          <View style={styles.filterBtn}>
            <Image source={require("./assets/bx_slider.png")} />
          </View>
        </View>

        <View style={styles.categoriesContainer}>
          <Text style={styles.categoriesTitle}>Categories</Text>
          
          <FlatList data={categoriesData} renderItem={({item}) => (
            <View style={styles.categoryItem}>
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
          <Text style={styles.tasksTitle}>Ongoing Tasks</Text>
          <FlatList 
            data={taskData}
            renderItem={({item}) => (
              <View style={styles.tasksItem}>
                <View>
                  <Text style={styles.taskName}>{item.name}</Text>
                </View>
              </View>
            )}
            keyExtractor={(item) => item.id}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f7f0e8',
    padding: 12,
    gap: 20,
    top: 0,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  helloText: {
    fontSize: 32,
    fontWeight: "bold",
  },
  taskText: {
    fontSize: 12,
    fontWeight: "bold",
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
  searchInputContainer: {
    position: 'relative',
    width: '80%',
  },
  textInput: {
    backgroundColor: "#fff",
    width: "100%",
    height: 50,
    borderRadius: 10,
    padding: 10,
    paddingRight: 40,
  },
  searchIcon: {
    position: 'absolute',
    right: 10,
    top: 15,
    width: 20,
    height: 20,
  },
  filterBtn: {
    backgroundColor: "#f0522f",
    padding: 8,
    borderRadius: 10,
  },
  categoriesContainer: {
    gap: 10,
    top: 20,
  },
  categoriesTitle: {
    fontSize: 20,
    fontWeight: "bold",
    letterSpacing: 1.25,
  },
  catergoryDescription: {
    fontSize: 12,
  },
  categoryItem: {
    backgroundColor: "#FFF",
    marginRight: 20,
    padding: 20,
    borderRadius: 10,
    gap: 10,
  },
  categoryName: {
    fontSize: 16,
    fontWeight: "bold",
    letterSpacing: 1.25,
  },
  taskscontainer: {
    gap: 20,
    top: 30,
  },
  tasksTitle: {
    fontSize: 18,
    fontWeight: "bold",
    letterSpacing: 1.25,
  },
  taskName: {
    fontSize: 16,
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
