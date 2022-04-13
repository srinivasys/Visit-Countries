import './index.css'

const CountriesList = props => {
  const {countryDetails, onClickVisit} = props
  const {id, name, isVisited} = countryDetails
  const text = isVisited ? 'visited' : 'visit'

  const onClickBtn = () => {
    onClickVisit(id)
  }

  return (
    <li className="countries-item">
      <p className="name">{name}</p>
      {isVisited ? (
        <p className="des">{text}</p>
      ) : (
        <button
          type="button"
          className="btn"
          color={isVisited}
          bgColor={isVisited}
          onClick={onClickBtn}
        >
          {text}
        </button>
      )}
    </li>
  )
}

export default CountriesList
