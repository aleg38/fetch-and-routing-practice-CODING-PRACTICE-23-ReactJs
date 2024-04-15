// Write your JS code here
import {Component} from 'react'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import './index.css'

class BlogItemDetails extends Component {
  state = {blogData: {}, isLoading: true}

  componentDidMount() {
    this.getBlogData()
  }

  getBlogData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await response.json()

    const displayDetailsData = {
      title: data.title,
      imageUrl: data.image_url,
      content: data.content,
      avatarUrl: data.avatar_url,
      author: data.author,
    }
    this.setState({blogData: displayDetailsData, isLoading: false})
  }

  renderBlogDetailsItem = () => {
    const {blogData} = this.state
    const {title, imageUrl, content, avatarUrl, author} = blogData

    return (
      <div className="details-fetch-container">
        <h1 className="title">{title}</h1>
        <div className="avatar-container">
          <img src={avatarUrl} alt={author} className="avatar" />
          <p className="author-name">{author}</p>
        </div>
        <img src={imageUrl} alt={title} className="display-detail-image" />
        <p className="content">{content}</p>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state

    return (
      <div className="display-details">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
          </div>
        ) : (
          this.renderBlogDetailsItem()
        )}
      </div>
    )
  }
}
export default BlogItemDetails
