import React from "react";
import {products, useStore} from "../store/useStore";
import { Plus } from 'lucide-react';

export function ProductList() {
  const { addItem } = useStore();

  return (
    <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-6 rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Products</h2>
      <div className="space-y-3">
        {products.map(product => (
          <div key={product.id} className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50">
            <div>
              <p className="font-semibold">{product.name}</p>
              <p className="text-gray-600">${product.price}</p>
            </div>
            <button
              onClick={() => addItem(product)}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 flex items-center gap-2"
            >
              <Plus size={16}/>
              Add
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}