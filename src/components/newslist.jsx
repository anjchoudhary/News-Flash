import image from '../assets/news.jpg'

const NewsList = ({ title, description, src, url }) => {
  return (
    <div
      className="card bg-dark text-light d-flex flex-column"
      style={{
 maxWidth: "475px",      // wider than before
    minHeight: "550px",

        Width: "100%",
        height: "100%",
      padding: "1rem"
      }}
    >
      <img
        src={src ? src : image}
        style={{ height: "250px", objectFit: "cover" }}
        className="card-img-top"
        alt="..."
      />
      <div className="card-body d-flex flex-column justify-content-between">
        <div>
          <h5 className="card-title" style={{ fontSize: "1.70rem", fontWeight: "bold" }}>
            {title ? title.slice(0, 50) + "..." : title}
          </h5>
          <p className="card-text" style={{ fontSize: "1.30rem" }}>
            {description
              ? description.slice(0, 90)
              : "This news contains information about the current event. It is information about something that has just happened."}
          </p>
        </div>
        <a href={url} target="_blank" rel="noopener noreferrer" className="btn btn-primary mt-auto">
          Read More
        </a>
      </div>
    </div>
  )
}

export default NewsList;
