import {StyleSheet, Text, View} from 'react-native';

const FlatCards = (): JSX.Element => {
  return (
    <View>
      <Text style={styles.headingText}>Flat Cards</Text>
      <View style={styles.container}>
        <View style={[styles.card, styles.cardOne]}>
          <Text style={{color: '#FFFFFF'}}>Red</Text>
        </View>
        <View style={[styles.card, styles.cardTwo]}>
          <Text style={{color: '#FFFFFF'}}>Green</Text>
        </View>
        <View style={[styles.card, styles.cardThree]}>
          <Text style={{color: '#FFFFFF'}}>Blue</Text>
        </View>
      </View>
    </View>
  );
};

export default FlatCards;

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    columnGap: 16,
    padding: 8,
  },
  card: {
    width: 100,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  cardOne: {
    backgroundColor: '#EF5354',
  },
  cardTwo: {
    backgroundColor: '#27ae60',
  },
  cardThree: {
    backgroundColor: '#16a085',
  },
});
