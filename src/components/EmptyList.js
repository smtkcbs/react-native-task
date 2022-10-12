import { StyleSheet, Text, View } from "react-native";
import React from "react";

const EmptyList = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.emptyListText}>Empty List</Text>
    </View>
  );
};

export default EmptyList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  emptyListText: {
    color: "gray",
    textAlign: "center",
    fontSize: 12,
  },
});
