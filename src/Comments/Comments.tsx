import { Guid } from '@limsnow/core-domain'
import classNames from 'classnames'
import React from 'react'
import { FormattedMessage } from 'react-intl'
import { Card, CardBody } from '../Card'
import { Comment } from './Comment'
import { m } from './comments-messages'
import { WriteComment } from './WriteComment'
import { WriteCommentStub } from './WriteCommentStub'

export type Comment = Readonly<{
  id: Guid
  name: string
  createdAt: Date
  updatedAt: Date | null
  avatar?: string
  text: string
}>

export type Comments = ReadonlyArray<Comment>

type Props = Readonly<{
  className?: string
  comments: Comments
  name: string
  avatar?: string
  updating?: boolean
  onCreateComment: (commentText: string) => void
  onEditComment: (commentText: string, commentId: Guid) => void
  onDeleteComment: (commentId: Guid) => void
}>

type State =
  | Readonly<{
      type: 'view'
    }>
  | Readonly<{
      type: 'edit'
      commentId: Guid
    }>
  | Readonly<{
      type: 'create'
    }>

export function Comments({
  className,
  comments,
  avatar,
  name,
  updating,
  onCreateComment,
  onDeleteComment,
  onEditComment,
}: Props) {
  const [state, setState] = React.useState<State>(
    comments.length === 0 ? { type: 'create' } : { type: 'view' },
  )

  const hideCommentEntry = () => setState({ type: 'view' })

  const handleCreateComment = (commentText: string) => {
    onCreateComment(commentText)
    hideCommentEntry()
  }

  const handleUpdateComment = (commentText: string, commentId: Guid) => {
    onEditComment(commentText, commentId)
    hideCommentEntry()
  }

  const handleDeleteComment = (commentId: Guid) => {
    onDeleteComment(commentId)
  }

  const transitionToCreateComment = () => setState({ type: 'create' })

  const transitionToEditComment = (commentId: Guid) => setState({ type: 'edit', commentId })

  return (
    <Card className={classNames(className, { 'lw-loading-mask': updating })}>
      <CardBody className="space-y-4">
        {comments.length === 0 && <FormattedMessage {...m.addComment} />}
        {comments.map((x) =>
          state.type === 'edit' && state.commentId === x.id ? (
            <WriteComment
              key={x.createdAt.toISOString()}
              defaultValue={x.text}
              onComment={(commentText) => handleUpdateComment(commentText, x.id)}
              onCancel={hideCommentEntry}
            />
          ) : (
            <Comment
              key={x.createdAt.toISOString()}
              {...x}
              onDeleteComment={() => handleDeleteComment(x.id)}
              onEditComment={() => transitionToEditComment(x.id)}
            />
          ),
        )}
      </CardBody>

      {state.type === 'create' && (
        <WriteComment onComment={handleCreateComment} onCancel={hideCommentEntry} />
      )}
      {state.type === 'view' && (
        <WriteCommentStub name={name} avatar={avatar} onFocus={transitionToCreateComment} />
      )}
    </Card>
  )
}
