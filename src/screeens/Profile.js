import React from 'react';
import {View, Button, Text} from 'react-native';
const ProfileScreen = ({navigation}) => {
  return (
    <View>
      <Text>Profile screen</Text>

      <Button title="Back" onPress={() => navigation.goBack()} />
    </View>
  );
};
export default ProfileScreen;
