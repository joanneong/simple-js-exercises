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
			fontWeight: this.props.bold === 'true' ? 'bold' : 'normal',
			fontSize: this.props.size,
		});
		this.adjustSpanColor(this.props.size);
	}

	toggleFormElements() {
		this.setState({ isFormHidden: !this.state.isFormHidden });
	}

	toggleFontWeight() {
		var newWeight = this.state.fontWeight === 'bold' ? 'normal' : 'bold';
		this.setState({ fontWeight: newWeight });
	}

	decreaseFontSize() {
		var currSize = parseInt(this.state.fontSize);
		if (currSize > parseInt(this.props.min)) {
			var newSize = currSize - 1;
			this.setState({ fontSize: newSize });
			this.adjustSpanColor(newSize);
		}
	}

	increaseFontSize() {
		var currSize = parseInt(this.state.fontSize);
		if (currSize < parseInt(this.props.max)) {
			var newSize = currSize + 1;
			this.setState({ fontSize: newSize });
			this.adjustSpanColor(newSize);
		}
	}

	adjustSpanColor(currSize) {
		if (currSize == parseInt(this.props.min)
			|| currSize == parseInt(this.props.max)) {
				this.setState({ spanColor: 'red' });
		} else {
			this.setState({ spanColor: 'black' });
		}
	}

	resetFontSize() {
		this.setState({ fontSize: this.props.size });
		this.adjustSpanColor(this.props.size);
	}

	render() {
		return(
			<div>
			<input type="checkbox" 
				id="boldCheckbox" 
				hidden={this.state.isFormHidden}
				defaultChecked={this.state.isChecked}
				onClick={this.toggleFontWeight.bind(this)}/>
			<button id="decreaseButton" 
				hidden={this.state.isFormHidden}
				onClick={this.decreaseFontSize.bind(this)}>
				-
			</button>
			<span id="fontSizeSpan" 
				hidden={this.state.isFormHidden}
				style={{ color: this.state.spanColor }}
				onDoubleClick={this.resetFontSize.bind(this)}>
				{this.state.fontSize}
			</span>
			<button 
				id="increaseButton" 
				hidden={this.state.isFormHidden}
				onClick={this.increaseFontSize.bind(this)}>
				+
			</button>
			<span 
				style={{ 
					fontWeight: this.state.fontWeight, 
					fontSize: `${this.state.fontSize}px`
				}} 
				id="textSpan"
				onClick={this.toggleFormElements.bind(this)}>
				{this.props.text}
			</span>
			</div>
		);
  }
}

