import { useGetGamesQuery } from '../api/freeToPlayapi';
import SelectDropdown from 'react-native-select-dropdown';
import { useMemo } from 'react';
import { View } from 'react-native';

export const GenrePicker: React.FC = () => {
  const { data: games, isFetching } = useGetGamesQuery();

  const genres = useMemo(() => [...new Set(games?.map((game) => game.genre))], [games]);

  return (
    <View>
      <SelectDropdown
        buttonStyle={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 10,
          width: 150,
        }}
        searchInputTxtColor="#ccc"
        dropdownStyle={{ borderRadius: 10 }}
        data={genres}
        onSelect={(selectedItem, item) => {
          console.log(selectedItem, item);
        }}
      />
    </View>
  );
};
