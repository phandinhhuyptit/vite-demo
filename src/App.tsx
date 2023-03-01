import "./App.css";

import { Layout } from "@layout/index";
import { Book, Login, NoMatch } from "@pages/index";
import { AuthProvider } from "provider/AuthorProvider";
import React from "react";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <AuthProvider>
      <Layout>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/book" element={<Book />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </Layout>
    </AuthProvider>
  );
}

export default App;
