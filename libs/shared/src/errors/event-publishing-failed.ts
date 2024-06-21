import { NotFoundError, RouteNotFoundErrorConstructorOptions } from 'error-lib';

import { ApplicationEvent } from '#shared/models/application-event';

export type EventPublishingFailedErrorConstructionOptions =
  RouteNotFoundErrorConstructorOptions;

export class EventPublishingFailedError<
  TEvent extends ApplicationEvent
> extends NotFoundError {
  constructor(
    public readonly event: TEvent,
    opts?: EventPublishingFailedErrorConstructionOptions
  ) {
    super('Failed to publish the event', {
      code: 'E_EVENT_PUBLISHING_FAILED',
      ...opts,
    });

    Error.captureStackTrace(this, EventPublishingFailedError);
    Object.setPrototypeOf(this, EventPublishingFailedError.prototype);
  }
}
