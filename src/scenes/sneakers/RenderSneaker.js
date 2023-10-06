import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { fontSize, colors } from "../../theme";

export default function RenderSneaker(props) {
  const { sneaker, onPress } = props
  const { id, brand, colorway, gender, media, releaseDate, retailPrice, styledId, title, year } = sneaker
  const { thumbUrl } = media

  return (
    <View>
      <TouchableOpacity
        style={styles.container}
        onPress={onPress}
      >
        <View style={{flex: 1}}>
          <Image
            source={{uri: thumbUrl}}
            resizeMode='contain'
            style={{width: 100, height: 100}}
          />
        </View>
        <View style={{flex: 2}}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.caption}>{colorway}</Text>
          <View style={styles.brandContainer}>
            <Text style={styles.brand}>{brand}</Text>
          </View>
        </View>
      </TouchableOpacity>
      <View style={{width: '100%', backgroundColor: colors.gray, paddingVertical: 1}} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    flexDirection: 'row'
  },
  title: {
    fontSize: fontSize.xxxLarge,
    fontWeight: '700'
  },
  caption: {
    fontSize: fontSize.xLarge,
    color: colors.grayPrimary
  },
  brand: {
    fontSize: fontSize.xxLarge,
    color: colors.white
  },
  brandContainer: {
    backgroundColor: colors.bluePrimary,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20
  }
})