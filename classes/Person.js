class Person {
  constructor(media) {
    this.adult = media.adult;
    this.biography = media.biography;
    this.birthday = media.birthday;
    this.deathday = media.deathday;
    this.id = media.id;
    this.gender = media.gender;
    this.homepage = media.homepage;
    this.popularity = media.popularity;
    this.posterPath = media.profile_path;
    this.imdbId = media.imdb_id;
    this.name = media.name;
    this.placeOfBirth = media.place_of_birth;
  }

  getAllImages(images) {
    const imagesObj = images.profiles.map((image) => {
      return {
        url: image.file_path,
      };
    });
    this.images = imagesObj;
  }
}

module.exports = Person;
