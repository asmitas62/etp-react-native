import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import DropDownPicker from 'react-native-dropdown-picker';
import { color } from '~/global.css';

export default function List() {
    const [selectedValue, setSelectedValue] = useState('item 1');
    const [open, setOpen] = useState(false);
    const [items, setItems] = useState([
      { label: 'Item 1', value: 'item1' },
      { label: 'Item 2', value: 'item2' },
      { label: 'Item 3', value: 'item3' },
    ]);
  return (
    <DropDownPicker
      open={open}
      value={selectedValue}
      items={items}
      setOpen={setOpen}
      setValue={setSelectedValue}
      setItems={setItems}
      placeholder="Http"
      containerStyle={{ height: 40, width: 80 }}
      style={ListStyle.dropDownStyle}
    />
  )
}
const ListStyle = StyleSheet.create({
    dropDownStyle:{
        backgroundColor: color.white,
        borderColor: color.danger,
        fontSize:11,
        borderRadius: 0
    }
})