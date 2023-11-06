import React, { useState } from "react";
import { ScrollView, Text, StyleSheet, Dimensions, ImageBackground, View } from "react-native";
import { colors, fontSize } from "../../theme";
import ScreenTemplate from "../../components/ScreenTemplate";
import { useRoute } from "@react-navigation/native";
import RenderHtml from 'react-native-render-html';

const { width, height } = Dimensions.get('window')

export default function Content() {
  const route = useRoute()
  const { item } = route.params
  const {content, createdAt, id, publishedAt, revisedAt, thumbnail, title, updatedAt, video} = item

  return (
    <ScreenTemplate>
      <ScrollView style={styles.container}>
        <ImageBackground
          source={{uri: thumbnail.url}}
          resizeMode="cover"
          style={styles.image}
        >
          <Text style={styles.title}>{title}</Text>
        </ImageBackground>
        <View style={styles.body}>
          <RenderHtml
            contentWidth={width}
            source={{html: content}}
          />
        </View>
      </ScrollView>
    </ScreenTemplate>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: fontSize.xxxLarge,
    backgroundColor: colors.clearBlack,
    color: colors.white,
    textAlign: 'center'
  },
  body: {
    paddingHorizontal: 10,
  },
  image: {
    height: height * 0.3,
    alignItems: 'center',
    justifyContent: 'center'
  }
})