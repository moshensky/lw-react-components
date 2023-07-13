import { subWeeks } from 'date-fns'

export type TechnicalToolData = {
  calibrationCertificates: ReadonlyArray<{
    id: string
    certificateNumber: string
    isActive: boolean
    measurementDeviations: ReadonlyArray<{
      order: number
      deviation: number
    }>
  }>
}

export type TechnicalToolModel = {
  technicalToolId: string
  description: string
  inventoryNumber: string
  measurementUnitId: string
  isAccredited: boolean
  isActive: boolean
  data: TechnicalToolData
}

export type FetchTechnicalToolsWorkLoadReportPayload = Readonly<{
  fromDate: Date
  toDate: Date
  technicalToolIds: ReadonlyArray<string>
}>

export const workLoadReportingFilter: FetchTechnicalToolsWorkLoadReportPayload = {
  fromDate: subWeeks(new Date(), 1),
  toDate: new Date(),
  technicalToolIds: [],
}
