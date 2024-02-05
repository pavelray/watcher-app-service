const Media = require("./Media");

class Movie extends Media {
  constructor(media, mediaType) {
    super(media);
    this.mediaType = mediaType;
    this.belongsToCollection = media.belongs_to_collection;
    this.budget = media.budget;
    this.imdbId = media.imdb_id;
    this.originalLanguage = media.original_language;
    this.originalTitle = media.original_title;
    this.releaseDate = media.release_date;
    this.revenue = media.revenue;
    this.runtime = media.runtime;
    this.title = media.title;
    this.video = media.video;
  }
}

module.exports = Movie;
