import { Upload, Eye, FileText } from "lucide-react";
import { useRef, useState } from "react";

const UserDocuments = () => {
  const fileInputRef = useRef(null);
  const [uploadTarget, setUploadTarget] = useState(null);

  /* =======================
     STATE
  ======================= */
  const [academicDocuments, setAcademicDocuments] = useState([
    { name: "10th Marksheet", status: "Not Uploaded", file: null },
    { name: "12th Marksheet", status: "Not Uploaded", file: null },
    {
      name: "Graduation Marksheet",
      status: "Semester-wise",
      semesters: [
        { sem: "Semester 1", uploaded: false, file: null },
        { sem: "Semester 2", uploaded: false, file: null },
        { sem: "Semester 3", uploaded: false, file: null },
        { sem: "Semester 4", uploaded: false, file: null },
      ],
    },
  ]);

  const [additionalDocuments, setAdditionalDocuments] = useState([
    { name: "Caste Certificate", status: "Not Uploaded", file: null },
    { name: "Domicile Certificate", status: "Not Uploaded", file: null },
    { name: "Income Certificate", status: "Not Uploaded", file: null },
  ]);

  /* =======================
     FILE HANDLER
  ======================= */
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file || !uploadTarget) return;

    if (!file.type.includes("pdf")) {
      alert("Please upload a PDF document");
      return;
    }

    if (uploadTarget.type === "academic") {
      setAcademicDocuments(prev =>
        prev.map(doc =>
          doc.name === uploadTarget.name
            ? { ...doc, status: "Uploaded", file }
            : doc
        )
      );
    }

    if (uploadTarget.type === "semester") {
      setAcademicDocuments(prev =>
        prev.map(doc =>
          doc.name === "Graduation Marksheet"
            ? {
                ...doc,
                semesters: doc.semesters.map(sem =>
                  sem.sem === uploadTarget.sem
                    ? { ...sem, uploaded: true, file }
                    : sem
                ),
              }
            : doc
        )
      );
    }

    if (uploadTarget.type === "additional") {
      setAdditionalDocuments(prev =>
        prev.map(doc =>
          doc.name === uploadTarget.name
            ? { ...doc, status: "Uploaded", file }
            : doc
        )
      );
    }

    setUploadTarget(null);
    e.target.value = null;
  };

  /* =======================
     VIEW DOCUMENT
  ======================= */
  const handleView = (file) => {
    if (!file) return;
    const fileURL = URL.createObjectURL(file);
    window.open(fileURL, "_blank");
  };

  return (
    <div className="p-6 max-w-6xl mx-auto space-y-10">
      {/* HEADER */}
      <div>
        <h1 className="text-2xl font-bold text-gray-800">My Documents</h1>
        <p className="text-gray-500">Upload once, reuse everywhere</p>
      </div>

      {/* ACADEMIC DOCUMENTS */}
      <section className="bg-white rounded-2xl shadow p-6">
        <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <FileText size={18} />
          Academic Documents
        </h2>

        <table className="w-full">
          <thead>
            <tr className="text-gray-500 border-b text-sm">
              <th className="pb-3 text-left">Document</th>
              <th className="pb-3 text-left">Status</th>
              <th className="pb-3 text-left">Action</th>
            </tr>
          </thead>

          <tbody>
            {/* 10th & 12th */}
            {academicDocuments.slice(0, 2).map(doc => (
              <tr key={doc.name} className="border-b">
                <td className="py-4 font-medium">{doc.name}</td>
                <td
                  className={`py-4 ${
                    doc.status === "Uploaded"
                      ? "text-green-600"
                      : "text-red-500"
                  }`}
                >
                  {doc.status}
                </td>
                <td className="py-4">
                  {doc.status === "Uploaded" ? (
                    <button
                      onClick={() => handleView(doc.file)}
                      className="flex items-center gap-1 text-indigo-600 hover:underline"
                    >
                      <Eye size={16} /> View
                    </button>
                  ) : (
                    <button
                      onClick={() => {
                        setUploadTarget({
                          type: "academic",
                          name: doc.name,
                        });
                        fileInputRef.current.click();
                      }}
                      className="flex items-center gap-1 text-purple-600 hover:underline"
                    >
                      <Upload size={16} /> Upload
                    </button>
                  )}
                </td>
              </tr>
            ))}

            {/* Graduation */}
            <tr>
              <td className="py-4 font-medium align-top">
                Graduation Marksheet
              </td>
              <td className="py-4 text-yellow-600 font-medium">
                Semester-wise
              </td>
              <td className="py-4 space-y-2">
                {academicDocuments[2].semesters.map(sem => (
                  <div
                    key={sem.sem}
                    className="flex justify-between items-center"
                  >
                    <span className="text-sm text-gray-600">{sem.sem}</span>

                    {sem.uploaded ? (
                      <button
                        onClick={() => handleView(sem.file)}
                        className="flex items-center gap-1 text-indigo-600 text-sm hover:underline"
                      >
                        <Eye size={14} /> View
                      </button>
                    ) : (
                      <button
                        onClick={() => {
                          setUploadTarget({
                            type: "semester",
                            sem: sem.sem,
                          });
                          fileInputRef.current.click();
                        }}
                        className="flex items-center gap-1 text-purple-600 text-sm hover:underline"
                      >
                        <Upload size={14} /> Upload
                      </button>
                    )}
                  </div>
                ))}
              </td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* ADDITIONAL DOCUMENTS */}
      <section className="bg-white rounded-2xl shadow p-6">
        <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <FileText size={18} />
          Additional Documents
        </h2>

        <table className="w-full">
          <thead>
            <tr className="text-gray-500 border-b text-sm">
              <th className="pb-3 text-left">Document</th>
              <th className="pb-3 text-left">Status</th>
              <th className="pb-3 text-left">Action</th>
            </tr>
          </thead>

          <tbody>
            {additionalDocuments.map(doc => (
              <tr key={doc.name} className="border-b">
                <td className="py-4 font-medium">{doc.name}</td>
                <td
                  className={`py-4 ${
                    doc.status === "Uploaded"
                      ? "text-green-600"
                      : "text-red-500"
                  }`}
                >
                  {doc.status}
                </td>
                <td className="py-4">
                  {doc.status === "Uploaded" ? (
                    <button
                      onClick={() => handleView(doc.file)}
                      className="flex items-center gap-1 text-indigo-600 hover:underline"
                    >
                      <Eye size={16} /> View
                    </button>
                  ) : (
                    <button
                      onClick={() => {
                        setUploadTarget({
                          type: "additional",
                          name: doc.name,
                        });
                        fileInputRef.current.click();
                      }}
                      className="flex items-center gap-1 text-purple-600 hover:underline"
                    >
                      <Upload size={16} /> Upload
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* HIDDEN FILE INPUT */}
      <input
        type="file"
        accept="application/pdf"
        ref={fileInputRef}
        onChange={handleFileChange}
        className="hidden"
      />
    </div>
  );
};

export default UserDocuments;
