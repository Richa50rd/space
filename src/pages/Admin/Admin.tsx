import AdminDashboard from "./AdminDashboard";
import AdminHeading from "./AdminHeading";

export default function Admin() {
  return (
    <div className="bg-[#F0EDEE]  h-full">
      <AdminHeading />
      <section>
        <AdminDashboard />
      </section>
    </div>
  );
}
