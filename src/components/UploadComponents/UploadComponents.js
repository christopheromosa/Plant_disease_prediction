import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./UploadComponents.module.css";
import { useNavigate, Link } from "react-router-dom";

const UploadComponents = (props) => {
  const { setLoading } = props;
  const [selectedFile, setSelectedFile] = useState(null);
  const [results, setResults] = useState(null);
  const [error, setError] = useState(null);
  const [selectedImageURL, setSelectedImageURL] = useState(null); // State to store the selected image URL
  const [userName, setUsername] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setUsername(props.username);
  }, []);

  const onFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    setSelectedImageURL(URL.createObjectURL(file)); // Create object URL for selected image
  };

  const refreshPage = () => {
    setLoading(true);
    setTimeout(() => {
      window.location.reload();
      setLoading(false);
    }, 3000);
  };

  const onUpload = () => {
    if (selectedFile) {
      console.log("upload button clicked!");
      fetchResults(selectedFile);
    } else {
      alert("Upload first the an image file to get results");
    }
  };

  const fetchResults = (file) => {
    const formData = new FormData();
    formData.append("file", file, file.name);
    const token = localStorage.getItem("token");
    console.log(token);

    axios
      .post("http://127.0.0.1:8000/predict_with_fetch", formData, {
        headers: {
          Authorization: `Bearer ${token}`, // Include token in Authorization header
          "Content-Type": "multipart/form-data", // Ensure correct content type
        },
      })
      .then((response) => {
        console.log(response.data);
        setResults(response.data);

        setTimeout(() => {
          setResults(null);
          setSelectedFile(null);
          setSelectedImageURL(null);
          refreshPage();
        }, 7000);
      })
      .catch((error) => {
        alert("The server is currently on processing,,, please wait......");
        navigate("/overview");
        if (
          error.response.data.detail === "Signature has expired" ||
          error.response.status === 401
        ) {
          alert("Signature has expired. You need to Sign up once again!!");
          localStorage.clear();
          navigate("/");
        }
        setError("Failed to fetch results. Please try again.");
      });
  };

  return (
    <>
      <header className={styles.header}>
        <h1>Overview</h1>
        <p>
          Welcome back <b>{userName}</b> to our page!!
        </p>
      </header>
      <div className={styles.fileupload}>
        <div className={styles.fileholder}>
          <input type="file" onChange={onFileChange} />
          {selectedImageURL && (
            <img src={selectedImageURL} alt="Selected" />
          )}{" "}
          <button onClick={onUpload} className="btn btn-primary">
            Upload!
          </button>
          {error && <div className={styles.error}>{error}</div>}
        </div>
        {results && (
          <div className={styles.resultsContainer}>
            <h2>Results:</h2>
            <div className={styles.results}>
              <p>
                Disease type:{" "}
                <span className={styles.block}>{results.class}</span>
              </p>
              <p>
                Confidence:{" "}
                <span className={styles.block}>{results.confidence}</span>
              </p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default UploadComponents;
