import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import Header from './components/header';
import AlbumList from './components/AlbumList';

// import AlbumList from './components/AlbumList';

class App extends Component {
  componentWillMount() {
      firebase.initializeApp({
        apiKey: 'GbHi8bXhDyMP2m1NDUSiYmznAJdJzX36DDmAZ-Y',
        authDomain: 'fir-authentication-bb3d5.firebaseapp.com',
        databaseURL: 'https://fir-authentication-bb3d5.firebaseio.com',
        projectId: 'fir-authentication-bb3d5',
        storageBucket: 'fir-authentication-bb3d5.appspot.com',
        messagingSenderId: '642056739464',
        appId: '1:642056739464:web:39dc7883272d3adc'
      });
  }
  render() {
    return (
      //flex = 1 so that scroll work on whole width
      // <View style={{ flex: 1 }}>
      //   <Header headerText={'Albums'} />
      //   <AlbumList />
      // </View>
      <View>
        <Header headerText={'AlbumList'} />
        <AlbumList />
      </View>
    );
  }

}

export default App;
