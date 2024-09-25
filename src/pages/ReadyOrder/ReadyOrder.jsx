import React from 'react'
import UserLayout from '../../layouts/UserLayout'
import ReadyOrderItem from '../../components/ReadyOrderItem/ReadyOrderItem'

const ReadyOrder = ({cart, remove}) => {
  return (
    <UserLayout>
        <ReadyOrderItem cart={cart} remove={remove}/>
    </UserLayout>
  )
}

export default ReadyOrder