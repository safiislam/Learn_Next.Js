import Link from "next/link";
import NavLink from "./NavLink";

const Navbar = () => {
    const navLinks = [
        {
            path: '/',
            title: 'Home',
        },
        {
            path: '/blog',
            title: 'Blog',
        },
        {
            path: '/profile',
            title: 'profile',
        },
        {
            path: '/dashbord',
            title: 'Dashbord',
        },
    ]
    return (
        <nav className="flex justify-between items-center container mx-auto py-5">
            <p className="text-xl font-semibold">Next app</p>
            <ul className="flex gap-8">
                {
                    navLinks.map(({ path, title }) => <li key={path}>
                        <NavLink exact={path === '/'} activeClassName='text-blue-500' href={path}>{title}</NavLink>
                    </li>)
                }
            </ul>
        </nav>
    );
};

export default Navbar;