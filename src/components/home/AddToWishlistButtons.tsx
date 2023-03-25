import { ButtonProps, IconButton } from 'react-native-paper';
import { useCallback, useEffect, useState } from 'react';
import { FTPGame } from '../../app/api/freeToPlayapi';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { removeGameFromCatalog } from '../../app/gamelistSlice/gamelistSlice';
import { AddToCatalogModal } from './AddToCatalogModal';

interface AddToWishlistButtonsProps {
  game: FTPGame;
}

export const AddToWishlistButtons: React.FC<AddToWishlistButtonsProps> = ({
  game,
}): React.ReactElement<ButtonProps> => {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useAppDispatch();

  const catalogWithGame = useAppSelector((state) =>
    state.gamelist.catalogs.find((catalog) =>
      catalog.games.find((gameInCatalog) => gameInCatalog.id === game.id)
    )
  );

  const removeGameFromWishlistHandler = useCallback(
    (game: FTPGame) => {
      console.log(game);
      dispatch(
        removeGameFromCatalog({ gameId: game.id, catalogId: catalogWithGame?.id as string })
      );
    },
    [dispatch]
  );

  return catalogWithGame ? (
    <IconButton
      icon="delete"
      mode="contained"
      style={{ backgroundColor: 'red', marginLeft: 10 }}
      iconColor="#fff"
      onPress={() => removeGameFromWishlistHandler(game)}
    />
  ) : (
    <>
      <AddToCatalogModal
        game={game}
        visible={showModal}
        handleCloseModal={() => setShowModal(false)}
      />
      <IconButton
        icon="plus"
        mode="contained"
        style={{ marginLeft: 10, backgroundColor: 'green' }}
        iconColor="#fff"
        onPress={() => setShowModal(true)}
      />
    </>
  );
};
