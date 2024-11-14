type ResultsProps = {
    results:{
        country: string
        cityName: string
        temperature: string
        conditionText: string
        icon: string
    }
}

const Results = (props:ResultsProps) => {
    return (
        <div>
            {
                props.results &&
                <div>
                    <div>{props.results.country}</div>
                    <div>{props.results.cityName}</div>
                    <div>{props.results.temperature}</div>
                    <div>{props.results.conditionText}</div>
                    <div><img src={props.results.icon}></img></div>
                </div>
            }
        </div>
//        <div>
//            <h1>気象データ</h1>
//            <div>{props.results.country}</div>
//            <div>{props.results.cityName}</div>
//            <div>{props.results.temperature}</div>
//            <div>{props.results.conditionText}</div>
//            <div>{props.results.icon}</div>
//        </div>
    )
}

export default Results