import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetails from './AlbumDetails';


class AlbumList extends Component {
  state= {
    albums: [],
  }

  componentWillMount() {
      axios.get('http://rallycoding.herokuapp.com/api/music_albums').then(response => this.setState({ albums: response.data }));
  }

  renderAlbums() {
      return this.state.albums.map(albums =>
          <AlbumDetails key={albums.title} albums={albums} />
      );
  }

  render() {
  return (

    <ScrollView>
      { this.renderAlbums() }
    </ScrollView>
  );
}
}

export default AlbumList;
