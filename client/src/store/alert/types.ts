export enum AlertActionType {
  SUCCESS = 'ALERT_SUCCESS',
  ERROR = 'ALERT_ERROR',
  CLEAR = 'Alert_CLEAR',
}

export interface AlertState {
  type: string;
  message: string;
}
