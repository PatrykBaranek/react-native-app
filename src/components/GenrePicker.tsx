import { useMemo } from 'react';
import { useGetGamesQuery } from '../app/api/freeToPlayapi';
import { useAppDispatch } from '../hooks';
import { selectGenre } from '../app/genreSlice/genreSlice';
import SelectDropdown from 'react-native-select-dropdown';
import { View } from 'react-native';

export const GenrePicker: React.FC = () => {
  const dispatch = useAppDispatch();
  const { data: games } = useGetGamesQuery();

  const genres = useMemo(() => [...new Set(games?.map((game) => game.genre))], [games]);

  const handleSelect = (selectedItem: string) => {
    selectedItem = selectedItem.split(' ')[0].toLowerCase();

    dispatch(selectGenre(selectedItem));
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: 70,
      }}
    >
      <SelectDropdown
        buttonStyle={{
          width: '100%',
          borderRadius: 50,
          backgroundColor: '#333',
        }}
        buttonTextStyle={{ color: '#ccc' }}
        dropdownStyle={{ borderRadius: 10, backgroundColor: '#333' }}
        rowTextStyle={{ color: '#ccc' }}
        data={genres}
        onSelect={(selectedItem) => {
          handleSelect(selectedItem);
        }}
        defaultButtonText="Genre"
      />
    </View>
  );
};
