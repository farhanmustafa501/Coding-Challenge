import { Outlet } from 'react-router-dom';
import Footer from '../footer/Footer';
import Header from '../header/Header';
const Layout = (): JSX.Element => {
    return (
        <>
            <main>
                <Outlet />
            </main>
        </>
    )
}
export default Layout;