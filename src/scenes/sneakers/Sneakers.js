import React, { useEffect, useState } from "react";
import { ScrollView, Text, StyleSheet, View } from "react-native";
import { fontSize } from "../../theme";
import ScreenTemplate from "../../components/ScreenTemplate";
import axios from "axios";
import RenderSneaker from "./RenderSneaker";
import { useNavigation } from "@react-navigation/native";

export default function Sneakers() {
  const navigation = useNavigation()
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)
  const [sneakers, setSneakers] = useState([])

  useEffect(() => {
    const fetchSneakers = async() => {
      try {
        setIsError(false)
        setIsLoading(true)
        const { data } = await axios.get('https://example-data.draftbit.com/sneakers?_limit=40')
        setSneakers(data)
      } catch(e) {
        console.log('fetch sneakers error', e)
        setIsError(true)
      } finally {
        setIsLoading(false)
      }
    }
    fetchSneakers()
  }, [])

  const onItemPress = ({sneaker}) => {
    navigation.navigate('Information', {sneaker})
  }

  return (
    <ScreenTemplate isLoading={isLoading} isError={isError}>
      <ScrollView style={styles.container}>
      {sneakers.map((sneaker, i) => {
        return(
          <RenderSneaker
            key={sneaker.id}
            sneaker={sneaker}
            onPress={() => onItemPress({sneaker})}
          />
        )
      })}
      </ScrollView>
    </ScreenTemplate>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: fontSize.xxxLarge
  }
})