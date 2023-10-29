import React, { useRef } from "react";
import { ScrollView, Text, StyleSheet, Image, Dimensions, View } from "react-native";
import { fontSize } from "../../theme";
import ScreenTemplate from "../../components/ScreenTemplate";
import { useRoute } from "@react-navigation/native";
import LottieView from "lottie-react-native"

const { height, width } = Dimensions.get('window')

export default function Information() {
  const route = useRoute()
  const animation = useRef(null);
  const { sneaker } = route.params
  const { brand, colorway, gender, media, releaseDate, retailPrice, title, year } = sneaker
  const { imageUrl } = media

  return (
    <ScreenTemplate>
      <ScrollView styles={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            source={{uri: imageUrl}}
            resizeMode='contain'
            style={{width: width * 0.8, height: width * 0.8}}
          />
        </View>
        <View style={styles.dataContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.caption}>{colorway}</Text>
          <Text style={styles.caption}>{releaseDate}</Text>
          <Text style={styles.caption}>${retailPrice}</Text>
          <Text style={styles.caption}>{year}</Text>
        </View>
        <View style={{alignItems: 'center'}}>
          <LottieView
            ref={animation}
            source={require("../../../assets/lottie/animation_lobjsamb.json")}
            style={styles.animation}
            autoPlay
          />
        </View>
        <View style={{alignItems: 'center', backgroundColor: 'blue'}}>
          <LottieView
            ref={animation}
            source={require("../../../assets/lottie/animation_lobk23t4.json")}
            style={styles.animation}
            autoPlay
          />
        </View>
      </ScrollView>
    </ScreenTemplate>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: fontSize.xxxLarge,
    fontWeight: '700'
  },
  caption: {
    fontSize: fontSize.xxLarge
  },
  imageContainer: {
    alignItems: 'center'
  },
  dataContainer: {
    paddingHorizontal: 10
  },
  animation: {
    width: width * 0.5,
    height: height * 0.5,
  },
})