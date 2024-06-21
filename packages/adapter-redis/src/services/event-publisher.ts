import { ApplicationEvent } from '#shared/models/application-event';
import { EventPublisher } from '#shared/services/event-publisher';

export class RedisEventPublisher extends EventPublisher {
  constructor() {
    super();
  }

  async publish<T extends ApplicationEvent>(event: T): Promise<void> {
    return Promise.resolve();
  }
}
