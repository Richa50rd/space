import Products from "../ProductPage/Products";
import DashboardHeading from "./DashboardHeading";

export default function Dashboard() {
  return (
    <div>
      <DashboardHeading />
      <section>
        <Products id="string" name="string" price={40} />
      </section>
    </div>
  );
}
