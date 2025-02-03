
import { AppButton } from "../../components/UI/AppButton/AppButton";
import { AppInput } from "../../components/UI/AppInput/AppInput";
import { SContainer } from "../../themes/Container.style";
// import { SPasswordError } from "./PasswordError";


 const PasswordErrore = ()=>{
    return(
        <SContainer>
            <div className="LoginPage">
                  <h1 className="passwTitle">Забыли пароль?</h1>
                  <p className="passwText">Укажите свой номер телефона, чтобы получить код для сброса пароля.</p>
                  <form action="#">
                    <AppInput
                      inputPlaceholder="Номер телефона"
                      inputType="tel"
                    />
                  </form>
                  <AppButton
                    buttonType="button"
                    buttonText="Отправить"
                    isDisabled={false}
                  />
                  
            </div>
        </SContainer>
    );
}

export default PasswordErrore