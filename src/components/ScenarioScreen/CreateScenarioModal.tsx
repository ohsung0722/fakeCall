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
import AudioRecorderUploader from "./AudioRecorderUploader";

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
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [audioUri, setAudioUri] = useState<string | null>(null);

  const handleSave = async () => {
    if (!description || !name || !phoneNumber) {
      return;
    }

    const newScenario: Scenario = {
      id: Date.now().toString(),
      title,
      description,
      name,
      phoneNumber,
      ringtone: audioUri ?? null,
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

          <View style={styles.inputSection}>
            <Text style={styles.label}>상황 제목</Text>
            <TextInput
              style={styles.input}
              placeholder="예: 늦은 밤 골목길"
              placeholderTextColor="#818181"
              value={title}
              onChangeText={setTitle}
            />
          </View>

          <View style={styles.inputSection}>
            <Text style={styles.label}>상황 설명</Text>
            <TextInput
              placeholder="예: 뒤 따라오는 사람이 있을 때"
              style={styles.input}
              placeholderTextColor="#888"
              value={description}
              onChangeText={setDescription}
            />
          </View>

          <View style={styles.inputSection}>
            <Text style={styles.label}>표시될 이름</Text>
            <TextInput
              placeholder="예: 엄마 / 팀장 / 이성친구"
              style={styles.input}
              placeholderTextColor="#888"
              value={name}
              onChangeText={setName}
            />
          </View>
          <View style={styles.inputSection}>
            <Text style={styles.label}>전화번호</Text>
            <TextInput
              placeholder="전화번호"
              style={styles.input}
              placeholderTextColor="#888"
              keyboardType="phone-pad"
              value={phoneNumber}
              onChangeText={setPhoneNumber}
            />
          </View>

          <View style={{ marginTop: 10 }}>
            <Text style={styles.label}>음성 선택 (선택사항)</Text>

            <AudioRecorderUploader onChange={(uri) => setAudioUri(uri)} />
          </View>

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
  inputSection: {
    marginBottom: 16,
  },

  label: {
    color: COLORS.white,
    marginBottom: 6,
    fontSize: 14,
    opacity: 0.85,
  },
  input: {
    backgroundColor: "#2c2c3a",
    color: COLORS.white,
    padding: 12,
    borderRadius: 10,
    marginBottom: 12,
  },

  recordBtn: {
    backgroundColor: "#3757ff40",
    padding: 12,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 8,
  },
  recordingActive: {
    backgroundColor: "#ff3b3040",
    borderWidth: 1,
    borderColor: "#ff3b30",
  },
  recordText: { color: "#fff", fontSize: 15 },

  playBtn: {
    backgroundColor: "#3a3a4d",
    padding: 10,
    borderRadius: 8,
    marginTop: 10,
    alignItems: "center",
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
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
