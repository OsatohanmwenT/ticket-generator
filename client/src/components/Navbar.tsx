import logo from "../assets/logo.png"

const Navbar = () => {
  return (
    <header className="py-2">
        <nav className="rounded-2xl mx-2 p-4 bg-dark-green-100 border border-light-green-300 flex items-center justify-between">
            <div>
                <img src={logo} alt="logo" />
            </div>
            <ul className="flex items-center font-serif gap-3 text-white">
                <li>
                    <a className="hover:text-light-green" href="#">Event</a>
                </li>
                <li>
                    <a className="hover:text-light-green" href="#">My Tickets</a>
                </li>
                <li>
                    <a className="hover:text-light-green" href="#">About Project</a>
                </li>
            </ul>
            <button className="bg-white hover:bg-white/40 transition cursor-pointer font-serif p-3 rounded-2xl">MY TICKETS</button>
        </nav>
    </header>
  )
}

export default Navbar