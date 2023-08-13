import "./App.css";
import MainLayout from "./components/Shared/Layout/MainLayout";

function App() {
  return (
    <div
      className={`h-[100vh]`}
      style={{
        "background-image": "linear-gradient(to right,#984d38,#181e41 )",
      }}
    >
      <MainLayout />
    </div>
  );
}

export default App;
