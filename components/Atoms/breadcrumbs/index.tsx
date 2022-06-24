import * as React from 'react';
import { Breadcrumbs, Link, Typography } from '@mui/material';
import { Styles } from './style';
import { Branding } from '../../../utilities/branding';
import { useRouter } from 'next/router';

type BreadcrumbsProps = {
  paths: Array<any>;
  pageName?: string;
  onClick?: VoidFunction;
};

/**
 * Breadcrumb
 *
 * A component that represent the page path
 *
 * @param paths - optional .
 * @param pageName - required.
 * @param labelStyle - optional defaults to component style.
 *
 */

const Breadcrumb = ({ paths, pageName, onClick }: BreadcrumbsProps) => {
  const style = Styles();
  const { push } = useRouter();
  const onCrumbClicked = (route: string) => {
    onClick && onClick();
    push(route);
  };
  return (
    <div role="presentation" style={{ margin: '16px 0px -12px' }}>
      <Breadcrumbs aria-label="breadcrumb" className={style.breadcrumb}>
        {paths.map((path, index) => {
          return (
            <div
              key={index}
              onClick={() => onCrumbClicked(path.route)}
              style={{ cursor: 'pointer' }}
            >
              <Typography color={Branding.Colors.primary.normal}>
                {path.label}
              </Typography>
            </div>
          );
        })}
        <Typography color="text.primary">{pageName}</Typography>
      </Breadcrumbs>
    </div>
  );
};

export default Breadcrumb;
