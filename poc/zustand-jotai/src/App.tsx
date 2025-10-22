import React from 'react';
import './App.css';
import {Cart} from "./components/Cart";
import {ProductList} from "./components/ProductList";

function App() {
  return (
    <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-6 rounded-xl shadow-lg">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Zustand State Management</h1>
          <p className="text-gray-600">External store pattern with centralized state</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <ProductList/>
          <Cart/>
        </div>

        <div className="mt-8 bg-white rounded-lg shadow p-6">
          <h3 className="font-bold text-lg mb-2">About Zustand Pattern:</h3>
          <ul className="text-sm text-gray-700 space-y-1">
            <li>• Store is external to React component tree</li>
            <li>• Single source of truth with direct state mutations</li>
            <li>• Components subscribe to store and re-render on changes</li>
            <li>• Simple API: create store once, use anywhere</li>
            <li>• No providers or context needed</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
