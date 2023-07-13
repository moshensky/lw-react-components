import React from 'react'
import { MessageDescriptor } from 'react-intl'
import { Nomenclature, Loadable } from 'redux-store/types'
import { mc } from 'intl'
import { Container } from './Container'
import * as O from 'fp-ts/lib/Option'
import { flow } from 'fp-ts/lib/function'
import { AnyError } from '@limsnow/core-domain'
import { pipe } from 'fp-ts/lib/function'
import { Progress } from 'components'
import { mdiArrowLeft, mdiPlusThick } from '@mdi/js'

export type OnEdit<T> = (model: T) => void
export type OnDelete<T> = (model: T) => void
type RenderGrid<T> = (props: {
  data: ReadonlyArray<T>
  onEdit: OnEdit<T>
  onDelete: OnDelete<T>
}) => React.ReactNode
type RenderForm<T> = (model: O.Option<T>, onSave: () => void) => React.ReactNode

export function crudFormModel<T, P>(
  onSave: (model: T, isNew: boolean) => void,
  model: Loadable<T, AnyError>,
  Comp: React.FC<{ model: O.Option<T>; onSave: (model: T, isNew: boolean) => void } & P>,
  // @ts-ignore
  props?: P = {},
): RenderForm<unknown> {
  return (x, save) =>
    pipe(
      x,
      O.fold(
        () => <Comp model={O.none} onSave={flow(onSave, save)} {...props} />,
        () =>
          Loadable.isLoaded(model) ? (
            <Comp model={O.some(model.item)} onSave={flow(onSave, save)} {...props} />
          ) : (
            <Progress animated color="info" value={100} className="mb-1" />
          ),
      ),
    )
}

export function crudForm<T, P>(
  onSave: (model: T, isNew: boolean) => void,
  Comp: React.FC<{ model: O.Option<T>; onSave: (model: T, isNew: boolean) => void } & P>,
  // @ts-ignore
  props?: P = {},
): RenderForm<T> {
  return (model, save) => <Comp model={model} onSave={flow(onSave, save)} {...props} />
}

export type Props<T> = Readonly<{
  titleLabel: MessageDescriptor
  createModelLabel: MessageDescriptor
  models: Nomenclature<T>
  modelKey: keyof T
  renderGrid: RenderGrid<T>
  renderForm: RenderForm<T>
  onDelete: OnDelete<T>
  fetchModel?: (model: any) => void
}>

type State<T> =
  | Readonly<{
      type: 'view-all-models'
    }>
  | Readonly<{
      type: 'create-model'
    }>
  | Readonly<{
      type: 'update-model'
      model: T
    }>

export function CRUDView<T>({
  titleLabel,
  createModelLabel,
  models,
  modelKey,
  renderGrid,
  renderForm,
  onDelete,
  fetchModel,
}: Props<T>) {
  const [state, setState] = React.useState<State<T>>({ type: 'view-all-models' })

  const handleOnCreateModel = () => setState({ type: 'create-model' })

  const handleOnBackClick = () => setState({ type: 'view-all-models' })

  const handleOnGridEdit = (model: T) => {
    fetchModel && fetchModel(model)
    setState({ type: 'update-model', model })
  }

  React.useEffect(() => {
    if (state.type === 'update-model') {
      pipe(
        O.fromNullable(models.data.find((x) => x[modelKey] === state.model[modelKey])),
        O.fold(
          () => {
            handleOnBackClick()
          },
          (model) => {
            handleOnGridEdit(model)
          },
        ),
      )
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [models])

  switch (state.type) {
    case 'view-all-models': {
      return (
        <Container
          btnLabel={createModelLabel}
          onClick={handleOnCreateModel}
          titleLabel={titleLabel}
          btnIcon={mdiPlusThick}
          inProgress={models.isUpdating}
          btnSuccess
        >
          {renderGrid({ data: models.data, onEdit: handleOnGridEdit, onDelete })}
        </Container>
      )
    }
    case 'create-model': {
      return (
        <Container
          btnLabel={mc.back}
          onClick={handleOnBackClick}
          titleLabel={titleLabel}
          btnIcon={mdiArrowLeft}
          inProgress={models.isUpdating}
        >
          {renderForm(O.none, handleOnBackClick)}
        </Container>
      )
    }
    case 'update-model': {
      return (
        <Container
          btnLabel={mc.back}
          onClick={handleOnBackClick}
          titleLabel={titleLabel}
          btnIcon={mdiArrowLeft}
          inProgress={models.isUpdating}
        >
          {renderForm(O.some(state.model), handleOnBackClick)}
        </Container>
      )
    }
  }
}
