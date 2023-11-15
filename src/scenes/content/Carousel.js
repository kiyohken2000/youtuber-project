import React, { useRef, useState } from "react";
import { View, Image, StyleSheet, Dimensions, Text } from "react-native";
import Carousel, { Pagination } from 'react-native-snap-carousel'
import { colors } from "../../theme";

const { height, width } = Dimensions.get('window')

export default function RenderCarousel(props) {
  const { photos } = props
  const isCarousel = useRef(null)
  const [index, setIndex] = useState(0)

  const renderItem = ({item, index}) => {
    const { url } = item
    return (
      <View>
        <Image
          source={{uri: url}}
          resizeMode='cover'
          style={{
            height: width * 0.5,
            width: width * 0.5,
            borderRadius: 10
          }}
        />
      </View>
    )
  }
  
  return (
    <View style={styles.container}>
      <Carousel
        ref={isCarousel}
        data={photos}
        renderItem={renderItem}
        sliderWidth={width}
        itemWidth={width * 0.5}
        onSnapToItem={(index) => setIndex(index)}
      />
      <Pagination
        dotsLength={photos.length}
        activeDotIndex={index}
        carouselRef={isCarousel}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          marginHorizontal: 0,
          backgroundColor: colors.bluePrimary
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
        tappableDots={true}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20
  }
})