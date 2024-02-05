const Media = require("./Media");

class TvSeries extends Media{
  constructor(media, mediaType) {
    super(media);
    this.mediaType = mediaType;
    this.lastAirDate = media.last_air_date;
    this.lastEpisodeToAir = media.last_episode_to_air;
    this.title = media.name;
    this.nextEpisodeToAir = media.next_episode_to_air;
    this.networks = media.networks;
    this.numberOfEpisodes = media.number_of_episodes;
    this.numberOfSeasons = media.number_of_seasons;
    this.originCountry = media.origin_country;
    this.originalTitle = media.original_name;
    this.createdBy = media.created_by;
    this.episodeRunTime = media.episode_run_time;
    this.firstAirDate = media.first_air_date;
    this.inProduction = media.in_production;
    this.seasons = media.seasons;
    this.type = media.type;
    this.languages = media.languages
  }
}

module.exports = TvSeries;
