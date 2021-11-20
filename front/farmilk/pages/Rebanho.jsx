import * as React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';


const styles = StyleSheet.create({
    container1:{
        padding:20,
        height:'50vh',
        display:'flex',
        justifyContent:'space-around',
    },
    container2:{
        padding:20,
        height:'30vh',
        display:'flex',
        justifyContent:'space-around',
    },
    input:{
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },   
    textos:{
        fontSize:20,
        fontFamily:'Roboto',
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
});

const Rebanho =() =>{

    var data = new Date().toLocaleString();
    var LitrosColetadosNoDia = 16.2;
    var LitrosColetadosAoTodo = 150.2;
    var id = 2039;
    var isVisible = true;
    var vacasEmLactacao = 20;


    const isInVisible = ()=>{
        isVisible = false;
    }
    return (
        <>
            <View>
                <View style={styles.container1}>
                    <Text style={styles.textos}>Pesquisar por gado:</Text>
                <TextInput
                    placeholder={"Informe o Id: "}
                    keyboardType="numeric"
                    style={styles.input}
                >
                    
                     </TextInput>

                     <TouchableOpacity
                onPress={isInVisible}
                style={styles.button1}
                >
                    <Text style={styles.textos}>Pesquisar</Text>
                </TouchableOpacity>


                <TouchableOpacity
                onPress={null}
                style={styles.button1}
                >
                    <Text style={styles.textos}>Listar todos</Text>
                </TouchableOpacity>

                </View>

                <View style={styles.container2}
                    hidden = {isVisible}
                    
                >
                    <Text style={styles.textos}>Número identificador: {id}.</Text>
                    <Text style={styles.textos}>Dia da coleta:{data}.</Text>
                    <Text style={styles.textos}>Litros de leite coletados no dia:{LitrosColetadosNoDia}.</Text>
                    <Text style={styles.textos}>Vacas em lactação:{vacasEmLactacao}.</Text>


                </View>
            </View>
        </>
    )
}
export default Rebanho;