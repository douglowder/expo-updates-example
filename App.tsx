import { StatusBar } from "expo-status-bar";
import * as Updates from "expo-updates";
import { Text, TouchableHighlight, View } from "react-native";
import colors from "tailwindcss/colors";

console.log(Updates);

async function handleFetchUpdate() {
  try {
    const update = await Updates.checkForUpdateAsync();

    if (update.isAvailable) {
      const result = await Updates.fetchUpdateAsync();
      console.log(result);
      await Updates.reloadAsync();
    }
  } catch (error) {
    alert(`Error fetching latest Expo update: ${error}`);
    console.log(error);
  }
}

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-white p-4">
      <StatusBar style="auto" />

      <TouchableHighlight
        activeOpacity={1}
        onPress={handleFetchUpdate}
        underlayColor={colors.violet[700]}
        className="w-full rounded bg-violet-600 px-4 py-3"
      >
        <Text className="text-base text-white font-semibold text-center">
          Fetch Updates
        </Text>
      </TouchableHighlight>
    </View>
  );
}
