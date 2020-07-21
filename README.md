# Artist Search

Search for artists by name.

## APIs

* [Music Brainz](https://musicbrainz.org/doc/Development/XML_Web_Service/Version_2)
`http://musicbrainz.org/ws/2/artist?query=<SEARCH>&fmt=json&limit=25`

* [Lyrics](https://lyricsovh.docs.apiary.io/#reference/0/lyrics-of-a-song/search)

## Components
[] - Search
   * [x] - display a list of matching artists
   * [] - artist pagination 
   * [] - As you type into the input box update a `searchTerm` query string.
   * [] - Navigating directly to a URL with a `searchTerm` query string pre-fills
    the search form.

[] - All releases by an artist
  * [x] - Get cover art from `http://coverartarchive.org/release/<RELEASE_ID>/front`
  * [x] - Display a placeholder if no cover art.
  * [] - releases pagination
  * [] - Make the page part of a query string (STRETCH)
[x] - Release view which displays a list of recordings for a release
  * [x] - Use `http://musicbrainz.org/ws/2/recording?release=<RELEASE_ID>&fmt=json`
[] - Song view which displays the lyrics of a song
  * [] - Use `https://api.lyrics.ovh/v1/<ARTIST>/<TITLE>` to get lyrics

## Testing

* Snapshot testing
* Enzyme testing

## Rubric

* fetches: 2 points
* Components / state management 8 points
* Router 6 points
* Tests 2 points
* syntax/Clean code 2 points