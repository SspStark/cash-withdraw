import './index.css'

const DenominationItem = props => {
  const {eachDenomination, onUpdateBalance} = props
  const {value} = eachDenomination
  const updateBalance = () => {
    onUpdateBalance(value)
  }
  return (
    <li className="value-container">
      <button className="button" type="button" onClick={updateBalance}>
        {value}
      </button>
    </li>
  )
}
export default DenominationItem
