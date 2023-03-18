import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, ListRenderItemInfo } from 'react-native';
import { Button, Text } from 'react-native-paper';
import { Card } from 'react-native-paper';
import { AddToWishlistButtons } from './AddToWishlistButtons';
import { FTPGame } from '../../app/api/freeToPlayapi';
import { GameDetailsScreenNavigationProp } from '../../navigation/HomeStackScreen';

export const GameItem: React.FC<ListRenderItemInfo<FTPGame>> = React.memo(
  ({ item: game }: ListRenderItemInfo<FTPGame>) => {
    const navigation = useNavigation<GameDetailsScreenNavigationProp>();
    return (
      <Card style={styles.card}>
        <Card.Cover source={{ uri: game.thumbnail }}></Card.Cover>
        <Card.Content>
          <Text variant="titleLarge" style={styles.text}>
            {game.title}
          </Text>
          <Text variant="bodyMedium" style={styles.text}>
            {game.short_description}
          </Text>
        </Card.Content>
        <Card.Actions>
          <Button onPress={() => navigation.navigate('GameDetails', { id: game.id })}>
            See Details
          </Button>
          <AddToWishlistButtons game={game} />
        </Card.Actions>
      </Card>
    );
  }
);

const styles = StyleSheet.create({
  card: {
    marginVertical: 15,
    backgroundColor: '#2b2a2a60',
  },
  text: {
    color: '#ccc',
    marginVertical: 5,
  },
});
