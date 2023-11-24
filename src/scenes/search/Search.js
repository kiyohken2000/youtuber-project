import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { colors, fontSize } from "../../theme";
import ScreenTemplate from "../../components/ScreenTemplate";
import Button from "../../components/Button";
import { useNavigation } from "@react-navigation/native";
import Dialog from "react-native-dialog";
import AwesomeModal from "./AwesomeModal";

export default function Search() {
  const navigation = useNavigation()
  const [visible, setVisible] = useState(false);
  const [input, setInput] = useState('')
  const [isModalVisible, setIsModalVisible] = useState(false)

  const onButtonPress = () => {
    navigation.navigate('Sneakers')
  }

  const onGoMapPress = () => {
    navigation.navigate('Map')
  }

  const onUsersPress = () => {
    navigation.navigate('Users')
  }

  const onDatePress = () => {
    navigation.navigate('Date')
  }

  const onInputBoxPress = () => {
    setVisible(true);
  }

  const handleCancel = () => {
    setVisible(false);
    setInput('')
  };

  const onOkPress = () => {
    console.log(`入力されたテキスト: ${input}`)
    setVisible(false)
    setInput('')
  }

  const handleTextChange = (inputText) => {
    setInput(inputText)
  }

  return (
    <ScreenTemplate>
      <View style={styles.container}>
        <Text style={styles.title}>これはサーチ画面です</Text>
        <View style={styles.buttonContainer}>
          <Button
            label='スニーカー一覧へ'
            onPress={onButtonPress}
            color={colors.purple}
            disable={false}
            labelColor={colors.white}
            labelBold={false}
          />
          <View style={{paddingVertical: 10}} />
          <Button
            label='マップ画面へ'
            onPress={onGoMapPress}
            color={colors.bluePrimary}
            disable={false}
            labelColor={colors.white}
            labelBold={false}
          />
          <View style={{paddingVertical: 10}} />
          <Button
            label='ユーザー一覧へ'
            onPress={onUsersPress}
            color={colors.pink}
            disable={false}
            labelColor={colors.white}
            labelBold={false}
          />
          <View style={{paddingVertical: 10}} />
          <Button
            label='日付画面へ'
            onPress={onDatePress}
            color={colors.grayPrimary}
            disable={false}
            labelColor={colors.white}
            labelBold={false}
          />
          <View style={{paddingVertical: 10}} />
          <Button
            label='入力ボックスを表示'
            onPress={onInputBoxPress}
            color={colors.lightPurple}
            disable={false}
            labelColor={colors.white}
            labelBold={false}
          />
          <View style={{paddingVertical: 10}} />
          <Button
            label='記事一覧へ'
            onPress={() => navigation.navigate('Articles')}
            color={colors.blueSecondary}
            disable={false}
            labelColor={colors.white}
            labelBold={false}
          />
          <View style={{paddingVertical: 10}} />
          <Button
            label='モーダルを開く'
            onPress={() => setIsModalVisible(true)}
            color={colors.redSecondary}
            disable={false}
            labelColor={colors.white}
            labelBold={false}
          />
          <View style={{paddingVertical: 10}} />
          <Button
            label='画像生成画面へ'
            onPress={() => navigation.navigate('ImageGenerate')}
            color={colors.bluePrimary}
            disable={false}
            labelColor={colors.white}
            labelBold={false}
          />
        </View>
      </View>
      <AwesomeModal
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
      />
      <Dialog.Container visible={visible}>
        <Dialog.Title>入力</Dialog.Title>
        <Dialog.Description>
          入力してください
        </Dialog.Description>
        <Dialog.Input
          placeholder="入力欄です"
          onChangeText={handleTextChange}
          value={input}
          inputMode='email'
          keyboardType='email-address'
        />
        <Dialog.Button label="キャンセル" onPress={handleCancel} />
        {input.length >= 4?
          <Dialog.Button label="決定" onPress={onOkPress} />
          :null
        }
      </Dialog.Container>
    </ScreenTemplate>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: fontSize.xxxLarge
  },
  buttonContainer: {
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 20
  }
})