import React from 'react'

class TagView extends React.Component {
  render() {
    return (
      <div className="tag-view">
        {
          this.props.tags.map(tag => {
            return (
              <span
                key={tag.name}
                className="tag"
                onClick={() => this.props.onTagClick(tag)}
              >
                {tag.name} | {tag.numberOfCourses}
              </span>
            )
          })
        }
      </div>
    )
  }
}

export default TagView
