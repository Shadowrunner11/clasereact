import style from './style.module.css';

export default function Logo(){
  return (
    <div className={style.logo}>
      <img 
        src='https://vitejs.dev/logo.svg'
        alt='logo '/>
    </div>
  );
}

