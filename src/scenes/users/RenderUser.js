import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity, Alert, TextInput, TouchableWithoutFeedback, Keyboard } from "react-native";
import { fontSize, colors } from "../../theme";
import ReadMore from '@fawazahmed/react-native-read-more';
import IconButtons from "./IconButtons";
import { generateData } from "./functions";
import Selector from "../../components/Selector";
import Button from "../../components/Button";
import { useNavigation } from "@react-navigation/native";
import * as Linking from 'expo-linking';

const { width, height } = Dimensions.get('window')

export default function RenderUser(props) {
  const { id, name, age, city, comment, avatar, link } = props.item
  const navigation = useNavigation()
  const [visible, setVisible] = useState(false)
  const [count, setCount] = useState('')
  const [text, setText] = useState('')
  const selectorData = generateData()

  const onImagePress = () => {
    setVisible(!visible)
  }

  const onIconPress = ({iconName}) => {
    showAlert({title: `${iconName}が押されました`})
  }

  const showAlert = ({title}) => {
    Alert.alert(
      title,
      '',
      [
        {text: '閉じる', onPress: () => console.log('on close')}
      ],
      { cancelable: false }
    )
  }

  const onChangeText = (text) => {
    setText(text)
  }

  const onButtonPress = () => {
    showAlert({title: text})
  }

  const onGoWebPress = () => {
    navigation.navigate('Web', { link })
  }

  const onLinkPress = () => {
    Linking.openURL(link)
  }

  return (
    <TouchableWithoutFeedback
      onPress={() => Keyboard.dismiss()}
    >
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
      <View style={{flexDirection: 'row'}}>
        <View style={{flex: 1, justifyContent: 'center', paddingLeft: 10}}>
          <Selector
            selectorData={selectorData}
            current={count}
            setCurrent={setCount}
          />
        </View>
        <View style={{flex: 1}}>
          <IconButtons
            onPress={onIconPress}
          />
        </View>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          value={text}
          onChangeText={onChangeText}
          maxLength={8}
          style={styles.textBox}
        />
        <View style={styles.space} />
        <Button
          label='入力した文字を表示'
          onPress={onButtonPress}
          color={colors.bluePrimary}
          disable={text.length <= 3}
          labelColor={colors.white}
          labelBold={true}
        />
        <View style={styles.space} />
        <Button
          label='アプリ内ブラウザで開く'
          onPress={onGoWebPress}
          color={colors.pink}
          disable={false}
          labelColor={colors.white}
          labelBold={true}
        />
        <View style={styles.space} />
        <Button
          label='スマホのブラウザで開く'
          onPress={onLinkPress}
          color={colors.purple}
          disable={false}
          labelColor={colors.white}
          labelBold={true}
        />
      </View>
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
    </TouchableWithoutFeedback>
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
  },
  inputContainer: {
    paddingHorizontal: 10,
    paddingVertical: 10
  },
  textBox: {
    fontSize: fontSize.xLarge,
    borderColor: colors.grayThird,
    paddingVertical: 10,
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10
  },
  space: {
    paddingVertical: 10
  }
})