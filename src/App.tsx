import "./App.css";

import { Layout } from "@layout/index";
import { Book, Login, NoMatch, Author } from "@pages/index";
import { AuthProvider } from "provider/AuthorProvider";
import { GlobalStateProvider } from "provider/GlobalStateProvider";
import React from "react";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <GlobalStateProvider>
      <AuthProvider>
        <Layout>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/book" element={<Book />} />
            <Route path="/author" element={<Author />} />
            <Route path="*" element={<NoMatch />} />
          </Routes>
        </Layout>
      </AuthProvider>
    </GlobalStateProvider>
  );
}

export default App;
