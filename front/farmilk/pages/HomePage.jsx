import * as React from 'react';
import {Text, View, StyleSheet, Button, TouchableOpacity} from 'react-native';
import { useState } from 'react/cjs/react.production.min';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const HomePage = ({navigation}) =>{

    var contRebanho = 10;
    var LitrosColeta = 200;
    var ultimaColeta = new Date().toLocaleString();
    var precoLeite = 2.15;


    const NovaColeta =() =>{
        navigation.navigate("NovaColeta")
    }

    
    const Rebanho =() =>{
        navigation.navigate("Rebanho")
    }
    
    const Coletas =() =>{
        navigation.navigate("Coletas")
    }
    
    const Notificacoes =() =>{
        navigation.navigate("Notificacoes")
    }

    return(
        <View>    
            <View style={styles.super}>
                <View style={styles.container1}>
                    <Text style={styles.textos}>Rebanho Total: {contRebanho}</Text>
                    <Text style={styles.textos}>Litros da última coleta: {LitrosColeta}</Text>
                    <Text style={styles.textos}>Última coleta: {ultimaColeta}</Text>
                    <Text style={styles.textos}>Preço de comércio do leite (produtor) por litro: R${precoLeite}</Text>
                </View>
                <View style={styles.opcoes}> 
               
                        <TouchableOpacity
                            onPress={NovaColeta}
                            style={styles.button1}
                        >
                            <Text style={styles.textos}>Nova Coleta</Text>
                        </TouchableOpacity>
               
                        <TouchableOpacity
                            onPress={Rebanho}
                            style={styles.button}
                        >
                            <Text style={styles.textos}>Meu Rebanho</Text>
                        </TouchableOpacity>
                    
            
                        <TouchableOpacity
                            onPress={Coletas}
                            style={styles.button}
                        >
                            <Text style={styles.textos}>Todas as Coletas</Text>
                        </TouchableOpacity>
                
                        <TouchableOpacity
                            onPress={Notificacoes}
                            style={styles.button2}
                        >
                            <Text style={styles.textos}>Notificações</Text>
                        </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}
export default HomePage;

const styles = StyleSheet.create({
    super:{
        display:'flex',
        height:'80vh',
        justifyContent:'space-around',
    },
    button1: {
        alignItems: "center",
        backgroundColor: "rgb(102,205,170)",
        padding: 10,
        marginLeft:15,
        marginRight:15,
        borderRadius:5,
        height:'50px',
      },
    button: {
        alignItems: "center",
        backgroundColor: "rgb(102,205,170)",
        padding: 10,
        marginLeft:15,
        marginRight:15,
        borderRadius:5,
      },
      button2: {
   
        alignItems: "center",
        backgroundColor: "rgb(102,205,135)",
        padding: 10,
        marginLeft:15,
        marginRight:15,
        borderRadius:5,
      },
      container1:{
        marginTop:40,
        marginLeft:10,
        marginBottom:10,
        display:'flex',
        alignItems:'flex-start',
      },
      opcoes:{
        height:'200px',
        display:'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        alignItems: 'stretch',
        alignContent: 'stretch',
    },
    textos:{
   
        fontWeight:'bold',
        fontSize:16,
    },
});