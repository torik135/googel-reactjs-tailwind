// V6 react-router
// Switch = Routes

import { Route, Routes, Navigate } from 'react-router-dom'

// components
import { Results } from './Results'

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

                {/* <Route path="/" render={() => <Navigate replace="/" to="search" />} /> */}

                {/* <Route path="/" element={<Search />} render={() => <Navigate replace to="search" />}> */}
                <Route path="/" element={<Navigate replace to="search" />} />
                <Route path="/" element={<Results />}>
                    <Route path="search" element={<Results />} />
                    <Route path="images" element={<Results />} />
                    <Route path="news" element={<Results />} />
                    <Route path="videos" element={<Results />} />
                </Route>

            </Routes>
        </div>
    )
}
