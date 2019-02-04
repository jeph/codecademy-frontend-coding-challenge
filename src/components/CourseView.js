import React from 'react'
import fetchAuthorData from '../fetchAuthorData'

class CourseView extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      authorData: undefined
    }
    this.getAuthorData()
  }

  async getAuthorData() {
    const authorData = await fetchAuthorData()
    await this.setState({ authorData: authorData })
  }

  render() {
    const { authorData } = this.state
    return (
      <div className="courses-container">
        {
          this.props.courses.map((course) => {
            return <div key={course.title} className="course">
              <h2>{course.title}</h2>
              <p>
                {
                  authorData ? authorData.authors[course.author_id].name : 'Loading...'
                }
              </p>
              <img className="course-image" src={course.image} alt="course"/>
            </div>
          })
        }
      </div>
    )
  }
}

export default CourseView
