import { Link } from 'react-router-dom';
import NavBar from '../../containers/NavBar';
import Logo from '../Logo';
import { mainLinks } from './config';

import style from './style.module.css';

interface NavBarLinkProps {
  href: string;
  label: string;
}


function NavBarLink({ href, label }:NavBarLinkProps){
  return (
    <Link to={href}>{label}</Link>
  );
}


export default function MainNavBar(){
  return (
    <NavBar
      image={<Logo />} 
      links={
        <div className={style.innerLinkContainer}>
          {mainLinks
            .map((args, index)=><NavBarLink key={`links-${index}`} {...args}/>)}    
        </div>
      }
    />
  );
}
