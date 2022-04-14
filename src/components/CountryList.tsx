import { FC } from 'react'
import styled from '@emotion/styled'
import { Country } from '../types'
import CountryItem from './CountryItem'
interface IProps {
	countries: Country[]
	onClickItem: (country: Country) => void
}

const ListWrapper = styled.ul`
	padding: 0;
	display: flex;
	flex-wrap: wrap;
`

const CountryList: FC<IProps> = ({ countries, onClickItem }) => {
	return (
		<ListWrapper>
			{countries.map(country => (
				<CountryItem
					key={country.ID}
					country={country}
					onClickItem={onClickItem}
				/>
			))}
		</ListWrapper>
	)
}
export default CountryList
