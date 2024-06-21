import { ApplicationEvent } from '../models/application-event';
import { EventSubscription } from './event-subscription';

export type EventSubscriptionCallback<T extends ApplicationEvent> = (
  event: T
) => Promise<void>;

export abstract class EventSubscriber {
  /**
   * Subscribe to event
   * @param type Type of event to subscribe to
   * @param callback Callback to be called when an event is received
   */
  abstract subscribe<TType extends string, TEvent extends ApplicationEvent>(
    type: TType,
    callback: EventSubscriptionCallback<TEvent>
  ): Promise<EventSubscription<TType>>;
}
