import { storiesOf } from '@storybook/react'
import React from 'react'
import { setIntlDecorator, themeDecorator, storeDecorator } from 'utils/storybook'
import { Navbar, Props } from './Navbar'
import { m } from 'components/appViews/AppBar/AppBarMessages'
import { appRoute } from 'appRoutes'
import { action } from '@storybook/addon-actions'
import {
  mdiBookOpenVariant,
  mdiCalendarMonth,
  mdiChartBar,
  mdiCog,
  mdiCogs,
  mdiViewListOutline,
} from '@mdi/js'
import { NavMenuItem } from './types'
import { notifications } from '../Notifications/Notifications.stories'

const mainNav: ReadonlyArray<NavMenuItem> = [
  { path: appRoute.journal, icon: mdiBookOpenVariant, label: m.journal },
  { path: appRoute.requests, icon: mdiCalendarMonth, label: m.request },
  { path: appRoute.tasks, icon: mdiViewListOutline, label: m.tasks },
  // { path: appRoute.samplingProtocols, faIcon: 'fa-eyedropper', label: m.sampling},
  { path: appRoute.reporting, icon: mdiChartBar, label: m.reporting },
  { path: appRoute.administration, icon: mdiCogs, label: m.administration },
]

const baseProps: Props = {
  brand: (
    <img
      src="assets/images/logo-limsnow.svg"
      width="30"
      height="30"
      className="inline-block align-top"
      alt="LIMS NOW"
    />
  ),
  menuItems: mainNav,
  currentPath: appRoute.requests,
  userName: 'Nikita Moshensky',
  userProfileMenu: [{ path: appRoute.user, icon: mdiCog, label: m.yourProfile }],
  notifications: [],
  onDismissNotification: action('onDismissNotification'),
  onLogout: action('onLogout'),
}

storiesOf('common/Navbar', module)
  .addDecorator(storeDecorator)
  .addDecorator(themeDecorator)
  .addDecorator(setIntlDecorator('en'))
  .add('desktop', () => <Navbar {...baseProps} />)
  .add('with search bar', () => <Navbar {...baseProps} onSearch={action('onSearch')} />)
  .add('with notifications', () => <Navbar {...baseProps} notifications={notifications} />)
  .add('with read only notifications', () => (
    <Navbar {...baseProps} notifications={notifications.filter((x) => x.read)} />
  ))
  .add('mobile', () => <Navbar {...baseProps} />, {
    viewport: {
      defaultViewport: 'mobile1',
    },
  })
