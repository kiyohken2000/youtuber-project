import React from "react";
import {
  Placeholder,
  PlaceholderMedia,
  PlaceholderLine,
  Fade
} from "rn-placeholder";
import { Dimensions } from "react-native";

const { width, height } = Dimensions.get('window')

export default function SkeletonItem() {
  return (
    <Placeholder
      Animation={Fade}
      Left={PlaceholderMedia}
    >
      <PlaceholderLine width={width * 0.1} />
      <PlaceholderLine width={width * 0.15} />
      <PlaceholderLine width={width * 0.2} />
      <PlaceholderLine width={width * 0.23} />
      <PlaceholderLine width={width * 0.2} />
      <PlaceholderLine width={width * 0.15} />
      <PlaceholderLine width={width * 0.1} />
    </Placeholder>
  )
}