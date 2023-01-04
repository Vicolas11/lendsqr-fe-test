import CardBoxes from "./CardBoxes";
import DashTable from "./DashTable";

const DashMain = (): JSX.Element => {
  return (
    <div className="dash_main_wrapper">
      <p>Users</p>
      <div className="card_box_wrapper">
        <CardBoxes />
      </div>
      <DashTable />
    </div>
  );
};

export default DashMain;
