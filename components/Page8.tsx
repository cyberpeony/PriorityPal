import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';

type Page8NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const Page8 = () => {
  const navigation = useNavigation<Page8NavigationProp>();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tareas:</Text>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Page7')}>
        <Text style={styles.buttonText}>Ver todas las tareas del equipo</Text>
      </TouchableOpacity>

      <View style={styles.descriptionCard}>
        <Text style={styles.descriptionTitle}>Descripción</Text>
        {/* Aquí puedes agregar un ícono o imagen representando la lista de tareas */}
        <View style={styles.iconPlaceholder}></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    borderRadius: 40,
    borderWidth: 20,
    borderColor: '#FFF',
    backgroundColor: '#6f78fd', 

  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4A4A4A',
    textAlign: 'center'
  },
  button: {
    marginVertical: 20,
    backgroundColor: '#000',
    padding: 10,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  descriptionCard: {
    backgroundColor: '#8468EC',
    padding: 20,
    borderRadius: 10,
  },
  descriptionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  iconPlaceholder: {
    height: 100,
    backgroundColor: '#000', 
    borderRadius: 10,
    marginTop: 10,
  },
});

export default Page8;