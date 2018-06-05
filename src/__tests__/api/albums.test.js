import api from '../../api'

describe('API Albums', () => {
  it('should search albums', async () => {
    const query = 'lost tape'
    const limit = 2
    const response = await api.albums.search({ query, limit })
    expect(response.data).toMatchSnapshot()
  })
})
