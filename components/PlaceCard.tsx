import {Image, StyleSheet, Text, View} from 'react-native';

const PlaceCard = () => {
  return (
    <View>
      <Text style={styles.headingText}>Popular Places</Text>
      <View>
        <Image
          source={{
            uri: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQQZA8s3i80S9sJnQwPMBucnYOuPjOsPWuuWKP272agfS60vRU_0o1Vzv_6W03OySwua1OyWOjO2wlK9hVL2lz',
          }}
          style={styles.cardImg}
        />
        <View>
          <Text style={styles.title}>Eiffel Tower</Text>
          <Text style={styles.label}>7th arrondissement, Paris, France</Text>
          <Text style={styles.description}>
            The Eiffel Tower is a wrought-iron lattice tower on the Champ de
            Mars in Paris, France. It is named after the engineer Gustave
            Eiffel, whose company designed and built the tower from 1887 to
            1889.
          </Text>
        </View>
      </View>
    </View>
  );
};

export default PlaceCard;

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  cardImg: {
    height: 180,
    width: 180,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
  },
  label: {
    fontSize: 16,
  },
  description: {
    fontSize: 14,
  },
});
