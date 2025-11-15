import React from "react";
import { useContacts } from "../hooks/useContacts";
import * as Linking from "expo-linking";
import {
  ActivityIndicator,
  Button,
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import HeaderBar from "../components/common/HeaderBar";
import { COLORS, SPACING } from "../constants/theme";
import ContactButton from "../components/ContactListScreen/ContactButton";

function ContactListScreen() {
  const { contacts, state, reload } = useContacts();

  const openSettings = () => {
    Linking.openSettings();
  };

  return (
    <View style={styles.container}>
      <HeaderBar title="전화번호부" />

      {state === "loading" && (
        <ActivityIndicator
          size={"large"}
          color={COLORS.white}
          style={{ marginTop: 50 }}
        />
      )}

      {state === "denied" && (
        <View style={styles.permissionContainer}>
          <Text style={styles.permissionTitle}>
            연락처 권한이 비활성화되었습니다
          </Text>

          <Text style={styles.permissionDesc}>
            앱 기능을 사용하려면 연락처 권한이 필요합니다.
          </Text>

          <Text style={styles.permissionGuide}>
            ⚙️ 설정 → 앱 → 연락처 권한을 활성화해주세요.
          </Text>

          <Pressable style={styles.button} onPress={() => openSettings()}>
            <Text style={styles.buttonText}>설정 열기</Text>
          </Pressable>

          <Pressable style={styles.secondaryButton} onPress={reload}>
            <Text style={styles.secondaryText}>다시 시도</Text>
          </Pressable>
        </View>
      )}

      {state === "ready" && contacts.length > 0 && (
        <FlatList
          data={contacts}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{ paddingBottom: 40 }}
          renderItem={({ item }) => (
            <ContactButton
              name={item.name}
              phone={item.phoneNumbers?.[0]?.number ?? ""}
              onCall={() => console.log(item.phoneNumbers?.[0]?.number)}
            />
          )}
        />
      )}

      {state === "ready" && contacts.length === 0 && (
        <View style={styles.center}>
          <Text style={styles.warningText}>등록된 연락처가 없습니다.</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.mainBackground,
    paddingHorizontal: SPACING.lg,
  },
  permissionContainer: {
    marginTop: 80,
    alignItems: "center",
    paddingHorizontal: 24,
  },
  permissionTitle: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "700",
    marginBottom: 10,
  },
  permissionDesc: {
    color: "#ddd",
    fontSize: 14,
    textAlign: "center",
    marginBottom: 12,
  },
  permissionGuide: {
    color: "#8ab4ff",
    fontSize: 12,
    textAlign: "center",
    marginBottom: 24,
  },
  button: {
    backgroundColor: "#4A84FF",
    paddingVertical: 12,
    paddingHorizontal: 26,
    borderRadius: 10,
    marginBottom: 12,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
  },
  secondaryButton: {
    paddingVertical: 10,
  },
  secondaryText: {
    color: "#9aa0aa",
    fontSize: 14,
  },
  center: {
    marginTop: 50,
    alignItems: "center",
  },
  warningText: {
    color: "#fff",
    fontSize: 18,
    marginBottom: 16,
    fontWeight: "600",
  },
});

export default ContactListScreen;
