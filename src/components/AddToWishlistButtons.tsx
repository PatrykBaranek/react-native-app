import { Button, ButtonProps } from 'react-native-paper';
import { useAppDispatch, useAppSelector } from '../hooks';
import { useCallback } from 'react';
import { FTPGame } from '../api/freeToPlayapi';
import { addGameToWishlist, removeGameFromWishlist } from '../wishlistSlice/wishlistSlice';

interface AddToWishlistButtonsProps {
  game: FTPGame;
}

export const AddToWishlistButtons: React.FC<AddToWishlistButtonsProps> = ({
  game,
}): React.ReactElement<ButtonProps> => {
  const dispatch = useAppDispatch();

  const gamesInWishlist = useAppSelector((state) => state.wishlist.games);

  const addGameToWishlistHandler = useCallback(
    (game: FTPGame) => {
      dispatch(addGameToWishlist(game));
    },
    [dispatch]
  );

  const removeGameFromWishlistHandler = useCallback(
    (game: FTPGame) => dispatch(removeGameFromWishlist(game)),
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