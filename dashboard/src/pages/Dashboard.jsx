import Kpis from "../components/Kpis";
import RecentTools from "../components/RecentTools";

function Dashboard() {
  return (
    <div>
      <h1>Internal Tools Dashboard</h1>
      <p>Monitor and manage your organisation's software tools and expenses</p>
      <Kpis />
      <RecentTools />
    </div>
  );
}

export default Dashboard;
