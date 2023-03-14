import { useGetGamesQuery } from '../api/freeToPlayapi';
import SelectDropdown from 'react-native-select-dropdown';
import { useMemo } from 'react';

export const GenrePicker: React.FC = () => {
  const { data: games, isFetching } = useGetGamesQuery();

  const genres = useMemo(() => [...new Set(games?.map((game) => game.genre))], [games]);

  return (
    <SelectDropdown
      buttonStyle={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        backgroundColor: '#333',
      }}
      buttonTextStyle={{ color: '#ccc' }}
      dropdownStyle={{ borderRadius: 10, backgroundColor: '#333' }}
      rowTextStyle={{ color: '#ccc' }}
      data={genres}
      onSelect={(selectedItem, item) => {
        console.log(selectedItem, item);
      }}
      defaultButtonText="Genre"
    />
  );
};
