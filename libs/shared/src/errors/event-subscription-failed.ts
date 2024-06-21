import { NotFoundError, RouteNotFoundErrorConstructorOptions } from 'error-lib';

import { ApplicationEvent } from '#shared/models/application-event';

export type EventSubscriptionFailedErrorConstructionOptions =
  RouteNotFoundErrorConstructorOptions;

export class EventSubscriptionFailedError<
  TEvent extends ApplicationEvent
> extends NotFoundError {
  constructor(
    public readonly event: TEvent,
    opts?: EventSubscriptionFailedErrorConstructionOptions
  ) {
    super('Failed to subscribe to the event', {
      code: 'E_EVENT_SUBSCRIPTION_FAILED',
      ...opts,
    });

    Error.captureStackTrace(this, EventSubscriptionFailedError);
    Object.setPrototypeOf(this, EventSubscriptionFailedError.prototype);
  }
}
