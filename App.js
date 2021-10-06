import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, SafeAreaView} from 'react-native';

const Item = (props) => {
  return(
    <View>
      <Text>{props.text}</Text>
    </View>
  )
}


export default function App() {

  const AppData = [
    {id: 1, name: "Apple"}, 
    {id: 2, name: "Orange"},
    {id: 3, name: "Banana"},
    {id: 4, name: "Blueberry"},
    {id: 5, name: "Strawberry"},
    {id: 6, name: "Strawberry"}
  ]

  const Renderer = ({item}) => (<Item text = {item.name} />)

  return (
    <View style={styles.container}>
      <Text>hello there!</Text>
      <FlatList data={AppData} keyExtractor= {(item) => item.id } renderItem = {Renderer} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    margin: 50
  },
});
