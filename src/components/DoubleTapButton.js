import React, { useRef } from "react";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";
import { fontSize, colors } from "../theme";

export default function DoubleTapButton(props) {
  const { label, color, disable, labelColor, labelBold, height, onSinglePress, onDoublePress, onLongPress } = props
  const lastTapTimeRef = useRef(null)

  const handleTap = () => {
    const now = new Date().getTime()
    const DOUBLE_TAP_DELAY = 500
    if(now - lastTapTimeRef.current < DOUBLE_TAP_DELAY) {
      onDoublePress()
    } else {
      onSinglePress()
    }
    lastTapTimeRef.current = now
  }

  if(disable) {
    return (
      <View
        style={[styles.button, { backgroundColor: color, opacity: 0.3, height: height?height:48 }]}
      >
        <Text style={[styles.buttonText, { color: labelColor, fontWeight: labelBold?'700':'500' }]}>{label}</Text>
      </View>
    )
  }
  
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: color, height: height?height:48 }]}
      onPress={handleTap}
      onLongPress={onLongPress}
    >
      <Text style={[styles.buttonText, { color: labelColor, fontWeight: labelBold?'700':'500' }]}>{label}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 5,
    alignItems: "center",
    justifyContent: 'center'
  },
  buttonText: {
    fontSize: fontSize.large
  },
})