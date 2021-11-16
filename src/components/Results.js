import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import ReactPlayer from 'react-player'


// component
import { Loading } from "./Loading"

// context
import { useResultContext } from '../contexts/ResultContextProvider'

export const Results = () => {

    const [results, isLoading, getResults, searchTerm] = useResultContext()
    const location = useLocation() // get the ulr from react router

    if (isLoading) return <Loading />

    console.log(location.pathname)
    switch (location.pathname) {
        case 'search':
            return 'SEARCH CASE'
            break;

        default:
            return 'ERR'
    }
}
