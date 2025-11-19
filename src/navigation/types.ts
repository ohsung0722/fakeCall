export type RootStackParamList = {
  Home: undefined;
  Contacts: undefined;
  Incoming: IncomingParams;
  Ongoing: IncomingParams;
};

export type IncomingParams =
  | {
      from: "Contacts";
      caller: {
        name: string;
        phoneNumber: string;
      };
    }
  | {
      from: "Scenario";
      scenario: {
        name: string;
        phoneNumber: string;
        ringtone?: any;
      };
    };
