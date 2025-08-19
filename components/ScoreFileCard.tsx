import { Card } from "react-native-paper";
import { TouchableOpacity } from "react-native";
import Text from "./Text";
import { Linking } from "react-native";



import * as Sharing from "expo-sharing";
interface ScoreFileCardProps {
  name: string;
  size: number;
  uri: string;
}
export default function ScoreFileCard({ name, size, uri }: ScoreFileCardProps) {
  const openFile = async (uri: string) => {
    if (!(await Sharing.isAvailableAsync())) {
      console.log("Sharing not available");
      return;
    }
    await Sharing.shareAsync(uri, {
      UTI: "com.adobe.pdf",
      mimeType: "application/pdf",
    });
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
