import React, { useState, useEffect } from 'react';
import { firebase } from '../firebase/config';
// import DismissKeyboard from '../util/keyboard-dismiss';
import * as ImagePicker from 'expo-image-picker';
// import faker from 'faker';
// import { MaterialIcons } from '@expo/vector-icons';
// import { useNavigation } from '@react-navigation/native';
// import { MaterialIcons } from '@expo/vector-icons';
import {
  Platform,
  TextInput,
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  Alert,
  Modal,
  TouchableOpacity,
  FlatList,
  TouchableHighlight,
} from 'react-native';

const Header = () => {
  // const hitingRef = firebase
  //   .firestore()
  //   .collection('count')
  //   .doc('4b01LraFvyrbJwniFh4F');
  // async function count() {
  //   await hitingRef
  //     .get()
  //     .then(function (doc) {
  //       // console.log('kkkkkkkk', doc);
  //       if (doc.exists) {
  //         console.log('Document data:', doc.data().BoysCount);
  //         doc.data();
  //       } else {
  //         // doc.data() will be undefined in this case
  //         console.log('No such document!');
  //       }
  //     })
  //     .catch(function (error) {
  //       console.log('Error getting document:', error);
  //     });
  // }
  // const { item } = route.params;
  let posts = [];
  const [value, onChangeText] = React.useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [post, setPost] = useState([]);
  const [image, setImage] = useState(
    'https://firebasestorage.googleapis.com/v0/b/shoot-malek-aya.appspot.com/o/shoot%2Fhyhg.jpg?alt=media&token=df2ddb02-9c59-41b2-9a73-3441377c662e'
  );
  const shootRef = firebase.firestore().collection('shoot');
  const storageRef = firebase.storage().ref();
  // getData();
  // console.log('maleeeeeeeeeeeeeeeeeeeeeek', shootRef);
  async function getData() {
    await shootRef.get().then((snapshot) => {
      snapshot.forEach((doc) => {
        const data = doc.data();
        // console.log('data??', data);
        posts.push({ id: doc.id, ...data });
        setPost(posts);
        // console.log(posts, 'asssa');
      });
    });
  }

  async function deleteHandler(id) {
    console.log('item', id);
    shootRef
      .doc(id)
      .delete()
      .then(() => {
        getData();
      })
      .catch((error) => console.error('Error While Removing', error));
  }
  const updateHandler = () => {
    // console.log('ahahahaha');
    uriToBlob(image)
      .then((blob) => uploadToFirebase(blob))
      .then((url) => {
        // const url = `${snapshot.metadata.bucket}/${snapshot.metadata.fullPath}`;
        // console.log('URLLLLLLL', url, value);
        shootRef
          .add({
            comment: value,
            // commentId: '3',
            // id: faker.random.uuid(),
            image: url,
          })
          .then(() => {
            getData();
          })

          // .then(() => navigation.goBack())
          .catch((error) => console.error('Error While Updating', error));
      });
  };
  const uriToBlob = async (uri) => {
    return await new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.onload = async function () {
        // return the blob
        await resolve(xhr.response);
      };

      xhr.onerror = async function () {
        // something went wrong
        await reject(new Error('uriToBlob failed'));
      };
      // this helps us get a blob
      xhr.responseType = 'blob';
      xhr.open('GET', uri, true);

      xhr.send(null);
    });
  };
  const uploadToFirebase = async (blob) => {
    return await new Promise((resolve, reject) => {
      // console.log('blob', blob, 'blob');
      // var storageRef = firebase.storage().ref();
      storageRef
        .child(`shoot/${value}.jpg`)
        .put(blob, {
          contentType: 'image/jpeg',
        })
        .then((snapshot) => {
          // blob.close();
          resolve(storageRef.child(`shoot/${value}.jpg`).getDownloadURL());
        })
        .catch((error) => {
          reject(error);
        });
    });
  };
  const imageHandler = async () => {
    if (Platform.OS) {
      const { status } = await ImagePicker.requestCameraRollPermissionsAsync();
      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
      }
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      console.log(result);

      if (!result.cancelled) {
        setImage(result.uri);
      }
    }
  };
  // var finalPosts = post;
  return (
    // <DismissKeyboard>
    <ScrollView>
      <View style={styles.container}>
        <Text>Shoot !</Text>
        <Image style={styles.logo} source={require('../assets/logo.png')} />
      </View>

      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>
                Click on the photo to upload your Shoot
              </Text>
              <TextInput
                placeholder="Enter your comment here"
                style={{
                  height: 40,
                  borderColor: 'gray',
                  borderWidth: 1,
                  width: 250,
                  borderRadius: 20,
                  margin: 20,
                  paddingLeft: 5,
                }}
                onChangeText={(text) => {
                  text === ''
                    ? ((text = 'BOOOOM!!!'), onChangeText(text))
                    : onChangeText(text);
                }}
                value={value}
              />
              <TouchableOpacity onPress={imageHandler}>
                <Image style={styles.image} source={{ uri: image }} />
              </TouchableOpacity>
              <TouchableHighlight
                style={styles.openPostButton}
                onPress={() => {
                  updateHandler();
                  // setComment();
                  // getData();
                  setModalVisible(!modalVisible);
                }}
              >
                <Text style={styles.textStyle}>Post</Text>
              </TouchableHighlight>
              <TouchableHighlight
                style={styles.openPostButton}
                onPress={() => {
                  setModalVisible(!modalVisible);
                }}
              >
                <Text style={styles.textStyle}>Cancel</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>

        <TouchableHighlight
          style={styles.openButton}
          onPress={() => {
            setModalVisible(true);
          }}
        >
          <Text style={styles.textStyle}>Uplaod your Proof</Text>
        </TouchableHighlight>
      </View>
      <View style={styles.container}>
        {console.log(post, 'aeueueueueueu')}
        {/* <Text>{post[0]}</Text>
      <Text>{post[1]}</Text> */}
        <FlatList
          data={post}
          renderItem={({ item }) => {
            // console.log(item.comment, 'ajajsj');
            return (
              <View style={styles.renderContainer}>
                <Image style={styles.listImage} source={{ uri: item.image }} />
                <Text style={styles.item}>{item.comment}</Text>
                <TouchableOpacity
                  style={styles.delete}
                  onPress={() => {
                    deleteHandler(item.id);
                  }}
                >
                  <Text>Delete</Text>
                </TouchableOpacity>
              </View>
            );
          }}
        />
      </View>
    </ScrollView>
    // </DismissKeyboard>
  );
};
const styles = StyleSheet.create({
  delete: {
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    backgroundColor: '#2196F3',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    marginBottom: 10,
  },
  renderContainer: {
    justifyContent: 'center',
    display: 'flex',
    margin: 20,
    borderWidth: 4,
    borderColor: '#20232A',
    borderRadius: 6,
    // backgroundColor: '#61DAFB',
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  logo: {
    width: 70,
    height: 50,
  },
  listImage: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',

    ...Platform.select({
      ios: {
        width: 370,
        height: 210,
      },
      android: {
        width: 320,
        height: 300,
      },
      default: {
        // other platfo  rm s, web for example
        width: 200,
        height: 100,
      },
    }),
  },
  //////////////
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },

  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openPostButton: {
    backgroundColor: '#2196F3',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    width: 300,
    margin: 20,
  },
  openButton: {
    backgroundColor: '#F194FF',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 30,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 20,
    fontSize: 18,
    height: 120,
    flexShrink: 1,
  },
  image: {
    width: 400,
    height: 230,
  },
});

export default Header;
