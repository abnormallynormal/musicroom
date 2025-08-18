import Text from "@/components/Text";
import {Music4, Plus} from "lucide-react-native"
import {
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
  BottomSheetModal,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import { useCallback, useRef, useState } from "react";
import {
  FlatList,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Card, SegmentedButtons } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
export default function StartPracticing() {
  const addRepertoireModalRef = useRef<BottomSheetModal>(null);
  const addGoalModalRef = useRef<BottomSheetModal>(null);
  const [repertoireOrExercises, setRepertoireOrExercises] =
    useState("repertoire");
  const [practiceQueue, setPracticeQueue] = useState<piece[]>([]);
  interface piece {
    id: string;
    title: string;
    composer: string;
    status: string;
    lastPracticed: string;
  }
  const repertoire: piece[] = [
    {
      id: "123",
      title: "Clair de Lune",
      composer: "Claude Debussy",
      status: "Practicing",
      lastPracticed: "2023-10-01",
    },
    {
      id: "456",
      title: "Moonlight Sonata",
      composer: "Ludwig van Beethoven",
      status: "Completed",
      lastPracticed: "2023-09-15",
    },
  ];

  const renderBackdrop = useCallback(
    (props: BottomSheetBackdropProps) => (
      <BottomSheetBackdrop {...props} disappearsOnIndex={-1} opacity={0.5} />
    ),
    []
  );
  const handleAddRepertoirePress = () => {
    addGoalModalRef.current?.dismiss();
    addRepertoireModalRef.current?.present();
  };

  const handleAddGoalPress = () => {
    addRepertoireModalRef.current?.dismiss();
    addGoalModalRef.current?.present();
  };
  return (
    <SafeAreaView className="px-6 py-8 flex-1 relative bg-white">
      <Text className="text-4xl font-extrabold py-2 mx-auto mb-8">
        Start Practicing
      </Text>
      <View className="mb-8">
        <Text className="text-2xl font-bold py-2">Select what to practice</Text>
        {practiceQueue.map((item) => (
          <Card
            key={item.id}
            style={{ marginBottom: 12, backgroundColor: "#ffffff" }}
          >
            <Card.Content className="flex-row items-center gap-4">
              <Music4 />
              <View>
                <Text className="text-lg font-semibold">{item.title}</Text>
                <Text>{item.composer}</Text>
              </View>
            </Card.Content>
          </Card>
        ))}
        <Card style={{ backgroundColor: "#a855f7" }}>
          <TouchableOpacity onPress={handleAddRepertoirePress} className="py-4">
            <Card.Content className="flex-row items-center gap-4">
              <Plus color="#ffffff" />
              <Text className="text-lg font-semibold text-white">
                Add repertoire or exercises
              </Text>
            </Card.Content>
          </TouchableOpacity>
        </Card>
      </View>
      <View className="mb-4">
        <Text className="text-2xl font-bold py-2">
          Add goals for this session
        </Text>
        <Card style={{ backgroundColor: "#a855f7" }}>
          <TouchableOpacity onPress={handleAddGoalPress} className="py-4">
            <Card.Content className="flex-row items-center gap-4">
              <Plus color="#ffffff"/>
              <Text className="text-lg text-white font-semibold">Add goal</Text>
            </Card.Content>
          </TouchableOpacity>
        </Card>
      </View>
      <TouchableOpacity className="absolute bottom-8 w-[80%] py-4 self-center rounded-full bg-purple-500 items-center">
        <Text className="text-xl font-semibold text-white">
          Start practicing!
        </Text>
      </TouchableOpacity>
      <BottomSheetModal
        ref={addRepertoireModalRef}
        snapPoints={["60%", "90%"]}
        index={1}
        backdropComponent={renderBackdrop}
      >
        <BottomSheetView style={{ flex: 1, padding: 16 }}>
          <Text className="text-2xl font-bold mb-4">
            Add repertoire or exercises
          </Text>
          <SegmentedButtons
            value={repertoireOrExercises}
            onValueChange={(value) => setRepertoireOrExercises(value)}
            style={{ backgroundColor: "#f0f0f0", borderRadius: 8 }}
            buttons={[
              {
                value: "repertoire",
                label: "Repertoire",
                style: { borderRadius: 8 },
              },
              {
                value: "exercises",
                label: "Exercises",
                style: { borderRadius: 8 },
              },
            ]}
          />
          {repertoireOrExercises === "repertoire" && (
            <View>
              <TextInput
                placeholder="Search for pieces..."
                className="p-2 rounded-md mt-8 mb-4 border border-gray-500"
              />
              <FlatList
                data={repertoire}
                renderItem={({ item }: { item: piece }) =>
                  practiceQueue.some(
                    (queueItem) => queueItem.id === item.id
                  ) ? (
                    <Card
                      className=" border-green-500"
                      elevation={2}
                      style={{
                        marginBottom: 12,
                        borderWidth: 1.25,
                        backgroundColor: "#f0fdf4",
                      }}
                      onPress={() => {
                        console.log(practiceQueue);
                        setPracticeQueue(
                          practiceQueue.filter((piece) => piece.id !== item.id)
                        );
                      }}
                    >
                      <Card.Content className="px-4 pt-2 pb-4">
                        <View className="relative">
                          <View className="flex-row justify-between items-center">
                            <Text className="text-xl font-semibold">
                              {item.title}
                            </Text>
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
                    </Card>
                  ) : (
                    <Card
                      elevation={1}
                      style={{
                        marginBottom: 12,
                        borderWidth: 0.25,
                        backgroundColor: "#ffffff",
                      }}
                      onPress={() => {
                        console.log(practiceQueue);
                        setPracticeQueue([...practiceQueue, item]);
                      }}
                    >
                      <Card.Content className="px-4 pt-2 pb-4">
                        <View className="relative">
                          <View className="flex-row justify-between items-center">
                            <Text className="text-xl font-semibold">
                              {item.title}
                            </Text>
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
                    </Card>
                  )
                }
              />
            </View>
          )}
          {repertoireOrExercises === "exercises" && (
            <TextInput
              placeholder="Search for exercises..."
              className="p-2 rounded-md mt-8 mb-4 border border-gray-500"
            />
          )}
        </BottomSheetView>
      </BottomSheetModal>

      <BottomSheetModal
        ref={addGoalModalRef}
        snapPoints={["50%", "70%"]}
        index={1}
        backdropComponent={renderBackdrop}
      >
        <BottomSheetView style={{ flex: 1, padding: 16 }}>
          <Text className="text-2xl font-bold mb-4">Add Session Goal</Text>
          <Text>Content for adding goals goes here...</Text>
        </BottomSheetView>
      </BottomSheetModal>
    </SafeAreaView>
  );
}
