import React, {useRef} from "react";
import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity } from "react-native";

import * as Animatable from 'react-native-animatable';

const ButtonAnimated = Animatable.createAnimatableComponent(TouchableOpacity);

export default function App(){
  const buttonRef = useRef(null);

  function handleClick(){
    buttonRef.current.bounce();
  }

  return(
    <SafeAreaView style={styles.container}>
      <Animatable.Text 
      style={styles.title}
      animation='shake'
      >
        Nicholas Dev
      </Animatable.Text>

      <ButtonAnimated 
      style={styles.button} 
      animation="pulse" 
      ref={buttonRef}
      onPress={handleClick}
      >
        <Text style={{color: "#FFF"}}>Anima!</Text>
      </ButtonAnimated>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 25,
  },
  button: {
    width: '70%',
    height: 30,
    backgroundColor: '#121212',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25,
  }
})