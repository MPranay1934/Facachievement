import { useState } from "react";

const mockFaculty = [
  {
    id: "t1",
    name: "Alice",
    achievements: ["Published Paper in AI", "Patent Filed"],
  },
  { id: "t2", name: "Bob", achievements: ["Best Teacher Award"] },
  {
    id: "h1",
    name: "Dr. Smith",
    achievements: ["Department Head", "Conference Speaker"],
  },
];

export default function PublicSearch() {
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<string | null>(null);

  const filtered = mockFaculty.filter(
    (f) =>
      f.name.toLowerCase().includes(query.toLowerCase()) ||
      f.id.toLowerCase().includes(query.toLowerCase())
  );

  const selectedFaculty = mockFaculty.find((f) => f.id === selected);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Faculty Search</h1>
      <input
        className="border p-2 mb-4 w-full max-w-md"
        placeholder="Search by name or ID"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <div className="flex gap-8">
        <div className="w-1/2">
          <h2 className="font-bold mb-2">Faculty List</h2>
          <ul>
            {filtered.map((f) => (
              <li
                key={f.id}
                className={`mb-1 cursor-pointer ${
                  selected === f.id ? "font-bold text-blue-600" : ""
                }`}
                onClick={() => setSelected(f.id)}
              >
                {f.name} ({f.id})
              </li>
            ))}
            {filtered.length === 0 && <li>No faculty found.</li>}
          </ul>
        </div>
        <div className="w-1/2">
          {selectedFaculty ? (
            <div className="bg-white p-4 rounded shadow">
              <h2 className="font-bold mb-2">{selectedFaculty.name}</h2>
              <p>
                <b>ID:</b> {selectedFaculty.id}
              </p>
              <h3 className="font-semibold mt-2">Achievements:</h3>
              <ul>
                {selectedFaculty.achievements.map((a, i) => (
                  <li key={i}>{a}</li>
                ))}
              </ul>
            </div>
          ) : (
            <div className="text-gray-500">
              Select a faculty to view profile.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
