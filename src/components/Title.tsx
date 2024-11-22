type TitleProps = {
    cityName: string
}

const Title = (props:TitleProps) => {
    
    return (
        <h1>
            React World Weather {props.cityName}
        </h1>
    )
}
export default Title