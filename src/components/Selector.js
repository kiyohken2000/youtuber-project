import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { Menu, MenuItem, MenuDivider } from 'react-native-material-menu';
import { colors, fontSize } from '../theme';
import FontIcon from 'react-native-vector-icons/Ionicons'

const { width } = Dimensions.get('window')

export default function Selector(props) {
  const { selectorData, current, setCurrent } = props
  const [visible, setVisible] = useState(false);

  const hideMenu = () => setVisible(false);

  const showMenu = () => setVisible(true);

  const anchor = () => {
    const label = current?current.label:'数字を選択'
    return (
      <TouchableOpacity
        style={styles.button}
        onPress={showMenu}
      >
        <Text style={styles.label}>{label}</Text>
        <FontIcon
          name="chevron-down"
          color={colors.white}
          size={fontSize.large}
          style={{position: 'absolute', right: 10}}
        />
      </TouchableOpacity>
    )
  }

  const onItemPress = ({item}) => {
    setCurrent(item)
    hideMenu()
  }

  return (
    <Menu
      visible={visible}
      anchor={anchor()}
      onRequestClose={hideMenu}
    >
      {selectorData.map((item, i) => {
        return (
          <MenuItem
            key={i}
            onPress={() => onItemPress({item})}
          >
            {item.label}
          </MenuItem>
        )
      })}
    </Menu>
  );
}

const styles = StyleSheet.create({
  button: {
    width: width * 0.4,
    backgroundColor: colors.bluePrimary,
    justifyContent: 'center',
    paddingVertical: 10,
    borderRadius: 5,
    paddingLeft: 10
  },
  label: {
    fontSize: fontSize.large,
    color: colors.white
  }
})