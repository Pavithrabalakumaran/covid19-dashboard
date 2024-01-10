import {BsSearch} from 'react-icons/bs'

import './index.css'

const covidSearchBar = props => {
  const {onChangeSearchInput, searchInput} = props

  const onChangeSearch = event => {
    onChangeSearchInput(event)
  }

  return (
    <div className="search-container">
      <BsSearch className="search-icon" />
      <input
        type="search"
        className="search-input"
        placeholder="Search the state"
        value={searchInput}
        onChange={onChangeSearch}
      />
    </div>
  )
}

export default covidSearchBar
