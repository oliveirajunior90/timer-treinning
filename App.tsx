import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import ExerciseItem from "./src/components/exercise/exercise-item.tsx";
import {Exercise} from "@/types/exercise.ts";

const ExerciseList: React.FC = () => {
  const exercises: Exercise[] = [
    { id: '1', name: 'Supino Reto', quantity: 2, time: {execution: 3, rest: 3} },
  ];

  return (
      <View style={styles.container}>
      <FlatList
          data={exercises}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <ExerciseItem exercise={item} />}
          contentContainerStyle={styles.listContainer}
      />
      </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#1c1c1c',
  },
  listContainer: {
    padding: 16,
  },
  exerciseContainer: {
    padding: 20,
    marginBottom: 20,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
  },
  exerciseTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    fontSize: 18,
    width: '100%',
    marginBottom: 10,
    borderRadius: 5,
    textAlign: 'center',
  },
});

export default ExerciseList;
