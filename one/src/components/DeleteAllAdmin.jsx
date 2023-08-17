import { useDispatch } from "react-redux";
import { clearAllUsers } from "../store/slices/AdminSlice";

function DeleteAllAdmin() {
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(clearAllUsers)}>Clear Admin</button>
    </div>
  );
}

export default DeleteAllAdmin;
