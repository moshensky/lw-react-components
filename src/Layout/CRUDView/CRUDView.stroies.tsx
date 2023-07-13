// import React from 'react'
// import { action } from '@storybook/addon-actions'
// import { storiesOf } from '@storybook/react'
// import { Nomenclature } from 'redux-store/types'
// import host from 'storybook-host'
// import { setIntlDecorator, themeDecorator } from 'utils/storybook'
// import { some, none } from 'fp-ts/lib/Option'

// const typeMap: { [idx: number]: AutosuggestType } = {
//   0: AutosuggestType.Result,
//   1: AutosuggestType.NormNote,
//   2: AutosuggestType.ResultNote,
// }

// const autosuggestions: ReadonlyArray<Autosuggest> = range(1, 300).map((x) => ({
//   autosuggestId: Guid.of(`guid-${x}`),
//   type: typeMap[x % 3],
//   valuePrimaryLanguage: `primary ${x}`,
//   valueSecondaryLanguage: `primary ${x}`,
// }))

// const autosuggest: Nomenclature<Autosuggest> = {
//   data: autosuggestions,
//   isUpdating: false,
//   map: autosuggestions.reduce((acc, val) => ({ ...acc, [val.autosuggestId]: val }), {}),
//   syncedAt: new Date('2001-01-01T12:12:12Z'),
// }

// storiesOf('custom/Administration/Autosuggestions', module)
//   .addDecorator(themeDecorator)
//   .addDecorator(setIntlDecorator('en'))
//   .addDecorator(host({}))
//   .add('grid', () => (
//     <AutosuggestionsGrid
//       autosuggest={autosuggest}
//       onDelete={action('on delete')}
//       onEdit={action('on edit')}
//     />
//   ))
