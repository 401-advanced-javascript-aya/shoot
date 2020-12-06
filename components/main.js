import React, { useState } from 'react'

import {  Alert, Platform, StyleSheet, View, Button, Text, Image, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const Header = (item) => {
    const [countBoys, setCountBoys] = useState(100);
    const [countGirls, setCountGirls] = useState(100);
    const navigation = useNavigation();

    const onPressBoys = () => setCountBoys(prevCount => prevCount - 1);
    const onPressGirls = () => setCountGirls(prevCount => prevCount - 1);


    return (

        <>
         <View style={styles.containerHeader}>
                <Text>Shoot !</Text>
                <Image
                    style={styles.logo}

                    source=
                    {require('../assets/logo.png')}
                />
            </View>
              {/* <ScrollView style={styles.scrollView}> */}
            <View style={styles.fixToText}>
                <Button
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
                        // style={styles.button}
                        style={styles.openButtonGirl}

                        onPress={onPressGirls}
                    >
                        <Text>shoot for </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        // style={styles.button}
                        style={styles.openButtonGirl}
                        
                        onPress={onPressGirls}
                    >
                        <Text>shoot for</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        // style={styles.button}
                        style={styles.openButtonGirl}
                        onPress={onPressGirls}
                    >
                        <Text>Shoot for no reason !</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.countContainer}>
                    <TouchableOpacity
                        // style={styles.button}
                        style={styles.openButtonBoy}

                        onPress={onPressBoys}
                    >
                        <Text>shoot for</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        // style={styles.button}
                        style={styles.openButtonBoy}

                        onPress={onPressBoys}
                    >
                        <Text>shoot for</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        // style={styles.button}
                        style={styles.openButtonBoy}

                        onPress={onPressBoys}
                    >
                        <Text>Shoot for no reason !</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <TouchableOpacity
                style={styles.button}
                // onPress={onPressBoys}
                onPress={() => {
                    navigation.navigate('Proof', { item });
                  }}
            >
                <Text>PROOF!</Text>
            </TouchableOpacity>
            {/* </ScrollView> */}

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
    
    container: {
        flex: 1,
        justifyContent: "center",
        paddingHorizontal: 10
    },
    button: {
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        padding: 10,
        margin: 10,
        borderRadius:5,
        
    },
    countContainer: {
        alignItems: "center",
        padding: 10, 
    },
    
      containerHeader: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
       
        
    },
    logo: {
        width: 70,
        height: 50,
    },
    openButtonGirl: {
        backgroundColor: "#F194FF",
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        margin:5,
      },
      openButtonBoy: {
        backgroundColor: "#007AFF",
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        margin:5,
      },

});



export default Header;