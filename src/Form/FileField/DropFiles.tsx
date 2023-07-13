import React from 'react'
import { useDropzone } from 'react-dropzone'
import { FormattedMessage } from 'react-intl'
import cn from 'classnames'
import { m } from './file-field-messages'

type Props = {
  invalid?: boolean
  disabled?: boolean
  onDrop: (files: ReadonlyArray<File>) => void
}

export function DropFiles({ invalid, disabled, onDrop }: Props) {
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ disabled, onDrop })

  return (
    <div
      {...getRootProps()}
      className={cn('h-48 w-48 relative border-2 rounded border-dashed', {
        'border-gray-300': !invalid,
        'border-red-300': invalid,
        'text-gray-900 bg-gray-100': disabled,
      })}
    >
      <input {...getInputProps()} />
      {isDragActive ? (
        <p className="p-2">
          <FormattedMessage {...m.dropFilesHere} />
        </p>
      ) : (
        <p className="p-2">
          <FormattedMessage {...m.dragAndDropFilesHere} />
        </p>
      )}
    </div>
  )
}
