/* eslint-disable react/prop-types */
import useDebounce from '../../hooks/useDebounce'
import './Search.css'

function Search ({updateSearchTerm}) {
    const debouncedCallBack = useDebounce((e) => updateSearchTerm(e.target.value), 500)
    return (
        <div className='search-wrapper'>
            <input
                id='pokemon-name-search'
                type="text" 
                placeholder="pokemon name..."
                onChange={debouncedCallBack}
            />
        </div>
    )
}

export default Search