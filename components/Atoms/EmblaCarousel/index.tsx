import React, { useState, useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { useProfileCardLayoutStylesEN } from './style';

import { Box, Button } from '@mui/material';
import Image from 'next/image';

import QText from '../text';
import Img from '../img';
import { Branding } from '../../../utilities/branding';

const EmblaCarousel = ({ slides }: any) => {
  const styles = useProfileCardLayoutStylesEN();
  const [viewportRef, embla] = useEmblaCarousel({
    slidesToScroll: 3,
    loop: true,
    skipSnaps: false
  });
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);
  const onSelect = useCallback(() => {
    if (!embla) return;
    setPrevBtnEnabled(embla.canScrollPrev());
    setNextBtnEnabled(embla.canScrollNext());
  }, [embla]);

  useEffect(() => {
    if (!embla) return;
    embla.on('select', onSelect);
    onSelect();
  }, [embla, onSelect]);

  return (
    <div className="embla">
      <div className="embla__viewport" ref={viewportRef}>
        <div className="embla__container">
          {slides.map((card: any, index: any) => (
            <div className="embla__slide" key={index}>
              <div className="embla__slide__inner">
                <Box className={styles.card}>
                  <Img imgProps={{ src: card.icon }} style={styles.shopImage} />
                  <QText
                    label={card.title}
                    labelStyle={{
                      fontSize: 20,
                      fontFamily: 'Outfit',
                      color: Branding.Colors.black[86],
                      fontWeight: '500',
                      textAlign: 'center',
                      width: 176
                    }}
                  />
                  <Button
                    disableElevation
                    style={{
                      height: 48,
                      width: 176,
                      backgroundColor: Branding.Colors.blue.variant_7,
                      boxShadow: '0px 1px 2px #00000029',
                      borderRadius: 8,
                      // padding: 7,
                      marginTop: 16,
                      color: Branding.Colors.white,
                      fontSize: 18,
                      textAlign: 'center',
                      fontFamily: 'Outfit',
                      fontWeight: '500',
                      textTransform: 'none'
                    }}
                    variant="contained"
                    // onClick={backAction}
                  >
                    {card.btnText}
                  </Button>

                  <Button
                    disableElevation
                    style={{
                      height: 23,
                      width: 176,
                      borderRadius: 8,
                      // padding: 7,
                      marginTop: 20,
                      color: Branding.Colors.blue.variant_8,
                      fontSize: 18,
                      textAlign: 'center',
                      fontFamily: 'Outfit',
                      fontWeight: '500',
                      textTransform: 'none'
                    }}
                    variant="text"
                    // onClick={backAction}
                  >
                    {card.text}
                  </Button>
                  <QText
                    label={card.required}
                    labelStyle={{
                      fontSize: 14,
                      fontFamily: 'Roboto',
                      color: Branding.Colors.notification,
                      fontWeight: '500',
                      textAlign: 'center',
                      width: 176,
                      marginTop: 20,
                      marginBottom: 17
                    }}
                  />
                </Box>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button
        className="embla__button embla__button--prev"
        onClick={scrollPrev}
        disabled={!prevBtnEnabled}
      >
        <svg
          className="embla__button__svg"
          viewBox="137.718 -1.001 366.563 644"
        >
          <path d="M428.36 12.5c16.67-16.67 43.76-16.67 60.42 0 16.67 16.67 16.67 43.76 0 60.42L241.7 320c148.25 148.24 230.61 230.6 247.08 247.08 16.67 16.66 16.67 43.75 0 60.42-16.67 16.66-43.76 16.67-60.42 0-27.72-27.71-249.45-249.37-277.16-277.08a42.308 42.308 0 0 1-12.48-30.34c0-11.1 4.1-22.05 12.48-30.42C206.63 234.23 400.64 40.21 428.36 12.5z" />
        </svg>
      </button>
      <button
        className="embla__button embla__button--next"
        onClick={scrollNext}
        disabled={!nextBtnEnabled}
      >
        <svg className="embla__button__svg" viewBox="0 0 238.003 238.003">
          <path d="M181.776 107.719L78.705 4.648c-6.198-6.198-16.273-6.198-22.47 0s-6.198 16.273 0 22.47l91.883 91.883-91.883 91.883c-6.198 6.198-6.198 16.273 0 22.47s16.273 6.198 22.47 0l103.071-103.039a15.741 15.741 0 0 0 4.64-11.283c0-4.13-1.526-8.199-4.64-11.313z" />
        </svg>
      </button>
    </div>
  );
};

export default EmblaCarousel;
