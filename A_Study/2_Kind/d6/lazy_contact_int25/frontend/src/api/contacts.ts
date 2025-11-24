import axios from "axios";

interface Contact {
  _id: string;
  name: string;
  email: string;
  phone: string;
}

export const getContacts = async (token: string | null) => {
  const response = await axios.get<Contact[]>("/api/contacts", {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

export const createContact = async (
  data: { name: string; email: string; phone: string },
  token: string | null,
) => {
  const response = await axios.post<Contact>("/api/contacts", data, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

export const updateContact = async (
  id: string,
  data: { name: string; email: string; phone: string },
  token: string | null,
) => {
  const response = await axios.put<Contact>(`/api/contacts/${id}`, data, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

export const deleteContact = async (id: string, token: string | null) => {
  await axios.delete(`/api/contacts/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};
