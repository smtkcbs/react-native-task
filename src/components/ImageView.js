import React from "react";

import { Modal, StyleSheet, Image, TouchableOpacity } from "react-native";

const ImageView = ({ visibleUrl, onPress }) => {
  return (
    <Modal visible={visibleUrl !== ""}>
      <TouchableOpacity style={styles.centeredView} onPress={() => onPress("")}>
        <Image style={styles.imageStyle} source={{ uri: visibleUrl }} />
      </TouchableOpacity>
    </Modal>
  );
};

export default ImageView;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#2c2626",
    justifyContent: "center",
  },
  imageStyle: {
    width: "100%",
    resizeMode: "contain",
    aspectRatio: 0.7,
  },
});
