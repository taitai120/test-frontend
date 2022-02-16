import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import "./Dashboard.scss";
import { getUsersAction } from "../../redux/actions/UsersActions";

ChartJS.register(ArcElement, Tooltip, Legend);

const styles = {
  pieContainer: {
    width: "40%",
    height: "40%",
  },
  relative: {
    position: "relative",
  },
};

function Dashboard() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsersAction());
  }, []);

  const { userList } = useSelector((state) => state.UsersReducer);

  const filterAdmin = userList.filter((item) => item.role === "admin");
  const filterUser = userList.filter((item) => item.role === "user");
  const filterManger = userList.filter((item) => item.role === "manager");

  const data = {
    labels: ["Admin", "User", "Manager"],
    datasets: [
      {
        label: "# of Votes",
        data: [filterAdmin.length, filterUser.length, filterManger.length],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <div className="custom-chart" style={styles.pieContainer}>
        <Pie
          className="custom-chart-pie"
          data={data}
          // width={100}
          // height={50}
          // options={{ maintainAspectRatio: false }}
        />
      </div>
    </div>
  );
}

export default Dashboard;
