type BaseApplicationEvent<TType = string, TSource = string, TMetadata = any> = {
  /**
   * Event type (e.g. user.created, etc.)
   */
  type: TType;

  /**
   * Time of the event in milliseconds since epoch
   */
  timestamp: number;

  /**
   * Source of the event (e.g. service name, etc.)
   */
  source: TSource;

  /**
   * Hostname of the source of the event
   */
  host?: string;

  /**
   * User who triggered the event
   */
  user?: string;

  /**
   * Metadata associated with the event
   */
  metadata?: TMetadata;
};

type ApplicationEventWithPayload<
  TPayload = any,
  TType = string,
  TSource = string,
  TMetadata = any
> = BaseApplicationEvent<TType, TSource, TMetadata> & {
  /**
   * Event payload
   */
  payload: TPayload;
};

export type ApplicationEvent<
  TPayload = void,
  TType = string,
  TSource = string,
  TMetadata = any
> = TPayload extends void
  ? BaseApplicationEvent<TType, TSource, TMetadata>
  : ApplicationEventWithPayload<TPayload, TType, TSource, TMetadata>;
