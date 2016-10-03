import React,{Component} from 'react';
import moment from 'moment';

class Hello extends Component {

	constructor(props) {
		super(props);
		this.start = moment();
		this.state = {
			now: moment(),
			elapsed: moment(0)
		};
	}

	componentDidMount() {
		this.timer = setInterval(this._onTick.bind(this), 1000);
	}

	_onTick() {
		this.setState({
			now: moment(),
			elapsed: moment(moment().diff(this.start))
		});
	}

	componentWillUnmount() {
		clearInterval(this.timer);
	}

	render() {
		const {now, elapsed} = this.state;
		return <div>
		  <div>Now: {now.format('YYYY-MM-DD HH:mm:ss')}</div>
		  <div>Elapsed: {elapsed.format('mm:ss')}</div>
		</div>;
	}
}

export default Hello;