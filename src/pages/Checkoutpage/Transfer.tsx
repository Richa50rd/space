import { useState } from "react";

export default function Transfer() {
  const [image, setImage] = useState<File | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    //handle form submission send data to the backend
  };
  return (
    <form onSubmit={handleSubmit} className="p-4">
      <div className="space-y-4">
        <label className="font-josefinsans text-xl text-nowrap">
          Bank Name: Moniepoint MFB
        </label>
        <br />

        <label className="font-josefinsans text-xl">
          Account number: 08035501674
        </label>

        <div>
          <label className="font-josefinsans text-xl">
            Upload screenshot of payment
          </label>
          <input
            type="file"
            onChange={(e) => setImage(e.target.files![0])}
            className="border p-2 w-full"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 mt-4 rounded-md"
        >
          Upload
        </button>
      </div>
    </form>
  );
}
