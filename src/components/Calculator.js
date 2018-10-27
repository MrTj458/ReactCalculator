import React from 'react'
import {
	Header,
	Grid,
	Button,
	Segment,
	Container,
} from 'semantic-ui-react'

class Calculator extends React.Component {
	state = { display: '' }

	addNum = (num) => {
		this.setState( state => ({ display: state.display + num }) )
	}

	clear = () => {
		this.setState({ display: '' })
	}

	back = () => {
		this.setState( state => ({ display: state.display.substr(0, state.display.length - 1) }) )
	}

	calculate = () => {

	}

	render() {
		const { display } = this.state
		return (
			<Container>
				<Header as="h1" textAlign="center">Calculator</Header>
				<Grid celled centered>
					{/* ROW 1 */}
					<Grid.Row>
						<Grid.Column width={8}>
							<Segment>
								<Header as="h2">{display}</Header>
							</Segment>
						</Grid.Column>
					</Grid.Row>

					{/* ROW 2 */}
					<Grid.Row>
						<Grid.Column width={2}>
							<Button
								name="C"
								onClick={this.clear}
								fluid
							>
								{'C'}
							</Button>
						</Grid.Column>
						<Grid.Column width={2}>
							<Button
								name="<"
								onClick={this.back}
								fluid
							>
								{"<"}
							</Button>
						</Grid.Column>
						<Grid.Column width={2}>
							<Button
								name="("
								onClick={() => this.addNum('(')}
								fluid
							>
								{'('}
							</Button>
						</Grid.Column>
						<Grid.Column width={2}>
							<Button
								name=")"
								onClick={() => this.addNum(')')}
								fluid
							>
								{')'}
							</Button>
						</Grid.Column>
					</Grid.Row>

					{/* ROW 3 */}
					<Grid.Row>
						<Grid.Column width={4}>
							<Button
								name="^"
								onClick={() => this.addNum('^')}
								fluid
							>
								{'^'}
							</Button>
						</Grid.Column>
						<Grid.Column width={4}>
							<Button
								name="%"
								onClick={() => this.addNum('%')}
								fluid
							>
								{'%'}
							</Button>
						</Grid.Column>
					</Grid.Row>

					{/* ROW 4 */}
					<Grid.Row>
						<Grid.Column width={2}>
							<Button
								name="7"
								onClick={() => this.addNum('7')}
								fluid
							>
								{'7'}
							</Button>
						</Grid.Column>
						<Grid.Column width={2}>
							<Button
								name="8"
								onClick={() => this.addNum('8')}
								fluid
							>
								{'8'}
							</Button>
						</Grid.Column>
						<Grid.Column width={2}>
							<Button
								name="9"
								onClick={() => this.addNum('9')}
								fluid
							>
								{'9'}
							</Button>
						</Grid.Column>
						<Grid.Column width={2}>
							<Button
								name="*"
								onClick={() => this.addNum('x')}
								fluid
							>
								x
							</Button>
						</Grid.Column>
					</Grid.Row>

					{/* ROW 5 */}
					<Grid.Row>
						<Grid.Column width={2}>
							<Button
								name="4"
								onClick={() => this.addNum('4')}
								fluid
							>
								{'4'}
							</Button>
						</Grid.Column>
						<Grid.Column width={2}>
							<Button
								name="5"
								onClick={() => this.addNum('5')}
								fluid
							>
								{'5'}
							</Button>
						</Grid.Column>
						<Grid.Column width={2}>
							<Button
								name="5"
								onClick={() => this.addNum('6')}
								fluid
							>
								{'6'}
							</Button>
						</Grid.Column>
						<Grid.Column width={2}>
							<Button
								name="-"
								onClick={() => this.addNum('-')}
								fluid
							>
								{'-'}
							</Button>
						</Grid.Column>
					</Grid.Row>

					{/* ROW 6 */}
					<Grid.Row>
						<Grid.Column width={2}>
							<Button
								name="1"
								onClick={() => this.addNum('1')}
								fluid
							>
								{'1'}
							</Button>
						</Grid.Column>
						<Grid.Column width={2}>
							<Button
								name="2"
								onClick={() => this.addNum('2')}
								fluid
							>
								{'2'}
							</Button>
						</Grid.Column>
						<Grid.Column width={2}>
							<Button
								name="3"
								onClick={() => this.addNum('3')}
								fluid
							>
								{'3'}
							</Button>
						</Grid.Column>
						<Grid.Column width={2}>
							<Button
								name="+"
								onClick={() => this.addNum('+')}
								fluid
							>
								{'+'}
							</Button>
						</Grid.Column>
					</Grid.Row>

					{/* ROW 7 */}
					<Grid.Row>
						<Grid.Column width={4}>
							<Button
								name="0"
								onClick={() => this.addNum('0')}
								fluid
							>
								{'0'}
							</Button>
						</Grid.Column>
						<Grid.Column width={2}>
							<Button
								name="."
								onClick={() => this.addNum('.')}
								fluid
							>
								{'.'}
							</Button>
						</Grid.Column>
						<Grid.Column width={2}>
							<Button
								name="="
								onClick={this.calculate}
								fluid
							>
								{'='}
							</Button>
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</Container>
		)
	}
}

export default Calculator
