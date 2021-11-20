import * as React from 'react';
import { View, Text, StyleSheet, } from 'react-native';


const styles = StyleSheet.create({
    container1:{
        padding:20,
        height:'90vh',
        display:'flex',
        alignItems:'center',

        justifyContent:'center',
    },
    button1: {
        alignItems: "center",
        backgroundColor: "rgb(102,205,100)",
        padding: 10,
        marginLeft:15,
        marginRight:15,
        borderRadius:5,
        height:'50px',
      },
      textos:{
        fontSize:20,
        fontFamily:'Roboto',
    },
});

const Coletas = () =>{

    var LitrosColetadosAoTodo = 150.2;
    var mediaDiaria = 13.5;
    var mediaDiariaRebanho = 270.1
    return (
        <View>
            <View style={styles.container1}>
            <Text style={styles.textos}>Litros de leite coletados em todo o período: {LitrosColetadosAoTodo}.</Text>
            <Text style={styles.textos}>Média de litros coletados por dia (por animal): {mediaDiaria}.</Text>
            <Text style={styles.textos}>Média de litros coletados por dia (rebanho): {mediaDiariaRebanho}.</Text>

            </View>
        </View>

    )
}
export default Coletas;