import React from "react";
import { Text, View } from "react-native";

export default function StartGameScreen({ navigation }) {
  return (
    <View
      onSwipeFromLeft={() => navigation.goBack()}
      style={{ alignItems: "center", justifyContent: "center", flex: 1 }}
    >
      <Text
        style={{
          fontWeight: "bold",
          fontSize: 30,
          textAlign: "center",
          padding: 50,
        }}
      >
        Enter players:
      </Text>
    </View>
  );
}
