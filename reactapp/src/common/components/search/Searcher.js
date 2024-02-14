//? searcher with autocomplete that will look over any api really
import { useState } from 'react'
import { Select } from 'antd'
import { useNavigate } from 'react-router-dom'
import jsonp from 'fetch-jsonp'
import qs from 'qs'

let timeout
let currentValue

const fetch = (url, value, callback) => {

  if (timeout) {
    clearTimeout(timeout)
    timeout = null
  }
  currentValue = value;
  const fake = () => {
    const str = qs.stringify({
      code: 'utf-8',
      q: value,
    })

    //todo: get this api working with url
    jsonp(`https://suggest.taobao.com/sug?${str}`)
      .then((response) => response.json())
      .then((d) => {
        if (currentValue === value) {
          const { result } = d
          const data = result.map((item) => ({
            value: item[0],
            text: item[0],
          }))
          callback(data)
        }
      })
  }
  if (value) {
    timeout = setTimeout(fake, 300);
  } else {
    callback([])
  }
}

const Searcher = ({url, path, placeholder}) => {

  const navigate = useNavigate()

  const [data, setData] = useState([])

  const handleSearch = (newValue) => {
    fetch(url, newValue, setData)
  }

  //this is the function that navigates to a new page with params when you click on an item
  const handleChange = (newValue) => {
    navigate(`${path}/${newValue}`)
  }
  
  return (
    <Select
      showSearch
      placeholder={placeholder}
      style={{ width: 200 }}
      defaultActiveFirstOption={false}
      suffixIcon={null}
      filterOption={false}
      onSearch={handleSearch}
      onChange={handleChange}
      notFoundContent={null}
      options={(data || []).map((d) => ({
        value: d.value,
        label: d.text,
      }))}
    />
  )
}

export default Searcher