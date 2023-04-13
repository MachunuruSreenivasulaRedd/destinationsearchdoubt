
import DestinationItem from './components/DestinationItem'
import App from  './App.js'

class DestinationSearch extends Component {
   const {destinationsList} = props 

  const initialDestinationList = destinationsList

  state = {DestinationList: initialDestinationList, input:''}

  onSearch = (event) => {
    this.setState({input: event.target.value})
  }
  render() {
    const {DestinationList,input} = this.state
    input = input.toLowerCase()
    const reqList = DestinationList.filter((item) => item.name.includes(input))
    return (
      <div className="container">
        <h1 className='heading'>Destination Search</h1>
        <div className="inputContainer">
        <input type='search' placeholder="search" onChange={this.onSearch}/>
        <img src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png" className="icon" alt="search icon"/>
        </div>
        <ul className="items-container">
            {reqList.map((item) => ({
            <DestinationItem list={item} key={item.id} />
        }))
        }
        </ul>
      </div>
    )
  }
}

export default DestinationSearch