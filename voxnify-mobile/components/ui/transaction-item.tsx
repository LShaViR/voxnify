import { Transaction } from '@/types/transaction';
import { Text, View } from 'react-native';

const TransactionItem = ({ transaction }: { transaction: Transaction }) => {
  return (
    <View className="flex-row justify-between items-center ">
      <Text className="text-lg font-bold text-white">{transaction.name}</Text>
      <Text className="text-lg font-bold text-white">{transaction.amount}</Text>
      <Text className="text-lg font-bold text-white">{transaction.date}</Text>
    </View>
  );
};

export default TransactionItem;
