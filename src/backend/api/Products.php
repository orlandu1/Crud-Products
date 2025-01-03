<?php

include 'conn.php';
header('Content-Type: application/json');

class Product
{
    private $pdo;

    public function __construct($pdo)
    {
        $this->pdo = $pdo;
    }

    public function getProducts()
    {
        try {
            $query = "SELECT * FROM products ORDER BY value ASC;";
            $stmt = $this->pdo->prepare($query);
            $stmt->execute();

            $products = [];

            while ($product = $stmt->fetch(PDO::FETCH_ASSOC)) {
                $products[] = [
                    "id" => $product['id'],
                    "name" => $product['name'],
                    "value" => $product['value'],
                    "description" => $product['description'],
                    "available" => $product['available'] == 1
                ];
            }

            echo json_encode([
                "status" => "success",
                "products" => $products
            ]);
        } catch (PDOException $e) {
            echo json_encode([
                "status" => "error",
                "message" => "Erro ao buscar produtos: " . $e->getMessage()
            ]);
        }
    }
    public static function DeleteProduto($id, $pdo)
    {

        try {
            $query = "DELETE FROM products WHERE id = :id;";
            $stmt = $pdo->prepare($query);
            $stmt->bindParam(':id', $id);

            if ($stmt->execute()) {
                echo json_encode(["mensagem" => "Produto excluído com sucesso!"]);
            } else {
                echo json_encode(["mensagem" => "Erro ao excluir o produto."]);
            }
        } catch (PDOException $e) {
            echo json_encode(["mensagem" => "Erro: " . $e->getMessage()]);
        }
    }

    public static function editProduct($pdo, $productName, $description, $price, $isAvailable, $productId)
    {

        try {
            $query = "UPDATE products SET name = :name, description = :description, value = :value, available = :available WHERE id = :id";

            $stmt = $pdo->prepare($query);

            $stmt->bindParam(':name', $productName, PDO::PARAM_STR);
            $stmt->bindParam(':description', $description, PDO::PARAM_STR);
            $stmt->bindParam(':value', $price, PDO::PARAM_STR);
            $stmt->bindParam(':available', $isAvailable, PDO::PARAM_STR);
            $stmt->bindParam(':id', $productId, PDO::PARAM_INT);

            $stmt->execute();

            if ($stmt->rowCount() > 0) {
                echo json_encode([
                    'status' => 'success',
                    'message' => 'Produto atualizado com sucesso!'
                ]);
            } else {
                echo json_encode([
                    'status' => 'error',
                    'message' => 'Nenhuma alteração foi realizada.'
                ]);
            }
        } catch (PDOException $e) {
            header('Content-Type: application/json');
            echo json_encode([
                'status' => 'error',
                'message' => 'Erro ao atualizar produto: ' . $e->getMessage()
            ]);
        }
    }

    public static function createProduct($pdo, $productName, $description, $price, $isAvailable)
    {
        try {
            $query = "INSERT INTO products (name, description, value, available) VALUES (:name, :description, :value, :available)";

            $stmt = $pdo->prepare($query);

            $stmt->bindParam(':name', $productName, PDO::PARAM_STR);
            $stmt->bindParam(':description', $description, PDO::PARAM_STR);
            $stmt->bindParam(':value', $price, PDO::PARAM_STR);
            $stmt->bindParam(':available', $isAvailable, PDO::PARAM_STR);

            $stmt->execute();

            if ($stmt->rowCount() > 0) {
                echo json_encode([
                    'status' => 'success',
                    'message' => 'Produto inserido com sucesso!'
                ]);
            } else {
                echo json_encode([
                    'status' => 'error',
                    'message' => 'Nenhum produto foi inserido.'
                ]);
            }
        } catch (PDOException $e) {
            echo json_encode([
                'status' => 'error',
                'message' => 'Erro ao inserir produto: ' . $e->getMessage()
            ]);
        }
    }

}



if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents("php://input"), true);

    $acao = $data['action'];
    $corpo = $data['corpo'] ?? '';

    switch ($acao) {
        case 'List':

            $products = new Product($pdo);
            $products->getProducts();

            break;

        case 'Delete':

            $id = $data['id'];
            Product::DeleteProduto($id, $pdo);

            break;

        case 'Edit':


            $price = $corpo['price'];
            $productId = $corpo['productId'];
            $productName = $corpo['productName'];
            $isAvailable = $corpo['isAvailable'];
            $description = $corpo['productDescription'];

            Product::editProduct($pdo, $productName, $description, $price, $isAvailable, $productId);

            break;

        case 'Create':

            $price = $corpo['price'];
            $productName = $corpo['productName'];
            $isAvailable = $corpo['isAvailable'];
            $description = $corpo['productDescription'];

            Product::createProduct($pdo, $productName, $description, $price, $isAvailable);

            break;
    }
}