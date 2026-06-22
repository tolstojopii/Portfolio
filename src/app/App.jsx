import "./App.module.css";
import Layout from "@widgets/Layout/Layout";
import HomePage from "@pages/HomePage/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProjectDetailPage from "@pages/ProjectDetailPage/ProjectDetailPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <HomePage />
            </Layout>
          }
        />
        <Route
          path="/project/:id"
          element={
            <Layout>
              <ProjectDetailPage />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
