import { useState } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { Button, TextInput, Text } from 'react-native-paper';
import { useAppDispatch } from '../../app/hooks';
import { login } from '../../app/loginSlice/loginSlice';
import Iconicons from '@expo/vector-icons/Ionicons';

export const LoginForm = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [loginValue, setLoginValue] = useState<string>('');
  const dispatch = useAppDispatch();

  const handleLogin = () => {
    dispatch(login(loginValue));
  };

  const handleShowPassword = () => {
    setShowPassword(true);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          justifyContent: 'space-between',
          alignItems: 'center',
          height: 100,
          marginVertical: 50,
        }}
      >
        <Iconicons name="game-controller" color={'#fff'} size={60} />
        <Text variant="titleLarge" style={{ color: '#fff', textAlign: 'center' }}>
          Free To Play Games
        </Text>
      </View>
      <View style={styles.formContainer}>
        <TextInput label="login" value={loginValue} onChangeText={(text) => setLoginValue(text)} />
        <TextInput
          label="password"
          secureTextEntry={!showPassword}
          right={<TextInput.Icon icon="eye" onPress={handleShowPassword} />}
        />

        <Button mode="contained" onPress={() => handleLogin()}>
          Login
        </Button>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
    padding: 20,
  },
  formContainer: {
    height: 300,
    justifyContent: 'space-between',
    padding: 20,
  },
});
