import MainNavBar from '../components/MainNavBar';

const Layout = ({ children }: React.PropsWithChildren)=>{
  return (
    <>
      <MainNavBar />
      {children}
    </>
  );
};

export default Layout;
