import AntDesign from "@expo/vector-icons/AntDesign";
import { Button, Text, View, TouchableOpacity } from "react-native";
import { Card, FAB } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRef } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import {
  BottomSheetModal,
  BottomSheetView,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";

export default function StartPracticing() {
  const addPieceModalRef = useRef<BottomSheetModal>(null);
  const addGoalModalRef = useRef<BottomSheetModal>(null);

  const handleAddPiecePress = () => {
    addPieceModalRef.current?.present();
  };

  const handleAddGoalPress = () => {
    addGoalModalRef.current?.present();
  };
  return (
    <SafeAreaView className="px-6 py-8 flex-1 relative">
      <Text className="text-4xl font-[700] py-2 mx-auto mb-8">
        Start Practicing
      </Text>
      <View className="mb-8">
        <Text className="text-2xl font-bold py-2">Select what to practice</Text>
        <Card>
          <TouchableOpacity onPress={handleAddPiecePress} className="py-4">
            <Card.Content className="flex-row items-center gap-4">
              <AntDesign name="plus" size={20} color="black" />
              <Text className="text-lg font-semibold">
                Add piece or technique
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
              <Text className="text-lg font-semibold">
                Add goal
              </Text>
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
        ref={addPieceModalRef}
        snapPoints={["50%", "90%"]}
        index={1}
      >
        <BottomSheetView className="flex-1 p-4">
          <Text className="text-2xl font-bold mb-4">
            Add piece or technique
          </Text>
          <Text>Content for adding pieces goes here...</Text>
        </BottomSheetView>
      </BottomSheetModal>

      <BottomSheetModal
        ref={addGoalModalRef}
        snapPoints={["50%", "70%"]}
        index={1}
      >
        <BottomSheetView style={{ flex: 1, padding: 20 }}>
          <Text className="text-2xl font-bold mb-4">Add Session Goal</Text>
          <Text>Content for adding goals goes here...</Text>
        </BottomSheetView>
      </BottomSheetModal>
    </SafeAreaView>
  );
}
