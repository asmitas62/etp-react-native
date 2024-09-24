import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'

export default function List() {
    const [selectedValue, setSelectedValue] = useState('item 1');
    const [open, setOpen] = useState(false);
    const [items, setItems] = useState([
      { label: 'Item 1', value: 'item1' },
      { label: 'Item 2', value: 'item2' },
      { label: 'Item 3', value: 'item3' },
    ]);
  return (
   <></>
  )
}
const ListStyle = StyleSheet.create({
    dropDownStyle:{
        fontSize:11,
        borderRadius: 0
    }
})