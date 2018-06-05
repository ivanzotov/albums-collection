import Album from './Album'

export default raw => raw['release-groups'].map(Album)
