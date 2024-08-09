import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { AudioRecorder, useAudioRecorder } from "react-audio-voice-recorder";

const Customer = ({ setActiveStep }) => {
  const [audioElement, setAudioElement] = useState(null);
  const handleSubmit = (event) => {
    event.preventDefault();
    setActiveStep((prevStep) => prevStep + 1);
  };
  const recorderControls = useAudioRecorder(
    {
      noiseSuppression: true,
      echoCancellation: true,
    },
    (err) => console.table(err) // onNotAllowedOrFound
  );
  const addAudioElement = (blob) => {
    const url = URL.createObjectURL(blob);
    const id = Math.random().toString(36).substr(2, 9);

    setAudioElement({ id, url, blob });
  };

  const deleteAudioElement = () => {
    setAudioElement(null);
  };

  return (
    <div>
      <div className="Neon Neon-theme-dragdropbox">
        <input
          style={{
            zIndex: 999,
            opacity: 0,
            width: "320px",
            height: "200px",
            position: "absolute",
            right: "0px",
            left: "0px",
            marginRight: "auto",
            marginLeft: "auto",
          }}
          name="files[]"
          id="filer_input2"
          multiple="multiple"
          type="file"
        />
        <div className="Neon-input-dragDrop">
          <div className="Neon-input-inner">
            <div className="Neon-input-icon">
              <i className="fa fa-file-image-o"></i>
            </div>
            <div className="Neon-input-text">
              <h3>Drag&amp;Drop files here</h3>{" "}
              <span style={{ display: "inline-block", margin: "15px 0" }}>
                or
              </span>
            </div>
            <a className="Neon-input-choose-btn blue">Browse Files</a>
          </div>
        </div>
      </div>
      <div className="audio">
        <AudioRecorder
          onRecordingComplete={(blob) => addAudioElement(blob)}
          recorderControls={recorderControls}
          showVisualizer={true}
        />
        <button
          className="button-30"
          onClick={recorderControls.stopRecording}
          style={{ cursor: "pointer" }}
        >
          Stop recording
        </button>
      </div>
      {audioElement && (
        <div
          className="audio-result"
          style={{ display: "flex", alignItems: "center" }}
        >
          <audio src={audioElement.url} controls />
          <button
            className="button-30"
            style={{ cursor: "pointer", marginLeft: "10px" }}
            onClick={deleteAudioElement}
          >
            <DeleteIcon />
          </button>
        </div>
      )}
      <button className="button-30 submit-btn" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};

export default Customer;
