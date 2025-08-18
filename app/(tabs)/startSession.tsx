import AntDesign from "@expo/vector-icons/AntDesign";
import {
  BottomSheetModal,
  BottomSheetView,
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
} from "@gorhom/bottom-sheet";
import { useRef, useState, useCallback } from "react";
import {
  FlatList,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Text from "@/components/Text";
import { Card, SegmentedButtons } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
export default function StartPracticing() {
  const addRepertoireModalRef = useRef<BottomSheetModal>(null);
  const addGoalModalRef = useRef<BottomSheetModal>(null);
  const [repertoireOrExercises, setRepertoireOrExercises] =
    useState("repertoire");
  const [practiceQueue, setPracticeQueue] = useState();
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
        <Card>
          <TouchableOpacity onPress={handleAddRepertoirePress} className="py-4">
            <Card.Content className="flex-row items-center gap-4">
              <AntDesign name="plus" size={20} color="black" />
              <Text className="text-lg font-semibold">
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
        <Card>
          <TouchableOpacity onPress={handleAddGoalPress} className="py-4">
            <Card.Content className="flex-row items-center gap-4">
              <AntDesign name="plus" size={20} color="black" />
              <Text className="text-lg font-semibold">Add goal</Text>
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
                renderItem={({ item }: { item: piece }) => (
                  <Card
                    className="!bg-green-50 shadow-green-500"
                    style={{ marginBottom: 12, position: "relative", borderWidth:0.25 }}
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
                )}
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
