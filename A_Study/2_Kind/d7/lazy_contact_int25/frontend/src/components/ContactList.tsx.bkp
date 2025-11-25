export default function ContactList({
  contacts,
  onDelete,
}: {
  contacts: any[];
  onDelete: (id: string) => void;
}) {
  return (
    <div className="w-full max-w-sm">
      {contacts.map((contact) => (
        <div
          key={contact._id}
          className="flex justify-between items-center bg-white p-3 rounded-lg shadow mb-2"
        >
          <div>
            <p className="font-semibold">{contact.name}</p>
            <p className="text-sm text-gray-600">{contact.email}</p>
            <p className="text-sm text-gray-600">{contact.phone}</p>
          </div>
          <button
            onClick={() => onDelete(contact._id)}
            className="text-red-500 font-bold"
          >
            X
          </button>
        </div>
      ))}
    </div>
  );
}
