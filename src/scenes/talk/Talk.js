import React, { useState } from "react";
import { View, Text, ScrollView, StyleSheet, TextInput, Dimensions, TouchableWithoutFeedback, Keyboard } from "react-native";
import ScreenTemplate from "../../components/ScreenTemplate";
import { colors, fontSize } from "../../theme";
import Button from "../../components/Button";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { generateMessage } from "../../utils/textGenerate";

const { width, height } = Dimensions.get('window')

export default function Talk() {
  const [inputText, setInputText] = useState('')
  const [resultText, setResultText] = useState('ここにAIからの応答が入ります')
  const [isLoading, setIsLoading] = useState(false)

  const onGeneratePress = async() => {
    setIsLoading(true)
    const res = await generateMessage({inputText})
    setResultText(res)
    setIsLoading(false)
  }

  return (
    <ScreenTemplate>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <KeyboardAwareScrollView>
          <View style={styles.container}>
            <ScrollView style={styles.input}>
              <Text style={styles.resultText}>{resultText}</Text>
            </ScrollView>
            <View style={{paddingVertical: 10}} />
            <TextInput
              multiline={true}
              style={styles.input}
              value={inputText}
              onChangeText={(text) => setInputText(text)}
            />
            <View style={{paddingVertical: 10}} />
            <Button
              label='生成'
              onPress={onGeneratePress}
              color={colors.bluePrimary}
              disable={inputText.length <= 4}
              labelColor={colors.white}
              labelBold={false}
              isLoading={isLoading}
            />
          </View>
        </KeyboardAwareScrollView>
      </TouchableWithoutFeedback>
    </ScreenTemplate>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 10
  },
  input: {
    borderRadius: 15,
    borderWidth: 1,
    height: height * 0.3,
    paddingHorizontal: 10,
    fontSize: fontSize.large
  },
  resultText: {
    fontSize: fontSize.large,
    color: colors.redPrimary
  }
})