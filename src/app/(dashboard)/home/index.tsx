import { StyleSheet } from 'react-native'
import {  Text, View } from '@/src/components/Themed';
import Container from '@/src/components/Container';
import React from 'react'

const HomeScreen = () => {
  return (
    <Container>
      <Text style={styles.title}>Tab One</Text>
      
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      {/* <EditScreenInfo path="app/(tabs)/index.tsx" /> */}
    </Container>
  )
}

export default HomeScreen;

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
