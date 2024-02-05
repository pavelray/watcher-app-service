const COMMON_CONSTANTS = {
  TMDB_CONFIG: {
    API_URL: "https://api.themoviedb.org/",
    DEFAULT_VERSION: "3",
    VERSION_3: "3",
    VERSION_4: "4",
    ACCESS_TOKEN:
      "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NmQ1NzdmMjM3Yjc3MjNkMjM0MDUzZTZiYjRkY2YzMCIsInN1YiI6IjU4YzNiNjk0YzNhMzY4MWFjMTAwMGYxNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._kDwHzUpUrpaj3rRcYsDsUcOo4W0Jl0ijKtIk8bUUMY",
    API_AUTH_KEY: "76d577f237b7723d234053e6bb4dcf30",
  },
  MEDIA_TYPE: {
    MOVIE: "movie",
    TV: "tv",
    PERSON: "person",
  },
  APPEND_TO_URL: {
    movie:
      "append_to_response=videos,credits,images,external_ids,content_ratings,release_dates,recommendations&include_image_language=en",
    tv: "append_to_response=videos,credits,images,external_ids,content_ratings,release_dates,recommendations&include_image_language=en",
    person: "append_to_response=images,combined_credits,external_ids&include_image_language=en",
  },
};

const CONFIG = {
  isAppendToResponse: true,
};

module.exports = {
  COMMON_CONSTANTS,
  CONFIG,
};
