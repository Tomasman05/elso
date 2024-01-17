import React from 'react';
import {StyleSheet, Text, View, Image, TextInput, Button,  } from 'react-native';

export default function App() {
  const [text, onChangeText] = React.useState('');
  return (
    <View style={styles.container}>
      <Text style={styles.h1}>bakxtale taves</Text>
      <Image style={styles.kep} source={require('./assets/jq2ohpsp45z91.jpg')} />
      <Text style={styles.h2}>aves romale</Text>
      <Text style={styles.h2}>Kik hívnak már ?</Text>
      <TextInput 
        style={styles.input} 
        onChangeText={text => onChangeText(text)}
        />
      <Text>{text}</Text>
      <Button title='Start' onPress={()=>checkAnswer()}/>
    </View>
  );
  function checkAnswer(){
    if (text=="öcskösök" || text=="Öcskösök") {
            
      alert("Helyes")
    }
    alert("Rossz válasz")
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#500197',
    alignItems: 'center',
    justifyContent: 'center',
  },
  h1: {
    color: '#fff',
    fontSize: 44,
  },
  h2:{
    color:"#fff",
  },
  kep:{
    width:500,
    height:250,
  },
  input: {    
    borderColor: 'blue',
    borderWidth: 1,
    backgroundColor: 'lightblue',
    width: '80%',
  },
});
