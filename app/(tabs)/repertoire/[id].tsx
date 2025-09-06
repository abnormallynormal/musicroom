import DocumentSelector from "@/components/DocumentPicker";
import Text from "@/components/Text";
import AddRecording from "@/components/AddRecording";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useState } from "react";
import { FlatList, ScrollView, View } from "react-native";
import { Card } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import ScoreFileCard from "@/components/ScoreFileCard";
export default function PiecePage() {
  const { id, title, composer, status, lastPracticed } = useLocalSearchParams();

  interface ScoreFile {
    name: string;
    size: number;
    uri: string;
  }

  const [scores, setScores] = useState<ScoreFile[]>([]);
  const handleFileSelect = (file: ScoreFile) => {
    setScores((prevScores) => [...prevScores, file]);
  };
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

  const router = useRouter();
  return (
    <SafeAreaView className="bg-primary flex-1 px-6 py-8 bg-white">
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text className="text-4xl font-extrabold mb-1">{title}</Text>
        <Text className="text-lg text-gray-500 mb-4">{composer}</Text>
        <Text className="text-2xl font-bold mb-2">Resources</Text>
        <View>
          <View className="flex-row items-center justify-between mb-2">
            <Text className="text-lg font-semibold">Scores</Text>
            <DocumentSelector onFileSelect={handleFileSelect} />
          </View>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={scores}
            keyExtractor={(item) => item.name}
            renderItem={({ item }: { item: ScoreFile }) => (
              <ScoreFileCard name={item.name} size={item.size} uri={item.uri} />
            )}
          />
        </View>
        <View className="flex-row items-center justify-between">
          <Text className="text-lg font-semibold mb-2">Recordings</Text>
          <AddRecording />
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
                style={{ borderWidth: 0.25 }}
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
      </ScrollView>
    </SafeAreaView>
  );
}
