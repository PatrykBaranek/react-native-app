import { View } from 'react-native';
import { Text } from 'react-native-paper';
import { GenrePicker } from './GenrePicker';

export const HomeHeader: React.FC = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#000',
      }}
    >
      <View style={{ marginRight: 20 }}>
        <Text variant="titleLarge" style={{ color: '#fff' }}>
          Free To Play Games
        </Text>
      </View>
      <GenrePicker />
    </View>
  );
};
