import { UserElem } from "../UI/UserElem/UserElem";
import { dataList } from "./dataList";

export const List = () => {
  return (
    <div className="List">
      <div className="List__title">
        <h2>Подписки</h2>
        <span className="count">123</span>
      </div>
      {dataList.map((elem) => (
        <UserElem
          userImg={elem.listImg}
          userMainText={elem.listMain}
          userSecondaryText={elem.listSecondary}
        />
      ))}
    </div>
  );
};
