import React, { FC } from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface DrugCardProps {
  drugName: string;
  dosage: string;
  description: string;
}

const DrugCard: FC<DrugCardProps> = ({ drugName, dosage, description }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.drugName}>{drugName}</Text>
      <Text style={styles.dosage}>{dosage}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 16,
    margin: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  drugName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  dosage: {
    fontSize: 16,
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: 'gray',
  },
});

export default DrugCard;
