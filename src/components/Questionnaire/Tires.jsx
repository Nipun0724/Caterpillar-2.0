import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { AudioRecorder, useAudioRecorder } from "react-audio-voice-recorder";

const Tires = ({ setActiveStep }) => {
  const [audioElement, setAudioElement] = useState(null);
  const [imageFile, setImageFile] = useState(null);

  const recorderControls = useAudioRecorder(
    {
      noiseSuppression: true,
      echoCancellation: true,
    },
    (err) => console.table(err)
  );

  const addAudioElement = (blob) => {
    const url = URL.createObjectURL(blob);
    setAudioElement({ url, blob });
  };

  const deleteAudioElement = () => {
    setAudioElement(null);
  };

  const handleImageUpload = (event) => {
    setImageFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!audioElement || !imageFile) {
      alert("Please record an audio and upload an image.");
      return;
    }

    const formData = new FormData();
    formData.append("audio", audioElement.blob);
    formData.append("image", imageFile);

    try {
      const response = await fetch("/process", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();
      console.log(result);

      setActiveStep((prevStep) => prevStep + 1);
    } catch (error) {
      console.error("Error processing files:", error);
    }
  };

  return (
    <div>
      <div className="Neon Neon-theme-dragdropbox">
        <input
          type="file"
          onChange={handleImageUpload}
          accept="image/*"
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
          multiple={false}
        />
        <div className="Neon-input-dragDrop">
          <div className="Neon-input-inner">
            <div className="Neon-input-icon">
              <i className="fa fa-file-image-o"></i>
            </div>
            <div className="Neon-input-text">
              <h3>Drag&amp;Drop files here</h3>
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

export default Tires;
