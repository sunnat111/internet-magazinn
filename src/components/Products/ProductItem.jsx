import { useEffect, useState } from 'react'
import s from '../Products/Products.module.scss'
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from 'react-router-dom';
import { getRout } from '../../store/rout/routSlice';
import { cartIcon, leftIcon, starIcon, close2Icon } from '../../utils/imgExport'
import CustomBtn from '../../components/UI/CustomBtn'
import UserLayout from '../../layouts/UserLayout';
import './Products.module.scss'

export const ProductItem = ({ addCart, cart, alerts }) => {

  const [isActive, setIsActive] = useState(false);

  // Обработчик для открытия корзины
  const handleCartClick = () => {
    setIsActive(true);
  };

  // Обработчик для закрытия корзины
  const handleCartCloseClick = () => {
    setIsActive(false);
  };

  const { id } = useParams()

  const el = useSelector((state) => state.rout.rout)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getRout(id))

  }, [])

  return (
    <>
      <UserLayout cart={cart}>
        <div className={s.product}>
          {alerts.map((alert) => (
            <>
              {isActive && (
                <button className={s.product_button} onClick={handleCartCloseClick}>
                  <img src={close2Icon} alt="" />
                </button>
              )}
              <div className={`product-message ${isActive ? 'active' : ''}`}>
                <span className='product-span'>{alert.message}</span>
              </div>
            </>

          ))}


          {el && (
            <div className={s.product_top}>
              <div className={s.product_top_left}>
                <Link to="/" className={s.product_top_left_link}>
                <img src={leftIcon} alt="" /></Link>
                <h2 className={s.product_top_left_text}>Наслаждение</h2>
              </div>
              <div className={s.product_top_right} onClick={handleCartClick}>
                <CustomBtn text="В корзину" icon={cartIcon} width={150} height={50} onClick={() => addCart(el)} />
              </div>
            </div>
          )}
          {el && (
            <div className={s.product_item}>
              <div className={s.product_item_left}>
                <img src={el.thumbnail} alt="" className={s.product_item_left_img} />
                <h2 className={s.product_item_left_text}>
                  {el?.title}
                </h2>
              </div>
              <div className={s.product_item_right}>
                <h2 className={s.product_item_price}>
                  <span>Цена</span>
                  <span>{el?.price}$</span>
                </h2>
                <h2 className={s.product_item_rating}>
                  <span>Рейтинг</span>
                  <span>{el?.rating}</span>
                </h2>
                <h2 className={s.product_item_quantity}>
                  <span>Кол-во</span>
                  <span>{el?.stock || 'Неизвестно'}</span>
                </h2>

              </div>
            </div>
          )}
        </div >
      </UserLayout >


    </>

  )
}


export default ProductItem