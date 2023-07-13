import { Guid } from '../types'
import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'
import React from 'react'
import host from 'storybook-host'
import { Avatar } from './Avatar'
import { Comment } from './Comment'
import { Comments } from './Comments'
import { WriteComment } from './WriteComment'
import { WriteCommentStub } from './WriteCommentStub'

const comments: Comments = [
  {
    id: Guid.of('1'),
    name: 'Pesho',
    text: '@Gosho This is still needed, right?',
    createdAt: new Date('2018-01-01:20:20:20Z'),
    updatedAt: null,
  },
  {
    id: Guid.of('2'),
    name: 'Gosho',
    text: 'Could be! Could be not.',
    createdAt: new Date('2018-01-01:20:22:20Z'),
    updatedAt: null,
  },
  {
    id: Guid.of('3'),
    name: 'Long Long Comment And Avatar Name',
    avatar: '../../../assets/images/logo-limsnow.svg',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    createdAt: new Date('2018-07-01:20:22:20Z'),
    updatedAt: null,
  },
]

storiesOf('common/Comments', module)
  .addDecorator(host({}))
  .add('Comments', () => (
    <Comments
      comments={comments}
      name="инж. Никита Мошенский"
      onCreateComment={action('on add comment')}
      onEditComment={action('on edit comment')}
      onDeleteComment={action('on delete comment')}
    />
  ))
  .add('Comments empty', () => (
    <Comments
      comments={[]}
      name="инж. Никита Мошенский"
      onCreateComment={action('on add comment')}
      onEditComment={action('on edit comment')}
      onDeleteComment={action('on delete comment')}
    />
  ))
  .add('Comments updating', () => (
    <Comments
      updating
      comments={comments}
      name="инж. Никита Мошенский"
      onCreateComment={action('on add comment')}
      onEditComment={action('on edit comment')}
      onDeleteComment={action('on delete comment')}
    />
  ))
  .add('Avatar no img', () => <Avatar name="инж. Никита Мошенский" />)
  .add('Avatar img', () => (
    <Avatar name="инж. Никита Мошенский" avatar={'../../../assets/images/logo-limsnow.svg'} />
  ))
  .add('Comment', () => (
    <Comment
      name="Gosho"
      text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      avatar={'../../../assets/images/logo-limsnow.svg'}
      createdAt={new Date('2018-01-01:20:22:20Z')}
      updatedAt={null}
      onEditComment={action('on edit comment')}
      onDeleteComment={action('on delete comment')}
    />
  ))
  .add('Comment short', () => (
    <div style={{ width: 500 }}>
      <Comment
        name="Gosho"
        text="Could be! Could be not."
        createdAt={new Date('2018-01-01:20:22:20Z')}
        updatedAt={null}
        onEditComment={action('on edit comment')}
        onDeleteComment={action('on delete comment')}
      />
    </div>
  ))
  .add('WriteComment', () => (
    <div style={{ width: 500 }} className="card">
      <WriteComment
        defaultValue="test"
        onComment={action('on comment')}
        onCancel={action('on cancel comment')}
      />
    </div>
  ))
  .add('WriteCommentStub', () => (
    <WriteCommentStub
      name="инж. Никита Мошенский"
      avatar={'../../../assets/images/logo-limsnow.svg'}
      onFocus={action('on focus')}
    />
  ))
