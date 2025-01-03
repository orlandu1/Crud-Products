import React, { useState, useEffect } from 'react';

export default function Modal({ isOpen, onClose, product, onSave, setProducts }) {
  const [formData, setFormData] = useState({
    productId: product ? product.id : '',
    productName: product ? product.name : '',
    productDescription: product ? product.description : '',
    price: product ? product.value : '',
    isAvailable: product ? (product.available ? 1 : 0) : 1,
  });

  useEffect(() => {
    if (product) {
      setFormData({
        productId: product.id,
        productName: product.name,
        productDescription: product.description,
        price: product.value,
        isAvailable: product.available ? 1 : 0,
      });
    }
  }, [product]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    fetch('/api/Products.php', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ action: "Edit", corpo: formData }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status !== 'success') throw new Error(data.message || 'Erro desconhecido');
        onSave(formData);
        onClose();
      })
      .catch((err) => {
        console.error('Erro ao salvar:', err);
        alert('Erro ao salvar alterações');
      });
  };
  

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative">
        <h2 className="text-xl font-semibold mb-4">Editar Produto</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="productName" className="block text-sm font-medium text-gray-600">Nome do Produto</label>
            <input
              type="text"
              id="productName"
              name="productName"
              value={formData.productName}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="productDescription" className="block text-sm font-medium text-gray-600">Descrição</label>
            <input
              type="text"
              id="productDescription"
              name="productDescription"
              value={formData.productDescription}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="price" className="block text-sm font-medium text-gray-600">Valor do Produto</label>
            <input
              type="number"
              id="price"
              name="price"
              value={formData.price}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">Disponível para venda</label>
            <div className="flex items-center">
              <input
                type="radio"
                id="availableYes"
                name="isAvailable"
                value="1"
                checked={formData.isAvailable == '1'}
                onChange={handleChange}
                className="mr-2"
              />
              <label htmlFor="availableYes" className="mr-4 text-sm text-gray-600">Sim</label>

              <input
                type="radio"
                id="availableNo"
                name="isAvailable"
                value="0"
                checked={formData.isAvailable == '0'}
                onChange={handleChange}
                className="mr-2"
              />
              <label htmlFor="availableNo" className="text-sm text-gray-600">Não</label>
            </div>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="w-full px-6 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Salvar Alterações
            </button>
          </div>
        </form>

        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          ×
        </button>
      </div>
    </div>
  );
}
