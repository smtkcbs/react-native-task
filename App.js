import React from "react";
import { SafeAreaView, StatusBar, StyleSheet } from "react-native";
import HomeScreen from "./src/screen/HomeScreen";

const App = () => {
  return (
    <>
      <SafeAreaView style={styles.flexContainer}>
        <HomeScreen />
      </SafeAreaView>
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  flexContainer: {
    flex: 1,
    backgroundColor: "#391E46",
    paddingTop: StatusBar.currentHeight || 0,
  },
});
