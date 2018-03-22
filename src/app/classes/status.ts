export enum StatusEnum {
  ACCEPTED, // 1 ==basic request is accepted and user is asked to fill the form
  CONFIRMED, // 2 == user is given the full details
  REJECTED, // 3 == request is rejected
  NOT_CONSIDERED // 0 == request is not been reviewed by official
}

export interface StatusOfRequest {
  status: StatusEnum;
  message?: string;
}
