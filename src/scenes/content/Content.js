import React, { useState } from "react";
import { ScrollView, Text, StyleSheet, Dimensions } from "react-native";
import { colors, fontSize } from "../../theme";
import ScreenTemplate from "../../components/ScreenTemplate";
import { useRoute } from "@react-navigation/native";
import RenderHtml from 'react-native-render-html';

const { width } = Dimensions.get('window')

export default function Content() {
  const route = useRoute()
  const { item } = route.params

  return (
    <ScreenTemplate>
      <ScrollView style={styles.container}>
        <Text style={styles.title}>{item.title}</Text>
        <RenderHtml
          contentWidth={width}
          source={{html: item.content}}
        />
      </ScrollView>
    </ScreenTemplate>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10
  },
  title: {
    fontSize: fontSize.xxxLarge
  }
})