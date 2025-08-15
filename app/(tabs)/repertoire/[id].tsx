import { SafeAreaView } from "react-native-safe-area-context";
import { useLocalSearchParams } from "expo-router";
import { useRouter } from "expo-router";
import { Text } from "react-native";
import { IconButton } from "react-native-paper";
export default function PiecePage() {
  const {id, title, composer, status, lastPracticed} = useLocalSearchParams();
  const router = useRouter();
  return (
    <SafeAreaView>
      <Text className="text-2xl font-bold mb-4">Piece Details</Text>
      <Text className="text-lg">ID: {id}</Text>
      <Text className="text-lg">Title: {title}</Text>
      <Text className="text-lg">Composer: {composer}</Text>
      <Text className="text-lg">Status: {status}</Text>
      <Text className="text-lg">Last Practiced: {lastPracticed}</Text>
      <IconButton
        icon="arrow-left"
        onPress={() => router.back()}
        style={{ marginTop: 20 }}
      />
    </SafeAreaView>
  );
}
