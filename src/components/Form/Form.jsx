import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Form() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    productName: '',
    productDescription: '',
    price: '',
    isAvailable: 'sim',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);

    fetch('/api/Products.php', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ action: "Create", corpo: formData }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Erro na resposta da API');
        }
        return response.json();
      })
      .then((data) => {
        if (data.status !== 'success') {
          throw new Error(data.message || 'Erro desconhecido');
        }
        navigate('/');
      })
      .catch((err) => {
        console.error('Erro ao salvar:', err);
        alert('Erro ao salvar alterações: ' + err.message);
      });
  };



  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">Cadastrar Produto</h2>
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
            <label htmlFor="productDescription" className="block text-sm font-medium text-gray-600">Descrição do Produto</label>
            <textarea
              id="productDescription"
              name="productDescription"
              value={formData.productDescription}
              onChange={handleChange}
              required
              rows="4"
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
              min="0"
              step="0.01"
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
                checked={formData.isAvailable === '1'}
                onChange={handleChange}
                className="mr-2"
              />
              <label htmlFor="availableYes" className="mr-4 text-sm text-gray-600">Sim</label>

              <input
                type="radio"
                id="availableNo"
                name="isAvailable"
                value="0"
                checked={formData.isAvailable === '0'}
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
              Cadastrar Produto
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
