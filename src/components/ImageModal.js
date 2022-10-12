import React from "react";

import { Modal, StyleSheet, Image, TouchableOpacity } from "react-native";

const ImageModal = ({ visibleUrl, onPress }) => {
  return (
    <Modal visible={visibleUrl !== null}>
      <TouchableOpacity
        style={styles.centeredView}
        onPress={() => onPress(null)}
      >
        <Image style={styles.imageStyle} source={{ uri: visibleUrl }} />
      </TouchableOpacity>
    </Modal>
  );
};

export default ImageModal;

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
