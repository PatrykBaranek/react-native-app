import { ScrollView } from 'react-native';
import { DataTable } from 'react-native-paper';
import { WishlistRenderer } from './WishlistRenderer';

export const Wishlist = () => {
  return (
    <ScrollView>
      <DataTable>
        <DataTable.Header>
          <DataTable.Title textStyle={{ color: '#fff' }}>Title</DataTable.Title>
          <DataTable.Title textStyle={{ color: '#fff' }}>Add Date</DataTable.Title>
        </DataTable.Header>
        <WishlistRenderer />
      </DataTable>
    </ScrollView>
  );
};
