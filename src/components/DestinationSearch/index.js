// eslint-disable-next-line import/no-named-as-default-member
import DestinationItem from '../DestinationItem'

const DestinationSearch = props => {
  const {destinationsList} = props
  return (
    <ul className="items-container">
      {destinationsList.map(item => (
        <DestinationItem list={item} key={item.id} />
      ))}
    </ul>
  )
}

export default DestinationSearch
