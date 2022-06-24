import React, { forwardRef, useState } from 'react';
import ModalLayout from '../../Atoms/modal';
import ReactCrop, { Crop } from 'react-image-crop';
import QButton from '../../Atoms/button';
import 'react-image-crop/dist/ReactCrop.css';
import { Box } from '@mui/material';
import FilledBotton from 'components/Atoms/filledButton';
import { Styles } from './style';

interface CropImageProps {
  children: React.ReactElement | React.ReactElement[];
  imageResult: React.Dispatch<FormData>;
  container: string;
  sendImages?: boolean;
  circularCrop?: boolean;
}

const CropImage = forwardRef<HTMLInputElement, CropImageProps>(
  (
    {
      children,
      imageResult,
      container,
      sendImages,
      circularCrop = false
    }: CropImageProps,
    ref
  ) => {
    const [crop, setCrop] = useState<Crop>({
      aspect: 9 / 9,
      width: 127,
      height: 127,
      x: 0,
      y: 0,
      unit: 'px'
    });
    const [image, setImage] = useState<HTMLImageElement>();
    const [src, setSrc] = useState<string>();
    const [showModal, setShowModal] = useState(false);
    const style = Styles();
    const handleIconUpload = (event: any) => {
      if (event.target.files && event.target.files.length > 0) {
        setSrc(URL.createObjectURL(event.target.files[0]));
        // let img = new Image();
        // img.src = window.URL.createObjectURL(event.target.files[0]);
        // img.onload = () => {
        //   console.log('screen dimention');
        //   console.log(typeof window);
        //   console.log(window.innerHeight);
        //   console.log(img.width + ' ' + img.height);
        //   console.log(window.innerHeight);
        //   alert(img.width + ' ' + img.height);
        // };
        setShowModal(true);
      } else return;
    };

    const getCroppedImage = () => {
      const canvas = document.createElement('canvas');
      const scaleX = image === undefined ? 0 : image.naturalWidth / image.width;
      const scaleY =
        image === undefined ? 0 : image.naturalHeight / image.height;
      canvas.width = crop.width;
      canvas.height = crop.height;
      const ctx = canvas.getContext('2d');

      // New lines to be added
      const pixelRatio = window.devicePixelRatio;
      canvas.width = crop.width * pixelRatio;
      canvas.height = crop.height * pixelRatio;
      ctx?.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
      // ctx?.imageSmoothingQuality = 'high';

      if (image !== undefined)
        ctx?.drawImage(
          image,
          crop.x * scaleX,
          crop.y * scaleY,
          crop.width * scaleX,
          crop.height * scaleY,
          0,
          0,
          crop.width,
          crop.height
        );

      // const img = canvas.toDataURL("image/jpeg");

      // imageResult(img), setShowModal(false);
      const result = new Promise((resolve, reject) => {
        canvas.toBlob(
          blob => {
            // blob?.name = 'profile.jpg';

            resolve(blob);
          },
          'image/jpeg',
          1
        );
      });
      result.then((value: any) => {
        const formData = new FormData();
        formData.append('avatar', value);
        // formData.append('images', value);

        const anotherformData = new FormData();
        anotherformData.append('images', value);
        console.log('testinggg', formData, value);
        // form.append('avatar', {
        //   uri: value.assets[0].uri,
        //   type: response.assets[0].type,
        //   name: response.assets[0].fileName,
        // });

        //  var url = URL.createObjectURL(value);
        // const img = formData.get("avatar");

        imageResult(sendImages ? anotherformData : formData),
          setShowModal(false);
        // var url = URL.createObjectURL(value);
        // var img = new Image();
        // img.src = url;
        //
      });
    };

    return (
      <div className={container}>
        <input
          ref={ref}
          accept="image/svg"
          type="file"
          style={{ display: 'none' }}
          onChange={handleIconUpload}
          onClick={(event: any) => (event.target.value = '')}
        />
        <label htmlFor="contained-button-file">{children}</label>
        <ModalLayout
          modalHeight={
            typeof window !== 'undefined' ? window.innerHeight / 1.2 : 730
          }
          openModal={showModal}
          layoutPadding={10}
        >
          {/* FIXME: react crop image width */}
          <ReactCrop
            src={src ?? ''}
            crop={crop}
            style={{
              height:
                typeof window !== 'undefined' ? window.innerHeight / 1.38 : 730,
              // display: 'flex',
              // justifyContent: 'center',
              // objectFit: 'contain',
              // alignItems: 'center',
              overflow: 'scroll'
            }}
            // imageStyle={{
            //   height:
            //     typeof window !== 'undefined' ? window.innerHeight / 1.38 : 730,
            //   objectFit: 'fill'
            // }}
            onChange={newCrop => setCrop(newCrop)}
            onImageLoaded={setImage}
            circularCrop={circularCrop}
            //  onComplete={(crops) => console.log(crops)}
          />
          <Box className={style.btnContainer}>
            <FilledBotton
              label={'Cancel'}
              variant="outlined"
              onClick={() => setShowModal(false)}
              labelStyles={style.cancelBtn2}
            />
            <FilledBotton
              label={'Crop'}
              variant="outlined"
              onClick={getCroppedImage}
              labelStyles={style.updateBtn}
            />
          </Box>
          {/* <QButton label="crop" onClick={getCroppedImage} /> */}
        </ModalLayout>
      </div>
    );
  }
);

CropImage.displayName = 'CropImage';

export default CropImage;
