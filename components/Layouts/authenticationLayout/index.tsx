import React, { useState, useRef } from 'react';
import QButton from '../../Atoms/button';
import AuthenticationInputs from '../../Molecules/authenticationInputs';
import AuthenticationTitle from '../../Molecules/auhenticationTitle';
import { useAuthenticationLayoutStylesEN } from './styleEN';
import CheckBox from '../../Atoms/checkbox';
import { Branding } from '../../../utilities/branding';
import SocialMediaAuthentication from '../../Molecules/socialMediaAuthentication';
import Text from '../../Atoms/text';
import TextButton from '../../Atoms/textButton';
import ShowPasswordIcon from '../../Molecules/showPasswordIcon';
import Toast from '../../Atoms/toast';
import { useValidation } from '../../../utilities/hook/useValidation';
import { useAuthentication } from '../../../container/authentication';
import Loading from '../../Molecules/loading';
import QIcon from 'components/Atoms/icon';
import CloseButton from '../../../assets/icons/web-close-button.svg';
import ModalHeaderAuth from 'components/Molecules/modalHeaderAuth';

import { Button } from '@mui/material';
import { onMobile } from 'utilities/utils';
import CloseIcon from '@mui/icons-material/Close';
import { branding, useBranding } from 'utilities/theme';

interface AuthenticationLayoutProps {
  buttonLabel: string;
  switchLayoutButtonLabel: string;
  switchLayoutButtonLink: string;
  signup?: boolean;
  onClickHandler: () => void;
  terms: React.Dispatch<{ state: boolean; title: string; content: string }>;
  loading: boolean;
  rate?: boolean;
  onCloseButtonClick?: any;
  closeButton?: boolean;
  handleForgot?: any;
  redirectAction?: any;
}

const AuthenticationLayout = ({
  buttonLabel,
  switchLayoutButtonLabel,
  switchLayoutButtonLink,
  signup,
  onClickHandler,
  terms,
  loading,
  rate,
  onCloseButtonClick,
  closeButton,
  handleForgot,
  redirectAction
}: AuthenticationLayoutProps) => {
  const styles = useAuthenticationLayoutStylesEN();
  const [enable, setEnable] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showPdf, setShowPdf] = useState(false);
  const [boxChecked, setBoxChecked] = useState(false);

  // const [showToast, setShowToast] = useState(false);
  const { error } = useValidation();
  const {
    validateEmailAndPasswordHandler,
    authValid,
    showToast,
    SignUpModalOpenHandler,
    handleGoogleLogin
  } = useAuthentication();

  const condition = signup
    ? authValid.email.state && authValid.password.state
    : authValid.email.state && authValid.password.state;

  const containerRef = useRef(null);

  return (
    <div className={[styles.center, onMobile() && styles.mobile].join(' ')}>
      {/* {showPdf && (
        <ModalHeaderAuth
          title={''}
          closeButton
          onCloseButtonClick={async () => {
            setShowPdf(false);
            console.log(containerRef);
            const PSPDFKit = await import('pspdfkit');
            // unload the mounted PSPDFKit
            // @ts-ignore
            PSPDFKit && PSPDFKit.unload(containerRef.current);
            // containerRef.current = null;
          }}
        />
      )} */}
      <div
        ref={containerRef}
        style={{ height: showPdf ? '510px' : 0, width: showPdf ? '100%' : 0 }}
      />
      {rate && (
        <div
          className={[
            styles.space,
            styles.mb,
            !onMobile() && styles.pAround
          ].join(' ')}
        >
          <div className={styles.row}>
            <Text
              label={!signup ? 'No account yet?' : 'Already have an account?'}
              labelStyle={{
                fontSize: 14,
                marginRight: 2,
                color: Branding.Colors.grey
              }}
            />

            <Button
              onClick={redirectAction}
              variant="text"
              style={{
                backgroundColor: 'transparent',
                color: Branding.Colors.primary.normal,
                height: 24
              }}
            >
              <p className={styles.label}>
                {` ${switchLayoutButtonLabel} here`}
              </p>
            </Button>
          </div>
          {closeButton && (
            <div>
              <QIcon source={CloseButton} click={onCloseButtonClick} />
              {/* <CloseIcon
                className={styles.close}
                onClick={onCloseButtonClick}
              /> */}
            </div>
          )}
        </div>
      )}
      <div className={`${rate ? styles.simpleContainer : styles.container}`}>
        <AuthenticationTitle
          labelLeft={signup ? 'Join' : 'Welcome'}
          labelRight={signup ? 'Today' : 'Back'}
          showImage={signup}
        />
        {showToast.state && (
          <Toast text={showToast.message} error margin={`10px 0 0 0`} />
        )}
        <AuthenticationInputs
          inputType="email"
          label="EMAIL"
          placeholder="Type your email here..."
          error={error.email.state}
          errorMessage={error.email.message}
          onSubmit={e => validateEmailAndPasswordHandler(e, 'email')}
          onChangeText={() => {}}
          inputValue={authValid.email.value}
          email
        />
        <AuthenticationInputs
          inputType={showPassword ? 'text' : 'password'}
          label="PASSWORD"
          placeholder="Type your password here..."
          error={error.password.state}
          errorMessage={error.password.message}
          onChangeText={text => {
            text.length > 0 ? setEnable(true) : setEnable(false);
          }}
          endIcon={
            <ShowPasswordIcon
              enable={enable}
              showPassword={setShowPassword}
              show={showPassword}
            />
          }
          onSubmit={e => validateEmailAndPasswordHandler(e, 'password')}
        />
        <div className={styles.sectionContainer}>
          {signup && (
            <p className={styles.mb16}>
              By signing up, you agree to our
              <a
                className={styles.link}
                onClick={() => {
                  // (async function() {
                  //   const PSPDFKit = await import('pspdfkit');
                    // Hide the first annotation on page 0.
                    // const annotations = await PSPDFKit.getAnnotations(0);
                    // const annotation = annotations.first();
                    // instance.update(annotation.set("noView", true));
                    // @ts-ignore
                  //   const instance = await PSPDFKit.load({
                  //     container: containerRef.current,
                  //     document: '/termsConditions.pdf',
                  //     baseUrl: `${window.location.protocol}//${window.location.host}/`
                  //   });
                  // })();

                  setShowPdf(true);
                }}
              >
                {`Terms & Conditions`}
              </a>{' '}
              and acknowledge that you read our
              <a
                className={styles.link}
                // onClick={() => {
                //   (async function() {
                //     const PSPDFKit = await import('pspdfkit');
                //     // @ts-ignore
                //     const instance = await PSPDFKit.load({
                //       container: containerRef.current,
                //       document: '/privacyPolicy.pdf',
                //       baseUrl: `${window.location.protocol}//${window.location.host}/`
                //     });
                //   })();

                //   setShowPdf(true);
                // }}
              >
                {' '}
                Privacy Policy
              </a>
              .
            </p>
            // <CheckBox
            //   checkBoxHandler={e => setBoxChecked(e.target.checked)}
            //   labelFontSize={12}
            //   labelColor={Branding.Colors.black[100]}
            //   checkboxColor={Branding.Colors.success.normal}
            //   label={
            //     <p>
            //       By signing up, you agree to our
            //       <a
            //         className={styles.link}
            //         onClick={() => {
            //           SignUpModalOpenHandler(),
            //             terms({
            //               state: true,
            //               title: '  Terms & Conditions',
            //               content: ''
            //             });
            //         }}
            //       >
            //         {`Terms & Conditions`}
            //       </a>{' '}
            //       and acknowledge that you read our
            //       <a
            //         className={styles.link}
            //         onClick={() => {
            //           SignUpModalOpenHandler(),
            //             terms({
            //               state: true,
            //               title: '  Private Policy',
            //               content: ''
            //             });
            //         }}
            //       >
            //         {' '}
            //         Private Policy
            //       </a>
            //       .
            //       {/* I hereby agree with the{' '}
            //       <a
            //         className={styles.link}
            //         onClick={() => {
            //           SignUpModalOpenHandler(),
            //             terms({
            //               state: true,
            //               title: '  Terms & Conditions',
            //               content: ''
            //             });
            //         }}
            //       >
            //         {`Terms & Conditions`}
            //       </a>{' '}
            //       and the
            //       <a
            //         className={styles.link}
            //         onClick={() => {
            //           SignUpModalOpenHandler(),
            //             terms({
            //               state: true,
            //               title: '  Private Policy',
            //               content: ''
            //             });
            //         }}
            //       >
            //         {' '}
            //         Private Policy
            //       </a>{' '}
            //       as defined by QloudCity. */}
            //     </p>
            //   }
            // />
          )}

          {rate && !signup && (
            <Button
              onClick={handleForgot}
              variant="text"
              style={{
                // backgroundColor: Branding.Colors.black[4],
                color: Branding.Colors.primary.normal,
                width: 208,
                height: 46,
                borderRadius: 12,
                marginBottom: 15
              }}
              sx={{
                '&:hover': {
                  color: Branding.Colors.primary.normal,
                  backgroundColor: 'transparent'
                }
              }}
            >
              <p className={styles.label}>Forgot Password</p>
            </Button>
          )}

          {loading ? (
            <Loading />
          ) : (
            <QButton
              btnWidth={212}
              btnHeight={48}
              style={{
                //  ,
                borderRadius: 12
              }}
              label={buttonLabel}
              onClick={onClickHandler}
              buttonProps={{
                // style: { margin: `20px 0px 0px 0px ` },

                type: 'submit',
                disabled: !condition
              }}
            />
          )}

          <SocialMediaAuthentication
            dividerLabel={signup ? 'signup' : 'login'}
            handleGoogleLogin={handleGoogleLogin}
          />
          {!rate && (
            <div className={styles.lineContainer}>
              <Text
                label={signup ? 'Already a citizen? ' : 'Not yet a citizen?'}
              />
              <TextButton
                label={` ${switchLayoutButtonLabel} here`}
                underline
                hrefLink={switchLayoutButtonLink}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthenticationLayout;

// cp -R ./node_modules/@pdftron/webviewer/public ./public/lib
