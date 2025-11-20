export interface Scenario {
  id: string;
  title: string;
  description: string;
  name: string;
  phoneNumber: string;
  ringtone?: any; //나중에 타입 추가하기
}

export const SCENARIOS: Scenario[] = [
  {
    id: "late_ally",
    title: "밤 늦은 골목길",
    description: "혼자 밤 늦게 위험한 골목길을 지나갈 때",
    name: "엄마",
    phoneNumber: "010-1234-5678",
    ringtone: require("../../assets/late_ally.mp3"),
  },
  {
    id: "date",
    title: "이성이 번호 물어볼 때",
    description: "마음에 안드는 이성이 나에게 번호를 물어볼 때",
    name: "애기❤️",
    phoneNumber: "010-1234-5678",
    ringtone: require("../../assets/date.mp3"),
  },
];
