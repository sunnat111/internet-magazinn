
import React, { useEffect } from "react";
import AuthLayout from "../../layouts/AuthLayout";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import CustomInput from "../../components/UI/CustomInput";
import "../../scss/main.scss"
import { useDispatch, useSelector } from "react-redux";
import { postData } from "../../store/products/dataSlice";

const Register = () => {

  const dispatch = useDispatch()

  const { data } = useSelector((state) => state.porducts)

  useEffect(() => {
    dispatch(postData())
    console.log(data);
  }, [])

  const {
    register, // позволит регистрировать наши поля
    formState: { errors, isValid }, // объект у которого есть свойства для ошибки
    handleSubmit,
    reset, // функция для сброса формы
  } = useForm({
    mode: "onBlur",
  });

  const registerUser = async (data) => {
    console.log(data);
  };


  return (
    <>
      <AuthLayout>
        <div className="f_b">
          <div className="f_b_b">
            <h1 className="title">Регистрация</h1>
            <form className="form" onSubmit={handleSubmit(registerUser)}>
              <CustomInput
                holder="Имя"
                label="Ваше имя"
                type="text"
                errors={errors?.username}
                register={register("username", {
                  required: "Поля обязательно к заполнению",
                  minLength: {
                    value: 3,
                    message: "Минимум 3 символа",
                  },
                })}
              />
              <CustomInput
                holder="Email"
                label="Ваш email"
                type="email"
                errors={errors?.email}
                register={register("email", {
                  required: "Поля обязательно к заполнению",
                })}
              />
              <CustomInput
                holder="Пароль"
                label="Ваш пароль"
                type="password"
                errors={errors?.password}
                register={register("password", {
                  required: "Поля обязательно к заполнению",
                  minLength: {
                    value: 6,
                    message: "Минимум 6 символов",
                  },
                })}
              />
              <CustomInput
                holder="Пароль"
                label="Подвердите пароль"
                type="password"
                errors={errors?.password2}
                register={register("password2", {
                  required: "Поля обязательно к заполнению",
                  minLength: {
                    value: 6,
                    message: "Минимум 6 символов",
                  },
                })}
              />
              <button disabled={!isValid} className="form_btn">
                Зарегистрироваться
              </button>
            </form>
            <div className="form_info">
              <p className="form_info_text">
                Есть акканут?
                <Link to="/login" className="form_info_link">
                  Войти
                </Link>
              </p>
            </div>
          </div>
        </div>
      </AuthLayout>
    </>
  );
}

export default Register