import { FC } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import ContactTable from "../components/table";
import useContacts from "../hooks/useContactForm";



const ShowForm: FC = () => {
  const { contacts, loading, error } = useContacts();

  return (
    <div className="bg-gray-100">
      <div className="flex flex-col gap-10 min-h-screen bg-gray-100 p-6">
        <Header />
        <div className="max-w-4xl mx-auto mt-10 bg-white shadow-md rounded-lg p-6">
          <h1 className="text-3xl font-semibold mb-4">Contact Form Submissions</h1>
          <ContactTable contacts={contacts} loading={loading} error={error} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ShowForm;
