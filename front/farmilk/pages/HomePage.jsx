import * as React from 'react';
import {Text, View, StyleSheet, Button, TouchableOpacity} from 'react-native';
import { useState } from 'react/cjs/react.production.min';

function exemplo(){

    const [contador, alteradorDoContador] = useState(0);
    const somarUm = () =>{
        alteradorDoContador(contador + 1);
    }
}

const HomePage = () =>{

    return(
        <View>    
            <View>
                <Button
                    onPress={console.log("oi")}
                    title={"Clique aqui"}
                    color="green"
                    accessibilityLabel="Learn more about this purple button"
                />
            </View>
        </View>
    )
}
export default HomePage;

const styles = StyleSheet.create({



});