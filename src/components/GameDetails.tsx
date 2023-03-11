import { SafeAreaView, Text } from 'react-native';
import { useGetGameByIdQuery } from '../app/api/freeToPlayapi';

import { GameDetailsScreenRouteProp } from '../navigation/HomeStackScreen';
import { useRoute } from '@react-navigation/native';
import { ActivityIndicator } from 'react-native-paper';

export const GameDetails: React.FC = () => {
  const route = useRoute<GameDetailsScreenRouteProp>();
  const { data: game, isLoading } = useGetGameByIdQuery(route.params.id);

  if (isLoading) {
    return (
      <ActivityIndicator style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} />
    );
  }

  return (
    <SafeAreaView>
      <Text>{game?.title}</Text>
    </SafeAreaView>
  );
};
