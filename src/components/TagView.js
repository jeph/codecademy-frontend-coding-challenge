import React from 'react'

class TagView extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return this.props.tags.map(tag => {
      return <span className="tag">{tag.name} | {tag.numberOfCourses}</span>
    })
  }
}

export default TagView
