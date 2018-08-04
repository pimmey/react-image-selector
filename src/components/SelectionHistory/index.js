import React from 'react'
import { connect } from 'react-redux'

import { selectSelectedImages } from '../../state/ducks/images'
import SelectedItem from './components/SelectedItem'

const LastSelectedImage = ({
  lastSelectedImage,
  prevSelectedImage
}) => (
  <div>
    {lastSelectedImage && (
      <SelectedItem
        selectedImage={lastSelectedImage}
        label='Last selected image'
      />
    )}
    {prevSelectedImage && (
      <SelectedItem
        selectedImage={prevSelectedImage}
        label='Previously selected image'
      />
    )}
  </div>
)

const mapStateToProp = state => {
  const selectedImages = selectSelectedImages(state)

  return {
    lastSelectedImage: selectedImages[selectedImages.length - 1],
    prevSelectedImage: selectedImages[selectedImages.length - 2]
  }
}

export default connect(mapStateToProp)(LastSelectedImage)
