import { SwipeableDrawer, Typography } from '@mui/material';
import { style } from '@mui/system';
import TextButton from 'components/Atoms/textButton';
import React from 'react';
import { Branding } from 'utilities/branding';
import { useQBottomDrawerStylesEN } from './styleEN';

interface QBottomDrawer {
  position?: 'left' | 'right' | 'top' | 'bottom';
  openDrawer: boolean;
  onCloseDrawer: VoidFunction;
  onOpenDrawer: VoidFunction;
  children: React.ReactNode;
  onResetClick: VoidFunction;
  applyFilterHandler: VoidFunction;
}

function QBottomDrawer({
  position,
  openDrawer,
  onCloseDrawer,
  onOpenDrawer,
  children,
  onResetClick,
  applyFilterHandler
}: QBottomDrawer) {
  const style = useQBottomDrawerStylesEN();
  return (
		<React.Fragment>
			<SwipeableDrawer
				anchor={position ?? 'bottom'}
				open={openDrawer}
				onClose={onCloseDrawer}
				onOpen={onOpenDrawer}
				disableDiscovery
				disableSwipeToOpen
			>
				<div style={{ backgroundColor: 'grey' }}>
					<div className={style.headerContainer}>
						<div style={{ width: 52 }} />
						<Typography variant="h6" className={style.text}>
							Filter
						</Typography>
						<TextButton
							onClick={onResetClick}
							label="Reset"
							labelColor={Branding.Colors.black[60]}
							labelStyles={{
								margin: 5
							}}
						/>
					</div>
					{children}
					<div className={style.footerContainer}>
						<TextButton
							buttonProps={{
								onClick: applyFilterHandler
							}}
							button
							label="Apply Filters"
							style={{
								textTransform: 'none',
								fontSize: 16,
								color: Branding.Colors.primary.normal
							}}
						/>
					</div>
				</div>
			</SwipeableDrawer>
		</React.Fragment>
  );
}

export default QBottomDrawer;
