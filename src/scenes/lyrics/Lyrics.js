import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import { fontSize } from "../../theme";

export default function Lyrics() {
  const route = useRoute()
  const navigation = useNavigation()
  const params = route.params
  const { pressedNum } = params

  const onBackPress = () => {
    navigation.goBack()
  }

  return (
    <View styles={styles.container}>
      <Text>これはLyrics画面です</Text>
      <Text style={styles.title}>前の画面では{pressedNum}を押しました</Text>
      <TouchableOpacity
        onPress={onBackPress}
      >
        <Text style={styles.title}>戻る</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: fontSize.xxxLarge
  }
})