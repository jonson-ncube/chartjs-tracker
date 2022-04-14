import styled from '@emotion/styled'
interface IProps {
	NewConfirmed: number
	NewDeaths: number
	NewRecovered: number
}

const Wrapper = styled.div`
	text-align: center;
`

export default function GlobalInfo({
	NewConfirmed,
	NewDeaths,
	NewRecovered,
}: IProps): JSX.Element {
	return (
		<Wrapper>
			<h1>Covid19</h1>
			<h5> NewConfirmed: {new Intl.NumberFormat().format(NewConfirmed)}</h5>
			<h5> NewDeaths: {new Intl.NumberFormat().format(NewDeaths)}</h5>
			<h5> NewRecovered: {new Intl.NumberFormat().format(NewRecovered)}</h5>
		</Wrapper>
	)
}
