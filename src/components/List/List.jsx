import React, { useState, useEffect } from 'react';
import Modal from '../../utils/Modal';

function List() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);


  const fetchProducts = () => {
    fetch('/api/Products.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ action: "List" }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Erro ao buscar produtos');
        }
        return response.json();
      })
      .then((data) => {
        if (data.status === 'success') {
          setProducts(data.products);
        } else {
          throw new Error(data.message || 'Erro desconhecido');
        }
      })
      .catch((err) => {
        console.error(err);
        setError(err.message);
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleEdit = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleDelete = (id) => {
    const updatedProducts = products.filter((product) => product.id !== id);
    setProducts(updatedProducts);

    fetch('/api/Products.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ action: "Delete", id: id }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Erro ao Deletar produtos');
        }
        return response.json();
      })
  };

  const handleSave = () => {
    fetchProducts();
  };
  

  if (loading) {
    return <p>Carregando produtos...</p>;
  }

  if (error) {
    return <p>Erro: {error}</p>;
  }

  return (
    <div className="flex justify-center items-start min-h-screen mt-8">
      <div className="overflow-x-auto bg-white shadow-md rounded-lg w-1/2">
        <table className="min-w-full table-auto">
          <thead>
            <tr className="bg-gray-100 border-b">
              <th className="py-3 px-6 text-left text-gray-700 font-semibold">Nome</th>
              <th className="py-3 px-6 text-left text-gray-700 font-semibold">Valor</th>
              <th className="py-3 px-6 text-left text-gray-700 font-semibold">Descrição</th>

              <th className="py-3 px-6 text-left text-gray-700 font-semibold">Disponível</th>
              <th className="py-3 px-6 text-left text-gray-700 font-semibold">Editar</th>
              <th className="py-3 px-6 text-left text-gray-700 font-semibold">Excluir</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id} className="border-b hover:bg-gray-50">
                <td className="py-3 px-6 text-gray-800">{product.name}</td>
                <td className="py-3 px-6 text-gray-800">{product.value}</td>
                <td className="py-3 px-6 text-gray-800">{product.description}</td>

                <td className="py-3 px-6 text-gray-800">
                  <span
                    className={`px-2 py-1 text-xs font-semibold rounded-full ${product.available ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                      }`}
                  >
                    {product.available ? 'Sim' : 'Não'}
                  </span>
                </td>
                <td className="py-3 px-6 text-gray-800">
                  <button
                    onClick={() => handleEdit(product)}
                    className="text-blue-500 hover:text-blue-700"
                  >
                    Editar
                  </button>
                </td>
                <td className="py-3 px-6 text-gray-800">
                  <button
                    onClick={() => handleDelete(product.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    Excluir
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        product={selectedProduct}
        onSave={handleSave}
        fetchProducts={fetchProducts}
        setProducts={setProducts}
      />
    </div>
  );
}

export default List;
