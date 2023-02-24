import Student from "./student";
import { useSelector, useDispatch } from "react-redux";
import { selectStudent } from "../store/student";
import { productsSelector, getProduct, getProducts } from "../store/products";
import { useEffect } from "react";

export default function StudentList() {
  const dispatch = useDispatch();
  const products = useSelector(productsSelector.selectAll);

  useEffect(() => {
    dispatch(getProducts());
    console.log("products", products);
  }, [dispatch]);

  return (
    <>
      <div className="">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 ">
          {products.map((product) => (
            <div
              className="relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm  hover:border-gray-400  "
              id="student"
            >
              <div className="text-left">
                <div className="flex">
                  <p className="text-sm font-medium text-gray-900">
                    {product.title}
                  </p>
                  {/* make trash icon smaller */}
                  <button
                    className="h-5 w-5 text-gray-400 ml-auto hover:text-red-500"
                    data-testid="delete"
                    // onClick={() => {
                    //   dispatch(deleteStudent(student.email));
                    // }}
                  >
                    <TrashIcon />
                  </button>
                </div>

                <p className="text-sm text-gray-500 truncate">
                  {product.price}
                </p>
              </div>

              <div className="flex justify-between gap-3">
                <p className="text-sm text-gray-500 truncate">
                  {product.price}
                </p>
                <p className="text-sm text-gray-500 truncate">
                  {product.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
