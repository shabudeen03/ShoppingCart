import { Outlet } from 'react-router';

import Header from './Header.jsx';

function Layout() {
    return (<>
        <Header />
        <Outlet />
    </>);
}

export default Layout;