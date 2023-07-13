import React from 'react'
import { useDropzone } from 'react-dropzone'
import { FormattedMessage } from 'react-intl'
import cn from 'classnames'
import { m } from './messages'

type Props = {
  invalid?: boolean
  disabled?: boolean
  onDrop: (file: File) => void
}

export function DropImage({ invalid, disabled, onDrop }: Props) {
  const onImageSelected = (accepted: ReadonlyArray<File>) => {
    onDrop(accepted[0])
  }
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: 'image/jpeg, image/png',
    disabled,
    onDrop: onImageSelected,
  })

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
          <FormattedMessage {...m.dropFileHere} />
        </p>
      ) : (
        <>
          <p className="p-2">
            <FormattedMessage {...m.dragAndDropFilesHere} />
          </p>
          <p className="p-2">
            <FormattedMessage {...m.acceptedFileFormats} />
          </p>
        </>
      )}
    </div>
  )
}
