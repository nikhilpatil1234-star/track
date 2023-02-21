import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Header from "./components/header";
import AddExpenses from "./components/pages/add-expense";
import Home from "./components/pages/home";
import TestimonialsCard from "./components/Testimonials";
// import TopFold from "./components/topfold";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-expense" element={<AddExpenses />} />
        <Route path="/test" element={<TestimonialsCard/>}/>
      </Routes>
    </div>
  );
}

export default App;
