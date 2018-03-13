export enum StatusEnum {
  ACCEPTED, // basic request is accepted and user is asked to fill the form
  CONFIRMED, // user is given the full details
  REJECTED, // request is rejected
  NOT_CONSIDERED // request is not been reviewed by official
}

export interface StatusOfRequest {
  status: StatusEnum;
  message?: string;
}
