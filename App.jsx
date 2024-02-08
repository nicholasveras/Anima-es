import React, {useRef, useEffect} from "react";
import {SafeAreaView ,View, Text, StyleSheet, Animated} from 'react-native'

export default function App(){
  const larAnimada = useRef(new Animated.Value(0)).current
  const altAnimada = useRef(new Animated.Value(50)).current
  //const opacidadeAnimada = useRef(new Animated.Value(0)).current

  useEffect(()=> {

    Animated.sequence([
      Animated.timing(larAnimada, {
        toValue: 100,
        duration: 4000,
        useNativeDriver: false
      }),
      Animated.timing(altAnimada, {
        toValue: 100,
        duration: 4000,
        useNativeDriver: false
      })
    ]).start(({finished}) => {
      alert("Animação Finalizada!")
    });

  }, []);

  let porcentagemLargura = larAnimada.interpolate({
    inputRange: [0, 100], // Entrada, vai de quanto até quanto
    outputRange: ['0%', '100%'] // Vai sair de 0% até 100%
  })

  let porcentagemAltura = altAnimada.interpolate({
    inputRange: [50, 100],
    outputRange: ['5%', '100%']
  })

  return(
    <SafeAreaView style={styles.container}>
      <Animated.View 
      style={{
        width: porcentagemLargura, 
        height: porcentagemAltura, 
        backgroundColor: '#ff0000', 
        justifyContent: 'center',

        //opacity: opacidadeAnimada
        }}>
        
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