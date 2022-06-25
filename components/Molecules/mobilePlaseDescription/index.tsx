import { Typography } from '@mui/material';
import TextButton from 'components/Atoms/textButton';
import { BorderedBlockTitle } from 'components/Organisms/ProfileDetailsStart/Helpers';
import React, { useState } from 'react';
import { Branding } from 'utilities/branding';
import { fullPageWidth } from 'utilities/utils';
import style from 'styles/Home.module.css';

function MobilePlaceDescription({ description }: { description: string }) {
  const [showMore, setShowMore] = useState(false);

  const width = fullPageWidth();
  return (
    // <div style={{ width: '100%' }}>
    //   <BorderedBlockTitle title="About Us" mobile />
    //   <Typography
    //     variant="body2"
    //     color={Branding.Colors.black[36]}
    //     style={{
    //       marginBottom: 0,
    //       marginTop: 10,
    //       overflow: 'hidden',
    //       textOverflow: ' ellipsis',
    //       width: width ? width - 60 : '100%'

    //       whiteSpace: 'nowrap'
    //     }}
    //     paragraph
    //   >
    //     {description}
    //   </Typography>
    // </div>
    <>
      {description && description.length > 300 ? (
        <section style={{ width: '100%' }}>
          <BorderedBlockTitle title="About Us" mobile />
          <p
            id={!showMore ? style.pText : ''}
            //variant="body2"

            style={{
              width: width ? width - 60 : '100%',
              marginBottom: 0,
              overflow: 'hidden',
              textOverflow: ' ellipsis',
              paddingLeft: 34,
              textAlign: 'justify',
              textJustify: 'inter-word',
              color: 'white !important'

              //height: 100
              // whiteSpace: 'nowrap'
            }}
          >
            {description}
          </p>
          <TextButton
            button
            label={!showMore ? 'show more' : ' show less'}
            style={{ padding: ` 5px  0 0 34px`, lineHeight: 0 }}
            buttonProps={{
              onClick: () => setShowMore(!showMore),
              disableRipple: true
            }}
          />
        </section>
      ) : (
        <section style={{ width: '100%', color: 'white !important' }}>
          <BorderedBlockTitle title="About Us" mobile />
          <p
            //variant="body2"

            style={{
              width: width ? width - 60 : '100%',
              marginBottom: 0,
              overflow: 'hidden',
              textOverflow: ' ellipsis',
              paddingLeft: 34,
              textAlign: 'justify',
              textJustify: 'inter-word',
              color: 'rgba(255,255,255,0.8)',
              fontWeight: '400'

              //height: 100
              // whiteSpace: 'nowrap'
            }}
          >
            {description}
          </p>
        </section>
      )}
    </>
  );
}

export default MobilePlaceDescription;
