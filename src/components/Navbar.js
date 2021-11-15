import { Link } from 'react-router-dom'

export const Navbar = ({ darkTheme, setDarkTheme }) => {
    return (
        <div className="p-5 pb-0 flex flex-wrap sm:justify-between justify-center items-center border-b dark:border-gray-700 border-gray-200">
            <div className="flex justify-between items-center space-x-5 w-screen">
                <Link to="/">
                    <p className="text-2xl bg-yellow-400 font-bold text-blue-500 py-1 px-2 rounded dark:bg-gray-100 dark:text-blue-900 hover:shadow-md">
                        GooGel 👀
                    </p>
                </Link>
                <button type="button" onClick={() => setDarkTheme(!darkTheme)} className="text-xl bg-gray-400 text-white dark:bg-gray-50 dark:text-gray-900 rounded-full border px-2 py-1 hover:shadow-md">
                    {darkTheme ? 'Light 🌞' : 'Dark 🌙'}
                </button>
            </div>
        </div>
    )
}
