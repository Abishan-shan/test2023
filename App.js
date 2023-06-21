import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { CreateApi, ReadApi } from "./src/MyApiFetching";

import { useEffect, React, useState } from "react";

export default function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getData();
    CreateData();
  }, []);

  const getData = async () => {
    const data = await ReadApi();

    setItems(data);
    console.log(data);
  };

  const CreateData = async () => {


    const data={
      title: "computer science",
        body: "bar choclate",
        userId: 50,
    };


    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((res) => console.log('data should be:',res))
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <View style={styles.container}>
      {items.map((bar, index) => {
        return (
          <View key={index}>
            <Text>id:{bar.id} </Text>
            <Text>title:{bar.title} </Text>
          </View>
        );
      })}

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
