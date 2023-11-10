import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Modal from "react-native-modal";
import Button from "../../components/Button";
import { colors, fontSize } from "../../theme";

export default function AwesomeModal(props) {
  const { isModalVisible, setIsModalVisible } = props

  return (
    <Modal
      isVisible={isModalVisible}
      animationOut='slideOutUp'
    >
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <Text style={styles.title}>Hello!</Text>
          <View style={styles.buttonContainer}>
            <Button
              label='モーダル閉じる'
              onPress={() => setIsModalVisible(false)}
              color={colors.redSecondary}
              disable={false}
              labelColor={colors.white}
              labelBold={false}
            />
          </View>
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  innerContainer: {
    backgroundColor: colors.white,
    borderRadius: 10,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10
  },
  title: {
    fontSize: fontSize.xxxLarge
  },
  buttonContainer: {
    width: '100%'
  }
})