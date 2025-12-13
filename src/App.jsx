import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BookList from "./components/BookList";

function App() {
  return (
    <div>
      <div>
        <Header />
        <main className="flex flex-col bg-slate-300">
          <ul className="flex justify-end gap-5 mx-5 text-2xl">
            <li className="cursor-pointer">Fiction</li>
            <li className="cursor-pointer">Non-Fiction</li>
            <li className="cursor-pointer">Sci-Fi</li>
            <li className="cursor-pointer">Horrer</li>
            <li className="cursor-pointer">Romantic</li>
            <li className="cursor-pointer">Biography</li>
          </ul>
          <h1 className="flex justify-center text-5xl p-10">Welcome to Online Library</h1>
          <p className="flex justify-center text-3xl mb-10">You can read your favorite book</p>
        </main>
      </div>
      <div className="flex flex-wrap justify-center bg-gray-50">
        <BookList/>
        <BookList/>
        <BookList/>
        <BookList/>
        <BookList/>
      </div>
      <Footer />
    </div>
  );
}

export default App;
