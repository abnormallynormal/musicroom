import { Card } from "react-native-paper";
import { TouchableOpacity } from "react-native";
import Text from "./Text";
import * as Linking from "expo-linking"
import * as FileSystem from "expo-file-system";
import * as IntentLauncher from "expo-intent-launcher";
import {Platform} from "react-native"
interface ScoreFileCardProps {
  name: string;
  size: number;
  uri: string;
}
export default function ScoreFileCard({ name, size, uri }: ScoreFileCardProps) {
  const openFile = async (uri: string) => {
    try {
      if (Platform.OS === "android" && uri.startsWith("file://")) {
        const contentUri = await FileSystem.getContentUriAsync(uri);
        await IntentLauncher.startActivityAsync("android.intent.action.VIEW", {
          data: contentUri,
          flags: 1,
          type: "application/pdf",
        });
      } else {
        await Linking.openURL(uri);
      }
    } catch (error) {
      console.error("Error opening PDF:", error);
    }
  };
  return (
    <Card className="!bg-white mb-2 w-96 mr-2 py-4" style={{ borderWidth: 0.25 }}>
      <TouchableOpacity onPress={() => openFile(uri)}>
        <Card.Content>
          <Text className="font-medium">{name}</Text>
          <Text className="text-gray-500">
            {(size / 1024 / 1024).toFixed(2)} MB
          </Text>
        </Card.Content>
      </TouchableOpacity>
    </Card>
  );
}
