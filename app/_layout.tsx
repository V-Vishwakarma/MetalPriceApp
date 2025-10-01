// import { Stack } from "expo-router";
// import { SafeAreaProvider } from "react-native-safe-area-context";
// import Index from ".";

// export default function RootLayout() {
//   return (
//     <SafeAreaProvider>
//       <Stack screenOptions={{ headerShown: false }}>
//         <Stack.Screen name="index" />
//       </Stack>
//     </SafeAreaProvider>
//   );
// }

import { Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="detail/[metal]" /> {/* Add this line */}
      </Stack>
    </SafeAreaProvider>
  );
}