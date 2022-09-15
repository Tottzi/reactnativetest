import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Platform } from 'react-native';
import MovieList from './src/components/MovieList/MovieList';
import MovieListWeb from './src/components/MovieList/MovieList.web';


export default function App() {
  return Platform.OS === 'web' ?
  (
    <View style={styles.container}>
      <MovieListWeb />
      <StatusBar style="auto" />
    </View>
  )
  :(
    <View style={styles.container}>
      <MovieList />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    color: 'black',
    textAlign: 'center',
    marginTop: 200,
    maxHeight: 300
  },
});
