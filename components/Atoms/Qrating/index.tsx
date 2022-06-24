import { Rating } from '@mui/material';
import QText from '../text';
import { useQRatingStylesEN } from './stylesEN';

interface QRatingProps {
  maxRate?: number;
  ratingLabel?: string | number;
  rate?: number;
  size?: 'small' | 'medium' | 'large';
  noContainer?: boolean;
  onChange?: any;
  precision?: number;
}

/**
 * QR
 *ating
 *
 * A component that allows the user to insert texts and search.
 *
 * @param PaperHeight - optional property that modifies the height of material ui Paper component"/".
 * @param PaperWidth - optional property that modifies the width of a material ui Paper component "/".
 * @param radius - optional property that modifies the radius of an input component "/".
 * @param onClick - optional property that adds onClick function to components "/".
 * @param buttonTag - optional property that adds and customizes tags on buttons "/".
 * @param placeHolderText - optional property that can add & customize placeholder texts "/".
 *
 */

const QRating = ({
  maxRate,
  ratingLabel,
  rate,
  size,
  noContainer,
  onChange,
  precision
}: QRatingProps) => {
  const style = useQRatingStylesEN();
  return (
    <div className={`${noContainer}? ${style.noContainer}: ${style.conatiner}`}>
      {/* // FIXME: Add Rate Number */}
      <div style={{ marginLeft: -6 }}>
        <Rating
          max={maxRate}
          readOnly={!noContainer ? true : false}
          size={size ?? 'small'}
          precision={precision ?? 0.1}
          value={rate}
          onChange={onChange}
        />
      </div>
      <div style={{ marginLeft: 4, marginTop: 0 }}>
        <QText
          label={ratingLabel}
          textProps={{ classes: { root: style.label } }}
        />
      </div>
    </div>
  );
};

export default QRating;
