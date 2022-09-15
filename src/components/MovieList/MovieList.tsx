import { StyleSheet, View, Text, Button, TextInput, Image, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import MovieElement from '../MovieElement/MovieElement';
import axios from 'axios';

const MovieList = () => {
  const [cookie, setCookie] = useState('');
  const [text, setText] = useState('');
  const [movie, setMovie] = useState<any>(null);
  const [movies, setMovies] = useState<any>(null);
  const [info, setInfo] = useState('');

  const addText = () => setText(cookie);
  const studentDetails = ['Alex', 'Anik', 'Deven', 'Rathore'];

  const fetchData = async (text: any) => {
    if (text.length < 3) {
      return setInfo('Minimum 3 characters');
    }
    setInfo('');
    setMovie('');
    const uri = `https://hackday-mymovies-backend.herokuapp.com/api/movies/${text}`;
    try {
      const response = await axios.get(uri);
      console.log(response.data.Search);
      setMovie(response.data.Search[0]);
      setMovies(response.data.Search);
    } catch (error: any) {
      setText(error.msg);
    }
  };

  useEffect(() => {}, [movies]);

  return movies ? (
    <View>
      <Text>MovieList</Text>
      <ScrollView>
      {movies.map((movie: any) => (
        <View>
          <MovieElement key={movie.imdbID} movie={movie} />
        </View>
      ))}
      </ScrollView>
      <TextInput style={styles.input} onChangeText={(text) => setText(text)} value={text} placeholder='Title...' />
      <Button title='Fetch' onPress={() => fetchData(text)} />
    </View>
  ) : (
    <View>
      <Text>MovieList</Text>
      <TextInput style={styles.input} onChangeText={(text) => setText(text)} value={text} placeholder='Title...' />
      <Button title='Fetch' onPress={() => fetchData(text)} />
    </View>
  );
};

const styles = StyleSheet.create({
  button: {},
  logo: {
    width: 100,
    height: 150,
  },
  input: {
    borderColor: 'lightgrey',
    borderStyle: 'solid',
    borderWidth: 1,
    marginTop: 20,
  },
  title: {
    textAlign: 'center',
    marginTop: 25,
  },
});

export default MovieList;
