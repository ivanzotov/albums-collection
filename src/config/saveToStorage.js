export default action => {
  switch (action.type) {
    case 'MY_ALBUMS_ADD':
    case 'MY_ALBUMS_REMOVE':
      return ['myAlbums']
    default:
      return []
  }
}
