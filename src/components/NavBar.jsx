import { Link } from "react-router-dom"

export function NavBar() {
    return (
        <> 
            <Link to="/">
                <button>Home</button>
            </Link>
            <Link to = "/about">
                <button>About</button>
            </Link>
            <Link to="/robot">
                <button>Robot</button>
            </Link>
        </>
    )
}