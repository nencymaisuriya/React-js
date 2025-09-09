import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import Swal from "sweetalert2";
import "react-toastify/dist/ReactToastify.css";

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

  const [error, setError] = useState<any>({});
  const [allGanpatis, setAllGanpatis] = useState<ganpatiObject[]>(
    JSON.parse(localStorage.getItem("ganpatis") || "[]")
  );
  const [editId, setEditId] = useState<number>();

  useEffect(() => {
    localStorage.setItem("ganpatis", JSON.stringify(allGanpatis));
  }, [allGanpatis]);

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

  // Validation
  const validation = () => {
    const newError: any = {};
    if (!GroupName.trim()) newError.GroupName = "Group Name is required";
    if (!OrganizerName.trim()) newError.OrganizerName = "Organizer Name is required";
    if (!Phone.trim()) newError.Phone = "Phone Number is required";
    else if (!/^(?:\+?91[-\s]?|0)?[6-9]\d{9}$/.test(Phone))
      newError.Phone = "Invalid phone number";
    if (Email && !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(Email))
      newError.Email = "Invalid email format";
    if (!GanpatiType.trim()) newError.GanpatiType = "Please select Ganpati Type";
    if (!GanpatiSize.trim()) newError.GanpatiSize = "Please select Ganpati Size";
    if (!Address.trim()) newError.Address = "Address is required";
    if (!AagamanDate.trim()) newError.AagamanDate = "Aagaman Date is required";
    if (!VisarjanDate.trim()) newError.VisarjanDate = "Visarjan Date is required";

    setError(newError);
    return Object.keys(newError).length;
  };

  // submit
  const submitGanpatiForm = (event: any) => {
    event.preventDefault();
    if (validation() !== 0) return;

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

    if (editId === undefined) {
      setAllGanpatis((data) => [...data, ganpati]);
      toast.success("Ganpati registered successfully!");
    } else {
      const data = allGanpatis.map((g, index) => (editId === index ? ganpati : g));
      setAllGanpatis(data);
      toast.success("Ganpati updated successfully!");
    }

    // reset
    setGroupName("");
    setOrganizerName("");
    setPhone("");
    setEmail("");
    setGanpatiType("");
    setGanpatiSize("");
    setAddress("");
    setAagamanDate("");
    setVisarjanDate("");
    setEditId(undefined);
  };

  // delete
  const deleteGanpati = (i: number) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This record will be permanently deleted!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        setAllGanpatis((all) => all.filter((_, index) => index !== i));
        Swal.fire("Deleted!", "Ganpati record removed.", "success");
      }
    });
  };

  // edit
  const editGanpati = (i: number) => {
    setEditId(i);
    setGroupName(allGanpatis[i].GroupName);
    setOrganizerName(allGanpatis[i].OrganizerName);
    setPhone(allGanpatis[i].Phone);
    setEmail(allGanpatis[i].Email);
    setGanpatiType(allGanpatis[i].GanpatiType);
    setGanpatiSize(allGanpatis[i].GanpatiSize);
    setAddress(allGanpatis[i].Address);
    setAagamanDate(allGanpatis[i].AagamanDate);
    setVisarjanDate(allGanpatis[i].VisarjanDate);
  };

  return (
    <>
      {/* Form */}
      <div className="flex flex-col justify-center items-center py-10 px-4 bg-gradient-to-br from-orange-100 via-yellow-50 to-orange-200 min-h-screen">
        <div className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl p-8 border-4 border-orange-400">
          <h2 className="text-3xl font-extrabold text-center text-orange-600 mb-6">
            🙏 {editId !== undefined ? "Update Ganpati" : "Ganpati Registration Form"} 🙏
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
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-400 ${error.GroupName ? "border-red-500" : "border-gray-300"
                  }`}
              />
              {error.GroupName && (
                <p className="text-red-500 text-xs mt-1">{error.GroupName}</p>
              )}
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
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-400 ${error.OrganizerName ? "border-red-500" : "border-gray-300"
                  }`}
              />
              {error.OrganizerName && (
                <p className="text-red-500 text-xs mt-1">{error.OrganizerName}</p>
              )}
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
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-400 ${error.Phone ? "border-red-500" : "border-gray-300"
                  }`}
              />
              {error.Phone && (
                <p className="text-red-500 text-xs mt-1">{error.Phone}</p>
              )}
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
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-400 ${error.Email ? "border-red-500" : "border-gray-300"
                  }`}
              />
              {error.Email && (
                <p className="text-red-500 text-xs mt-1">{error.Email}</p>
              )}
            </div>

            {/* Ganpati Type */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Ganpati Type
              </label>
              <select
                value={GanpatiType}
                onChange={(e) => setGanpatiType(e.target.value)}
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-400 ${error.GanpatiType ? "border-red-500" : "border-gray-300"
                  }`}
              >
                <option value="">Select type</option>
                {allTypes.map((type, i) => (
                  <option key={i}>{type}</option>
                ))}
              </select>
              {error.GanpatiType && (
                <p className="text-red-500 text-xs mt-1">{error.GanpatiType}</p>
              )}
            </div>

            {/* Ganpati Size */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Ganpati Size
              </label>
              <select
                value={GanpatiSize}
                onChange={(e) => setGanpatiSize(e.target.value)}
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-400 ${error.GanpatiSize ? "border-red-500" : "border-gray-300"
                  }`}
              >
                <option value="">Select size</option>
                {allSizes.map((size, i) => (
                  <option key={i}>{size}</option>
                ))}
              </select>
              {error.GanpatiSize && (
                <p className="text-red-500 text-xs mt-1">{error.GanpatiSize}</p>
              )}
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
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-400 ${error.Address ? "border-red-500" : "border-gray-300"
                  }`}
              />
              {error.Address && (
                <p className="text-red-500 text-xs mt-1">{error.Address}</p>
              )}
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
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-400 ${error.AagamanDate ? "border-red-500" : "border-gray-300"
                  }`}
              />
              {error.AagamanDate && (
                <p className="text-red-500 text-xs mt-1">{error.AagamanDate}</p>
              )}
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
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-400 ${error.VisarjanDate ? "border-red-500" : "border-gray-300"
                  }`}
              />
              {error.VisarjanDate && (
                <p className="text-red-500 text-xs mt-1">{error.VisarjanDate}</p>
              )}
            </div>

            {/* Submit */}
            <button
              type="submit"
              className={`w-full font-bold py-3 rounded-lg shadow-lg text-white transition 
                ${editId === undefined
                  ? "bg-gradient-to-r from-orange-500 to-yellow-500 hover:scale-105"
                  : "bg-gradient-to-r from-yellow-500 to-orange-500 hover:scale-105"}`}
            >
              {editId === undefined ? "🚩 Register Ganpati 🚩" : " Update Ganpati"}
            </button>
          </form>
        </div>
      </div>

      {/* ganpati table  */}
      <div className="max-w-6xl mx-auto mt-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-orange-600 drop-shadow-md">
          🪔 Ganpati List 🪔
        </h2>

        <div className="rounded-2xl shadow-xl border border-orange-200 overflow-hidden">
          <table className="w-full text-sm text-left text-gray-700 table-auto border-collapse">
            {/* Table Head */}
            <thead className="text-xs uppercase bg-gradient-to-r from-orange-500 via-yellow-400 to-red-500 text-white">
              <tr>
                <th className="px-4 py-3 text-center">No</th>
                <th className="px-4 py-3">Group</th>
                <th className="px-4 py-3">Organizer</th>
                <th className="px-4 py-3">Phone</th>
                <th className="px-4 py-3">Email</th>
                <th className="px-4 py-3">Type</th>
                <th className="px-4 py-3">Size</th>
                <th className="px-4 py-3">Address</th>
                <th className="px-4 py-3">Aagaman</th>
                <th className="px-4 py-3">Visarjan</th>
                <th className="px-4 py-3 text-center">Action</th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody>
              {allGanpatis.map((g, index) => (
                <tr
                  key={index}
                  className="bg-white even:bg-orange-50 hover:bg-orange-100 transition"
                >
                  <td className="px-4 py-3 text-center font-semibold text-orange-600">
                    {index + 1}
                  </td>
                  <td className="px-4 py-3">{g.GroupName}</td>
                  <td className="px-4 py-3">{g.OrganizerName}</td>
                  <td className="px-4 py-3 whitespace-nowrap">{g.Phone}</td>
                  <td className="px-4 py-3">{g.Email}</td>
                  <td className="px-4 py-3">{g.GanpatiType}</td>
                  <td className="px-4 py-3">{g.GanpatiSize}</td>
                  <td className="px-4 py-3">{g.Address}</td>
                  <td className="px-4 py-3 whitespace-nowrap">{g.AagamanDate}</td>
                  <td className="px-4 py-3 whitespace-nowrap">{g.VisarjanDate}</td>
                  <td className="px-4 py-3">
                    <div className="flex justify-center gap-3">
                      <button
                        onClick={() => editGanpati(index)}
                        className="px-3 py-1.5 rounded-lg bg-yellow-500 hover:bg-yellow-600 text-white text-xs font-semibold shadow-md transition"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => deleteGanpati(index)}
                        className="px-3 py-1.5 rounded-lg bg-red-500 hover:bg-red-600 text-white text-xs font-semibold shadow-md transition"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}

              {/* empty state */}
              {allGanpatis.length === 0 && (
                <tr>
                  <td colSpan={11} className="text-center py-6 text-gray-500 italic">
                    🙏 No Ganpati registered 🙏
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      <ToastContainer />
    </>
  );
}

export default GanpatiForm;
