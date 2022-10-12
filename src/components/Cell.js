import React, { memo } from "react";
import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";

export const Cell = ({ post, onPress }) => {
  return (
    <TouchableOpacity
      style={[styles.postItem]}
      onPress={() => onPress(post?.url)}
    >
      <Image
        style={[styles.imageContainer, styles.image]}
        source={{ uri: post?.url }}
      />
      <View style={[styles.postContent]}>
        <Text style={[styles.title]}>{post?.name}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default memo(Cell);

const styles = StyleSheet.create({
  postItem: {
    flex: 1,
    borderRadius: 8,
    backgroundColor: "#eaa7d8",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 5,
    paddingTop: 5,
    marginVertical: 10,
    marginHorizontal: 5,
    minHeight: 200,
  },
  imageContainer: {
    flex: 9,
    minHeight: 150,
    borderRadius: 8,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  postContent: {
    flex: 9,
    alignItems: "center",
    paddingHorizontal: 5,
    paddingVertical: 5,
  },
  title: {
    fontSize: 14,
    fontWeight: "600",
    paddingHorizontal: 5,
    color: "#8a2183",
    textAlign: "center",
  },
});
