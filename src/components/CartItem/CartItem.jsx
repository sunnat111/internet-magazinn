import React, { useEffect, useState } from 'react'
import s from '../CartItem/CartItem.module.scss'
import { minusIcon, plusIcon, closeIcon } from '../../utils/imgExport'
import { Link } from 'react-router-dom'

const CartItem = ({ cart, removeProduct }) => {

  const [count, setCount] = useState(1)

  return (
    <div className={s.cart}>
      <div className={s.cart__container}>
        <div className={s.cart__top}>
          <h1 className={s.cart__top_title}>Корзина</h1>
        </div>
        {cart?.map((el) => (
          <div className={s.cart__center}>
            <div className={s.cart__center_left}>
              <div className={s.cart__center_left_pic}>
                <img src={el.thumbnail} alt="" className={s.cart__center_left_pic_img} />
              </div>
              <div className={s.cart__center_left_text}>
                <h2 className={s.cart__center_left_name}>{el.title}</h2>
                <span className={s.cart__center_left_span}>{Math.round(el.price)}   ₽</span>
              </div>
            </div>
            <div className={s.cart__center_right}>
              <button className={s.cart__center_right_minus} onClick={() => setCount(count <= 1 ? count : count - 1)}>
                <img src={minusIcon} alt="" />
              </button>
              <span className={s.cart__center_right_span}>0{count}</span>
              <button className={s.cart__center_right_plus} onClick={() => setCount(count + 1)}>
                <img src={plusIcon} alt="" />
              </button>
              <button className={s.cart__center_right_delete} onClick={() => removeProduct(el.id)}><img src={closeIcon} alt="" /></button>

            </div>
          </div>
        ))}
        <div className={s.cart__promo}>
          <input type="text" placeholder='Промокод' className={s.cart__promo_input}
          />
          <button className={s.cart__promo_button}>Применить</button>
        </div>
        {cart && (
        <div className={s.cart__bottom}>
          <p className={s.cart__bottom_subtotal}>
            <span className={s.cart__bottom_text}>Итог</span>
            <span className={s.cart__bottom_price}>{cart.price}</span>
          </p>
          <p className={s.cart__bottom_discount}>
            <span className={s.cart__bottom_text}>Доставка</span>
            <span className={s.cart__bottom_price}>169 ₽</span>
          </p>
          {cart && (
            <p className={s.cart__bottom_total}>
              <span className={s.cart__bottom_text}>Итог <span className={s.cart__bottom_span}>({cart.length})</span></span>
              <span className={s.cart__bottom_price}>640 ₽</span>
            </p>
          )}
        </div>
        )}
        <button className={s.cart__bottom_button}>
            <Link to='/internet-magazinn/readyorder' className={s.cart__bottom_button_link}>Оформить</Link>
          </button>
      </div>
    </div>
  )
}

export default CartItem