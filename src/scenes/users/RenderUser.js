import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { fontSize, colors } from "../../theme";
import ReadMore from '@fawazahmed/react-native-read-more';

export default function RenderUser(props) {
  const { id, name, age, city, comment } = props.item

  return (
    <View>
      <Text style={styles.title}>id: {id}</Text>
      <Text style={styles.title}>name: {name}</Text>
      <Text style={styles.title}>age: {age}</Text>
      <Text style={styles.title}>city: {city}</Text>
      <ReadMore
        numberOfLines={3}
        style={styles.comment}
        seeMoreText="もっと読む"
        seeLessText="閉じる"
        seeMoreStyle={{color: colors.bluePrimary}}
        seeLessStyle={{color: colors.purple}}
      >
        {comment}
      </ReadMore>
      <View style={{width: '100%', backgroundColor: colors.gray, paddingVertical: 1}} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {

  },
  title: {
    fontSize: fontSize.xxxLarge
  },
  comment: {
    fontSize: fontSize.xLarge
  }
})