export enum StatusEnum {
  ACCEPTED,
  REJECTED,
  NOT_CONSIDERED
}

export interface StatusOfRequest {
  isAccepted?: StatusEnum;
  message?: string;
}
