import React, { useState } from "react";
import { Scenario } from "../../constants/scenario";
import { saveScenario } from "../../storage/scenarioStorage";
import {
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { COLORS, FONT } from "../../constants/theme";

interface CreateScenarioModalProps {
  visible: boolean;
  onClose: () => void;
  onSaved: (scenario: Scenario[]) => void;
}

function CreateScenarioModal({
  visible,
  onClose,
  onSaved,
}: CreateScenarioModalProps) {
  const [description, setDescription] = useState("");
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSave = async () => {
    if (!description || !name || !phoneNumber) {
      return;
    }

    const newScenario: Scenario = {
      id: Date.now().toString(),
      title: description,
      description,
      name,
      phoneNumber,
      ringtone: null,
    };

    const updated = await saveScenario(newScenario);
    onSaved(updated);
    onClose();
  };

  return (
    <Modal visible={visible} transparent animationType="slide">
      <View style={styles.overlay}>
        <View style={styles.modal}>
          <Text style={styles.header}>커스텀 상황 만들기</Text>

          <TextInput
            placeholder="상황 설명"
            style={styles.input}
            placeholderTextColor="#888"
            value={description}
            onChangeText={setDescription}
          />

          <TextInput
            placeholder="이름 예: 엄마"
            style={styles.input}
            placeholderTextColor="#888"
            value={name}
            onChangeText={setName}
          />

          <TextInput
            placeholder="전화번호"
            style={styles.input}
            placeholderTextColor="#888"
            keyboardType="phone-pad"
            value={phoneNumber}
            onChangeText={setPhoneNumber}
          />

          <View style={styles.row}>
            <Pressable style={styles.cancelBtn} onPress={onClose}>
              <Text style={styles.cancelText}>취소</Text>
            </Pressable>

            <Pressable style={styles.saveBtn} onPress={handleSave}>
              <Text style={styles.saveText}>저장</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.4)",
  },
  modal: {
    width: "85%",
    backgroundColor: "#1e1e2d",
    padding: 20,
    borderRadius: 14,
  },
  header: {
    fontSize: FONT.lg,
    color: COLORS.white,
    marginBottom: 16,
    fontWeight: "bold",
  },
  input: {
    backgroundColor: "#2c2c3a",
    color: COLORS.white,
    padding: 12,
    borderRadius: 10,
    marginBottom: 12,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cancelBtn: {
    padding: 12,
    backgroundColor: "#333",
    borderRadius: 10,
    flex: 1,
    marginRight: 8,
    alignItems: "center",
  },
  saveBtn: {
    padding: 12,
    backgroundColor: COLORS.blue,
    borderRadius: 10,
    flex: 1,
    marginLeft: 8,
    alignItems: "center",
  },
  cancelText: { color: "#aaa" },
  saveText: { color: COLORS.white, fontWeight: "700" },
});

export default CreateScenarioModal;
