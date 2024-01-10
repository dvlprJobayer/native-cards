import {
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const BlogCard = (): JSX.Element => {
  const openWebsite = (link: string): void => {
    Linking.openURL(link);
  };

  return (
    <View>
      <Text style={styles.headingText}>Blog Card</Text>
      <View style={styles.card}>
        <Text style={styles.title}>Magic in Node.js</Text>
        <Image
          source={{
            uri: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=600',
          }}
          style={styles.cardImg}
        />
        <View style={styles.cardBody}>
          <Text style={styles.text} numberOfLines={3}>
            Node.js is a cross-platform, open-source JavaScript runtime
            environment that can run on Windows, Linux, Unix, macOS, and more.
            Node.js runs on the V8 JavaScript engine, and executes JavaScript
            code outside a web browser. Node.js lets developers use JavaScript
            to write command line tools and for server-side scripting.
          </Text>
          <View style={styles.cardFooter}>
            <TouchableOpacity
              onPress={() =>
                openWebsite('https://en.wikipedia.org/wiki/Node.js')
              }>
              <Text style={styles.btn}>Learn More</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => openWebsite('https://github.com/dvlprJobayer')}>
              <Text style={styles.btn}>Follow me</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default BlogCard;

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  card: {
    marginHorizontal: 12,
    marginVertical: 10,
    backgroundColor: '#26ae60',
    borderRadius: 8,
    elevation: 4,
    shadowColor: '#ccc',
    shadowOffset: {
      height: 1,
      width: 1,
    },
    shadowOpacity: 0.4,
  },
  cardImg: {
    height: 180,
  },
  title: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '600',
    color: '#FFF',
    paddingVertical: 10,
  },
  cardBody: {
    paddingHorizontal: 12,
    paddingVertical: 16,
  },
  text: {
    color: '#FFF',
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 10,
  },
  btn: {
    backgroundColor: '#FFF',
    color: '#333',
    paddingHorizontal: 20,
    paddingVertical: 8,
    fontWeight: '500',
    borderRadius: 6,
  },
});
