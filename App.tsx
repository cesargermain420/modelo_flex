import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function App() {
  return (
    <>
    <View style={styles.contenedor1}>
      <Text style={styles.texto}>Contenedor 1.a</Text>
      <Text style={[styles.texto, styles.texto1b]}>Contenedor 1.b</Text> // Con las llaves [] podemos añadir mas de un estilo
      <Text style={styles.texto}>Contenedor 1.c</Text>
    </View>

    <View style={styles.contenedor2}>
      <Text>Contenedor 2.a</Text>
      <Text>Contenedor 2.b</Text>
      <Text>Contenedor 2.c</Text>
      <Text>Contenedor 2.d</Text>    
      <Text>Contenedor 2.e</Text>   
      <Text>Contenedor 2.f</Text>    
 
    
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


  texto1b:{
    alignSelf:"stretch" //Se salta lo que esta definido en alignItems de su contenedor **
  },



  texto:{
    backgroundColor:"yellow"

  },

contenedor1:{ //  **
  flex:1,//Hacemos que crezca usando todo el espacio del telefono
  backgroundColor:"red",
  justifyContent:"space-around",//CONTROLA EL EJE PRINCIPAL (VERTICAL)
  alignItems:"center" //CONTROLA EL EJE SECUNDARIO(HORIZONTAL)

},


contenedor2:{
flex:1,
backgroundColor:"orange",
// justifyContent:"space-between",  //DECIDE LA SEPARACION
flexDirection:"row", //LOS PONE EN HORIZONTAL
flexWrap:"wrap", //HACE QUE NO SE PIERDAN POR FUERA DE LA PANTALLA
rowGap:15, //HACE EL MARGEN DE LA FILA
columnGap:15, //HACE EL MARGEN DE LA COLUMNA
gap:30, //Afecta a las dos
alignContent:"flex-end" // Aligna la fila que se forma LA SECUNDARIA(HORIZONTAL)
},


contenedor3:{
flex:1,
backgroundColor:"green",
flexDirection:"column", //LOS PONE EN VERTICAL INVERTIDO
justifyContent:"center"
},

})