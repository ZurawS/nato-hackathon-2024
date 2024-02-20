import { ScrollView, StyleSheet } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import DrugCard from '../components/DrugCard/DrugCard';

const results = [
  {
    drugName: "APAP1",
    dosage: "2mg",
    description: "APAP to lek na ogólnie przyjęty ból, np. ból dupy"
  },
  {
    drugName: "APAP2",
    dosage: "2,5mg",
    description: "APAP to lek na ogólnie przyjęty ból, np. ból dupy"
  },
  {
    drugName: "APAP3",
    dosage: "10mg",
    description: "APAP to lek na ogólnie przyjęty ból, np. ból dupy"
  },
]

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <ScrollView>
        {results.map((result) => (
          <DrugCard
            key={result.drugName}
            drugName={result.drugName}
            dosage={result.dosage}
            description={result.description}
          />
        ))}
      </ScrollView>
      <Text style={styles.title}>Tab One</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="app/(tabs)/index.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
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
