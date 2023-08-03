import { useParams } from "react-router-dom";
import { useContext, useState } from "react";
import { Context } from "..";
import { v4 as uuid } from "uuid";
import { useEffect } from "react";
import Modal from "../Components/Modal";
import Video from "../Components/Video";

// How to edit a post/note in te same page on whcih it is created
//1 Create a editNote, setEditNote state & editNoteId, setEditNoteId states

//Then the button that is clicked upon to edit, add a function to onClick to it--and pass the note id and note  (that are need to be edited) from there. And in the fuction, set/pass that note Id and note to newly created edited noteId and edited note states.

//then where post is need to be edited, check there conditionally if editedPostId === postId, if yes, the conditionally display input field form, and if no, then dispalay the note

//Add a handleSave function to that save button in that conditionally displayed input form. Pass editedNoteId, editedNote, and the noteId

//In handleSave Function, map with noteId to ook for note that needs to ne updated, and in the the looked note, update it with the help of editedNoteId and editedNote
const DetailsPage = () => {
  const {
    allVideos,
    setAllVideos,
    watchLater,
    addToWatchLater,
    removeFromWatchLater,
    playlistsData,
    setPlaylistsData
  } = useContext(Context);
  const [isNoteModalOpen, setIsNoteModelOpen] = useState(false);
  const [isPlaylistModalOpen, setIsPlaylistModalOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [moreVideos, setMoreVideos] = useState([]);

  const [note, setNote] = useState("");
  const [playlist, setPlaylist] = useState({
    title: "",
    description: ""
  });
  const [editNote, setEditNote] = useState("");
  const [editNoteId, setEditNoteId] = useState(null);

  const { id } = useParams();

  const openNoteModal = () => {
    setIsNoteModelOpen(true);
  };

  const closeNoteModal = () => {
    setIsNoteModelOpen(false);
  };

  const openPlaylistModal = () => {
    setIsPlaylistModalOpen(true);
  };

  const closePlaylistModal = () => {
    setIsPlaylistModalOpen(false);
    setPlaylist({
      title: "",
      description: ""
    });
  };
  useEffect(() => {
    const video = allVideos.find((e) => e._id == id);
    setSelectedVideo(video);
  }, [allVideos, id]);
  ///////////////////////////////////////

  const lightWatch = <i class="fa-regular fa-clock"></i>;

  const darkWatch = <i class="fa-solid fa-clock"></i>;

  const handleAddNote = (id) => {
    if (!note) return;
    const newNote = {
      id: uuid(),
      note: note
    };
    setAllVideos(
      allVideos.map((e) =>
        e._id === id ? { ...e, notes: [...e.notes, newNote] } : e
      )
    );

    closeNoteModal();

    setNote("");
  };

  const handleDeleteNote = (noteId, id) => {
    setAllVideos(
      allVideos.map((e) =>
        e._id === id
          ? { ...e, notes: e.notes.filter((e) => e.id !== noteId) }
          : e
      )
    );
  };

  const handleEditNote = (noteId, note) => {
    setEditNoteId(noteId);
    setEditNote(note);
  };

  const handleSave = (editNoteId, videoId, editNote) => {
    setAllVideos((prevVideos) =>
      prevVideos.map((video) =>
        video._id === videoId
          ? {
              ...video,
              notes: video.notes.map((e) =>
                e.id === editNoteId ? { ...e, note: editNote } : e
              )
            }
          : video
      )
    );
    setEditNote("");
    setEditNoteId(null);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPlaylist((prevList) => {
      return {
        ...prevList,
        [name]: value
      };
    });
  };

  const handleAddPlaylist = (selectedVideo) => {
    const newPlaylist = {
      playlistId: uuid(),
      videos: [selectedVideo],
      image:
        "https://cdn.dribbble.com/users/278624/screenshots/4413242/playlist_cover2.png",
      title: playlist.title,
      description: playlist.description
    };
    setPlaylistsData((prevState) => [...prevState, newPlaylist]);
    closePlaylistModal();
  };

  const randomVideos = (arr) => {
    let randomVideosArray = [];

    for (let i = 0; i < 4; i++) {
      const randomIndex = Math.floor(Math.random() * arr.length);
      randomVideosArray.push(arr[randomIndex]);
    }
    return randomVideosArray;
  };

  useEffect(() => {
    setMoreVideos(randomVideos(allVideos));
  }, []);
  const handleAddToExistiingPlaylist = (selectedVideo, playlistId) => {
    setPlaylistsData(
      playlistsData.map((playlist) =>
        playlist.playlistId === playlistId
          ? { ...playlist, videos: [...playlist.videos, selectedVideo] }
          : playlist
      )
    );
    setIsPlaylistModalOpen(false);
  };

  console.log(playlistsData, "playlist data");

  return (
    <div className="detailspage--div">
      <div className="details--page">
        <iframe
          width="70%"
          height="315"
          src={selectedVideo?.src}
          title="Embedded Video"
        ></iframe>
        <div className="details">
          <div>
            <img
              src={
                "https://fastly.picsum.photos/id/117/40/40.jpg?hmac=y57dOhIuRURtCFb9gH1-fF2IPmlo1pnoIy9CVbZqpxA"
              }
              alt=""
            />
            <h4>{selectedVideo?.title}</h4>
            <h4>{selectedVideo?.category}</h4>
          </div>
          <div>
            {watchLater
              .map((e) => e._id === selectedVideo?._id)
              .includes(true) ? (
              <span onClick={() => removeFromWatchLater(selectedVideo?._id)}>
                {darkWatch}
              </span>
            ) : (
              <span onClick={() => addToWatchLater(selectedVideo?._id)}>
                {lightWatch}{" "}
              </span>
            )}
            <span>
              <i
                class="fa-solid fa-circle-plus"
                onClick={openPlaylistModal}
              ></i>
            </span>
            <Modal isOpen={isPlaylistModalOpen} onClose={closePlaylistModal}>
              <div className="playlist--modal">
                {playlistsData.length > 0 ? (
                  <div className="playlist--modal--playlistBtns">
                    <h4>Select from the existing playlists.</h4>
                    <div className="list">
                      {playlistsData.map((e) => (
                        <button
                          onClick={() =>
                            handleAddToExistiingPlaylist(
                              selectedVideo,
                              e.playlistId
                            )
                          }
                        >
                          {e.title}
                        </button>
                      ))}
                    </div>
                  </div>
                ) : (
                  ""
                )}
                <h4>Create a new playlist.</h4>
                <label htmlFor="title">Add title</label>
                <input
                  type="text"
                  name="title"
                  value={playlist.title}
                  onChange={handleChange}
                  id="title"
                />

                <label htmlFor="description">Add description</label>
                <input
                  type="text"
                  name="description"
                  value={playlist.description}
                  onChange={handleChange}
                  id="description"
                />

                <button onClick={() => handleAddPlaylist(selectedVideo)}>
                  Add
                </button>
              </div>
            </Modal>
            <span>
              <i class="fa-solid fa-pen-to-square" onClick={openNoteModal}></i>
            </span>
          </div>
        </div>

        <Modal isOpen={isNoteModalOpen} onClose={closeNoteModal}>
          <div className="note--modal">
            <h4>Add a note. </h4>
            <input
              value={note}
              onChange={(e) => setNote(e.target.value)}
              style={{ height: "4rem" }}
            />
            <div>
              <button onClick={() => handleAddNote(selectedVideo?._id)}>
                Add
              </button>
            </div>
          </div>
        </Modal>

        <div className="notes--div">
          <h3>Notes</h3>
          <div>
            {selectedVideo?.notes.length > 0 ? (
              selectedVideo?.notes?.map((e) => (
                <div className="note">
                  {editNoteId === e.id ? (
                    <div className="editNote">
                      <input
                        value={editNote}
                        onChange={(e) => setEditNote(e.target.value)}
                      />
                      <button
                        onClick={() =>
                          handleSave(editNoteId, selectedVideo._id, editNote)
                        }
                      >
                        Save
                      </button>
                    </div>
                  ) : (
                    <>
                      {e.note}
                      <div className="notes--icons">
                        <span>
                          <i
                            onClick={() => handleEditNote(e.id, e.note)}
                            class="fa-solid fa-pen"
                          ></i>
                        </span>
                        <span
                          onClick={() =>
                            handleDeleteNote(e.id, selectedVideo._id)
                          }
                        >
                          <i class="fa-solid fa-trash"></i>
                        </span>
                      </div>
                    </>
                  )}
                </div>
              ))
            ) : (
              <h5>No notes added yet.</h5>
            )}
          </div>
        </div>
      </div>
      <div className="more--videos">
        <h3>More videos</h3>
        <div className="morevideos--list">
          {moreVideos.map((video) => (
            <Video
              id={video._id}
              image={video.thumbnail}
              title={video.title}
              views={video.views}
              category={video.category}
              creator={video.creator}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
