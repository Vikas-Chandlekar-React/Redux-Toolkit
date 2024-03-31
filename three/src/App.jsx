import { useGetCoinsQuery } from "./app/services/cryptoApi";

function App() {
  console.count("App");
  const { data } = useGetCoinsQuery();
  console.log(data);

  return <div>App</div>;
}

export default App;
