import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MovieList from './src/components/MovieList/MovieList';


export default function App() {
  return (
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
    height: '300px'
  },
});
