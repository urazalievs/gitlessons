import { AppButton } from "../../components/UI/AppButton/AppButton";
import { AppInput } from "../../components/UI/AppInput/AppInput";
import { Applink } from "../../components/UI/Applink/Applink";
import { IconsWrapper } from "../../components/UI/IconsWrapper/IconsWrapper";
import "./LoginPage.scss";
import * as yup from "yup";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useLoginUserMutation } from "../../store/API/authApi";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store"; 

const AuthFormScheme = yup.object({
  userEmail: yup
    .string()
    .email("Введите корректный email")
    .required("Обязательное поле!"),
  userPassword: yup
    .string()
    .min(4, "Пароль должен содержать как минимум 4 символа!")
    .required("Обязательное поле!"),
});

interface ILoginForm {
  userEmail: string;
  userPassword: string;
}

export const LoginPage = () => {
  const navigate = useNavigate();
  const user = useSelector((state:RootState)=> state.user.user)
 
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginForm>({
    resolver: yupResolver(AuthFormScheme),
    mode: "onBlur",
    defaultValues: {
      userEmail: `${user?.email ? user.email : ""}`,
      userPassword:`${user?.password ? user.password : ""}`,
    },
  });
  const [loginUser, { data: userData }] = useLoginUserMutation();

  const formData: SubmitHandler<ILoginForm> = (data) => {
    const payload = {
      email: data.userEmail,
      password: data.userPassword,
    };
    loginUser(payload);
    console.log(data);
    
  };

  useEffect(() => {
    if (userData?.user_id) {
      navigate("/main-page");
    }
  }, [userData]);

  return (
    <div className="LoginPage">
      <h1>Авторизация</h1>
      <form onSubmit={handleSubmit(formData)}>
        <Controller
          control={control}
          name="userEmail"
          render={({ field }) => (
            <AppInput
              inputPlaceholder="Ваша почта"
              inputType="email"
              inputValue={field.value}
              onChange={field.onChange}
              isError={Boolean(errors.userEmail)}
              errorText={errors.userEmail?.message}
            />
          )}
        />
        <Controller
          control={control}
          name="userPassword"
          render={({ field }) => (
            <AppInput
              inputPlaceholder="Пароль"
              inputType="password"
              inputValue={field.value}
              onChange={field.onChange}
              isError={Boolean(errors.userPassword)}
              errorText={errors.userPassword?.message}
            />
          )}
        />
        <AppButton buttonText="Войти" buttonType="submit" isDisabled={false} />
      </form>
      <Applink href="/password-error" linkText="Забыли пароль?" />
      <IconsWrapper regLink="/register-page" />
    </div>
  );
};
