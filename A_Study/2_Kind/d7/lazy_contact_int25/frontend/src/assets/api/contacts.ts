// frontend/src/assets/api/contacts.ts
import api from "./axios";

export const getContacts = async (token: string) => {
  const { data } = await api.get("/contacts", {
    headers: { Authorization: `Bearer ${token}` },
  });
  return data;
};

export const addContact = async (contact: any, token: string) => {
  const { data } = await api.post("/contacts", contact, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return data;
};

export const deleteContact = async (id: string, token: string) => {
  const { data } = await api.delete(`/contacts/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return data;
};
