import React from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';

import SnakeImage from '../assets/snake-game.png';
import { FontAwesome } from '@expo/vector-icons';


class Main extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Image
                    style={styles.snake}
                    source={SnakeImage}
                />
                <View style={styles.game} />
                <View style={styles.upperButton}>
                    <TouchableOpacity style={styles.button}>
                        <FontAwesome name="arrow-up" size={30} color="black" />
                    </TouchableOpacity>
                </View>
                <View style={styles.sideButtons}>
                    <TouchableOpacity style={styles.button}>
                        <FontAwesome name="arrow-left" size={30} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <FontAwesome name="arrow-right" size={30} color="black" />
                    </TouchableOpacity>
                </View>
                <View style={styles.lowerButton}>
                    <TouchableOpacity style={styles.button}>
                        <FontAwesome name="arrow-down" size={30} color="black" />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
} export default Main;

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        backgroundColor: '#98d03a',
        justifyContent: 'center',
        alignItems: 'center',
    },
    snake: {
        width: '100%',
        height: '20%',
    },
    game: {
        width: '80%',
        height: '40%',
        backgroundColor: 'white',
        marginTop: '5%',
        borderColor: 'black',
        borderWidth: 3,
        marginBottom: '5%',
    },
    button: {
        width: 60,
        height: 60,
        backgroundColor: 'gray',
        borderColor: 'black',
        borderWidth: 3,
        marginHorizontal: '10%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    sideButtons: {
        display: 'flex',
        flexDirection: 'row',
        marginVertical: '2%',
    }
});