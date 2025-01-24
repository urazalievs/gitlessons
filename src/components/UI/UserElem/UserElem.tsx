import { SUserElem } from "./UserElem.style";

interface IUSerElem {
  userImg: string;
  userMainText: string;
  userSecondaryText: string;
}

export const UserElem = ({ userImg, userMainText, userSecondaryText }:IUSerElem) => {
  return (
    <SUserElem>
      <img src={userImg} alt="User" />
      <div className="user__description">
        <p className="main__text">{userMainText}</p>
        <p className="secondary__text">{userSecondaryText}</p>
      </div>
      <span className="Badge">3</span>
    </SUserElem>
  );
};
