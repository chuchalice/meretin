import classes from "./app.module.scss";
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout";
import OwnerInfo from "./OwnerInfo/OwnerInfo";
import CaseStudy from "../components/CaseStudy/CaseStudy";
const App = () => {
  return (
    <section className={classes.app}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<OwnerInfo />} />
          <Route path="/pocmon" element={<CaseStudy/>} />
        </Route>
      </Routes>
    </section>
  );
};
export default App;
