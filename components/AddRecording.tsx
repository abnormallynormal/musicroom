import { TouchableOpacity,Text,Modal, View } from "react-native"
import { useState } from "react";
export default function AddRecording(){
  const [visible, setVisible] = useState(false);
  return (
    <View>
      <Modal
        animationType="fade"
        transparent={true}
        visible={visible}
        onRequestClose={() => setVisible(false)}
      >
        <View>
          <Text>Add Recording Modal</Text>
        </View>
      </Modal>
      <TouchableOpacity onPress={() => setVisible(true)}>
        <Text>Add Recording</Text>
      </TouchableOpacity>
    </View>
  );
}