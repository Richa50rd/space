export default function UserprofileForm() {
  return (
    <form className="grid grid-cols-1 space-y-4">
      <div className="space-x-4">
        <label htmlFor="" className="font-josefinsans ">
          Full Name:
        </label>
        <input
          type="text"
          name=""
          id=""
          className="border-b p-2 focus:outline-none bg-slate-100 rounded-md "
        />
      </div>
      <div className="space-x-4">
        <label htmlFor="" className="font-josefinsans ">
          Email:
        </label>
        <input
          type="mail"
          name=""
          id=""
          className="border-b p-2 focus:outline-none bg-slate-100 rounded-md "
        />
      </div>
      <div className="space-x-4">
        <label htmlFor="" className="font-josefinsans ">
          Phone Number:
        </label>
        <input
          type="number"
          name=""
          id=""
          className="border-b p-2 focus:outline-none bg-slate-100 rounded-md "
        />
      </div>
      <div className="space-x-4">
        <label htmlFor="" className="font-josefinsans ">
          Address:
        </label>
        <input
          type="text"
          name=""
          id=""
          className="border-b p-2 focus:outline-none bg-slate-100 rounded-md "
        />
      </div>
      <div className="space-x-4">
        <label htmlFor="" className="font-josefinsans ">
          Town/City:
        </label>
        <input
          type="text"
          name=""
          id=""
          className="border-b p-2 focus:outline-none bg-slate-100 rounded-md "
        />
      </div>
      <div className="space-x-4">
        <label htmlFor="" className="font-josefinsans ">
          State/Country:
        </label>
        <input
          type="text"
          name=""
          id=""
          className="border-b p-2 focus:outline-none bg-slate-100 rounded-md "
        />
      </div>
      <div className="space-x-4">
        <label htmlFor="" className="font-josefinsans ">
          Postal:
        </label>
        <input
          type="text"
          name=""
          id=""
          className="border-b p-2 focus:outline-none bg-slate-100 rounded-md "
        />
      </div>
      <div>
        <button
          type="submit"
          className="p-3 border bg-blue-500 text-white rounded-md"
        >
          Update
        </button>
      </div>
    </form>
  );
}
