import { useState, useEffect } from "react";
import axios from "axios";

interface Contact {
  id: number;
  name: string;
  email: string;
  subject: string;
  message: string;
}

const useContacts = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchContacts = async () => {
    try {
      const response = await axios.get("http://localhost:3000/contacts");
      setContacts(response.data);
    } catch (error) {
      console.error("Failed to fetch contacts:", error);
      setError("Failed to fetch contacts");
    } finally {
      setLoading(false);
    }
  };

  const submitContactForm = async (values: { name: string; email: string; subject: string; message: string }) => {
    try {
      const response = await axios.post("http://localhost:3000/contacts", values);
      setContacts((prevContacts) => [...prevContacts, response.data]); 
      return response.data;
    } catch (error) {
      console.error("Error submitting form:", error);
      throw error;
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  return { contacts, loading, error, fetchContacts, submitContactForm };
};

export default useContacts;
