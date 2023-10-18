import React from "react";
import { View, StyleSheet, Text } from "react-native";
import ScreenTemplate from "../../components/ScreenTemplate";
import { useRoute } from "@react-navigation/native";
import { WebView } from 'react-native-webview';

export default function Web() {
  const route = useRoute()
  const { link } = route.params

  return (
    <ScreenTemplate>
      <WebView
        style={styles.container}
        source={{ uri: link }}
      />
    </ScreenTemplate>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})