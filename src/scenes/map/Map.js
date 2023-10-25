import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import ScreenTemplate from "../../components/ScreenTemplate";
import { colors, fontSize } from "../../theme";
import MapView, { Marker } from 'react-native-maps';
import { initialLocation, getLocation, calculateDistance } from "../../utils/locationFunctions";
import { showToast } from "../../utils/showToast";
import Spinner from 'react-native-loading-spinner-overlay';
import { getAddress } from "./functions";

export default function Map() {
  const [currentLocation, setCurrentLocation] = useState(initialLocation)
  const [pressedLocation, setPressedLocation] = useState(initialLocation)
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)
  const [loadingVisible, setLoadingVisible] = useState(false)

  useEffect(() => {
    const getCurrentLocation = async() => {
      try {
        setIsLoading(true)
        setIsError(false)
        const {latitude, longitude} = await getLocation()
        setCurrentLocation({latitude, longitude})
      } catch(e) {
        console.log('get current location error', e)
        setIsError(true)
      } finally {
        setIsLoading(false)
      }
    }
    getCurrentLocation()
  }, [])

  const onMapPress = async(e) => {
    setLoadingVisible(true)
    const { latitude, longitude } = e.nativeEvent.coordinate
    setPressedLocation({latitude, longitude})
    const {latitude: lat1, longitude: lon1} = currentLocation
    const address = await getAddress({latitude, longitude})
    const distance = calculateDistance({lat1, lon1, lat2: latitude, lon2: longitude})
    setLoadingVisible(false)
    showToast({title: `タップした場所までの距離は${distance}kmです`, body: address?address:''})
  }

  return (
    <ScreenTemplate isLoading={isLoading} isError={isError}>
      <View style={styles.container}>
        <MapView
          style={styles.map}
          region={{
            latitude: currentLocation.latitude,
            longitude: currentLocation.longitude,
            latitudeDelta: 0.3,
            longitudeDelta: 0.3
          }}
          onPress={onMapPress}
        >
          <Marker
            title="自分の位置"
            pinColor={"red"}
            coordinate={{latitude: currentLocation.latitude, longitude: currentLocation.longitude}}
          />
          <Marker
            title="タップした位置"
            pinColor={"blue"}
            coordinate={{latitude: pressedLocation.latitude, longitude: pressedLocation.longitude}}
          />
        </MapView>
      </View>
      <Spinner
        visible={loadingVisible}
        textContent={'Loading...'}
        textStyle={styles.spinnerTextStyle}
      />
    </ScreenTemplate>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  title: {
    fontSize: fontSize.xxxLarge
  },
  map: {
    width: '100%',
    height: '100%',
  },
  spinnerTextStyle: {
    color: colors.white
  },
})