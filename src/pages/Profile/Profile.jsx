import React from "react";
import AuthLayout from "../../layouts/AuthLayout";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import CustomInput from "../../components/UI/CustomInput";
import "../../scss/main.scss"

const Profile = () => {


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
                        <h1 className="title">Редактировать Профиль</h1>
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
                            <button disabled={!isValid} className="form_btn">
                                Изменить
                            </button>
                        </form>
                        <div className="form_info">
                            <p className="form_info_text">
                                <Link to="/internet-magazinn/" className="form_info_link">
                                    Назад?
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </AuthLayout>
        </>
    );
}

export default Profile