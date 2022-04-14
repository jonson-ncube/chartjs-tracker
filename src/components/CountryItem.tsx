import styled from '@emotion/styled'
import { FC, useState } from 'react'
import { Country } from '../types'

interface ListContentProps {
	isActive: boolean
}

interface IProps {
	country: Country
	onClickItem: (country: Country) => void
}
const ListContent = styled.div<ListContentProps>`
	background-color: ${props => (props.isActive ? '#ffffff' : '#eee')};
	margin: 5px;
	padding: 1px 0 15px 0;
`

const ListItem = styled.li`
	list-style: none;
	flex: 0 0 50%;
	text-align: center;
	cursor: pointer;

	@media (min-width: 420px) {
		flex: 0 0 33.33%;
	}
`

const CountryItem: FC<IProps> = ({ country, onClickItem }) => {
	const [isActive, setIsActive] = useState<boolean>(false)

	const handleActiveState = (country: Country) => {
		onClickItem(country)
		setIsActive(!isActive)
	}

	return (
		<div>
			<ListItem onClick={() => handleActiveState(country)}>
				<ListContent isActive={isActive}>
					<h4>{country.Country}</h4>
					<div>New confirmed: {country.NewConfirmed}</div>
					<div>New deaths: {country.NewDeaths}</div>
					<div>New recovered: {country.NewRecovered}</div>
				</ListContent>
			</ListItem>
		</div>
	)
}

export default CountryItem
