import React, { useEffect } from 'react'
import s from './ReadyOrderItem.module.scss'

const ReadyOrderItem = ({ cart, remove }) => {

  return (
    <div className={s.ready}>
      <div className="container">
        <div className={s.ready__top}>
          {cart.map((el) => (
            <div className={s.ready__img}>
              <img src={el.thumbnail} alt="" />
              <h3 className={s.ready__img_title}>{el.title}</h3>
            </div>
          ))}
        </div>
        <div className={s.ready__bottom}>
          <p className={s.ready__text}>Ваш заказ успешно оформлен!</p>
          <button className={s.ready__button} onClick={remove}>    
            <a href="/internet-magazinn/">Сделать новый</a>
          </button>
        </div>
      </div>
    </div>
  )
}

export default ReadyOrderItem