import { createContext, useContext, useState } from "react"

const ResultContext = createContext()
const baseUrl = 'https://google-search3.p.rapidapi.com/api/v1' // endpoint

// children mean everything inside ResultContentProvider
export const ResultContextProvider = ({ children }) => {
    const [results, setResults] = useState([]) // return json
    const [isLoading, setIsLoading] = useState(false)
    const [searchTerm, setSearchTerm] = useState('javascript')

    // async because it takes time to get the data
    // type =  of the results (videos or images or text)
    const getResults = async (type) => {
        // getting the data and set loading to true
        setIsLoading(true)

        // get the response by fetching the url
        // use the await because async return a promise
        // and use await to get the data / response from the promise
        const response = await fetch(`${baseUrl}${type}`, {
            method: 'GET',
            headers: {
                'x-user-agent': 'desktop',
                'x-proxy-location': 'US',
                'x-rapidapi-host': 'google-search3.p.rapidapi.com',
                'x-rapidapi-key': process.env.REACT_APP_RAPID_API_KEY,
            }
        })

        console.log(process.env.RAPID_API_KEY)

        const data = await response.json()

        console.log(data)

        if (type.includes('/news')) {
            setResults(data.entries)
        } else if (type.includes('/images')) {
            setResults(data.image_results)
        } else {
            setResults(data.results)
        }


        // the data has been set and the loading is false
        setIsLoading(false)


    }
    return (
        <ResultContext.Provider value={{ getResults, results, searchTerm, setSearchTerm, isLoading }}>
            {children}
        </ResultContext.Provider>
    )
}

export const useResultContext = () => useContext(ResultContext)