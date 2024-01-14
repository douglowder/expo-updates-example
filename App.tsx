import { StatusBar } from "expo-status-bar";
import { Text, TouchableHighlight, View } from "react-native";
import colors from "tailwindcss/colors";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-white p-4">
      <StatusBar style="auto" />

      <TouchableHighlight
        activeOpacity={1}
        onPress={() => {}}
        underlayColor={colors.violet[700]}
        className="w-full rounded bg-violet-600 px-4 py-3"
      >
        <Text className="text-base text-white font-semibold text-center">
          Button
        </Text>
      </TouchableHighlight>
    </View>
  );
}
