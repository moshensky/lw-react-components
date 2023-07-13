import { storiesOf } from '@storybook/react'
import React from 'react'
import host from 'storybook-host'
import { setIntlDecorator, themeDecorator } from 'utils/storybook'
import { Container } from './Container'
import { MainContent } from './MainContent'
import { MainHead } from './MainHead'

storiesOf('common/Layout', module)
  .addDecorator(themeDecorator)
  .addDecorator(setIntlDecorator('en'))
  .addDecorator(host({ width: 650, height: 400 }))
  .add('default', () => (
    <Container>
      <MainHead title="Title">main head children</MainHead>
      <MainContent>main content children</MainContent>
    </Container>
  ))
  .add('default loading', () => (
    <Container>
      <MainHead title="Title">main head children</MainHead>
      <MainContent loading>main content children</MainContent>
    </Container>
  ))
  .add('MainHead', () => <MainHead title="Sample title"></MainHead>)
