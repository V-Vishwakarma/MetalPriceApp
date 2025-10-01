import { Text, View } from "react-native";

export default function ErrorMessage({ message }) {
    return (
        <View className="p-4 bg-red-100 rounded-lg">
            <Text className="text-red-600 font-semibold">Error: {message}</Text>
        </View>
    );
}
