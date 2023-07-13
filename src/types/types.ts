export type UXSemanticType =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'danger'
  | 'warning'
  | 'info'
  | 'light'
  | 'dark'

export type BackgroundStyle = 'outline' | 'fill'

export type ComponentSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

export type ActionState = 'active' | 'disabled' | 'none'

export type MessageType = 'success' | 'info' | 'warning' | 'danger'

type SelectOption = Readonly<{
  value: string
  label: React.ReactNode
}>
export type SelectOptions = ReadonlyArray<SelectOption>

export enum GUIDTag {}
// TODO: uncomment. This breaks type inheritance in actions.
// export type Guid = string & GUIDTag
export type Guid = string
export const Guid = {
  of: (value: string) => value as Guid,
}
