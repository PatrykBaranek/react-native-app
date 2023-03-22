import { Button, ButtonProps } from 'react-native-paper';
import { useCallback } from 'react';
import { FTPGame } from '../../app/api/freeToPlayapi';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { addGameToCatalog, removeGameFromCatalog } from '../../app/gamelistSlice/gamelistSlice';

interface AddToWishlistButtonsProps {
  game: FTPGame;
}

export const AddToWishlistButtons: React.FC<AddToWishlistButtonsProps> = ({
  game,
}): React.ReactElement<ButtonProps> => {
  const dispatch = useAppDispatch();

  const gamesInWishlist = useAppSelector((state) => state.gamelist.catalogs[0].games);

  const addGameToWishlistHandler = useCallback(
    (game: FTPGame) => {
      dispatch(addGameToCatalog({ game: game, catalogId: '1' }));
    },
    [dispatch]
  );

  const removeGameFromWishlistHandler = useCallback(
    (game: FTPGame) => dispatch(removeGameFromCatalog({ gameId: game.id, catalogId: '1' })),
    [dispatch]
  );
  return gamesInWishlist.find((gameInWishlist) => gameInWishlist.id === game.id) ? (
    <Button
      icon="delete"
      mode="contained"
      style={{ backgroundColor: 'red', marginLeft: 10 }}
      onPress={() => removeGameFromWishlistHandler(game)}
    >
      Remove from Wishlist
    </Button>
  ) : (
    <Button
      icon="plus"
      mode="contained"
      style={{ marginLeft: 10 }}
      onPress={() => addGameToWishlistHandler(game)}
    >
      Add To Wishlist
    </Button>
  );
};
