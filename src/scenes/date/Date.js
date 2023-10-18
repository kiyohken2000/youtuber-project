import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import ScreenTemplate from "../../components/ScreenTemplate";
import { fontSize, colors } from "../../theme";
import Button from "../../components/Button";
import moment from "moment/moment";
import { storage } from "../../utils/storage";

export default function Date() {
  const [date, setDate] = useState('')

  useEffect(() => {
    loadStorage()
  }, [])

  const loadStorage = async() => {
    try {
      const response = await storage.load({key: 'date'})
      setDate(response)
    } catch(e) {
      console.log('load storage error', e)
      setDate('')
    }
  }

  const onSavePress = async() => {
    const today = moment().toString()
    await storage.save({
      key: 'date',
      data: today
    })
    await loadStorage()
  }

  const onRemovePress = async() => {
    await storage.remove({key: 'date'})
    await loadStorage()
  }

  return (
    <ScreenTemplate>
      <View style={styles.container}>
        <Text style={styles.title}>Data: {date?date:'No Data'}</Text>
        <View style={styles.buttonContainer}>
          <View style={styles.space} />
          <Button
            label='日付を保存'
            onPress={onSavePress}
            color={colors.bluePrimary}
            disable={false}
            labelColor={colors.white}
            labelBold={true}
          />
          <View style={styles.space} />
          <Button
            label='日付を削除'
            onPress={onRemovePress}
            color={colors.pink}
            disable={false}
            labelColor={colors.white}
            labelBold={true}
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
  space: {
    paddingVertical: 10
  },
  buttonContainer: {
    width: '100%',
    paddingHorizontal: 10
  }
})