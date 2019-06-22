import React from 'react';
import { View, Text, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetails = ({ albums }) => {
  const { title, artist, thumbnail_image, image, url } = albums;
  const { headerContentStyle,
     thumbnailStyle,
     thumbnailContainerStyle,
     headerTextStyle,
    imageStyle } = styles;
  return (
      <Card>
        <CardSection>
          <View style={thumbnailContainerStyle}>
            <Image
              style={thumbnailStyle}
              source={{ uri: thumbnail_image }}
            />
          </View>
          <View style={headerContentStyle}>
            <Text style={headerTextStyle}>{title}</Text>
            <Text>{artist}</Text>
          </View>
        </CardSection>
        <CardSection>
          <Image source={{ uri: image }} style={imageStyle} />
        </CardSection>
        <CardSection>
          <Button onPress={() => Linking.openURL(url)} >
            Buy Now!!
          </Button>
        </CardSection>
      </Card>
    );
  };

  const styles = {
    headerContentStyle: {
      justifyContent: 'space-around',
      flexDirection: 'column'
    },
    headerTextStyle: {
      fontSize: 40
    },
    thumbnailStyle: {
      height: 50,
      width: 50
    },
    thumbnailContainerStyle: {
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: 10,
      marginRight: 10
    },
    imageStyle: {
      height: 300,
      width: null, //for flex=1
      flex: 1 //to take width of mobile
    }
  };

export default AlbumDetails;
