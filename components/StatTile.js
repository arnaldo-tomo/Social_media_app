import { Text, View, StyleSheet } from 'react-native';

export default function StatTile({ value, title }) {
  return (
    <View style={styles.container}>
      <Text style={styles.value}>{value}</Text>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    minWidth: 100,
    paddingHorizontal: 16,
  },
  value: {
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 6
  },
  title: {
    color: '#888',
    textAlign: 'center',
  },
});
