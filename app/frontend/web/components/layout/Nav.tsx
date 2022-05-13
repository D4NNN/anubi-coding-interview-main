
import Link from 'next/link'

const Nav = () => {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-crimson border-2 border-lightGrey p-6 rounded-3xl mt-2 mb-7 w-full">
        <div className="flex items-center flex-no-shrink mr-6">
            <img src="./anubis.svg" className="w-10 mr-4" />
            <h1 className="text-2xl text-white">Anubi Digital</h1>
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
            <span className="block mt-4 lg:inline-block lg:mt-0 mr-4 text-white">
                <Link href='/'>Home</Link>
            </span>
            <span className="block mt-4 lg:inline-block lg:mt-0 mr-4 text-white">
                <Link href='/balances'>Balances</Link>
            </span>
        </div>
    </nav>
  )
}

export default Nav