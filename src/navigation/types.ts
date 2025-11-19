export type RootStackParamList = {
  Home: undefined;
  Contacts: undefined;
  Incoming: {
    caller: {
      name: string;
      phoneNumber: string;
      from: "Contacts" | "Scenario";
    };
    scenario?: {
      name: string;
      phoneNumber: string;
      from: "Scenario";
    };
  };
};
