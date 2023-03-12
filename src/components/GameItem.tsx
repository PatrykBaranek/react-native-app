import React, { useCallback } from 'react';
import { StyleSheet, ListRenderItemInfo } from 'react-native';
import { Button, Text } from 'react-native-paper';
import { FTPGame } from '../api/freeToPlayapi';
import { useNavigation } from '@react-navigation/native';
import { GameDetailsScreenNavigationProp } from '../navigation/HomeStackScreen';
import { Card } from 'react-native-paper';
import { useAppDispatch, useAppSelector } from '../hooks';
import { addGameToWishlist, removeGameFromWishlist } from '../wishlistSlice/wishlistSlice';

export const GameItem: React.FC<ListRenderItemInfo<FTPGame>> = React.memo(
  ({ item: game }: ListRenderItemInfo<FTPGame>) => {
    const navigation = useNavigation<GameDetailsScreenNavigationProp>();
    const dispatch = useAppDispatch();
    const gamesInWishlist = useAppSelector((state) => state.wishlist.games);

    const addGameToWishlistHandler = useCallback(
      (game: FTPGame) => {
        dispatch(addGameToWishlist(game));
      },
      [dispatch]
    );

    const removeGameFromWishlistHandler = useCallback(
      (game: FTPGame) => dispatch(removeGameFromWishlist(game)),
      [dispatch]
    );

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
          {gamesInWishlist.find((gameInWishlist) => gameInWishlist.id === game.id) ? (
            <Button
              icon="delete"
              style={{ backgroundColor: 'red' }}
              onPress={() => removeGameFromWishlistHandler(game)}
            >
              Remove from Wishlist
            </Button>
          ) : (
            <Button icon="plus" onPress={() => addGameToWishlistHandler(game)}>
              Add To Wishlist
            </Button>
          )}
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
