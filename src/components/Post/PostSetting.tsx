import { SPostSetting } from "./Post.style";

interface IPostSettingProps {
    onDeletClick?:()=>void,
    onEditClick?:()=>void,
}

export const PostSetting = ({onEditClick,onDeletClick}: IPostSettingProps) => {
  return(
    <div className="postSet">
        <SPostSetting onClick={onEditClick}>Изменить</SPostSetting>
        <SPostSetting onClick={onDeletClick}>Удалить</SPostSetting>
    </div>

  );
};
