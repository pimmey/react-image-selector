import API from './api'

test('checking the data after normalization', async () => {
  const imagesCollection = await API.loadImages()
  expect(imagesCollection).toHaveProperty('0')
  expect(imagesCollection[0]).toHaveProperty('id')
  expect(imagesCollection[0]).toHaveProperty('url')
  expect(imagesCollection[0]).toHaveProperty('selected')
})
