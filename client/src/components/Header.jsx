import logo from './assets/logo.jpeg';

export default function Header() {
    return (
        <nav className='navbar bg-light mb-4 p-0'>
            <div className="container">
                <a className="navbar-brand" href="/">
                    <div className="d-flex">
                        <img src={logo} atl="logo" className="mr-2" />
                        <div>Personal Goal Management</div>
                    </div>
                </a>
            </div>
        </nav>
    )
}