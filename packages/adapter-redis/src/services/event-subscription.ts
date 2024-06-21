import { EventSubscription } from '#shared/services/event-subscription';

export class RedisEventSubscription<
  TType = string
> extends EventSubscription<TType> {
  constructor(public override readonly type: TType) {
    super(type);
  }

  override off(): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
