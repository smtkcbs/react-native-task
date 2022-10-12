import { StyleSheet, View } from "react-native";
import React from "react";
import IconButton from "../components/IconButton";

const Header = ({ column, onPress }) => {
  return (
    <View style={styles.container}>
      <IconButton
        style={[styles.row, column === 1 && styles.selectedRow]}
        uri="https://img.icons8.com/material-rounded/48/e8c4f9/rows.png"
        selected={column === 1}
        onPress={() => onPress(1)}
      />
      <IconButton
        style={[styles.row, column === 1 && styles.selectedRow]}
        uri="https://img.icons8.com/material-rounded/48/e8c4f9/health-data.png"
        selected={column === 2}
        onPress={() => onPress(2)}
      />
      <IconButton
        style={[styles.row, column === 1 && styles.selectedRow]}
        uri="https://img.icons8.com/material-rounded/48/e8c4f9/view-module.png"
        selected={column === 3}
        onPress={() => onPress(3)}
      />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    height: 35,
    flexDirection: "row",
    marginHorizontal: 10,
    marginVertical: 5,
  },
});
