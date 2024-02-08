import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import Confetti from 'react-native-confetti';
import Button from '../../components/Button';
import { colors } from '../../theme';

export default function BottomSheetContent() {
  const confettiViewRef = useRef(null);

  useEffect(() => {
    if (confettiViewRef.current) {
      confettiViewRef.current.startConfetti();
    }
  }, []);

  const onButtonPress = () => {
    confettiViewRef.current.startConfetti();
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        source={{uri: 'https://i.imgur.com/gLVEoaV.jpg'}}
        resizeMode='cover'
        style={{flex: 1, justifyContent: 'center', paddingHorizontal: 10}}
      >
        <Confetti
          ref={confettiViewRef}
          confettiCount={40}
          timeout={3}
          untilStopped={false}
          duration={3000}
          size={1}
          bsize={1}
        />
        <Button
          label='紙吹雪'
          onPress={onButtonPress}
          color={colors.bluePrimary}
          disable={false}
          labelColor={colors.white}
          labelBold={false}
        />
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})