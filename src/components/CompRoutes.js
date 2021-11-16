// V6 react-router
// Switch = Routes

import { Route, Routes } from 'react-router-dom'

// components
import { Results } from './Results'
import { Search } from './Search'

export const CompRoutes = () => {

    return (
        <div className='p-4'>
            <Routes>
                {/* 
                routes:
                localhost:port/search

                routes:
                localhost:port/results
                
                nested routes:
                localhost:port/search/results
                localhost:port/search/images
                localhost:port/search/news
                localhost:port/ressearchults/videos
                */}

                <Route path="search" element={<Search />} />

                <Route path="search" element={<Search />}>
                    <Route path="results" element={<Results />} />
                    <Route path="images" element={<Results />} />
                    <Route path="news" element={<Results />} />
                    <Route path="videos" element={<Results />} />
                </Route>

            </Routes>
        </div>
    )
}
