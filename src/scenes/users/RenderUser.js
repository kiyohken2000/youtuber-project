import React, { useState } from "react";
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity, Alert } from "react-native";
import { fontSize, colors } from "../../theme";
import ReadMore from '@fawazahmed/react-native-read-more';
import IconButtons from "./IconButtons";

const { width, height } = Dimensions.get('window')

export default function RenderUser(props) {
  const { id, name, age, city, comment, avatar } = props.item
  const [visible, setVisible] = useState(false)

  const onImagePress = () => {
    setVisible(!visible)
  }

  const onIconPress = ({iconName}) => {
    Alert.alert(
      `${iconName}が押されました`,
      '',
      [
        {text: '閉じる', onPress: () => console.log('on close')}
      ],
      { cancelable: false }
    )
  }

  return (
    <View>
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={onImagePress}
      >
        <Image
          source={{uri: avatar}}
          resizeMode='cover'
          style={styles.image}
        />
      </TouchableOpacity>
      <IconButtons
        onPress={onIconPress}
      />
      {visible?
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
        </View>
        :null
      }
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
  },
  buttonContainer: {
    alignItems: 'center',
    paddingVertical: 20
  },
  image: {
    width: width * 0.8,
    height: width * 0.8,
    borderRadius: 20
  }
})