import {ScrollView, StyleSheet, Text, View} from 'react-native';

const ElevatedCards = (): JSX.Element => {
  return (
    <View>
      <Text style={styles.headingText}>Elevated Cards</Text>
      <ScrollView horizontal style={styles.container}>
        <View style={styles.card}>
          <Text style={{fontWeight: '700'}}>Tap</Text>
        </View>
        <View style={styles.card}>
          <Text style={{fontWeight: '700'}}>to</Text>
        </View>
        <View style={styles.card}>
          <Text style={{fontWeight: '700'}}>see</Text>
        </View>
        <View style={styles.card}>
          <Text style={{fontWeight: '700'}}>more</Text>
        </View>
        <View style={styles.card}>
          <Text style={{fontWeight: '700'}}>card</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default ElevatedCards;

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  container: {
    padding: 8,
  },
  card: {
    height: 100,
    width: 100,
    backgroundColor: '#CAD5E2',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 8,
    elevation: 4,
    shadowColor: '#333',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.4,
    shadowRadius: 2,
  },
});
