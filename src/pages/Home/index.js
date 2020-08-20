import Home from "./Home";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    taskList: state.tasksReducer.tasks,
  };
};

export default connect(mapStateToProps, null)(Home);
