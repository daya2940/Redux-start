import { combineReducers } from "redux";

export const songReducer = () => {
  return [
    {
      title: "No scrubs",
      duration: "4:05",
    },
    {
      title: "Marcena",
      duration: "2:05",
    },
    {
      title: "All start",
      duration: "5:05",
    },
    {
      title: "I want it that way",
      duration: "3:45",
    },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }

  return selectedSong;
};

//These work as actual state only
export default combineReducers({
  songs: songReducer,
  selectedSong: selectedSongReducer,
});
