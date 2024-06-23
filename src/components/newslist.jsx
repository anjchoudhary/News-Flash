import image from '../assets/news.jpg'

const NewsList = ({title , description ,src, url}) => {
  return (
	<div className="card bg-dark text-light mb-3  d-inline-block my-3 mx-3 px-2 py-2 " style= {{maxWidth:"375px"}}>
  <img src={src? src:image} style={{height:"210px", width:"350px"}} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title.slice(0,50)}{title}</h5>
    <p className="card-text">{description ?description.slice(0,90):"This news contains information about the current event.It is information about something that has just happened."}</p>
    <a href={url} className="btn btn-primary">Read More</a>
  </div>
</div>
  )
}

export default NewsList
