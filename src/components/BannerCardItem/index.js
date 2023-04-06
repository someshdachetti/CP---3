import './index.css'

const BannerCardItems = props => {
  const {bannerDetailes} = props
  const {headerText, description, className} = bannerDetailes

  return (
    <li classNmae={`${className} banner-card-items`}>
      <div>
        <h1 className="heading">{headerText}</h1>
        <p className="discription">{description}</p>
        <button className="button" type="button">
          Show More
        </button>
      </div>
    </li>
  )
}

export default BannerCardItems
