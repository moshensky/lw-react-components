import { storiesOf } from '@storybook/react'
import React from 'react'
import { Card, CardBody, CardFooter, CardHeader } from './Card'

storiesOf('common/Card', module)
  .add('card', () => (
    <Card>
      <CardBody>body</CardBody>
    </Card>
  ))
  .add('card with header', () => (
    <Card>
      <CardHeader>header</CardHeader>
      <CardBody>body</CardBody>
    </Card>
  ))
  .add('card with footer', () => (
    <Card>
      <CardBody>body</CardBody>
      <CardFooter>footer</CardFooter>
    </Card>
  ))
  .add('card with header and footer', () => (
    <Card>
      <CardHeader>header</CardHeader>
      <CardBody>body</CardBody>
      <CardFooter>footer</CardFooter>
    </Card>
  ))
  .add('card with custom padding', () => (
    <Card>
      <CardHeader className="px-4 py-2">header</CardHeader>
      <CardBody className="px-4 py-2">body</CardBody>
      <CardFooter className="px-4 py-2">footer</CardFooter>
    </Card>
  ))
