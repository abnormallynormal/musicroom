import { SafeAreaView } from "react-native-safe-area-context";
import { useLocalSearchParams } from "expo-router";
import { useRouter } from "expo-router";
import { Text, View, ScrollView } from "react-native";
import { IconButton } from "react-native-paper";
import { Card } from "react-native-paper";
export default function PiecePage() {
  const { id, title, composer, status, lastPracticed } = useLocalSearchParams();
  interface piecePracticeSession {
    id: number;
    date: string;
    duration: number;
    notes: string;
  }

  interface pieceNote {
    id: number;
    date: string;
    notes: string;
  }

  const recentPracticeSessions: piecePracticeSession[] = [
    {
      id: 0,
      date: "2023-10-01",
      duration: 30,
      notes: "Good session",
    },
    {
      id: 1,
      date: "2023-09-28",
      duration: 45,
      notes: "Could have been better",
    },
    {
      id: 2,
      date: "2023-09-25",
      duration: 60,
      notes: "Excellent",
    },
    {
      id: 3,
      date: "2023-09-22",
      duration: 50,
      notes: "Good session, but could have been longer",
    },
  ];

  const pieceNotes: pieceNote[] = [
    {
      id: 0,
      date: "2023-10-01",
      notes:
        "Focus on dynamics Focus on dynamicsFocus on dynamicsFocus on dynamicsFocus on dynamicsFocus on dynamicsFocus on dynamicsFocus on dynamicsFocus on dynamicsFocus on dynamicsFocus on dynamicsFocus on dynamics",
    },
    {
      id: 1,
      date: "2023-09-28",
      notes: "Work on tempo",
    },
    {
      id: 2,
      date: "2023-09-25",
      notes:
        "Practice hands separatelyFocus on dynamicsFocus on dynamicsFocus on dynamicsFocus on dynamicsFocus on dynamicsFocus on dynamicsFocus on dynamicsFocus on dynamicsFocus on dynamicsFocus on dynamicsFocus on dynamicsFocus on dynamicsFocus on dynamicsFocus on dynamicsFocus on dynamicsFocus on dynamicsFocus on dynamicsFocus on dynamicsFocus on dynamicsFocus on dynamicsFocus on dynamicsFocus on dynamicsFocus on dynamics",
    },
  ];

  const router = useRouter();
  return (
    <SafeAreaView className="bg-primary flex-1 px-4">
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text className="text-4xl font-extrabold pt-4 pb-2">{title}</Text>
        <Text className="text-lg text-gray-500 mb-4">{composer}</Text>
        <View className="flex-row items-center justify-between">
          <Text className="text-2xl font-bold mb-2">Scores</Text>
          <Text>Upload file</Text>
        </View>
        <Text className="text-2xl font-bold mb-2">
          Recent practice sessions
        </Text>
        {recentPracticeSessions
          .slice(0, 3)
          .map((item: piecePracticeSession) => {
            return (
              <Card
                className="!bg-white p-4 rounded-md shadow-md mb-4"
                key={item.id}
              >
                <Card.Content>
                  <Text className="text-lg font-bold">{item.date}</Text>
                  <Text className="text-gray-500">
                    Duration: {item.duration} minutes
                  </Text>
                  <Text className="text-gray-500">Notes: {item.notes}</Text>
                </Card.Content>
              </Card>
            );
          })}
        <Text className="text-2xl font-bold m-2">Practice notes</Text>
        {pieceNotes.slice(0, 3).map((item: pieceNote) => {
          return (
            <Card
              className="!bg-white p-4 rounded-md shadow-md mb-4"
              key={item.id}
            >
              <Card.Content>
                <Text className="text-lg font-bold">{item.date}</Text>
                <Text className="text-gray-500">Notes: {item.notes}</Text>
              </Card.Content>
            </Card>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
}
