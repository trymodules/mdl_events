export abstract class EventSubscription<TType = string> {
  constructor(public readonly type: TType) {}

  /**
   * Unsubscribe from event
   */
  abstract off(): Promise<void>;
}
