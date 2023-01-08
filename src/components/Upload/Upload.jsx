/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import axios from 'axios';
import { useEffect, useState } from 'react';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { useNavigate } from 'react-router-dom';

import app from '../../utils/firebase';

import { Container, Close, Title, Wrapper, Input, Desc, Button, Label } from './Upload.styled';

const Upload = ({ setOpen }) => {
  const navigate = useNavigate();
  const [image, setImage] = useState(null);
  const [video, setVideo] = useState(null);
  const [imagePercentage, setImagePercentage] = useState(0);
  const [videoPercentage, setVideoPercentage] = useState(0);
  const [inputs, setInputs] = useState({});
  const [tags, setTags] = useState([]);

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleTags = (e) => {
    setTags(e.target.value.split(','));
  };

  const uploadFile = (file, urlType) => {
    const storage = getStorage(app);
    const fileName = new Date().getTime() + file.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        urlType === 'imgUrl'
          ? setImagePercentage(Math.round(progress))
          : setVideoPercentage(Math.round(progress));
        switch (snapshot.state) {
          case 'paused':
            console.log('Upload is paused');
            break;
          case 'running':
            console.log('Upload is running');
            break;
          default:
            break;
        }
      },
      (err) => {
        console.log(err);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setInputs((prev) => {
            return { ...prev, [urlType]: downloadURL };
          });
        });
      }
    );
  };

  useEffect(() => {
    video && uploadFile(video, 'videoUrl');
  }, [video]);

  useEffect(() => {
    image && uploadFile(image, 'imgUrl');
  }, [image]);

  const handleUpload = async (e) => {
    e.preventDefault();
    const res = await axios.post('/videos', { ...inputs, tags });
    setOpen(false);
    res.status === 200 && navigate(`/video/${res?.data?._id}`);
  };

  return (
    <Container>
      <Wrapper>
        <Close onClick={() => setOpen(false)}>X</Close>
        <Title>Upload a new video</Title>
        <Label>Video:</Label>
        {videoPercentage > 0 ? (
          `Uploading: ${videoPercentage}%`
        ) : (
          <Input type="file" accept="video/*" onChange={(e) => setVideo(e.target.files[0])} />
        )}
        <Input type="text" placeholder="Title" name="title" onChange={handleChange} />
        <Desc placeholder="Description" rows={8} name="desc" onChange={handleChange} />
        <Input type="text" placeholder="Separate the tags with commas." onChange={handleTags} />
        <Label>Image:</Label>
        {imagePercentage > 0 ? (
          `Uploading: ${imagePercentage}%`
        ) : (
          <Input type="file" accept="image/*" onChange={(e) => setImage(e.target.files[0])} />
        )}
        <Button onClick={handleUpload}>Upload</Button>
      </Wrapper>
    </Container>
  );
};

export default Upload;
