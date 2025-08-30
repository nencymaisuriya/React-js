import { useState } from "react";

function GanpatiForm() {
  const [GroupName, setGroupName] = useState<string>("");
  const [OrganizerName, setOrganizerName] = useState<string>("");
  const [Phone, setPhone] = useState<string>("");
  const [Email, setEmail] = useState<string>("");
  const [GanpatiType, setGanpatiType] = useState<string>("");
  const [GanpatiSize, setGanpatiSize] = useState<string>("");
  const [Address, setAddress] = useState<string>("");
  const [AagamanDate, setAagamanDate] = useState<string>("");
  const [VisarjanDate, setVisarjanDate] = useState<string>("");

  // ✅ Array state for storing multiple submissions
  const [ganpatiList, setGanpatiList] = useState<ganpatiObject[]>([]);

  const allTypes: string[] = ["Eco-friendly", "Plaster of Paris", "Clay"];
  const allSizes: string[] = ["2 ft", "3 ft", "5 ft", "7 ft", "10 ft"];

  type ganpatiObject = {
    GroupName: string;
    OrganizerName: string;
    Phone: string;
    Email: string;
    GanpatiType: string;
    GanpatiSize: string;
    Address: string;
    AagamanDate: string;
    VisarjanDate: string;
  };

  const submitGanpatiForm = (event: any) => {
    event.preventDefault();

    const ganpati: ganpatiObject = {
      GroupName,
      OrganizerName,
      Phone,
      Email,
      GanpatiType,
      GanpatiSize,
      Address,
      AagamanDate,
      VisarjanDate,
    };

    // ✅ Add to list
    setGanpatiList([...ganpatiList, ganpati]);

    // Reset form fields
    // setGroupName("");
    // setOrganizerName("");
    // setPhone("");
    // setEmail("");
    // setGanpatiType("");
    // setGanpatiSize("");
    // setAddress("");
    // setAagamanDate("");
    // setVisarjanDate("");
  };

  return (
    <div className="flex flex-col justify-center items-center py-10 px-4 bg-gradient-to-br from-orange-100 via-yellow-50 to-orange-200 min-h-screen">
      {/* Form */}
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl p-8 border-4 border-orange-400 relative overflow-hidden">
        <h2 className="text-3xl font-extrabold text-center text-orange-600 mb-6 drop-shadow-md">
          🙏 Ganpati Registration Form 🙏
        </h2>

        <form className="space-y-5" onSubmit={submitGanpatiForm}>
          {/* Group Name */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Group Name
            </label>
            <input
              type="text"
              value={GroupName}
              onChange={(e) => setGroupName(e.target.value)}
              placeholder="Enter your group name"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-400 focus:outline-none"
              required
            />
          </div>

          {/* Organizer Name */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Organizer Name
            </label>
            <input
              type="text"
              value={OrganizerName}
              onChange={(e) => setOrganizerName(e.target.value)}
              placeholder="Enter organizer full name"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-400 focus:outline-none"
              required
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              value={Phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Enter 10-digit mobile number"
              pattern="[0-9]{10}"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-400 focus:outline-none"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              value={Email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-400 focus:outline-none"
            />
          </div>

          {/* Ganpati Type */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Ganpati Type
            </label>
            <select
              value={GanpatiType}
              onChange={(e) => setGanpatiType(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-400 focus:outline-none"
              required
            >
              <option value="" disabled>
                Select type
              </option>
              {allTypes.map((type, index) => (
                <option key={index}>{type}</option>
              ))}
            </select>
          </div>

          {/* Ganpati Size */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Ganpati Size
            </label>
            <select
              value={GanpatiSize}
              onChange={(e) => setGanpatiSize(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-400 focus:outline-none"
              required
            >
              <option value="" disabled>
                Select size
              </option>
              {allSizes.map((size, index) => (
                <option key={index}>{size}</option>
              ))}
            </select>
          </div>

          {/* Address */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Address
            </label>
            <textarea
              value={Address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Enter full address"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-400 focus:outline-none"
              required
            />
          </div>

          {/* Aagaman Date */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Aagaman Date
            </label>
            <input
              type="date"
              value={AagamanDate}
              onChange={(e) => setAagamanDate(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-400 focus:outline-none"
              required
            />
          </div>

          {/* Visarjan Date */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Visarjan Date
            </label>
            <input
              type="date"
              value={VisarjanDate}
              onChange={(e) => setVisarjanDate(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-400 focus:outline-none"
              required
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-orange-500 to-yellow-500 text-white font-bold py-3 rounded-lg shadow-lg hover:scale-105 transform transition"
          >
            🚩 Register Ganpati 🚩
          </button>
        </form>
      </div>

      {/* ✅ Table Below Form */}
      <div className="mt-10 w-full max-w-5xl">
        <table className="w-full text-sm text-left text-gray-600 border border-gray-300 rounded-lg overflow-hidden">
          {/* Table Header */}
          <thead className="bg-gradient-to-r from-orange-500 to-yellow-500 text-black text-xs uppercase">
            <tr>
              <th className="px-6 py-4">Group Name</th>
              <th className="px-6 py-4">Organizer Name</th>
              <th className="px-6 py-4">Phone</th>
              <th className="px-6 py-4">Email</th>
              <th className="px-6 py-4">Ganpati Type</th>
              <th className="px-6 py-4">Ganpati Size</th>
              <th className="px-6 py-4">Address</th>
              <th className="px-6 py-4">Aagaman Date</th>
              <th className="px-6 py-4">Visarjan Date</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody className="divide-y divide-gray-200">
           
              <tr className="hover:bg-gray-50 transition">
                <td className="px-6 py-4">{GroupName}</td>
                <td className="px-6 py-4">{OrganizerName}</td>
                <td className="px-6 py-4">{Phone}</td>
                <td className="px-6 py-4">{Email}</td>
                <td className="px-6 py-4">{GanpatiType}</td>
                <td className="px-6 py-4">{GanpatiSize}</td>
                <td className="px-6 py-4">{Address}</td>
                <td className="px-6 py-4">{AagamanDate}</td>
                <td className="px-6 py-4">{VisarjanDate}</td>
              </tr>
        
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default GanpatiForm;
