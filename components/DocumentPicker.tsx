import * as DocumentPicker from "expo-document-picker";
import { TouchableOpacity } from "react-native";
import Text from "./Text";
interface DocumentSelectorProps {
  onFileSelect: (file: { name: string; size: number; uri: string }) => void;
}

export default function DocumentSelector({ onFileSelect }: DocumentSelectorProps) {
  const pick = async () => {
    const response = await DocumentPicker.getDocumentAsync({
      type: "application/pdf"
    })
    if (!response.canceled) {
      const { name, size, uri } = response.assets[0]
      onFileSelect({ name, size: size ?? 0, uri })
    }
  }
  return(
    <TouchableOpacity onPress={pick}>
      <Text>Upload file</Text>
    </TouchableOpacity>
  )
}