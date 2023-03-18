import { FlatList, ListRenderItemInfo } from 'react-native';
import { DataTable, IconButton } from 'react-native-paper';
import { format } from 'date-fns';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { GamesType, removeGameFromWishlist } from '../../app/wishlistSlice/wishlistSlice';

export const WishlistRenderer = () => {
  const games = useAppSelector((state) => state.wishlist.games);
  const dispatch = useAppDispatch();

  const renderItem = ({ item }: ListRenderItemInfo<GamesType>) => {
    const date = new Date(item.addDate);
    const formatedDate = format(date, 'yyyy-MM-dd').toString();

    return (
      <DataTable.Row>
        <DataTable.Cell textStyle={{ color: '#fff' }}>{item.title}</DataTable.Cell>
        <DataTable.Cell style={{ justifyContent: 'center' }} textStyle={{ color: '#fff' }}>
          {formatedDate}
        </DataTable.Cell>
        <DataTable.Cell style={{ justifyContent: 'flex-end' }}>
          <IconButton
            icon="delete"
            iconColor="#fff"
            onPress={() => dispatch(removeGameFromWishlist(item))}
            style={{ backgroundColor: 'red' }}
          />
        </DataTable.Cell>
      </DataTable.Row>
    );
  };

  return (
    <FlatList data={games} renderItem={renderItem} keyExtractor={(game) => game.id.toString()} />
  );
};
