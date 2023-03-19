import React, { useState } from 'react';
import { ListRenderItemInfo, View } from 'react-native';
import { Menu, Text, IconButton } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { useAppDispatch } from '../../app/hooks';
import { GamesType, removeGameFromWishlist } from '../../app/wishlistSlice/wishlistSlice';
import { format } from 'date-fns';
import { GameDetailsScreenNavigationProp } from '../../navigation/HomeStackScreen';

export const WishlistItem = ({ item }: ListRenderItemInfo<GamesType>) => {
  const dispatch = useAppDispatch();
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const navigation = useNavigation<GameDetailsScreenNavigationProp>();

  const date = new Date(item.addDate);
  const formatedDate = format(date, 'yyyy-MM-dd').toString();
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 10,
        backgroundColor: '#0e0d0d',
        borderBottomWidth: 1,
        borderBottomColor: '#333',
      }}
    >
      <View style={{ flex: 2 }}>
        <Text style={{ color: '#fff', textAlign: 'center' }}>{item.title}</Text>
      </View>
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <Text style={{ color: '#fff', textAlign: 'center' }}>{formatedDate}</Text>
      </View>
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <Text style={{ color: '#fff', textAlign: 'center' }}>{item.genre}</Text>
      </View>
      <View style={{ justifyContent: 'flex-end' }}>
        <Menu
          visible={openMenu}
          onDismiss={() => setOpenMenu(false)}
          anchor={<IconButton onPress={() => setOpenMenu(true)} icon="menu" mode="outlined" />}
        >
          <Menu.Item
            onPress={() => dispatch(removeGameFromWishlist(item))}
            title="Remove"
            leadingIcon="delete"
          />
          <Menu.Item
            title="See Details"
            onPress={() => {
              navigation.navigate('GameDetails', { id: item.id });
              setOpenMenu(false);
            }}
          />
          <Menu.Item title="Move to" leadingIcon="arrow-left" />
        </Menu>
      </View>
    </View>
  );
};
