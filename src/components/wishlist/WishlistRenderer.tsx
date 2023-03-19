import { FlatList, ListRenderItemInfo } from 'react-native';
import { useAppSelector } from '../../app/hooks';
import { GamesType } from '../../app/wishlistSlice/wishlistSlice';
import { WishlistItem } from './WishlistItem';

export const WishlistRenderer = () => {
  const games = useAppSelector((state) => state.wishlist.games.sort());

  const renderItem = ({ item, index, separators }: ListRenderItemInfo<GamesType>) => {
    return <WishlistItem item={item} index={index} separators={separators} />;
  };

  return (
    <FlatList data={games} renderItem={renderItem} keyExtractor={(game) => game.id.toString()} />
  );
};
