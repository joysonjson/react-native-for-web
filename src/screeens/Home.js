import React from 'react';
import {View, Button, Text} from 'react-native';
const HomeScreen = ({navigation}) => {
  return (
    <View>
      <Text>Home screemn</Text>
      <Button
        title="Go To Profile Screen"
        onPress={() => navigation.push('Profile')}
      />
    </View>
  );
};
export default HomeScreen;
