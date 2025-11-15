import React from "react";
import { StyleSheet, View } from "react-native";
import Header from "../components/FakeCallScreen/Header";
import ActionButton from "../components/FakeCallScreen/ActionButton";
import { COLORS, SPACING } from "../constants/theme";
import Footer from "../components/FakeCallScreen/Footer";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/types";

type NavigationProps = NativeStackNavigationProp<RootStackParamList, "Home">;

function FakeCallScreen() {
  const navigation = useNavigation<NavigationProps>();
  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.actions}>
        <ActionButton
          icon="alert-circle-outline"
          title="상황별 전화"
          subtitle="탈출하고 싶은 상황 선택"
          color={COLORS.orange}
          onPress={() => console.log("상황별 전화 클릭")}
        />
        <ActionButton
          icon="person-outline"
          title="전화번호부"
          subtitle="내 연락처로 전화받기"
          color={COLORS.blue}
          onPress={() => navigation.navigate("Contacts")}
        />
      </View>

      <Footer text="이 앱은 전화 시뮬레이션으로 실제 전화가 아닙니다." />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.mainBackground,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: SPACING.lg,
  },
  actions: {
    width: "100%",
    marginTop: SPACING.xl,
    gap: SPACING.md,
  },
});

export default FakeCallScreen;
