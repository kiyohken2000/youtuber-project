import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { colors, fontSize } from "../../theme";

export default function RenderItem(props) {
  const { item, onPress } = props

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.innerContainer}
        onPress={onPress}
      >
        <Text style={styles.title}>{item.title}</Text>
      </TouchableOpacity>
      <View style={styles.divider} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {

  },
  innerContainer: {
    paddingVertical: 10,
    paddingHorizontal: 10
  },
  divider: {
    width: '100%',
    height: 1,
    backgroundColor: colors.gray
  },
  title: {
    fontSize: fontSize.xxxLarge
  }
})