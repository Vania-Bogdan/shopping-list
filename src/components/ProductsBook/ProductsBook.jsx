import AddForm from "./AddForm/AddForm";
import ProductList from "./ProductList/ProductList";

import { useSelector, useDispatch } from "react-redux";

import { addProduct, removeProduct } from "redux/products/prod-slice";

import { getProducts } from "redux/products/prod-selectors";

import "../../css/styles.css"

export default function ProductsBook() {

    const dispatch = useDispatch()

    const onAddProduct = (payload) => {
        const isProduct = products.find(item => item.name.toLowerCase() === payload.name.toLowerCase());
            if (isProduct) {
                alert(`${payload.name} is already in list`);
            } else {
                dispatch(addProduct(payload))
            }
    }

    const onRemoveProduct = (payload) => {
        dispatch(removeProduct(payload))
    }

    const products = useSelector(getProducts)

    return (
            <div className="shopping-book">
                    <h1 className="main-heading">Список покупок</h1>
                    <AddForm onSubmit={onAddProduct} />
                    <h2 className="list-heading">Список</h2>
                    {products.length === 0 ?
                    <p>Список пустий, додай продукти.</p> : 
                    <div>
                        <ProductList products={products} onRemoveProduct={onRemoveProduct} />
                    </div>
                    }
            </div>
        );
};