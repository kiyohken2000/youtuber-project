import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, Dimensions, TouchableWithoutFeedback, Keyboard, ScrollView } from 'react-native'
import { fontSize, colors } from "../../theme";
import Button from '../../components/Button';
import ScreenTemplate from "../../components/ScreenTemplate";
import Spinner from 'react-native-loading-spinner-overlay'
import AutoHeightImage from 'react-native-auto-height-image';
import "react-native-url-polyfill/auto";
import OpenAI from 'openai';
import { openaiKey } from '../../openaiKeys';
import RenderImages from './RenderImages';
import { saveImage } from '../../utils/downloadFunctions';
import moment from 'moment/moment';

const { width, height } = Dimensions.get('window')

export default function ImageGenerate() {
  const [text, setText] = useState('')
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState('');
  const [images, setImages] = useState([])
  const openai = new OpenAI({
    apiKey: openaiKey
  });

  const generateImage = async () => {
    try {
      setLoading(true)
      const res = await openai.images.generate({
        prompt: text,
        model: 'dall-e-2',
        size: '512x512',
        n: 5
      })
      setImages(res.data)
    } catch(e) {
      console.log('generate image error', e)
    } finally {
      setLoading(false)
    }
  };

  const onImagePress = async({url}) => {
    setLoading(true)
    const fileName = `${moment().unix()}.png`
    await saveImage({url, fileName})
    setLoading(false)
  }
  
  return (
    <ScreenTemplate>
      <TouchableWithoutFeedback onPress={()=> Keyboard.dismiss()}>
        <ScrollView style={styles.container}>
          <View style={{height: width * 0.9}}>
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            {images.length?
              <RenderImages
                images={images}
                onImagePress={onImagePress}
              />
              :
              <Text style={styles.text}>プロンプトを入力してボタンを押してください</Text>
            }
            </View>
          </View>
          <View style={{flex: 1, padding: 5}}>
            <TextInput
              style={styles.textInput}
              onChangeText={(text) => setText(text)}
              placeholder="Describe your idea"
              placeholderTextColor={colors.graySecondary}
              multiline={true}
            />
          </View>
          <View style={styles.buttonContainer}>
            <Button
              label="Generate"
              color={colors.lightPurple}
              labelColor={colors.white}
              disable={!text || text.length < 10}
              onPress={generateImage}
            />
          </View>
          <Spinner
            visible={loading}
            textStyle={{ color: colors.white }}
            overlayColor="rgba(0,0,0,0.5)"
          />
        </ScrollView>
      </TouchableWithoutFeedback>
    </ScreenTemplate>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  textInput: {
    backgroundColor: 'transparent',
    color: colors.black,
    padding: 5,
    fontSize: fontSize.large,
    borderWidth: 1,
    borderColor: colors.bluePrimary,
    flex: 1,
    borderRadius: 5,
    height: height * 0.2
  },
  buttonContainer: {
    paddingHorizontal: 5,
    justifyContent: 'center'
  },
  text: {
    color: colors.black,
    fontSize: fontSize.large,
    fontWeight: "bold",
  },
})