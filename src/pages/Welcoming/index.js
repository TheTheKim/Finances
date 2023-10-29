import React from 'react';  
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
     } from 'react-native';

     import * as Animatable from 'react-native-animatable'

     import { useNavigation } from '@react-navigation/native'

export default function Welcome() {
    const navigation = useNavigation();

    return(
        <View style={styles.container}>
            <View style={styles.containerLogo}>
                <Animatable.Image 
                    animation='flipInY'
                    source={require('../../assets/intercambio.png')}
                    style={{ width: '100%'}}
                    resizeMode='contain' 
                    />
            </View>
            <Animatable.View delay={600} animation="fadeInUp" style={styles.containerForm}>
                <Text style={styles.title}>Monitore e organize seus gastos de qualquer lugar!</Text>
                <Text style={styles.text}> Faça Login para começar</Text>

                <TouchableOpacity style={styles.button} onPress={ () => navigation.navigate('SignIn') }>
                    <Text style={styles.buttonText}>Acessar</Text>
                </TouchableOpacity>
            </Animatable.View>
        </View>

    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#1c063c'
    },
    containerLogo:{
        flex:2,
        backgroundColor: '#1c063c',
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerForm: {
        flex:1,
        backgroundColor: '#FFF',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%',
    },
    title:{
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 28,
        marginBottom: 12,

    },
    text: {
        color: '#a1a1a1',
    },
    button:{
        position: 'absolute',
        backgroundColor: '#38a69d',
        borderRadius: 50,
        paddingVertical: 8,
        width: '60%',
        alignSelf: 'center',
        bottom: '15%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText:{
        fontSize: 18,
        color: '#FFF',
        fontWeight: 'bold',
    }

})