import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

function Layout() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
