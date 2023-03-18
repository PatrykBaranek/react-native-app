import { ScrollView } from 'react-native';
import { DataTable } from 'react-native-paper';
import { WishlistRenderer } from './WishlistRenderer';

export const Wishlist = () => {
  return (
    <ScrollView>
      <DataTable>
        <WishlistRenderer />
      </DataTable>
    </ScrollView>
  );
};
