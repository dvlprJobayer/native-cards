import {Image, StyleSheet, Text, View} from 'react-native';

const PlaceCard = (): JSX.Element => {
  return (
    <View>
      <Text style={styles.headingText}>Popular Places</Text>
      <View style={styles.card}>
        <Image
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS--iMisenzQVj-MDzXLG04JD87fJ1wag5s0R0qtiM_Oc1DzuUexTJKritc7cGXDbqDfA0&usqp=CAU',
          }}
          style={styles.cardImg}
        />
        <View style={styles.cardBody}>
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
  card: {
    marginHorizontal: 14,
    marginVertical: 12,
    height: 360,
    backgroundColor: '#000',
    borderRadius: 8,
    elevation: 4,
    shadowColor: '#ccc',
    shadowOffset: {
      height: 1,
      width: 1,
    },
  },
  cardImg: {
    height: 200,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  cardBody: {
    paddingHorizontal: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    color: '#fff',
    marginTop: 12,
    marginBottom: 6,
  },
  label: {
    fontSize: 16,
    color: '#fff',
  },
  description: {
    fontSize: 14,
    color: '#ccc',
    marginTop: 12,
  },
});
