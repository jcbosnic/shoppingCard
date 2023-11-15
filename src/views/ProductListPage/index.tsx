import FetchData from "../../components/Fetch";
import { Product } from "../../types/products";
import Buttons from "../../components/Buttons";

const ProductListPage = () => {
  const { data, loading, error } = FetchData(
    "https://fakestoreapi.com/products"
  );
  return (
    <section className=" grid gap-4 grid-cols-4">
      {error && <p>Error: {error}</p>}
      {loading && <p style={{ color: "white" }}>Loading...</p>}
      {data.map((product: Product) => (
        <div
          className=" flex items-center flex-col justify-center rounded-xl p-10 shadow-lg"
          key={product.id}
        >
          <img className="w-40 h-48" src={product.image} alt={product.title} />
          <p className="">{product.title}</p>
          <p>{product.price}</p>
          <Buttons
            buttonStyles=" bg-black text-white px-10 py-3 rounded-xl mt-auto"
            buttonName="Agregar al Carro"
          />
        </div>
      ))}
    </section>
  );
};

export default ProductListPage;
