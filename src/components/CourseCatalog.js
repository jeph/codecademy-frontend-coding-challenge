import React from 'react'
import courses from '../courses'
import TagView from './TagView';
import CourseView from './CourseView';

class CourseCatalog extends React.Component {
  constructor(props) {
    super(props)
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
      return 0;
    })
  }

  render() {
    return (
      <React.Fragment className="courses-container">
        <TagView tags={this.getAllTagsAlphabetically()}/>
        <CourseView />
      </React.Fragment>
    )
  }
}

export default CourseCatalog
