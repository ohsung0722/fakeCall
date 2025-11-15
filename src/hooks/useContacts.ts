import { useCallback, useEffect, useState } from "react";
import * as Contacts from "expo-contacts";

type ContactState = "loading" | "ready" | "denied";

export function useContacts() {
  const [contacts, setContacts] = useState<Contacts.ExistingContact[]>([]);
  const [state, setState] = useState<ContactState>("loading");

  const loadContacts = useCallback(async () => {
    setState("loading");

    const granted = await requestContactPermission();
    if (!granted) {
      setState("denied");
      return;
    }

    const result = await fetchContacts();
    setContacts(result);
    setState("ready");
  }, []);

  useEffect(() => {
    loadContacts();
  }, [loadContacts]);

  return { contacts, state, reload: loadContacts };
}

async function requestContactPermission() {
  const { status } = await Contacts.requestPermissionsAsync();
  return status === "granted";
}

async function fetchContacts() {
  const { data } = await Contacts.getContactsAsync({
    fields: [Contacts.Fields.PhoneNumbers],
  });

  return data
    .filter((contact) => contact.phoneNumbers?.length)
    .sort((a, b) => (a.name ?? "").localeCompare(b.name ?? ""));
}
