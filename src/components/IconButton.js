import { Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

const IconButton = ({ selected, uri, onPress }) => {
  return (
    <TouchableOpacity
      style={[styles.buttonStyle, selected && styles.selectedButton]}
      onPress={onPress}
    >
      <Image
        style={styles.icon}
        source={{
          uri: uri,
        }}
      />
    </TouchableOpacity>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  icon: {
    height: 25,
    width: 25,
  },
  buttonStyle: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#C367F0",
    borderWidth: 1,
    borderRadius: 8,
    marginHorizontal: 3,
    opacity: 0.5,
  },
  selectedButton: {
    opacity: 1,
  },
});
