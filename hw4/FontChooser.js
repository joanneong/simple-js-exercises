class FontChooser extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			isFormHidden: true,
		}
	}

	componentDidMount() {
		this.setState({ 
			isChecked: this.props.bold === 'true' ? true : false,
			fontWeight: this.props.bold === 'true' ? 'bold' : 'normal'
		});

	}

	toggleFormElements() {
		this.setState({ isFormHidden: !this.state.isFormHidden });
	}

	toggleFontWeight() {
		var newWeight = this.state.fontWeight === 'bold' ? 'normal' : 'bold';
		this.setState({ fontWeight: newWeight });
	}

	render() {
		var size = this.props.size + 'px';
		return(
			<div>
			<input type="checkbox" 
				id="boldCheckbox" 
				hidden={this.state.isFormHidden}
				defaultChecked={this.state.isChecked}
				onClick={this.toggleFontWeight.bind(this)}/>
			<button id="decreaseButton" hidden={this.state.isFormHidden}>-</button>
			<span id="fontSizeSpan" hidden={this.state.isFormHidden}>
				{this.props.size}
			</span>
			<button id="increaseButton" hidden={this.state.isFormHidden}>+</button>
			<span 
				style={{ fontWeight: this.state.fontWeight, fontSize: size }} 
				id="textSpan"
				onClick={this.toggleFormElements.bind(this)}>
				{this.props.text}
			</span>
			</div>
		);
  }
}

