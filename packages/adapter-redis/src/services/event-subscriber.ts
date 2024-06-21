import { ApplicationEvent } from '#shared/models/application-event';
import {
  EventSubscriber,
  EventSubscriptionCallback,
} from '#shared/services/event-subscriber';
import { EventSubscription } from '#shared/services/event-subscription';

export class RedisEventSubscriber extends EventSubscriber {
  async subscribe<TType extends string, TEvent extends ApplicationEvent>(
    type: TType,
    callback: EventSubscriptionCallback<TEvent>
  ): Promise<EventSubscription<TType>> {}
}
