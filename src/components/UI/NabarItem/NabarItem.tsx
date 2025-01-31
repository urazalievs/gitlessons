import parse from "html-react-parser"

interface TNabarItem {
    navBadge:number,
    navName: string,
    navSvg: string
}

export const NabarItem = ({navBadge,navName,navSvg}:TNabarItem) => {
    return (
        <>
            <li className="navbar__item">
                {parse(navSvg)}
                <p className="item__name">{navName}</p>
                <span className="Badge">{navBadge}</span>
            </li>
        </>
    );
};