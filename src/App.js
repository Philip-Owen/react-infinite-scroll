import React from 'react';
import debounce from 'lodash.debounce';
import styled from 'styled-components';

import Card from './Card';

const sampleData = Array.from({ length: 100 }, (x, i) => {
	return { id: i + 1 };
});

const AppContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans',
		'Droid Sans', 'Helvetica Neue', sans-serif;
`;

class App extends React.Component {
	state = {
		count: 0,
		data: [],
	};

	componentDidMount() {
		this.loadUsers();
		window.addEventListener('scroll', this.continueScroll);
	}

	continueScroll = debounce(() => {
		if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
			this.loadUsers();
		}
	}, 1000);

	loadUsers = () => {
		const { count, data } = this.state;
		let newCount = count + 5;
		let users = sampleData.slice(count, newCount);
		let newData = [...data, ...users];
		this.setState({ count: newCount, data: newData });
	};

	render() {
		const { data } = this.state;
		return (
			<AppContainer>
				<h1>Infinite Scroll</h1>
				{data.length > 0 ? data.map(x => <Card key={x.id} data={x} />) : null}
			</AppContainer>
		);
	}
}

export default App;
