class FontChooser extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			isFormHidden: true,
		}
	}

	componentDidMount() {
		var minSize = parseInt(this.props.min) <= 0 ? 1 : this.props.min;
		var maxSize = this.props.max;
		if (parseInt(minSize) > parseInt(maxSize)) {
			maxSize = minSize;
		}
		var size = parseInt(this.props.size) < parseInt(minSize) 
			? minSize : this.props.size;
		size = parseInt(this.props.size) > parseInt(maxSize)
			? maxSize : this.props.size;

		this.setState({ 
			min: parseInt(minSize),
			max: parseInt(maxSize),
			initSize: parseInt(size),
			isChecked: this.props.bold === 'true' ? true : false,
			fontSize: parseInt(size)
		});
		this.adjustSpanColor(this.props.size);
	}

	toggleFormElements() {
		this.setState({ isFormHidden: !this.state.isFormHidden });
	}

	toggleFontWeight() {
		this.setState({ 
			isChecked: !this.state.isChecked
		});
	}

	decreaseFontSize() {
		var currSize = this.state.fontSize;
		if (currSize > this.state.min) {
			this.setState({ fontSize: currSize - 1 });
			this.adjustSpanColor(currSize - 1);
		}
	}

	increaseFontSize() {
		var currSize = this.state.fontSize;
		if (currSize < this.state.max) {
			this.setState({ fontSize: currSize + 1 });
			this.adjustSpanColor(currSize + 1);
		}
	}

	adjustSpanColor(currSize) {
		if (currSize == this.state.min || currSize == this.state.max) {
			this.setState({ spanColor: 'red' });
		} else {
			this.setState({ spanColor: 'black' });
		}
	}

	resetFontSize() {
		this.setState({ fontSize: this.state.initSize });
		this.adjustSpanColor(this.state.initSize);
	}

	render() {
		return(
			<div>
			<input type="checkbox" 
				id="boldCheckbox" 
				hidden={this.state.isFormHidden}
				checked={this.state.isChecked}
				onChange={this.toggleFontWeight.bind(this)}/>
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
					fontWeight: this.state.isChecked === true ? 'bold' : 'normal', 
					fontSize: this.state.fontSize
				}} 
				id="textSpan"
				onClick={this.toggleFormElements.bind(this)}>
				{this.props.text}
			</span>
			</div>
		);
  }
}

