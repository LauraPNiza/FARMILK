import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



const styles = StyleSheet.create({

    container:{
        display:'flex',
        justifyContent:'space-around',
        height:'30vh',
        backgroundColor:'#C0C0C0',
        paddingLeft:15,
    },
    textos:{
        fontSize:20,
        fontFamily:'Roboto',
    },
    container2:{
        height:'60vh',
        display:'flex',
        justifyContent:'space-around',
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
      button2: {
        alignItems: "center",
        backgroundColor: "rgb(102,205,200)",
        padding: 10,
        marginLeft:15,
        marginRight:15,
        borderRadius:5,
        height:'50px',
      },
});

const NovaColeta = ({navigation}) =>{


    const ConcluirManejo =()=>{
        navigation.navigate("HomePage")
    }


    var data = new Date().toLocaleString();
    var id = 2039;
    var litrosColetados = 16.200;
    var situacao = 'Lactante';
    return (
        <View>
            <View style={styles.container}>
                <Text style={styles.textos}>{data}.</Text>
                <Text style={styles.textos}>Id do gado: {id}.</Text>
                <Text style={styles.textos}>Situação: {situacao}.</Text>
                <Text style={styles.textos}>Litros Coletados: {litrosColetados}.</Text>
            </View>

            <View style={styles.container2}>

                <View style={{
                    display:'flex',
                    alignItems:'center',
                }}>
                    <h2>Duração do Manejo</h2>
                    <h1>00:10:25</h1>
                </View>

                <TouchableOpacity
                onPress={null}
                style={styles.button1}
                >
                    <Text style={styles.textos}>Iniciar Coleta</Text>
                </TouchableOpacity>

                <TouchableOpacity
                onPress={ConcluirManejo}
                style={styles.button2}
                >
                    <Text style={styles.textos}>Concluir Manejo</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default NovaColeta;

