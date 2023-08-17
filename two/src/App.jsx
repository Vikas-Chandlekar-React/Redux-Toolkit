import { useDispatch } from "react-redux";
import { updateTask, updateValue } from "./store/actions";
function App() {
  const dispatch = useDispatch();

  const handleBtn1Click = () => {
    console.log("handleBtn1Click");
    dispatch(updateValue(111));
  };
  const handleBtn2Click = () => {
    console.log("handleBtn2Click");
    dispatch(updateTask(500));
  };
  const handleSharedAction = () => {
    dispatch({ type: "SOME_SHARED_ACTION" }); // Dispatch the shared action for userSlice
  };

  const handleAnotherSharedAction = () => {
    dispatch({ type: "ANOTHER_SHARED_ACTION" }); // Dispatch the shared action for tasksSlice
  };

  return (
    <div>
      <button onClick={handleBtn1Click}>Button 1 </button>
      <button onClick={handleBtn2Click}>Button 2 </button>
      <button onClick={handleSharedAction}>Button 3 </button>
      <button onClick={handleAnotherSharedAction}>Button 4 </button>
    </div>
  );
}

export default App;

/** LEARN:
 * Let assume we want to clear array from two slices on one button click then 
 * you have two create extraReducers in that two slices and write in same code for remove all data from array
 * in both of the slices in extraReducers. You also create one common action in actions/index.js and this action is 
 * used in both slices of extraReducers.
 */
