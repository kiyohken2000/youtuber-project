import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { colors, fontSize } from "../../theme";
import ScreenTemplate from "../../components/ScreenTemplate";
import { useRoute } from "@react-navigation/native";

export default function Content() {
  const route = useRoute()
  const { item } = route.params

  return (
    <ScreenTemplate>
      <View style={styles.container}>
        <Text style={styles.title}>{item.title}</Text>
        <Text>{item.content}</Text>
      </View>
    </ScreenTemplate>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  title: {
    fontSize: fontSize.xxxLarge
  }
})