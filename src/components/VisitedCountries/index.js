import './index.css'

const VisitedCountries = props => {
  const {visitedCountryDetails, onClickRemove} = props
  const {id, name, imageUrl} = visitedCountryDetails

  const onClickButton = () => {
    onClickRemove(id)
  }

  return (
    <li className="visited-item">
      <img src={imageUrl} alt="thumbnail" className="icon" />
      <div className="visit-container">
        <p className="text-name">{name}</p>
        <button type="button" className="button" onClick={onClickButton}>
          Remove
        </button>
      </div>
    </li>
  )
}

export default VisitedCountries
