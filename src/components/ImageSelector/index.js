import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import styled, { css } from 'styled-components'

import {
  getImages,
  toggleImage,
  selectImagesCollection,
  selectLoadingImages,
  selectLoadingRejected
} from '../../state/ducks/images'

const Image = styled.img`
  width: 100px;
  padding: 1rem;
  border-radius: 8px;
  box-sizing: border-box;
  cursor: pointer;
  
  &:not(:last-of-type) {
    margin-right: 8px;
  }
    
  ${props => props.selected && css`
    background: coral;
  `}
`

class ImageSelector extends PureComponent {
  componentDidMount () {
    this.props.dispatch(getImages())
  }

  handleClick = id => this.props.dispatch(toggleImage(id))

  render () {
    const {
      imagesCollection,
      loading,
      rejected
    } = this.props

    if (loading) {
      return <div>Hold on, fetching images...</div>
    }

    if (rejected) {
      return (
        <div>
          Something went wrong <span role='img' aria-label='fear'>😱</span>
          <br />
          Try again
        </div>
      )
    }

    return (
      <div>
        <h3>Click to select or deselect</h3>
        {Object.values(imagesCollection).map(({
          id,
          url,
          selected
        }) => (
          <Image
            key={id}
            src={url}
            selected={selected}
            alt=''
            onClick={() => this.handleClick(id)}
          />
        ))}
      </div>
    )
  }
}

const mapStateToProp = state => ({
  imagesCollection: selectImagesCollection(state),
  loading: selectLoadingImages(state),
  rejected: selectLoadingRejected(state)
})

export default connect(mapStateToProp)(ImageSelector)
