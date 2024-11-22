// App.tsx
import Title from "./components/Title"
import Form from "./components/Form"
import Results from "./components/Results"
import {useState} from "react"
// api key : b4e20780519c4845aa482845240611
// https://api.weatherapi.com/v1/current.json?key=b4e20780519c4845aa482845240611 &q=tokyo&aqi=no
type ResultsState = {
    country: string,
    cityName: string,
    temperature: string,
    conditionText: string,
    icon: string,
}
const App = () => {
    const [city, setCity] = useState<string>("")
    const [results, setResults] = useState<ResultsState>({
        country:"",
        cityName:"",
        temperature:"",
        conditionText:"",
        icon:""
    })
    const getWeather = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        fetch(`https://api.weatherapi.com/v1/current.json?key=b4e20780519c4845aa482845240611&q=${city}&aqi=no`)
        .then(res => res.json()).then(
            data => {
                setResults(
                    {
                        country:data.location.country,
                        cityName:data.location.name,
                        temperature:data.current.temp_c,
                        conditionText:data.current.condition.text,
                        icon:data.current.condition.icon,
                    }
                )
            }
        )
    }

    return (
        <div className="wrapper">
            <Title />
            <Form setCity={setCity} getWeather={getWeather}/>
            <Results results={results}/>
        </div>
    )
}
export default App