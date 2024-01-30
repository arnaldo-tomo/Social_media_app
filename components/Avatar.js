import { View, StyleSheet, Image } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

import USERS from '../data/users';

export default function Avatar({ userId, style, size = 36 }) {
  const SIZING = {
    height: size,
    width: size,
  };
  return (
    <View style={style}>
      {USERS[userId]?.avatar ? (
        <Image source={USERS[userId].avatar} style={[styles.avatar, SIZING]} />
      ) : (
        <View
          style={[
            styles.avatar,
            SIZING,
            { backgroundColor: USERS[userId].color },
          ]}>
          <Ionicons
            name="person-circle-outline"
            size={(size * 2) / 3}
            color="rgba(255,255,255,.8)"
            style={styles.icon}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  avatar: {
    height: 36,
    width: 36,
    borderRadius: 999,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ccc',
  },
});
