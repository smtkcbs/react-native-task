import { Alert, StyleSheet, View } from "react-native";
import React, { useEffect, useState } from "react";
import TableView from "../components/TableView";
import { getPostList } from "../controllers/PostController";
import ImageView from "../components/ImageView";
import Header from "../components/Header";

const HomeScreen = () => {
  const [posts, setPosts] = useState(null);
  const [visibleUrl, setVisibleUrl] = useState("");
  const [column, setColumn] = useState(1);

  const onPress = (url) => {
    setVisibleUrl(url);
  };
  useEffect(() => {
    initPostList();
  }, []);

  const initPostList = () => {
    getPostList()
      .then(({ result, message }) => {
        console.log(message);
        setPosts(result);
      })
      .catch((error) => {
        Alert.alert("ERROR", error.message);
      });
  };

  return (
    <View style={styles.container}>
      <Header column={column} onPress={(num) => setColumn(Number(num))} />
      <TableView posts={posts} column={column} onPress={onPress} />
      <ImageView visibleUrl={visibleUrl} onPress={onPress} />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
