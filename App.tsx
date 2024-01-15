import { StatusBar } from 'expo-status-bar';
import { checkForUpdateAsync } from 'expo-updates';
import React from 'react';
import { Text, TouchableHighlight, View } from 'react-native';
import colors from 'tailwindcss/colors';

export default function App() {
  const [checkMessage, setCheckMessage] = React.useState<string>('');
  const checkForUpdate = () => {
    if (!checkForUpdateAsync) {
      setCheckMessage('checkForUpdateAsync is missing');
      return;
    }
    checkForUpdateAsync()
      .then((result) => {
        setCheckMessage(
          `isAvailable = ${result.isAvailable}, ID = ${
            result?.manifest?.id ?? ''
          }`,
        );
      })
      .catch((error) => {
        setCheckMessage(`Error in checkForUpdateAsync: ${error}`);
      });
  };
  return (
    <View className="flex-1 items-center justify-center bg-white p-4">
      <StatusBar style="auto" />
      <Text className="text-base font-semibold text-center">
        {checkMessage}
      </Text>
      <TouchableHighlight
        activeOpacity={1}
        onPress={checkForUpdate}
        underlayColor={colors.violet[700]}
        className="w-full rounded bg-violet-600 px-4 py-3"
      >
        <Text className="text-base text-white font-semibold text-center">
          Check for updates
        </Text>
      </TouchableHighlight>
    </View>
  );
}
