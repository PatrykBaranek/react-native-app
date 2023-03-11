import { StyleSheet, ListRenderItemInfo } from 'react-native';
import { Button, Text } from 'react-native-paper';
import { FTPGame } from '../app/api/freeToPlayapi';
import { useNavigation } from '@react-navigation/native';
import { GameDetailsScreenNavigationProp } from '../navigation/HomeStackScreen';
import { Card } from 'react-native-paper';

export const GameItem = ({ item: game }: ListRenderItemInfo<FTPGame>) => {
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
        <Button icon="plus">Add To Wishlist</Button>
      </Card.Actions>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    marginVertical: 15,
    backgroundColor: '#111',
    shadowColor: '#222',
  },
  text: {
    color: '#ccc',
    marginVertical: 5,
  },
});
