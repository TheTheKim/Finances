import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import * as Animatable from 'react-native-animatable'
export default function Registering() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
                <Text style={styles.message}> Faça sua Conta!</Text>
            </Animatable.View>

            <Animatable.View animation="fadeInUp" style={styles.containerForm}>
                <Text style={styles.title}>Nome</Text>
                <TextInput
                    placeholder="Digite um Nome de Usuário"
                    style={styles.input}
                />
                <Text style={styles.title}>Email</Text>
                <TextInput
                    placeholder="Digite seu Email"
                    style={styles.input}
                />

                <Text style={styles.title}>Senha</Text>
                <TextInput
                    secureTextEntry={true}
                    placeholder="Digite sua Senha"
                    style={styles.input}
                />
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Acessar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonRegister} onPress={() => navigation.goBack()} >
                    <Text style={styles.registerText}>Já Possui uma conta? Faça Log-In!</Text>
                </TouchableOpacity>

            </Animatable.View>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#1c063c"

    },
    containerHeader: {
        marginTop: '14%',
        marginBottom: '8%',
        paddingStart: '5%',
    },
    message: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#FFF'
    },
    containerForm: {
        backgroundColor: '#FFF',
        flex: 1,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%',

    },
    title: {
        fontSize: 20,
        marginTop: 25,
    },
    input: {
        borderBottomWidth: 1,
        height: 40,
        marginBottom: 12,
        fontSize: 16,

    },
    button: {
        backgroundColor: '#38a69d',
        width: '100%',
        borderRadius: 4,
        paddingVertical: 8,
        marginTop: 14,
        justifyContent: 'center',
        alignItems: 'center',

    },

    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#FFFFFF',
    },

    buttonRegister: {
        marginTop: 14,
        alignSelf: 'center',
    },
    registerText: {
        color: '#a1a1a1',


    }

})