import React, { useState, useEffect } from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

type Image = {
  id: string;
  author: string;
  download_url: string;
};

const fetchImages = async (): Promise<Image[]> => {
  const response = await fetch('https://picsum.photos/v2/list?page=1&limit=30');
  const data = await response.json();
  return data;
};

const App: React.FC = () => {
  const [cachedImages, setCachedImages] = useState<Image[]>([]);
  const [displayedImages, setDisplayedImages] = useState<Image[]>([]);
  const [loading, setLoading] = useState(true);
  const [popoverContent, setPopoverContent] = useState<string>('');
  const [popoverVisible, setPopoverVisible] = useState(false);
  const [toastVisible, setToastVisible] = useState(false);

  useEffect(() => {
    const getImages = async () => {
      const images = await fetchImages();
      setCachedImages(images);
      setLoading(false);
    };
    getImages();
  }, []);

  const addImage = () => {
    if (cachedImages.length === 0) return;
    const randomIndex = Math.floor(Math.random() * cachedImages.length);
    const newImage = cachedImages[randomIndex];
    setDisplayedImages((prevImages) => [...prevImages, newImage]);
  };

  const removeRandomImage = () => {
    setDisplayedImages((prevImages) => {
      if (prevImages.length === 0) return prevImages;
      const randomIndex = Math.floor(Math.random() * prevImages.length);
      return prevImages.filter((_, index) => index !== randomIndex);
    });
  };

  const handleMouseEnter = (url: string) => {
    setPopoverContent(url);
    setPopoverVisible(true);
  };

  const handleMouseLeave = () => {
    setTimeout(() => {
      setPopoverVisible(false);
    }, 1000)
  };

  const handleCopyToClipboard = async () => {
    await navigator.clipboard.writeText(popoverContent);
    setPopoverVisible(false);
    setToastVisible(true);
    setTimeout(() => {
      setToastVisible(false);
    }, 2000);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        padding: 2,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          gap: 2,
          marginBottom: 2,
        }}
      >
        <Button variant="contained" color="primary" onClick={addImage}>
          Add Image
        </Button>
        <Button variant="contained" color="secondary" onClick={removeRandomImage}>
          Remove Random Image
        </Button>
      </Box>
      {loading ? (
        <CircularProgress />
      ) : (
        <ImageList
          sx={{ width: '100%', maxWidth: 600 }}
          cols={2}
          rowHeight={200}
        >
          {displayedImages.map((image) => (
            <ImageListItem key={image.id}>
              <img
                src={`${image.download_url}?w=248&fit=crop&auto=format`}
                alt={image.author}
                loading="lazy"
                style={{ height: '100%', objectFit: 'cover' }}
              />
              <ImageListItemBar
                title={`Author: ${image.author}`}
                actionIcon={
                  <IconButton
                    sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                    aria-label={`info about ${image.author}`}
                    onMouseEnter={() => handleMouseEnter(image.download_url)}
                    onMouseLeave={handleMouseLeave}
                    onClick={handleCopyToClipboard}
                  >
                    <InfoIcon />
                  </IconButton>
                }
              />
            </ImageListItem>
          ))}
        </ImageList>
      )}
      {popoverVisible && (
        <div
          style={{
            position: 'fixed',
            bottom: '10%',
            backgroundColor: 'white',
            border: '1px solid #ccc',
            padding: '10px',
            borderRadius: '4px',
            zIndex: 1000,
          }}
        >
          <p>{popoverContent}</p>
          <div className='flex flex-center align-center item-center'>
            <Button onClick={handleCopyToClipboard} variant="text" size="small">
              Make another Click to Copy URL
            </Button>
          </div>
          
        </div>
      )}
      {toastVisible && (
        <div
          style={{
            position: 'fixed',
            bottom: '20%',
            left: '50%',
            transform: 'translateX(-50%)',
            backgroundColor: '#4caf50',
            color: 'white',
            padding: '10px',
            borderRadius: '4px',
            zIndex: 1000,
          }}
        >
          Image URL Copied Successfully!
        </div>
      )}
    </Box>
  );
};

export default App;
