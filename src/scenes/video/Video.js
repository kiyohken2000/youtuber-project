import React, { useState, useCallback, useRef } from "react";
import { View, Text, StyleSheet, Alert, Dimensions } from "react-native";
import { fontSize, colors } from "../../theme";
import Button from "../../components/Button";
import ScreenTemplate from "../../components/ScreenTemplate";
import { useRoute } from "@react-navigation/native";
import YoutubePlayer from "react-native-youtube-iframe";
import { calculateHeight } from "./functions";

const { width } = Dimensions.get('window')

export default function Video() {
  const route = useRoute()
  const { video } = route.params
  const [playing, setPlaying] = useState(true);

  const onStateChange = useCallback((state) => {
    if (state === "ended") {
      setPlaying(false);
      Alert.alert("video has finished playing!");
    }
  }, []);

  const togglePlaying = useCallback(() => {
    setPlaying((prev) => !prev);
  }, []);
  
  return (
    <ScreenTemplate>
      <View>
        <YoutubePlayer
          height={calculateHeight({width})}
          play={playing}
          videoId={video}
          onChangeState={onStateChange}
          initialPlayerParams={{
            controls: false
          }}
        />
        <View style={styles.buttonContainer}>
          <Button
            label={playing ? "pause" : "play"}
            onPress={togglePlaying}
            color={playing?colors.bluePrimary:colors.pink}
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
  buttonContainer: {
    paddingHorizontal: 10,
    paddingVertical: 10
  }
})