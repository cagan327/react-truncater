import React from 'react'
import PropTypes from 'prop-types'
/**
* Wraps the given text within a <div> element with a css classname 'truncater'
* props:
* chars: maximum number of characters allowed
* more: boolean (if set clicking on the ellipsis shows the rest of the text)
* ellipsisClassName: string - however you want to style the ellipsis
* handleClick: function to do whetever you need when user clicks on the text
* if more and handleClick are both specified, clicking on the ellipsis will simply
* ignore handleClick and instead will display the rest of the text

**/
class Truncater extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        truncated: false,
        displayText: ''
      }
    }
    componentDidMount = () => {
      let truncated = this.props.children && this.props.children.length > this.props.chars
      if (truncated){
          this.setState({ truncated: true, displayText: this.props.children.substring(0, this.props.chars)})
      }else{
          this.setState({ truncated: false, displayText: this.props.children})
      }
    }
    handleClick = () => {
      if (this.props.handleClick){
        this.props.handleClick()
      }
    }

    //exists only if more option is given
    displayAll = () => {
      this.setState({truncated: false, displayText: this.props.children})
    }

    renderText = () => {
      let html = []
      html.push(<span onClick={this.handleClick}> {this.state.displayText}</span>)
      if (this.state.truncated){
        if (this.props.more){
          html.push(<span className={this.props.ellipsisClassName} onClick={this.displayAll}>...</span>)
        }else{
          html.push(<span className={this.props.ellipsisClassName} onClick={this.handleClick}>...</span>)
        }
      }
      return html;
    }

    render() {
        return (
          <div className='truncater' key={new Date().getTime()}>
              {this.renderText()}
            </div>
        )
    }
};
Truncater.propTypes = {
  chars: PropTypes.number.isRequired,
  ellipsisClassName: PropTypes.string,
  more: PropTypes.bool,
  handleClick: PropTypes.func
};
export default Truncater;
