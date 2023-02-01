import { useEffect, useState } from "react"



export const useSearch = (arr, value, key) => {
  const newState = arr?.filter(item => item[ key ].toLowerCase().includes(value.toLowerCase()))
  return newState
}

export const useSort = (arr, type, key, keyLetter) => {
  switch (type) {
    case 'asc': {
      return arr?.sort((a, b) => a[key] - b[key])
    }
    case 'desc': {
      return arr?.sort((a, b) => b[key] - a[key])
    }
    case 'letter': {
      return arr?.sort((a, b) => a[keyLetter].localeCompare(b[keyLetter]))
    }
    default: return arr
  }
}

export const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value)

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay || 500)

    return () => {
      clearTimeout(timer)
    }
  }, [value, delay])

  return debouncedValue
}

export default useDebounce
