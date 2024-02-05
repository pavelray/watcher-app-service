class Media {
  constructor(media) {
    this.adult = media.adult;
    this.backdropPath = media.backdrop_path;
    this.genres = media.genres;
    this.homepage = media.homepage;
    this.id = media.id;
    this.originalLanguage = media.original_language;
    this.overview = media.overview;
    this.popularity = media.popularity;
    this.posterPath = media.poster_path;
    this.productionCompanies = media.production_companies;
    this.productionCountries = media.production_countries;
    this.spokenLanguages = media.spoken_languages;
    this.tagline = media.tagline;
    this.status = media.status;
    this.voteAverage = media.vote_average;
    this.voteCount = media.vote_count;
  }

  getAllImages(images) {
    const backdrops = images.backdrops.map((image) => {
      return {
        url: image.file_path,
      };
    });
    const posters = images.posters.map((image) => {
      return {
        url: image.file_path,
      };
    });
    this.images = {
      backdrops,
      posters,
    };
  }
}

module.exports = Media;
