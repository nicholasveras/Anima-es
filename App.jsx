import React, {useRef, useEffect} from "react";
import {SafeAreaView ,View, Text, StyleSheet, Animated} from 'react-native'

export default function App(){
  const larAnimada = useRef(new Animated.Value(150)).current
  const altAnimada = useRef(new Animated.Value(50)).current
  const opacidadeAnimada = useRef(new Animated.Value(1)).current

  useEffect(()=> {
    Animated.parallel([
      Animated.timing(larAnimada,{
        toValue: 300,
        duration: 2000,
        useNativeDriver: false
      }),
      Animated.timing(altAnimada,{
        toValue: 200,
        duration: 2000,
        useNativeDriver: false
      })
    ]).start();
  }, []);

  return(
    <SafeAreaView style={styles.container}>
      <Animated.View 
      style={{
        width: larAnimada, 
        height: altAnimada, 
        backgroundColor: '#4169e1', 
        justifyContent: 'center',
        opacity: opacidadeAnimada
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