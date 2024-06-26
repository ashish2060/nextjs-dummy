import Link from "next/link";

async function listAllProduct() {
  const response = await fetch("http://localhost:3000/api/products");

  const data = await response.json();
  return data.data;
}

export default async function ListProduct() {
  const productList = await listAllProduct();
  return (
    <div>
      <h1>Product Data</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Category</th>
            <th>Company</th>
            <th>Color</th>
            <th>Update</th>
          </tr>
        </thead>
        <tbody>
          {productList.map((product, index) => {
            return (
              <tr key={index}>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.category}</td>
                <td>{product.company}</td>
                <td>{product.color}</td>
                <td>
                  <Link
                    href={`/product/${product._id}`}
                    className="text-blue-600"
                  >
                    Edit
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
