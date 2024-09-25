import { useState } from "react";
import s from "./Sort.module.scss";
import { useDispatch } from "react-redux";
import { sortProducts } from "../../store/products/productsSlice";


const Sort = () => {
    const dispatch = useDispatch()

    return (
        <section className={s.main}>
            <div className="container">
                <div className={s.main__actions}>
                    <select className={s.main__actions_sort} onChange={(event) => dispatch(sortProducts(event.target.value))}>
                        <option selected>Сортировать по:</option>
                        <option value='1'>Name</option>
                        <option value="2">Price</option>
                        <option value="3">Starts</option>
                    </select>
                </div>
            </div>
        </section>
    )

};

export default Sort;
