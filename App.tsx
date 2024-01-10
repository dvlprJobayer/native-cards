import {SafeAreaView, ScrollView} from 'react-native';
import FlatCards from './components/FlatCards';
import ElevatedCards from './components/ElevatedCards';
import PlaceCard from './components/PlaceCard';
import BlogCard from './components/BlogCard';

const App = (): JSX.Element => {
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCards />
        <ElevatedCards />
        <PlaceCard />
        <BlogCard />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
