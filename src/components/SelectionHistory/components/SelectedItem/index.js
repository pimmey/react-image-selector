import React, { Fragment } from 'react'

const SelectedItem = ({
  selectedImage,
  label
}) => (
  <Fragment>
    <h2>
      {label}
    </h2>
    <img
      src={selectedImage.url}
      alt=''
    />
  </Fragment>
)

export default SelectedItem
