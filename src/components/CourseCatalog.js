import React from 'react'
import courses from '../courses'
import TagView from './TagView'
import CourseView from './CourseView'

class CourseCatalog extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      filterIsActive: false,
      visibleCourses: courses,
      visibleTags: this.getAllTagsAlphabetically()
    }
  }

  getAllTagsAlphabetically() {
    return Object.values(courses.reduce((tags, course) => {
      course.tags.forEach((tag) => {
        if (tags[tag]) {
          tags[tag].numberOfCourses++
        } else {
          tags[tag] = { name: tag, numberOfCourses: 1 }
        }
      })
      return tags
    }, {})).sort((tag1, tag2) => {
      if (tag1.name > tag2.name) return 1
      if (tag1.name < tag2.name) return -1
      return 0
    })
  }

  filterCourses(tagFilter) {
    this.setState({
      visibleCourses: courses.filter(course => course.tags.includes(tagFilter))
    })
  }

  onTagClick(tag) {
    if (this.state.filterIsActive){
      this.setState({
        filterIsActive: false,
        visibleCourses: courses,
        visibleTags: this.getAllTagsAlphabetically()
      })
    } else {
      this.filterCourses(tag.name)
      this.setState({
        filterIsActive: true,
        visibleTags: [tag]
      })
    }
  }

  render() {
    const { visibleCourses, visibleTags } = this.state
    return (
      <React.Fragment>
        <TagView tags={visibleTags} onTagClick={this.onTagClick.bind(this)}/>
        <CourseView courses={visibleCourses}/>
      </React.Fragment>
    )
  }
}

export default CourseCatalog
