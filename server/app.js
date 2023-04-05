// Phase 2
const {
  getAllArtists,
  getLatestArtist,
  getArtistByArtistId,
  addArtist,
  editArtistByArtistId,
  deleteArtistByArtistId,
  getAlbumsForLatestArtist,
  getAlbumsByArtistId,
  getAlbumByAlbumId,
  addAlbumByArtistId,
  editAlbumByAlbumId,
  deleteAlbumByAlbumId,
  getFilteredAlbums,
  getSongsByArtistId,
  getSongsByAlbumId,
  getSongBySongId,
  addSongByAlbumId,
  editSongBySongId,
  deleteSongBySongId
} = require('./data');

const express = require('express');
const app = express();
app.use(express.json());

// Your code here
app.use((req, res, next) => {
  console.log('Request Body:', req.body);
  next();
});

app.get('/artists', (req, res) => {
  res.status (200);
  res.json(getAllArtists())
})

app.post('/artists', (req, res)=>{
  res.status(201);
  res.json(addArtist(req.body))
})

app.get('/artists/latest', (req,res)=> {
  res.json(getLatestArtist())
})

app.get('/artists/latest/albums', (req,res) => {
  res.json(getAlbumsForLatestArtist())
})
app.get('/artists/:artistId', (req,res) => {
  res.json(getArtistByArtistId(req.params.artistId))
})
// problem 6 maybe?
app.put('/artists/:artistId', (req, res)=> {
  res.json(editArtistByArtistId(req.params.artistId, req.body))
})

app.patch('/artists/:artistId', (req, res)=> {
  res.json(editArtistByArtistId(req.params.artistId, req.body))
})
// Problem 7
app.delete('/artists/:artistId', (req,res)=>{
  deleteArtistByArtistId(req.params.artistId)
  res.json({
    "message": "Successfully deleted"
  })
})
//problem 8
app.get('/artists/:artistId/albums', (req,res)=>{
  res.json(getAlbumsByArtistId(req.params.artistId))
})
//problem 9
app.get('/albums/:albumId', (req,res)=>{
  res.json(getAlbumByAlbumId(req.params.albumId))
})
// problem 10
app.post('/artists/:artistId/albums', (req,res)=>{
  res.status(201)
  res.json(addAlbumByArtistId(req.params.artistId, req.body))
})
//problem 11
app.put('/albums/:albumId', (req,res)=>{
  res.json(editAlbumByAlbumId(req.params.albumId, req.body))
})
app.patch('/albums/:albumId', (req,res)=>{
  res.json(editAlbumByAlbumId(req.params.albumId, req.body))
})
//problem 12
app.delete('/albums/:albumId', (req,res)=>{
  deleteAlbumByAlbumId(req.params.albumId)
  res.json({
    "message": "Successfully deleted"
  })
})
//problem 13
app.get('/albums', (req,res)=>{
  res.json(getFilteredAlbums(req.query.startsWith))
})
//problem 14
app.get('/songs/:songId', (req,res)=>{
  res.json(getSongBySongId(req.params.songId))
})
//problem 15
app.post('/albums/:albumId/songs', (req,res)=>{
  res.status(201)
  res.json(addSongByAlbumId(req.params.albumId, req.body))
})
//problem 16
app.get('/artists/:artistId/songs', (req,res)=>{
  res.json(getSongsByArtistId(req.params.artistId))
})
//problem 17
app.get('/albums/:albumId/songs', (req,res)=>{
  res.json(getSongsByAlbumId(req.params.albumId))
})
//problem 18
app.put('/songs/:songId', (req,res)=>{
  res.json(editSongBySongId(req.params.songId, req.body))
})
app.patch('/songs/:songId', (req,res)=>{
  res.json(editSongBySongId(req.params.songId, req.body))
})
//problem 19
app.delete('/songs/:songId', (req,res)=>{
  deleteSongBySongId(req.params.songId)
  res.json({
    "message": "Successfully deleted"
  })
})

// DO NOT MODIFY
if (require.main === module) {
  const port = 8000;
  app.listen(port, () => console.log('Server is listening on port', port));
} else {
  module.exports = app;
}
