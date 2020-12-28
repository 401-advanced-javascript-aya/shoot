import React, { useState } from 'react';
import { firebase } from '../firebase/config';
import {
  Alert,
  Platform,
  StyleSheet,
  View,
  Button,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  TextInput,
  list,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
const shootRef = firebase
  .firestore()
  .collection('count')
  .doc('Kt4XfDCWfalw1FL0fnCr');
// shootRef.doc().set({ BoysCount: 100, girlsCount: 100 });

// async function count() {
//   await shootRef
//     .get()
//     .then(function (doc) {
//       //
//       if (doc.exists) {
//
//         // countObject = doc.data();
//       } else {
//         // doc.data() will be undefined in this case
//
//       }
//     })
//     .catch(function (error) {
//
//     });
// }
const Header = (item) => {
  count();
  const [countBoys, setCountBoys] = useState();
  const [countGirls, setCountGirls] = useState();
  const navigation = useNavigation();
  async function count() {
    await shootRef
      .get()
      .then(function (doc) {
        //
        if (doc.exists) {
          setCountBoys(doc.data().BoysCount);
          setCountGirls(doc.data().girlsCount);
        } else {
          // doc.data() will be undefined in this case
        }
      })
      .catch(function (error) {
        console.log('Error getting document:', error);
      });
  }

  // let conter = count();
  const onPressBoys = () =>
    setCountBoys(() => {
      shootRef.update({
        BoysCount: countBoys - 1,
      });
    });
  const onPressGirls = () =>
    setCountGirls(() => {
      shootRef.update({
        girlsCount: countGirls - 1,
      });
    });

  return (
    <>
      <View style={styles.containerHeader}>
        <Text>Shoot !</Text>
        <Image style={styles.logo} source={require('../assets/logo.png')} />
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
          color="#007AFF"
          backgroundColor="red"
        />
      </View>
      <View style={styles.countContainer} style={styles.fixToText}>
        {/* <Text>score: {countBoys}</Text>
        <Text>score: {countGirls}</Text> */}
        <Text>score: {countBoys}</Text>
        <Text>score: {countGirls}</Text>
      </View>

      <View style={styles.countContainer} style={styles.fixToText}>
        <View style={styles.countContainer}>
          <TouchableOpacity
            // style={styles.button}
            style={styles.openButtonGirl}
            onPress={onPressGirls}
          >
            <Text>It is your snoring {'\n'} for me ! </Text>
          </TouchableOpacity>
          <TouchableOpacity
            // style={styles.button}
            style={styles.openButtonGirl}
            onPress={onPressGirls}
          >
            <Text>
              She occupied my closet
              {'\n'}and left one shelf for me !
            </Text>
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
            <Text>It is your burned cook {'\n'}for me !</Text>
          </TouchableOpacity>
          <TouchableOpacity
            // style={styles.button}
            style={styles.openButtonBoy}
            onPress={onPressBoys}
          >
            <Text>I go to my work without{'\n'} having a breakfast!</Text>
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
  );
};
const styles = StyleSheet.create({
  fixToText: {
    margin: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    // backgroundColor: Platform.OS === 'ios' ?  'red' :  'yellow'
    color: 'black',
    // backgroundColor: 'red'
  },

  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    margin: 10,
    borderRadius: 5,
  },
  countContainer: {
    alignItems: 'center',
    padding: 10,
    justifyContent: 'center',
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
    backgroundColor: '#F194FF',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    margin: 5,
    justifyContent: 'center',
  },
  openButtonBoy: {
    backgroundColor: '#007AFF',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    margin: 5,
    justifyContent: 'center',
  },
});

export default Header;
