import React, {useRef, useEffect} from "react";
import {SafeAreaView ,View, Text, StyleSheet, Animated} from 'react-native'

export default function App(){
  const larAnimada = useRef(new Animated.Value(150)).current
  const altAnimada = useRef(new Animated.Value(50)).current
  //const opacidadeAnimada = useRef(new Animated.Value(0)).current

  useEffect(()=> {
    Animated.loop(
      Animated.sequence([
        Animated.timing(larAnimada, {
          toValue: 300,
          duration: 2000,
          useNativeDriver: false
        }),
        Animated.timing(larAnimada, {
          toValue: 150,
          duration: 2000,
          useNativeDriver: false
        })
      ])
    ).start();
  }, []);

  return(
    <SafeAreaView style={styles.container}>
      <Animated.View 
      style={{
        width: larAnimada, 
        height: altAnimada, 
        backgroundColor: '#4169e1', 
        justifyContent: 'center',
        borderRadius: 50
        //opacity: opacidadeAnimada
        }}>
        <Text style={{textAlign: 'center', fontSize: 22, color: '#FFF'}}>Carregando...</Text>
      </Animated.View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})