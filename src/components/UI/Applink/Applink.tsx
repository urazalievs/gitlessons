type TAppLink={
    href:string,
    linkText:string
}


export const Applink = ({href,linkText}:TAppLink) => {
    return (
        <a href={href}>{linkText}</a>
    );
};
