import { Button, CalculateRelativeTime, Popover } from 'components'
import React from 'react'
import { FormattedMessage } from 'react-intl'
import { mc } from '../../../intl'
import { FaIcon } from '../FaIcon'
import { Avatar } from './Avatar'
import { mdiDotsHorizontal, mdiLeadPencil, mdiTrashCanOutline } from '@mdi/js'

type Props = Readonly<{
  name: string
  avatar?: string
  text: string
  createdAt: Date
  updatedAt: Date | null
  onEditComment: () => void
  onDeleteComment: () => void
}>

export function Comment({
  name,
  createdAt,
  updatedAt,
  avatar,
  text,
  onEditComment,
  onDeleteComment,
}: Props) {
  return (
    <div className="flex">
      <div className="mr-2">
        <Avatar name={name} avatar={avatar} />
      </div>

      <div className="flex-grow">
        <div className="flex mb-2">
          <strong>{name}</strong>
          <div className="text-gray-500 ml-1">
            <CalculateRelativeTime date={updatedAt ?? createdAt} />
          </div>
          <div className="ml-auto">
            <Popover
              trigger={(show) => (
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault()
                    show()
                  }}
                >
                  <FaIcon icon={mdiDotsHorizontal} />
                </a>
              )}
              body={(hide) => (
                <>
                  <Button
                    variant="danger"
                    outline
                    onClick={() => {
                      onDeleteComment()
                      hide()
                    }}
                    icon={mdiTrashCanOutline}
                    label={<FormattedMessage {...mc.delete} />}
                  />
                  <Button
                    className="ml-1"
                    variant="secondary"
                    outline
                    onClick={() => {
                      onEditComment()
                      hide()
                    }}
                    icon={mdiLeadPencil}
                    label={<FormattedMessage {...mc.edit} />}
                  />
                </>
              )}
            />
          </div>
        </div>
        <div className="w-full">
          <div>{text}</div>
        </div>
      </div>
    </div>
  )
}
