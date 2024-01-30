import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons';

import USERS from '../data/users';

import Avatar from '../components/Avatar';

export default function Message({
  message,
  userId,
  likes,
  replies,
  masonry = false,
  skipHeader = false,
}) {
  const navigation = useNavigation();
  return (
    <View style={masonry ? styles.masonryContainer : styles.listContainer}>
      {!skipHeader && (
        <TouchableOpacity
          activeOpacity={0.75}
          onPress={() => {
            navigation.navigate('Profile', {
              userId,
            });
          }}
          style={styles.profileLayout}>
          <Avatar userId={userId} style={styles.avatar} />
          <View>
            <Text style={styles.name}>{USERS[userId].name}</Text>
            <Text style={styles.secondary}>@{USERS[userId].handle}</Text>
          </View>
        </TouchableOpacity>
      )}
      <Text>{message}</Text>
      <View style={styles.interactionsLayout}>
        <View style={styles.interaction}>
          <Ionicons
            name="heart-outline"
            size={18}
            color="#aaa"
            style={styles.icon}
          />
          <Text style={styles.secondary}>{likes}</Text>
        </View>
        <View style={styles.interaction}>
          <Ionicons
            name="ios-chatbox-outline"
            size={18}
            color="#aaa"
            style={styles.icon}
          />
          <Text style={styles.secondary}>{replies}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    paddingVertical: 16,
    paddingRight: 16,
    borderBottomWidth: 1,
    borderBottomStyle: 'solid',
    borderBottomColor: '#ddd',
  },
  masonryContainer: {
    flex: 1,
    marginTop: 10,
    marginRight: 10,
    padding: 10,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#ddd',
    borderRadius: 8,
  },
  avatar: {
    marginRight: 10,
  },
  name: {
    fontSize: 15,
    fontWeight: '500',
    marginBottom: 2,
  },
  secondary: {
    color: '#888',
  },
  profileLayout: {
    flexDirection: 'row',
    marginBottom: 12,
  },
  interactionsLayout: {
    flexDirection: 'row',
  },
  interaction: {
    flexDirection: 'row',
    alignItems: 'center',
    color: '#aaa',
    marginRight: 20,
    marginTop: 12,
  },
  icon: {
    marginRight: 4,
  },
});
