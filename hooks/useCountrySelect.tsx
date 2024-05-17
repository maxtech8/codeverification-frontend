import { useState, useMemo, useEffect } from "react"
import useClickOutside from "@/hooks/useClickOutside"
import countriesData from "react-select-country-list"

const useCountrySelect = () => {
  const { selectRef, setIsVisibleSelect, isVisibleSelect } = useClickOutside()
  const countries = useMemo(() => countriesData().getData(), [])
  const [selectedCountry, setSelectedCountry] = useState(null)

  useEffect(() => {
    if (!countries || countries?.length < 1) return
    setSelectedCountry(countries[0])
  }, [countries])

  const select = (country) => {
    setSelectedCountry(country)
    setIsVisibleSelect(!isVisibleSelect)
  }

  return { selectRef, selectedCountry, select, isVisibleSelect, countries, setIsVisibleSelect }
}

export default useCountrySelect
