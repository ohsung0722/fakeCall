import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React, { useEffect, useState } from "react";
import { RootStackParamList } from "../navigation/types";
import { Scenario, SCENARIOS } from "../constants/scenario";
import {
  FlatList,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import HeaderBar from "../components/common/HeaderBar";
import ScenarioButton from "../components/ScenarioScreen/ScenarioButton";
import { COLORS, FONT, SPACING } from "../constants/theme";
import { getUserScenarios } from "../storage/scenarioStorage";

type Nav = NativeStackNavigationProp<RootStackParamList, "Scenario">;

function ScenarioScreen() {
  const navigation = useNavigation<Nav>();
  const [modalVisible, setModalVisible] = useState(false);
  const [customScenarios, setCustomScenarios] = useState<Scenario[]>([]);

  async function loadStoredScenarios() {
    const stored = await getUserScenarios();
    setCustomScenarios(stored);
  }

  const allScenarios = [...customScenarios, ...SCENARIOS];

  const handlePressScenario = (item: Scenario) => {
    navigation.navigate("Incoming", {
      from: "Scenario",
      scenario: {
        name: item.name,
        phoneNumber: item.phoneNumber,
        ringtone: item.ringtone,
      },
    });
  };

  useEffect(() => {
    loadStoredScenarios();
  }, []);

  return (
    <View style={styles.container}>
      <HeaderBar title="상황 선택" />

      <Pressable
        style={({ pressed }) => [
          styles.customButton,
          { opacity: pressed ? 0.8 : 1 },
        ]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.customText}>+ 커스텀 상황 만들기</Text>
      </Pressable>

      <FlatList
        data={allScenarios}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ScenarioButton
            title={item.title}
            description={item.description}
            onPress={() => handlePressScenario(item)}
          />
        )}
      />

      <Modal visible={modalVisible} transparent animationType="fade">
        <View style={styles.modalBackground}>
          <View style={styles.modalBox}>
            <Text style={styles.modalTitle}>커스텀 상황 만들기</Text>

            <Pressable
              style={styles.closeBtn}
              onPress={() => setModalVisible(false)}
            >
              <Text style={{ color: "#fff" }}>닫기</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.mainBackground,
    paddingHorizontal: SPACING.lg,
    paddingTop: SPACING.md,
  },
  customButton: {
    backgroundColor: COLORS.blue,
    paddingVertical: 14,
    borderRadius: 16,
    alignItems: "center",
    marginBottom: 20,
  },
  customText: {
    color: "#fff",
    fontSize: FONT.md,
    fontWeight: "700",
  },
  modalBackground: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalBox: {
    width: "80%",
    backgroundColor: "#222",
    padding: 20,
    borderRadius: 12,
    alignItems: "center",
  },
  modalTitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 20,
  },
  closeBtn: {
    backgroundColor: "#444",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
  },
});

export default ScenarioScreen;
