
import { HomeIcon } from "@primer/octicons-react"
import Link from "next/link"
import ActiveLink from "../active-link/ActiveLink"


const navItems = [
    {path:'/about', text: 'About'},
    {path:'/contact', text: 'Contact'},
    {path:'/pricing', text: 'Pricing'},


]

// Usamos rafc + tab
const Navbar = () => {

    return (
        //m-n --> para el margen; p-n --> padding; rounded --> bordes redondeados
        //Este segmento nos permite hacer un full refresh
        <nav className="flex bg-blue-950 bg-opacity-30 p-2 m-2 rounded">
            
            <Link href={'/'} className="flex items-center ">
                <HomeIcon className="mr-2" />
                <span> Home</span> 
            </Link>

            <div className="flex flex-1"></div>

            {
                navItems.map( navItem => (
                    <ActiveLink key={ navItem.path } { ...navItem } />
                    //<ActiveLink key={navItem.path} path={''} text={''} />
                ))
            }

        </nav>
    )
}

export default Navbar
