import style from './style.module.css';

interface INavBarProps{
  image: JSX.Element;
  links: JSX.Element[] | JSX.Element;
}

export default function NavBar({ image, links }: INavBarProps){
  return(
    <nav className={style.navbar}>
      {image}
      {links}
    </nav>
  );
}
