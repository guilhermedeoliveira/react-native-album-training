import React from 'react';
import { View, Image, Text } from 'react-native';

import Card from './Card';
import CardSection from './CardSection';

const AlbumDetail = ({ album }) => {
  const { thumbnail_image, title, artist } = album;

  return (
    <Card>
      <CardSection>
        <View>
          <Image source={{ uri: thumbnail_image }} />
        </View>
        <View>
          <Text>{title}</Text>
          <Text>{artist}</Text>
        </View>

      </CardSection>
    </Card>
  );
};

export default AlbumDetail;
