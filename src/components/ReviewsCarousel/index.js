import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {activeIndex: 0}

  onRightArrow = () => {
    const {activeIndex} = this.state
    const {reviewsList} = this.props
    if (activeIndex < reviewsList.length - 1) {
      this.setState(prevState => ({activeIndex: prevState.activeIndex + 1}))
    }
  }

  onLeftArrow = () => {
    const {activeIndex} = this.state
    if (activeIndex > 0) {
      this.setState(prevState => ({activeIndex: prevState.activeIndex - 1}))
    }
  }

  render() {
    const {reviewsList} = this.props
    const {activeIndex} = this.state
    const currentData = reviewsList[activeIndex]
    console.log(currentData)
    return (
      <div className="bg-container">
        <h1>Reviews</h1>
        <div className="carousel">
          <button
            type="button"
            className="button"
            onClick={this.onLeftArrow}
            data-testid="leftArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
              className="icon"
            />
          </button>
          <div>
            <img src={currentData.imgUrl} alt={currentData.username} />
            <p>{currentData.username}</p>
            <p>{currentData.companyName}</p>
            <p>{currentData.description}</p>
          </div>
          <button
            type="button"
            className="button"
            onClick={this.onRightArrow}
            data-testid="rightArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
              className="icon"
            />
          </button>
        </div>
      </div>
    )
  }
}
export default ReviewsCarousel
