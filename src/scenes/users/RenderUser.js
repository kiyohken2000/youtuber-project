import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { fontSize, colors } from "../../theme";

export default function RenderUser(props) {
  const { id, name, age, city } = props.item

  return (
    <View>
      <Text style={styles.title}>id: {id}</Text>
      <Text style={styles.title}>name: {name}</Text>
      <Text style={styles.title}>age: {age}</Text>
      <Text style={styles.title}>city: {city}</Text>
      <View style={{width: '100%', backgroundColor: colors.gray, paddingVertical: 1}} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {

  },
  title: {
    fontSize: fontSize.xxxLarge
  }
})