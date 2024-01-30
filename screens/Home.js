import { View, StyleSheet } from 'react-native';
import { FlashList } from '@shopify/flash-list';

import POSTS from '../data/posts';

import Message from '../components/Message';

export default function Home() {
  return (
    <View style={styles.container}>
      <FlashList
        data={POSTS}
        renderItem={({ item }) => <Message {...item} />}
        estimatedItemSize={150}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 16,
  },
});
