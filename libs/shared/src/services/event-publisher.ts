import { ApplicationEvent } from '../models/application-event';

export abstract class EventPublisher {
  /**
   * Publish one or more events
   * @param events Event(s) to publish
   */
  abstract publish(...events: Array<ApplicationEvent>): Promise<void>;
}
