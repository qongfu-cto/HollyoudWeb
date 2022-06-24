import { Branding } from 'utilities/branding';

export const inputCodeProps = {
  inputStyle: {
    fontFamily: 'monospace',
    // MozAppearance: 'textfield',
    borderRadius: '6px',
    border: `1px solid ${Branding.Colors.black[16]}`,
    // boxShadow: '0px 0px 10px 0px rgba(0,0,0,.10)',
    margin: '4px',
    paddingLeft: '8px',
    paddingRight: 0,
    width: '36px',
    height: '42px',
    fontSize: '32px',
    // boxSizing: 'border-box',
    backgroundColor: `${Branding.Colors.offWhite}`,
    color: Branding.Colors.black[100]
  },
  inputFocusStyle: {
    fontFamily: 'monospace',
    // MozAppearance: 'textfield',
    borderRadius: '6px',
    // boxShadow: '0px 0px 10px 0px rgba(0,0,0,.10)',
    margin: '4px',
    paddingLeft: '8px',
    paddingRight: 0,
    width: '36px',
    height: '42px',
    fontSize: '32px',
    // boxSizing: 'border-box',
    backgroundColor: `${Branding.Colors.offWhite}`,
    color: Branding.Colors.black[100],
    border: `1px solid ${Branding.Colors.black[60]}`
  },
  inputStyleInvalid: {
    fontFamily: 'monospace',
    // MozAppearance: 'textfield',
    borderRadius: '6px',
    border: `1px solid ${Branding.Colors.black[16]}`,
    // boxShadow: '0px 0px 10px 0px rgba(0,0,0,.10)',
    margin: '4px',
    paddingLeft: '8px',
    paddingRight: 0,
    width: '36px',
    height: '42px',
    fontSize: '32px',
    // boxSizing: 'border-box',
    backgroundColor: `${Branding.Colors.offWhite}`,
    color: Branding.Colors.danger.bright
  }
};
