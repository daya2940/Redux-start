import React, { Component } from "react";
import { connect } from "react-redux"; // help in connecting the react to redux
import { SelectSong } from "../actions";

class Songlist extends Component {
  renderList = () => {
    return this.props.songs.map((song) => {
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button className="ui button primary" onClick={() => this.props.selectedSong(song)}>Select</button>
          </div>
          <div className="content">{song.title}</div>
        </div>
      );
    });
  };
  render() {
    return <div className="ui divided list">{this.renderList()}</div>;
  }
}

//This is called with all the data inside redux store and also monitor the changes
const mapStateToProps = (state) => {
    console.log(state);
  return { songs: state.songs };
};


//second argument is the action creator
export default connect(mapStateToProps, {
  selectedSong: SelectSong,
})(Songlist);
