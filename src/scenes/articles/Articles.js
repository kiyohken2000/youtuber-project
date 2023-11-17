import React, { useState, useEffect } from "react";
import { ScrollView, Text, StyleSheet } from "react-native";
import ScreenTemplate from "../../components/ScreenTemplate";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { cmsKey, articlesUrl } from "../../config";
import RenderItem from "./RenderItem";
import { sleep } from "../../utils/utilFunctions";

export default function Articles() {
  const navigation = useNavigation()
  const [articles, setArticles] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    const fetchData = async() => {
      try {
        setIsLoading(true)
        setIsError(false)
        const {data} = await axios.get(articlesUrl, { headers: {'X-MICROCMS-API-KEY': cmsKey}})
        const {contents} = data
        setArticles(contents)
        await sleep(5000)
      } catch(e) {
        console.log('fetch data error', e)
        setIsError(true)
      } finally {
        setIsLoading(false)
      }
    }
    fetchData()
  }, [])

  const onItemPress = ({item}) => {
    navigation.navigate('Content', {item})
  }

  return (
    <ScreenTemplate isLoading={false} isError={isError} isSkeletonLoading={isLoading}>
      <ScrollView style={styles.container}>
        {articles.map((item, i) => {
          return (
            <RenderItem
              key={i}
              item={item}
              onPress={() => onItemPress({item})}
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
  }
})