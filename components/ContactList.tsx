import {Image, StyleSheet, Text, View} from 'react-native';

const contacts = [
  {
    id: 112,
    name: 'Jobayer Ahammed',
    status: 'App Developer',
    imgUrl: 'https://avatars.githubusercontent.com/u/76583359?v=4',
  },
  {
    id: 113,
    name: 'Nesar Ahmad',
    status: 'Full Stack Developer',
    imgUrl: 'https://avatars.githubusercontent.com/u/97525250?v=4',
  },
];

const ContactList = () => {
  return (
    <View>
      <Text style={styles.headingText}>Contact List</Text>
      <View style={styles.container}>
        {contacts.map(contact => (
          <View key={contact.id} style={styles.card}>
            <View>
              <Image source={{uri: contact.imgUrl}} style={styles.img} />
            </View>
            <View>
              <Text style={styles.name}>{contact.name}</Text>
              <Text style={styles.status}>{contact.status}</Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};

export default ContactList;

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  container: {
    marginHorizontal: 16,
    marginVertical: 12,
    rowGap: 8,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 16,
  },
  img: {
    height: 65,
    width: 65,
    borderRadius: 65,
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  status: {
    fontWeight: '500',
    color: '#333',
  },
});
