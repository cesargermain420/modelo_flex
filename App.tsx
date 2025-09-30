import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function App() {
  return (
    <>
    <View style={styles.contenedor1}>
      <Text style={styles.texto}>Contenedor 1.a</Text>
      <Text style={styles.texto}>Contenedor 1.b</Text>
      <Text style={styles.texto}>Contenedor 1.c</Text>
    </View>

    <View style={styles.contenedor2}>
      <Text>Contenedor 2.a</Text>
      <Text>Contenedor 2.b</Text>
      <Text>Contenedor 2.c</Text>    
    </View>

    <View style={styles.contenedor3}>
      <Text>Contenedor 3.a</Text>
      <Text>Contenedor 3.b</Text>
      <Text>Contenedor 3.c</Text>    
    </View>
    </>
  )
}

const styles = StyleSheet.create({
  texto:{
    backgroundColor:"yellow"

  },

contenedor1:{
  flex:1,//Hacemos que crezca usando todo el espacio del telefono
  backgroundColor:"red",
  justifyContent:"space-around",//CONTROLA EL EJE PRINCIPAL (VERTICAL)
  alignItems:"center" //CONTROLA EL EJE SECUNDARIO(HORIZONTAL)

},


contenedor2:{
flex:1,
backgroundColor:"orange",
justifyContent:"space-between",  //DECIDE LA SEPARACION
flexDirection:"row" //LOS PONE EN HORIZONTAL
},


contenedor3:{
flex:1,
backgroundColor:"green",
flexDirection:"column", //LOS PONE EN VERTICAL INVERTIDO
justifyContent:"center"
},

})