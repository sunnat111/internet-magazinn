import { useEffect, useState } from 'react'
import s from '../Products/Products.module.scss'
import ProductItem from './ProductItem'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getProducts } from '../../store/products/productsSlice'
import Pagination from '../Pagination/Pagination'
import Header from '../Header/Header'


const Products = () => {

  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage, setPostsPerPage] = useState(10)
  const [search, setSearch] = useState("")
  const { items } = useSelector((state) => state.products)
  const dispatch = useDispatch();
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;

  const currentPosts = items?.slice(firstPostIndex, lastPostIndex)

  useEffect(() => {
    dispatch(getProducts())

  }, [])

  const searchProducts = currentPosts?.filter((item) => item.title.toLowerCase().trim().includes(search.toLowerCase().trim()))

  return (
    <div className={s.box}>
      <Header search={search} setSearch={setSearch} />
      <div className={s.main}>
        {searchProducts?.map((el) => (
          <div key={el.id} className={s.item}>
            <img src={el.thumbnail} alt="" className={s.item_img} />
            <h2 className={s.item_title}>{el.title}</h2>
            <h2 className={s.item_title}>{el.rating}</h2>
            <h2 className={s.item_title}>{el.price}$</h2>
            <p className={s.item_text}>{el.description}</p>
            <div className={s.item_button}>
              <a href={`/internet-magazinn/${el.id}`}>Подробне</a>
            </div>

          </div>
        ))
        }
      </div >
      <div className={s.footer}>
        <Pagination
          items={currentPosts}
          totalPosts={items?.length}
          postsPerPage={postsPerPage}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      </div>

    </div>

  )
}

export default Products