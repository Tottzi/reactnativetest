import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'

const MovieElement = (props: any) => {
  const {movie} = props;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{movie.Title}</Text>
      <Image source={{ uri: movie.Poster }} style={styles.logo} />
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    color: 'black',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  logo: {
    width: 100,
    height: 150,
  },
});

export default MovieElement;