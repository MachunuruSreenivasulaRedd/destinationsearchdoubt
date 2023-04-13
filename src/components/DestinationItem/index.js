import './index.css'

const DestinationItem = props => {
  const {list} = props
  const {imageUrl, name} = list
  return (
    <li>
      <img src={imageUrl} className="image" alt="name" />
      <p className="destination-name">{name}</p>
    </li>
  )
}

export default DestinationItem
