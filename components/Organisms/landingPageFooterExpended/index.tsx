import { Grid } from '@mui/material';
import FormWrapper from 'components/Atoms/formWrapper';
import Toast from 'components/Atoms/toast';
import React, { KeyboardEvent, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userFeedback } from 'redux/Action/user/userActions';
import { RootState } from 'redux/Reducer/root';
import { useLoadPage } from 'utilities/hook/useLoadPage';
import { useParser } from 'utilities/hook/useParser';
import { useValidation } from 'utilities/hook/useValidation';
import { Branding } from '../../../utilities/branding';
import QButton from '../../Atoms/button';
import { InputFieldFill } from '../../Atoms/inputField';
import TextButton from '../../Atoms/textButton';
import GridHeader from '../../Molecules/gridHeader';
import { useLandingPageFooterExpendedStylesEN } from './styleEN';

const LandingPageFooterExpended = () => {
  const styles = useLandingPageFooterExpendedStylesEN();
  const dispatch = useDispatch();
  const { parserData } = useParser();
  const [showToast, setShowToast] = useState(false);

  const feedbackSuccess = useSelector(
    (state: RootState) => state.user.feedback
  );

  const [userFeedBack, setUserFeedBack] = useState({
    email: { value: '', notValid: false },
    feedback: ''
  });
  const { validation, emailValidationSchema } = useValidation();

  useEffect(() => {
    if (feedbackSuccess) {
      setUserFeedBack({
        email: { value: '', notValid: false },
        feedback: ''
      });
      setShowToast(true);
    }
    setTimeout(() => {
      setShowToast(false);
    }, 1000);
  }, [feedbackSuccess]);

  const emailHandler = async (e: any) => {
    const value = e.target.value;
    const validValue = await validation(emailValidationSchema, value, 'email');
    if (validValue) {
      setUserFeedBack({
        ...userFeedBack,
        email: {
          value,
          notValid: false
        }
      });
    } else {
      setUserFeedBack({
        ...userFeedBack,
        email: {
          value,
          notValid: true
        }
      });
    }
  };
  return (
    <>
      {showToast && (
        <div style={{ position: 'absolute', right: 100, width: 500 }}>
          <Toast text="Feedback Sent Successfully" />
        </div>
      )}
      <Grid container className={styles.container}>
        <Grid item xs={7}>
          <GridHeader label="Navigate Hollyoud" col={12} />
          <Grid container>
            {/* <Grid item xs={4}>
              <TextButton
                label="Explore Qloud City "
                labelColor={Branding.Colors.black[48]}
              />
              <TextButton
                label="About Us "
                labelColor={Branding.Colors.black[48]}
              />
              <TextButton
                label="Qloud Homes "
                labelColor={Branding.Colors.black[48]}
              />
              <TextButton
                label="Qloud Estate"
                labelColor={Branding.Colors.black[48]}
              />
            </Grid> */}
            <Grid item xs={8}>
              <TextButton
                hrefLink="./terms-and-conditions"
                label="Terms and Conditions  "
                labelColor={Branding.Colors.black[48]}
              />
              <TextButton
                hrefLink="./privacy-policy"
                label="Privacy Statement "
                labelColor={Branding.Colors.black[48]}
              />
              {/* <TextButton
                label="Sitemap  "
                labelColor={Branding.Colors.black[48]}
              /> */}
            </Grid>
          </Grid>
        </Grid>
        <Grid container xs={5}>
          <GridHeader label="Share your feedback " col={12} />

          <Grid container spacing={2}>
            <Grid item xs={12}>
              <FormWrapper
                formStyle={styles.form}
                error={userFeedBack.email.notValid}
                errorMessage="email not valid"
              >
                <InputFieldFill
                  labelStyle={styles.label}
                  placeholder="Type your email here…"
                  label="EMAIL"
                  fieldFillProps={{
                    value: userFeedBack.email.value,
                    onChange: e =>
                      setUserFeedBack({
                        ...userFeedBack,
                        email: {
                          ...userFeedBack.email,
                          value: e.target.value
                        }
                      }),
                    onBlur: e => emailHandler(e),
                    onKeyPress: (e: KeyboardEvent<HTMLDivElement>) => {
                      if (e.key === 'Enter') {
                        emailHandler(e);
                      }
                    },
                    multiline: false
                  }}
                />
              </FormWrapper>
            </Grid>
            <Grid item xs={12}>
              <InputFieldFill
                labelStyle={styles.label}
                placeholder="If you have any questions, suggestions or feedback feel free to share it with us."
                rows={4}
                label="FEEDBACK"
                fieldFillProps={{
                  onChange: e =>
                    setUserFeedBack({
                      ...userFeedBack,
                      feedback: e.target.value
                    }),
                  value: userFeedBack.feedback
                }}
              />
            </Grid>
            <Grid
              item
              xs={12}
              style={{ display: 'flex', justifyContent: 'flex-end' }}
            >
              <QButton
                label="submit"
                style={{
                  width: 160,
                  borderRadius: 12
                  // backgroundColor: Branding.Colors.primary.normal
                }}
                buttonProps={{
                  disabled:
                    !userFeedBack.feedback.length || userFeedBack.email.notValid
                }}
                onClick={() => {
                  dispatch(
                    userFeedback(
                      {
                        email: userFeedBack.email.value,
                        feedback: userFeedBack.feedback
                      },
                      parserData
                    )
                  );
                }}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default LandingPageFooterExpended;
