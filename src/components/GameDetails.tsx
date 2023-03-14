import { Image, Text, View, StyleSheet, ScrollView, Linking } from 'react-native';
import { FTPGame, useGetGameByIdQuery } from '../api/freeToPlayapi';

import { GameDetailsScreenRouteProp } from '../navigation/HomeStackScreen';
import { useRoute } from '@react-navigation/native';
import { ActivityIndicator, Button } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AddToWishlistButtons } from './AddToWishlistButtons';

export const GameDetails: React.FC = () => {
  const route = useRoute<GameDetailsScreenRouteProp>();
  const { data: game, isLoading } = useGetGameByIdQuery(route.params.id);

  if (isLoading) {
    return (
      <ActivityIndicator style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} />
    );
  }

  const handlePress = async (game: FTPGame) => {
    try {
      await Linking.openURL(game.game_url);
    } catch (err) {
      return;
    }
  };

  return (
    <SafeAreaView style={styles.conatiner}>
      <ScrollView>
        <Image style={styles.gameImg} source={{ uri: game?.thumbnail }} />

        <View style={styles.textContainer}>
          <Text style={styles.titleText}>{game?.title}</Text>
          <Text style={styles.descriptionText}>{game?.short_description}</Text>
          <View style={styles.extraInfoContainer}>
            <Text style={styles.infoText}>Release Date: {game?.release_date}</Text>
            <Text style={styles.infoText}>Genre: {game?.genre}</Text>
            <Text style={styles.infoText}>Platform: {game?.platform}</Text>
            <Text style={styles.infoText}>Developer: {game?.developer}</Text>
            <Text style={styles.infoText}>Publisher: {game?.publisher}</Text>
          </View>
        </View>
        <View style={styles.buttonConatiner}>
          <Button onPress={() => handlePress(game as FTPGame)}>Game Website</Button>
          <AddToWishlistButtons game={game as FTPGame} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    backgroundColor: '#111',
  },
  textContainer: {
    padding: 10,
  },
  gameImg: {
    width: '100%',
    height: 200,
  },
  titleText: {
    marginBottom: 10,
    fontSize: 46,
    textAlign: 'center',
    color: '#fff',
  },
  descriptionText: {
    textAlign: 'justify',
    padding: 20,
    fontSize: 24,
    color: '#fff',
  },
  extraInfoContainer: {
    justifyContent: 'space-around',
    alignItems: 'baseline',
    marginTop: 20,
    padding: 30,
    borderRadius: 10,
    height: 300,
    backgroundColor: '#000',
  },

  infoText: {
    textAlign: 'center',
    color: '#ccc',
    fontSize: 20,
  },

  buttonConatiner: {
    marginVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});
