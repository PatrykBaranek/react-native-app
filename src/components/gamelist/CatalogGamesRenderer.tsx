import { FlatList, ListRenderItemInfo } from 'react-native';
import { useAppSelector } from '../../app/hooks';
import { CatalogType, GamesType } from '../../app/gamelistSlice/gamelistSlice';
import { GamelistItem } from './GamelistItem';
import { useRoute } from '@react-navigation/native';
import { GamelistScreenRouteProp } from '../../navigation/GamelistStackScreen';

export const CatalogGamesRenderer = () => {
  const route = useRoute<GamelistScreenRouteProp>();
  const games = useAppSelector(
    (state) =>
      (state.gamelist.catalogs.find((catalog) => catalog.id === route.params.id) as CatalogType)
        .games
  );

  const renderItem = ({ item, index, separators }: ListRenderItemInfo<GamesType>) => {
    return <GamelistItem item={item} index={index} separators={separators} />;
  };

  return (
    <FlatList data={games} renderItem={renderItem} keyExtractor={(game) => game.id.toString()} />
  );
};
