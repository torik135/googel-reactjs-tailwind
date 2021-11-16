import { NavLink } from "react-router-dom"

const links = [
    { url: '/search', text: 'All' },
    { url: '/news', text: 'News' },
    { url: '/images', text: 'Images' },
    { url: '/videos', text: 'Videos' },
]

export const Links = () => {
    return (
        <div className="flex sm:justify-around justify-between items-center mt-4">
            {links.map(({ url, text }) => (
                <NavLink to={url} className={({ isActive }) => `m-2 pb-2 text-blue-700 border-b-2 dark:text-white ${isActive ? 'border-red-700' : 'text-blue-900'}`} >
                    {text}
                </NavLink>
            ))
            }
        </div >
    )
}
