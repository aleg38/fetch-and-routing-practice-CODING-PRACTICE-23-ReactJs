// Write your JS code here
import {Component} from 'react'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import UserInfo from '../UserInfo'

import BlogItem from '../BlogItem'

import './index.css'

class BlogList extends Component {
  state = {blogList: [], isLoading: true}

  componentDidMount() {
    this.getBlogList()
  }

  getBlogList = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const data = await response.json()

    const formattedList = data.map(each => ({
      id: each.id,
      title: each.title,
      author: each.author,
      topic: each.topic,
      imageUrl: each.image_url,
      avatarUrl: each.avatar_url,
    }))
    this.setState({blogList: formattedList, isLoading: false})
  }

  render() {
    const {blogList, isLoading} = this.state

    return (
        <UserInfo/>
      <div className="blog-list-container">
        {isLoading ? (
            <div  data-testid='loader'>
          <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
          </div>
        ) : (
          blogList.map(eachItem => (
            <BlogItem key={eachItem.id} blogData={eachItem} />
          ))
        )}
      </div>
    )
  }
}
export default BlogList
