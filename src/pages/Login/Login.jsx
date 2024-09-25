import React from "react";
import AuthLayout from "../../layouts/AuthLayout";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <>
      <AuthLayout>
        <div className="f_b">
          <div className="f_b_b">
            <h1 className="title">Вход</h1>
            <form className="form">
              <div className="form_item">
                <label>
                  Ваш userName
                  <input
                    type="text"
                    className="form_item_input"
                    placeholder="username"
                  />
                </label>
              </div>
              <div className="form_item">
                <label>
                  Ваш пароль
                  <input
                    type="password"
                    className="form_item_input"
                    placeholder="Пароль"
                  />
                </label>
              </div>
              <a className="form_btn" href='/'>Вход</a>
            </form>
            <div className="form_info">
              <p className="form_info_text">
                Нет акканута?
                <Link to="/internet-magazinn/register" className="form_info_link">
                  Зарегистрироваться
                </Link>
              </p>
            </div>
          </div>
        </div>
      </AuthLayout>
    </>
  );
};

export default Login;
