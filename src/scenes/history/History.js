import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { fontSize } from "../../theme";

export default function History() {
  const navigation = useNavigation()

  const onButtonPress = ({num}) => {
    navigation.navigate('Lyrics', {pressedNum: num})
  }

  return (
    <View styles={styles.container}>
      <Text>これはHistory画面です</Text>
      <TouchableOpacity
        onPress={() => onButtonPress({num: 1})}
      >
        <Text style={styles.buttonTitle}>私は1を押しました</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => onButtonPress({num: 2})}
      >
        <Text style={styles.buttonTitle}>私は2を押しました</Text>
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
  buttonTitle: {
    fontSize: fontSize.xxxLarge
  }
})