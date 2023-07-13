import { Button, isNotEmpty, Tabs, TextArea } from 'components'
import React from 'react'
import { FormattedMessage } from 'react-intl'
import { m } from './comments-messages'

type Props = Readonly<{
  defaultValue?: string
  onComment: (commentText: string) => void
  onCancel: () => void
}>

type State = Readonly<{
  commentText: string
}>

export class WriteComment extends React.Component<Props, State> {
  state: State = {
    commentText: this.props.defaultValue ? this.props.defaultValue : '',
  }

  handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    this.setState({ commentText: event.target.value })
  }

  handleSubmit = () => {
    const { onCancel, onComment } = this.props
    const { commentText } = this.state

    if (isNotEmpty(commentText)) {
      onComment(commentText)
    } else {
      onCancel()
    }
  }

  render() {
    const { onCancel } = this.props
    const { commentText } = this.state

    return (
      <div>
        <Tabs
          tabs={[
            {
              header: <FormattedMessage {...m.write} />,
              content: (
                <div className="p-2">
                  <div>
                    <TextArea
                      value={commentText}
                      autoFocus
                      className="w-full"
                      rows={4}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="flex mt-2 mb-1">
                    <Button
                      onClick={onCancel}
                      className="ml-auto"
                      outline
                      variant="secondary"
                      label={<FormattedMessage {...m.cancel} />}
                    />
                    <Button
                      onClick={this.handleSubmit}
                      className="ml-1"
                      variant="success"
                      label={<FormattedMessage {...m.comment} />}
                    />
                  </div>
                </div>
              ),
            },
          ]}
        />
      </div>
    )
  }
}
