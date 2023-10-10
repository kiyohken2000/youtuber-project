import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import ScreenTemplate from "../../components/ScreenTemplate";
import { fontSize } from "../../theme";
import { dataUrl, formatData } from "./functions";
import axios from "axios";
import RenderUser from "./RenderUser";

export default function Users() {
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)
  const [sheetData, setSheetData] = useState([])

  useEffect(() => {
    const fetchData = async() => {
      try {
        setIsLoading(true)
        setIsError(false)
        const { data } = await axios.get(dataUrl)
        const _data = formatData({data})
        setSheetData(_data)
      } catch(e) {
        console.log('fetch data error', e)
        setIsError(true)
      } finally {
        setIsLoading(false)
      }
    }
    fetchData()
  }, [])

  return (
    <ScreenTemplate isLoading={isLoading} isError={isError}>
      <ScrollView style={styles.container}>
        {sheetData.map((item, i) => {
          return (
            <RenderUser
              key={item.id}
              item={item}
            />
          )
        })}
      </ScrollView>
    </ScreenTemplate>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  title: {
    fontSize: fontSize.xxxLarge
  }
})