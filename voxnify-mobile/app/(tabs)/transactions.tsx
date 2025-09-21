import { FlatList, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import TransactionItem from '@/components/ui/transaction-item';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function TabTwoScreen() {
  const transactions = [
    { id: '1', name: 'Transaction 1', amount: 100, date: '2021-01-01' },
    { id: '2', name: 'Transaction 2', amount: 200, date: '2021-01-02' },
    { id: '3', name: 'Transaction 3', amount: 300, date: '2021-01-03' },
  ];
  return (
    <SafeAreaView className="flex-1">
      <View className="flex-1 pt-6 pl-4 pb-3 pr-3 gap-8">
        <ThemedText type="title">Transactions</ThemedText>
        <FlatList
          data={transactions}
          renderItem={({ item }) => <TransactionItem transaction={item} />}
        />
      </View>
    </SafeAreaView>
  );
}
