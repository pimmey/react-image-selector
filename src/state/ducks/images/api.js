import axios from 'axios'

const loadImages = async () => {
  try {
    const { data } = await axios.get('http://weyveed.herokuapp.com/test/images')
    return data.reduce((acc, item, index) => {
      // A little bit of data normalization for simpler updates
      acc[index] = {
        id: index,
        url: item,
        selected: false
      }
      return acc
    }, {})
  } catch (exception) {
    throw new Error(exception)
  }
}

export default ({
  loadImages
})
