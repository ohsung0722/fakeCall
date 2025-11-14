import { useCallback, useEffect, useState } from "react";
import * as Contacts from "expo-contacts";

type ContactState = "loading" | "ready" | "denied";

export function useContacts() {
  const [contacts, setContacts] = useState<Contacts.Contact[]>([]);
  const [state, setState] = useState<ContactState>("loading");

  const loadContacts = useCallback(async () => {
    setState("loading");

    const { status } = await Contacts.requestPermissionsAsync();
    if (status !== "granted") {
      setState("denied");
      return;
    }

    const { data } = await Contacts.getContactsAsync({
      fields: [Contacts.Fields.PhoneNumbers],
    });

    setContacts(
      data
        .filter((contact) => contact.phoneNumbers?.length)
        .sort((a, b) => a.name.localeCompare(b.name))
    );

    setState("ready");
  }, []);

  useEffect(() => {
    loadContacts();
  }, [loadContacts]);

  return { contacts, state, reload: loadContacts };
}
