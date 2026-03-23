import image from '../assets/news.jpg'

const News_Items = ({ title, description, src, url }) => {
  return (
    <div className="card bg-dark text-light mb-3 w-100">
      <img
        src={src ? src : image}
        onError={(e) => {
          e.currentTarget.onerror = null;
          e.currentTarget.src = image;
        }}
        loading="lazy"
        style={{ height: "200px", width: "100%", objectFit: "cover" }}
        className="card-img-top"
        alt="news"
      />

      <div className="card-body">
        <h5 className="card-title">{title ? title.slice(0, 50) : "No Title Available"}</h5>
        <p className="card-text">{description ? description.slice(0, 90) : "No description available."}</p>
        <a href={url} className="btn btn-primary">Read More</a>
      </div>
    </div>
  )
}

export default News_Items;