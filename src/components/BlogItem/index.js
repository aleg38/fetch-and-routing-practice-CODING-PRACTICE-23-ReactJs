// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const BlogItem = props => {
  const {blogData} = props
  const {id, title, author, topic, imageUrl, avatarUrl} = blogData

  return (
    <Link to={`/blogs/${id}`} className="blogs-link-style">
      <div className="blog-item-display-container">
        <img src={imageUrl} alt={`item${id}`} className="image-style" />
        <div className="blog_item-information">
          <p className="topic-name">{topic}</p>
          <h1 className="title">{title}</h1>
          <div className="avatar-container">
            <img src={avatarUrl} alt={`avatar${id}`} className="avatar" />
            <p className="author-name">{author}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}
export default BlogItem
