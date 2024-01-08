import React, { useState, useCallback, useMemo, useRef } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { colors, fontSize } from "../../theme";
import ScreenTemplate from "../../components/ScreenTemplate";
import Button from "../../components/Button";
import { useNavigation } from "@react-navigation/native";
import Dialog from "react-native-dialog";
import AwesomeModal from "./AwesomeModal";
import BottomSheet from '@gorhom/bottom-sheet';

export default function Search() {
  const navigation = useNavigation()
  const [visible, setVisible] = useState(false);
  const [input, setInput] = useState('')
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [sheetPosition, setSheetPosition] = useState(0)
  const bottomSheetRef = useRef(null);
  const snapPoints = useMemo(() => ['1%', '25%', '50%', '75%'], []);

  const handleSheetChanges = useCallback((index) => {
    setSheetPosition(index)
  }, []);

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
      <ScrollView style={styles.container}>
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
          <View style={{paddingVertical: 10}} />
          <Button
            label='トーク画面へ'
            onPress={() => navigation.navigate('Talk')}
            color={colors.blueSecondary}
            disable={false}
            labelColor={colors.white}
            labelBold={false}
          />
          <View style={{paddingVertical: 10}} />
          <Button
            label='チャット画面へ'
            onPress={() => navigation.navigate('Chat')}
            color={colors.darkPurple}
            disable={false}
            labelColor={colors.white}
            labelBold={false}
          />
          <View style={{paddingVertical: 10}} />
          <Button
            label='ボトムシート開く'
            onPress={() => setSheetPosition(2)}
            color={colors.yellowPrimary}
            disable={false}
            labelColor={colors.black}
            labelBold={false}
          />
        </View>
      </ScrollView>
      <AwesomeModal
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
      />
      <BottomSheet
        ref={bottomSheetRef}
        index={sheetPosition}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
      >
        <View style={styles.contentContainer}>
          <Text>Awesome 🎉</Text>
        </View>
      </BottomSheet>
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