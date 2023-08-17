import { useDispatch, useSelector } from "react-redux";
import { MdDeleteForever } from "react-icons/md";
import { removeUser } from "../store/slices/UserSlice";
function DisplayUsers() {
  console.count("DisplayUsers");

  const dispatch = useDispatch();
  const data = useSelector((state) => state.users);

  const deleteUser = (id) => {
    dispatch(removeUser(id));
  };

  return (
    <div>
      {data?.map((user, id) => (
        <li
          key={id}
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "0.8rem",
          }}
        >
          {user}
          {/* <button>x</button> */}
          <button className="btn-delete" onClick={() => deleteUser(id)}>
            <MdDeleteForever className="delete-icon" />
          </button>
        </li>
      ))}
    </div>
  );
}

export default DisplayUsers;
