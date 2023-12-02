import React from "react";
import { View, ScrollView, StyleSheet, Dimensions, TouchableOpacity } from "react-native";
import AutoHeightImage from "react-native-auto-height-image";

const { width } = Dimensions.get('window')

export default function RenderImages(props) {
  const { images, onImagePress } = props

  return (
    <ScrollView horizontal={true}>
      {images.map((item, i) => {
        return (
          <TouchableOpacity
            key={i}
            onPress={() => onImagePress({url: item.url})}
          >
            <AutoHeightImage
              source={{uri: item.url}}
              width={width * 0.9}
              defaultSource={require('../../../assets/images/logo-lg.png')}
            />
          </TouchableOpacity>
        )
      })}
    </ScrollView>
  )
}