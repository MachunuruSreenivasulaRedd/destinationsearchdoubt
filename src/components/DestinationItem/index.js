import './index.css'

const DestinationItem = props => {
  const {list} = props
  const {imageUrl, name} = list
  return (
    console.log(list)
    <div>
      <li>
        <img src={imageUrl} className="image" alt={name} />
        <p className="destination-name">{name}</p>
      </li>
    </div>
  )
}

export default DestinationItem
