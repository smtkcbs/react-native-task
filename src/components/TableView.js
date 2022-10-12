import React from "react";
import { ActivityIndicator, FlatList, StyleSheet, View } from "react-native";
import Cell from "./Cell";
import EmptyList from "./EmptyList";

const TableView = ({ posts, column = 1, onPress }) => {
  const renderItem = ({ item }) => <Cell post={item} onPress={onPress} />;
  const emptyList = () => {
    return posts === null ? (
      <ActivityIndicator size="large" color="#0000ff" />
    ) : (
      <EmptyList />
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        key={column}
        numColumns={column}
        columnWrapperStyle={column === 1 ? null : styles.row}
        ListEmptyComponent={emptyList}
        data={posts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
      />
    </View>
  );
};

export default TableView;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flex: 1,
    marginHorizontal: 20,
  },
  row: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
  },
});
