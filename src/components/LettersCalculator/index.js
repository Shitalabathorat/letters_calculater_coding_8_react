// Write your code here.
import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {count: 0, searchInput: ''}

  onClickInput = () => {
    this.setState(
      prevState => ((searchInput ? count : prevState.count + 1): null),
    )
  }

  render() {
    const {count, searchInput} = this.state

    return (
      <div className="container">
        <div className="cart">
          <h1 className="heading">Calculate the Letters You Enter</h1>
          <div>
            <label for="inputSearch" class="checkbox-label">
              Enter the phrase
            </label>
            <input
              className="input"
              id="inputSearch"
              placeholder="Enter the phrase"
              type="text"
              value={searchInput}
              onClick={this.onClickInput}
            />
          </div>
          <p className="para">No.of letters: {count}</p>
        </div>
        <div className="cart2">
          <img
            className="img"
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator
