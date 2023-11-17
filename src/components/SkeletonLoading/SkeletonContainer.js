import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import SkeletonItem from "./SkeletonItem";
import { colors } from "../../theme";

export default function SkeletonContainer() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.itemContainer}>
        <SkeletonItem/>
        <View style={styles.divider} />
      </View>
      <View style={styles.itemContainer}>
        <SkeletonItem/>
        <View style={styles.divider} />
      </View>
      <View style={styles.itemContainer}>
        <SkeletonItem/>
        <View style={styles.divider} />
      </View>
      <View style={styles.itemContainer}>
        <SkeletonItem/>
        <View style={styles.divider} />
      </View>
      <View style={styles.itemContainer}>
        <SkeletonItem/>
        <View style={styles.divider} />
      </View>
      <View style={styles.itemContainer}>
        <SkeletonItem/>
        <View style={styles.divider} />
      </View>
      <View style={styles.itemContainer}>
        <SkeletonItem/>
        <View style={styles.divider} />
      </View>
      <View style={styles.itemContainer}>
        <SkeletonItem/>
        <View style={styles.divider} />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemContainer: {
    paddingVertical: 10
  },
  divider: {
    width: '100%',
    height: 1,
    backgroundColor: colors.gray
  }
})