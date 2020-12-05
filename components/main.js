import React, { useState } from 'react'

import { Alert, Platform, StyleSheet, View, Button, Text, Image, ScrollView, TouchableOpacity, TextInput } from 'react-native';


const Header = () => {
    const [countBoys, setCountBoys] = useState(100);
    const [countGirls, setCountGirls] = useState(100);

    const onPressBoys = () => setCountBoys(prevCount => prevCount - 1);
    const onPressGirls = () => setCountGirls(prevCount => prevCount - 1);


    return (

        <>
            <View style={styles.fixToText}>
                <Button
                    style={styles.butto}
                    title="Girls"
                    onPress={() => Alert.alert('Left button pressed')}
                    color="#f194ff"
                />
                <Button
                    title="Boys"
                    onPress={() => Alert.alert('Right button pressed')}
                    color='#007AFF'
                    backgroundColor='red'

                />


            </View>
            <View style={styles.countContainer} style={styles.fixToText}>
                <Text>score: {countBoys}</Text>
                <Text>score: {countGirls}</Text>
            </View>

            <View style={styles.countContainer} style={styles.fixToText}>
                <View style={styles.countContainer} >
                    <TouchableOpacity
                        style={styles.button}
                        onPress={onPressGirls}
                    >
                        <Text>first</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={onPressGirls}
                    >
                        <Text>second</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={onPressGirls}
                    >
                        <Text>third</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.countContainer}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={onPressBoys}
                    >
                        <Text>first</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={onPressBoys}
                    >
                        <Text>second</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={onPressBoys}
                    >
                        <Text>third</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <TouchableOpacity
                style={styles.button}
                onPress={onPressBoys}
            >
                <Text>PROOF!</Text>
            </TouchableOpacity>

        </>
    )
}
const styles = StyleSheet.create({
    fixToText: {
        margin: 10,
        flexDirection: 'row',
        justifyContent: "space-around",
        // backgroundColor: Platform.OS === 'ios' ?  'red' :  'yellow'
        color: 'black',
        // backgroundColor: 'red'

    },
    butto: {
        color: 'red'
    },
    container: {
        flex: 1,
        justifyContent: "center",
        paddingHorizontal: 10
    },
    button: {
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        padding: 10,
        margin: 10
    },
    countContainer: {
        alignItems: "center",
        padding: 10
    }

});



export default Header;