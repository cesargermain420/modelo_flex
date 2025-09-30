import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function App() {
  return (
    <>
    <View style={styles.contenedor1}>
      <Text>Contenedor 1</Text>
    </View>
    <View style={styles.contenedor2}>
      <Text>Contenedor 2</Text>
    </View>
    <View style={styles.contenedor3}>
      <Text>Contenedor 3</Text>
    </View>
    </>

  )
}

const styles = StyleSheet.create({

contenedor1:{
  flex:1,//Hacemos que crezca usando todo el espacio del telefono
  backgroundColor:"red"

},
contenedor2:{
flex:1,
backgroundColor:"orange"
},
contenedor3:{
flex:1,
backgroundColor:"green"
},

})