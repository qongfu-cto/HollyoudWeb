import { ImageList, ImageListItem } from '@mui/material';
import { useEffect, useState } from 'react';
import { api } from 'services/userAPI';
import { useMarketPlaceProfileImagesStyles } from './styleEN';

interface MarketPlaceProfileImagesProps {
  images: string[];
  avatar: string;
  cover: string;
}

const MarketPlaceProfileImages = ({
  images,
  avatar,
  cover
}: MarketPlaceProfileImagesProps) => {
  const styles = useMarketPlaceProfileImagesStyles();
  let imgLength: number = [cover, ...images].length;

  const [resizeImg, setResizeImage] = useState({
    cover: {
      col: 2
    },
    rest: {
      col: 0,
      row: 0
    }
  });
  useEffect(() => {
    switchStyle();
  }, [images]);

  const switchStyle = () => {
    // let imgLength: number = [cover, ...images].length;
    console.log({ imgLength });
    if (imgLength <= 4) {
      switch (imgLength) {
        case 1:
          setResizeImage({
            ...resizeImg,
            cover: {
              col: 4
            }
          });
          break;
        case 2:
          setResizeImage({
            rest: {
              col: 1,
              row: 2
            },
            cover: {
              col: 3
            }
          });
          break;
        case 3:
          setResizeImage({
            rest: {
              col: 1,
              row: 2
            },
            cover: {
              col: 2
            }
          });
          break;
        case 4:
          setResizeImage({
            rest: {
              col: 1,
              row: 1
            },
            cover: {
              col: 2
            }
          });
          break;
      }
    } else {
      setResizeImage({
        rest: {
          col: 1,
          row: 1
        },
        cover: {
          col: 2
        }
      });
    }

    return;
  };

  return (
    <section className={styles.container}>
      <ImageList cols={4} rowHeight={136} sx={{ width: '100%' }}>
        <ImageListItem cols={resizeImg.cover.col} rows={2}>
          <section className={`${styles.start} ${styles.imageShare}`}>
            {avatar && (
              <div className={styles.avatarContainer}>
                <img
                  src={avatar ? `${api}/profile/uploads/${avatar}` : ''}
                  className={`${styles.avatar}`}
                />
              </div>
            )}

            <img
              src={cover ? `${api}/profile/uploads/${cover}` : ''}
              className={`${styles.img}`}
            />
          </section>
        </ImageListItem>

        <section className={styles.end}>
          {images.slice(0, imgLength <= 4 ? 1 : 2).map((image, i) => (
            <section
              key={i}
              className={`${imgLength <= 4 ? styles.start : styles.imageBox} ${
                styles.imageShare
              }`}
            >
              <img
                src={`${api}/profile/uploads/${image}`}
                className={`${styles.img}`}
              />
            </section>
          ))}
        </section>
        <section className={styles.end}>
          {images.slice(imgLength <= 4 ? 1 : 2, 4).map((image, i) => (
            <ImageListItem
              key={i}
              cols={resizeImg.rest.col}
              rows={resizeImg.rest.row}
            >
              <section
                className={`${imgLength < 4 ? styles.start : styles.imageBox} ${
                  styles.imageShare
                }`}
              >
                <img
                  src={`${api}/profile/uploads/${image}`}
                  className={`${styles.img}`}
                />
              </section>
            </ImageListItem>
          ))}
        </section>
      </ImageList>
    </section>
  );
};

export default MarketPlaceProfileImages;
