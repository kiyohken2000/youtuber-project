import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { fontSize, colors } from "../../theme";

export default function Play() {
  const navigation = useNavigation()

  const onButtonPress = () => {
    navigation.navigate('History')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>これはPlay画面です</Text>
      <TouchableOpacity
        onPress={onButtonPress}
      >
        <Text style={styles.buttonTitle}>History画面へ</Text>
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
  },
  buttonTitle: {
    fontSize: fontSize.xxxLarge,
    color: colors.purple,
    fontWeight: '700'
  }
})