import Text from "@/components/Text";
import { useRouter } from "expo-router";
import { FlatList, TextInput, TouchableOpacity, View } from "react-native";
import { Card, IconButton } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
export default function RepertoirePage() {
  const headerComponent = () => {
    return (
      <View>
        <Text className="text-4xl font-extrabold mb-4">Your repertoire</Text>
        <TextInput
          placeholder="Search for pieces..."
          className="p-2 rounded-md mb-4 border border-gray-500"
        />
      </View>
    );
  };
  const router = useRouter();
  interface piece {
    id: string;
    title: string;
    composer: string;
    status: string;
    lastPracticed: string;
  }
  const repertoire: piece[] = [
    {
      id: "1",
      title: "Clair de Lune",
      composer: "Claude Debussy",
      status: "Practicing",
      lastPracticed: "2023-10-01",
    },
    {
      id: "2",
      title: "Moonlight Sonata",
      composer: "Ludwig van Beethoven",
      status: "Completed",
      lastPracticed: "2023-09-15",
    },
    {
      id: "3",
      title: "Moonlight Sonata",
      composer: "Ludwig van Beethoven",
      status: "Completed",
      lastPracticed: "2023-09-15",
    },
    {
      id: "4",
      title: "Moonlight Sonata",
      composer: "Ludwig van Beethoven",
      status: "Completed",
      lastPracticed: "2023-09-15",
    },
    {
      id: "5",
      title: "Moonlight Sonata",
      composer: "Ludwig van Beethoven",
      status: "Completed",
      lastPracticed: "2023-09-15",
    },
    {
      id: "6",
      title: "Moonlight Sonata",
      composer: "Ludwig van Beethoven",
      status: "Completed",
      lastPracticed: "2023-09-15",
    },
  ];
  return (
    <SafeAreaView className="px-6 py-8 flex-1 bg-white">
      <FlatList
        data={repertoire}
        ListHeaderComponent={headerComponent}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }: { item: piece }) => (
          <Card
            className="!bg-white"
            style={{
              marginBottom: 12,
              position: "relative",
              borderWidth: 0.25,
            }}
          >
            <TouchableOpacity
              onPress={() => {
                router.push({
                  pathname: "/repertoire/[id]",
                  params: {
                    id: item.id,
                    title: item.title,
                    composer: item.composer,
                    status: item.status,
                    lastPracticed: item.lastPracticed,
                  },
                });
              }}
            >
              <Card.Content className="px-4 pt-2 pb-4">
                <View className="relative">
                  <View className="flex-row justify-between items-center">
                    <Text className="text-xl font-semibold">{item.title}</Text>
                  </View>
                  <Text className="text-base text-gray-500">
                    {item.composer}
                  </Text>
                  <Text className="text-base text-gray-500 mb-2">
                    {item.status}
                  </Text>
                  <Text className="text-base text-gray-500">
                    Last Practiced: {item.lastPracticed}
                  </Text>
                </View>
              </Card.Content>
            </TouchableOpacity>
          </Card>
        )}
        keyExtractor={(item) => item.id}
        keyboardDismissMode="on-drag"
      />
    </SafeAreaView>
  );
}
