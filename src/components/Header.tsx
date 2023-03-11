import { Text, View, StyleSheet } from 'react-native';
import { NavigationProps } from '../navigation/HomeStackScreen';

export const Header = ({ navigation }: NavigationProps) => {
  return (
    <View>
      <Text style={styles.boldHeader}>Free To Play Games</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  lightHeader: {
    fontSize: 35,
    marginTop: 60,
    marginHorizontal: 25,
  },
  boldHeader: {
    fontSize: 40,
    fontWeight: '700',
    marginHorizontal: 25,
  },
});
