import QButton from '../../Atoms/button';
import Breadcrumb from '../../Atoms/breadcrumbs';
import Text from '../../Atoms/text';
import { Styles } from './style';

interface BreadCrumbHeaderWithButtonProps {
  headerPaths: { label: string; route: string }[];
  headerPathName: string;
  headerTitle: string;
  headerButtonTitle?: string;
  headerCancelTitle?: string;
  onButtonClick?: () => void;
  onButtonCancelClick?: () => void;
  disableButton?: boolean;
  disableCancelButton?: boolean;
  cancel?: boolean;
}

const BreadCrumbHeaderWithButton = ({
  headerButtonTitle,
  headerPathName,
  headerPaths,
  headerTitle,
  onButtonClick,
  cancel,
  headerCancelTitle,
  onButtonCancelClick,
  disableButton,
  disableCancelButton
}: BreadCrumbHeaderWithButtonProps) => {
  const style = Styles();

  return (
    <div className={style.container}>
      <Breadcrumb paths={headerPaths} pageName={headerPathName} />

      <Text label={headerTitle} textProps={{ variant: 'h4' }} />

      {cancel && (
        <QButton
          outline
          label={headerCancelTitle ?? 'Cancel'}
          onClick={onButtonCancelClick}
          btnWidth={300}
          buttonProps={{
            disabled: disableCancelButton,
            classes: { root: style.cancelBtn }
          }}
        />
      )}
      {headerButtonTitle && (
        <QButton
          label={headerButtonTitle}
          onClick={onButtonClick}
          btnWidth={250}
          buttonProps={{
            disabled: disableButton,
            classes: { root: style.btn }
          }}
        />
      )}
    </div>
  );
};

export default BreadCrumbHeaderWithButton;
