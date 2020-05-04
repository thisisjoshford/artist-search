# Artist Search

Search for artists by name.

## APIs

* [Music Brainz](https://musicbrainz.org/doc/Development/XML_Web_Service/Version_2)
`http://musicbrainz.org/ws/2/artist?query=<SEARCH>&fmt=json&limit=25`

* [Lyrics](https://lyricsovh.docs.apiary.io/#reference/0/lyrics-of-a-song/search)

## Components
[] - Search
   * display a list of matching artists
   * Allow paging through artists
   * As you type into the input box update a `searchTerm` query string.
   * Navigating directly to a URL with a `searchTerm` query string pre-fills
    the search form.

[] - All releases by an artist
  * Use `http://musicbrainz.org/ws/2/release?artist=<ARTIST_ID>&fmt=json`
  * Get cover art from `http://coverartarchive.org/release/<RELEASE_ID>/front`
  * Only some releases have cover art. Display a placeholder if no cover art.
  * Allow paging through releases
  * Bonus: Make the page part of a query string
[] - Create a release view which displays a list of recordings for a release
  * Use `http://musicbrainz.org/ws/2/recording?release=<RELEASE_ID>&fmt=json`
[] - Create a song view which displays the lyrics of a song
  * Use `https://api.lyrics.ovh/v1/<ARTIST>/<TITLE>` to get lyrics

## Testing

* Snapshot testing
* Enzyme testing

## Rubric

* fetches: 2 points
* Components / state management 8 points
* Router 6 points
* Tests 2 points
* syntax/Clean code 2 points