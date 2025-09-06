import { TouchableOpacity, Modal, View } from "react-native";
import { useRef, useCallback } from "react";
import { Card } from "react-native-paper";
import Text from "@/components/Text";
import {
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
  BottomSheetModal,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import { Disc } from "lucide-react-native";
export default function AddRecording() {
  const bottomSheetRef = useRef<BottomSheetModal>(null);
  const setVisible = () => {
    bottomSheetRef.current?.present();
  };

  const renderBackdrop = useCallback(
    (props: BottomSheetBackdropProps) => (
      <BottomSheetBackdrop {...props} disappearsOnIndex={-1} opacity={0.5} />
    ),
    []
  );
  return (
    <View>
      <BottomSheetModal
        ref={bottomSheetRef}
        snapPoints={["33%"]}
        index={1}
        backdropComponent={renderBackdrop}
      >
        <BottomSheetView style={{ flex: 1, padding: 16 }}>
          <Text className="text-2xl font-bold mb-4">Add Recording</Text>
          <Card
            style={{
              borderTopLeftRadius: 16,
              borderTopRightRadius: 16,
              borderBottomLeftRadius: 0,
              borderBottomRightRadius: 0,
              borderWidth: 0.25,
              backgroundColor: "#FFFFFF",
            }}
          >
            <Card.Content>
              <Text className="text-lg font-semibold">
                Add Spotify recording
              </Text>
            </Card.Content>
          </Card>
          <Card
            style={{
              borderRadius: 0,
              borderWidth: 0.25,
              backgroundColor: "#FFFFFF",
            }}
          >
            <Card.Content>
              <Text className="text-lg font-semibold">Add YouTube video</Text>
            </Card.Content>
          </Card>
          <Card
            style={{
              borderTopLeftRadius: 0,
              borderTopRightRadius: 0,
              borderBottomLeftRadius: 16,
              borderBottomRightRadius: 16,
              borderWidth: 0.25,
              backgroundColor: "#FFFFFF",
            }}
          >
            <Card.Content>
              <View className="flex-row items-center gap-4">
                <Disc />
                <Text className="text-lg font-semibold">
                  Add local mp3/m4a file
                </Text>
              </View>
            </Card.Content>
          </Card>
        </BottomSheetView>
      </BottomSheetModal>
      <TouchableOpacity onPress={setVisible}>
        <Text>Add Recording</Text>
      </TouchableOpacity>
    </View>
  );
}
