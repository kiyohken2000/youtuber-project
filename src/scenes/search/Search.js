import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { colors, fontSize } from "../../theme";
import ScreenTemplate from "../../components/ScreenTemplate";
import Button from "../../components/Button";
import { useNavigation } from "@react-navigation/native";

export default function Search() {
  const navigation = useNavigation()

  const onButtonPress = () => {
    navigation.navigate('Sneakers')
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
        </View>
      </View>
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