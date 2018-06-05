import axios from 'axios'

const MUSIC_BRAINZ_API = `http://musicbrainz.org/ws/2`

export default {
  albums: {
    search: ({ query = '', limit = 20 }) =>
      axios.get(`${MUSIC_BRAINZ_API}/release-group/?query=%22${query}%22&limit=${limit}&fmt=json`),
  },
}
