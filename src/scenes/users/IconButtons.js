import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { colors } from "../../theme";
import FontIcon from 'react-native-vector-icons/Ionicons'

export default function IconButtons(props) {
  const { onPress } = props

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.button, {backgroundColor: colors.bluePrimary}]}
        onPress={() => onPress({iconName: 'ハート'})}
      >
        <FontIcon
          name="heart"
          color={colors.white}
          size={40}
        />
      </TouchableOpacity>
      <View style={styles.space} />
      <TouchableOpacity
        style={[styles.button, {backgroundColor: colors.purple}]}
        onPress={() => onPress({iconName: 'スター'})}
      >
        <FontIcon
          name="star"
          color={colors.white}
          size={40}
        />
      </TouchableOpacity>
      <View style={styles.space} />
      <TouchableOpacity
        style={[styles.button, {backgroundColor: colors.darkPurple}]}
        onPress={() => onPress({iconName: 'プレイ'})}
      >
        <FontIcon
          name="play"
          color={colors.white}
          size={40}
        />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingRight: 10
  },
  button: {
    width: 60,
    height: 60,
    borderRadius: 60/2,
    alignItems: 'center',
    justifyContent: 'center'
  },
  space: {
    paddingHorizontal: 5
  }
})