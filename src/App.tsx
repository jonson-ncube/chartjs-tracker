import { FC, useEffect, useState } from 'react'
import { Global, css } from '@emotion/react'
import CountryList from './components/CountryList'
import GlobalInfo from './components/GlobalInfo'
import type { ResponseData, Country } from './types'

const App: FC = () => {
	const [data, setData] = useState<ResponseData | null>(null)
	const [activeCountries, setActiveCountries] = useState<Country[]>([])
	const fetchData = async () => {
		const result = await fetch('https://api.covid19api.com/summary')
		const data = await result.json()
		setData(data)
	}

	useEffect(() => {
		fetchData()
	}, [])

	const handleOnClick = (country: Country) => {
		const countryIndex = activeCountries.findIndex(ac => ac.ID === country.ID)
		if (countryIndex > -1) {
			const newAc = [...activeCountries]
			newAc.splice(countryIndex, 1)
			setActiveCountries(newAc)
		} else {
			setActiveCountries([...activeCountries, country])
		}
	}

	return (
		<div>
			<Global
				styles={css`
					body {
						background-color: #ddd;
						color: #333;
					}
				`}
			/>
			{activeCountries.map(aCounty => (
				<span key={aCounty.ID}>{aCounty.Country}</span>
			))}
			{data ? (
				<>
					<GlobalInfo
						NewConfirmed={data?.Global.NewConfirmed}
						NewDeaths={data?.Global.NewDeaths}
						NewRecovered={data?.Global.NewRecovered}
					/>
					<CountryList countries={data.Countries} onClickItem={handleOnClick} />
				</>
			) : (
				'...Loading'
			)}
		</div>
	)
}

export default App
