import { StyleSheet, View, Text, Button, TextInput, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import MovieElement from '../MovieElement/MovieElement';
import axios from 'axios';

const MovieList = () => {
  const [cookie, setCookie] = useState('');
  const [text, setText] = useState('');
  const [movie, setMovies] = useState<any>(null);
  const [info, setInfo] = useState('');

  const addText = () => setText(cookie);

  const fetchData = async (text: any) => {
    if (text.length < 3) {
      return setInfo('Minimum 3 characters');
    }
    setInfo('');
    setMovies('');
    const uri = `https://hackday-mymovies-backend.herokuapp.com/api/movies/${text}`;
    try {
      const response = await axios.get(uri);
      console.log(response.data.Search);
      setMovies(response.data.Search[0]);
    } catch (error: any) {
      setText(error.msg);
    }
  };

  useEffect(() => {}, [movie]);

  return movie ? (
    <View>
      <Text style={styles.title} >MovieList</Text>
              <MovieElement movie={movie}/>
      <TextInput onChangeText={(text) => setText(text)} value={text} placeholder='Title...' />
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
   borderWidth: '1px',
   marginTop: '20px'
  },
  title: {
    textAlign: 'center'
  }
});

export default MovieList;
