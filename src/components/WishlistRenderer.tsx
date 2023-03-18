import { FlatList, ListRenderItemInfo } from 'react-native';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { GamesType, removeGameFromWishlist } from '../app/wishlistSlice/wishlistSlice';
import { Button, DataTable } from 'react-native-paper';
import { format } from 'date-fns';
import { useNavigation } from '@react-navigation/native';
import { ROUTES } from '../constants/routes';

export const WishlistRenderer = () => {
  const games = useAppSelector((state) => state.wishlist.games);
  const dispatch = useAppDispatch();
  const navigation = useNavigation();

  const renderItem = ({ item }: ListRenderItemInfo<GamesType>) => {
    const date = new Date(item.addDate);
    const formatedDate = format(date, 'yyyy-MM-dd').toString();

    return (
      <DataTable.Row>
        <DataTable.Cell textStyle={{ color: '#fff' }}>{item.title}</DataTable.Cell>
        <DataTable.Cell textStyle={{ color: '#fff' }}>{formatedDate}</DataTable.Cell>
        <DataTable.Cell>
          <Button
            icon="delete"
            mode="contained"
            onPress={() => dispatch(removeGameFromWishlist(item))}
            style={{ backgroundColor: 'red' }}
          >
            Remove
          </Button>
        </DataTable.Cell>
      </DataTable.Row>
    );
  };

  return (
    <FlatList data={games} renderItem={renderItem} keyExtractor={(game) => game.id.toString()} />
  );
};
