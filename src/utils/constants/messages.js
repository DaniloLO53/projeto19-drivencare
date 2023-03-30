export default {
  CONTINUE: "Your request has been received and we are continuing to process it.",
  SWITCHING_PROTOCOLS: "We are switching protocols to accommodate your request.",
  PROCESSING: "Your request is being processed, please wait a moment.",
  EARLY_HINTS: "We are providing early hints for your request.",
  OK: "Your request was successful!",
  CREATED: "Your request has been fulfilled and a new resource has been created.",
  ACCEPTED: "Your request has been accepted and is being processed.",
  NON_AUTHORITATIVE_INFORMATION:
    "The information you requested is not authoritative, but it is accurate.",
  NO_CONTENT: "Your request was successful, but there is no content to send back.",
  RESET_CONTENT:
    "Your request has been successfully processed and the content has been reset.",
  PARTIAL_CONTENT:
    "Your request was successful, but only a partial response has been sent back.",
  MULTI_STATUS: "Your request has returned multiple responses.",
  ALREADY_REPORTED: "Your request has already been reported.",
  IM_USED:
    "Your request has been successfully processed and the server has returned an IM response.",
  MULTIPLE_CHOICES:
    "Your request has multiple possible responses, and we need more information to determine the best one.",
  MOVED_PERMANENTLY: "The resource you requested has been permanently moved.",
  FOUND: "The resource you requested has been temporarily moved.",
  SEE_OTHER: "Your request has been redirected to a different URL.",
  NOT_MODIFIED: "Your request has not been modified since the last time you accessed it.",
  USE_PROXY: "Your request must be sent through a proxy.",
  TEMPORARY_REDIRECT: "Your request has been temporarily redirected to a different URL.",
  PERMANENT_REDIRECT: "Your request has been permanently redirected to a different URL.",
  BAD_REQUEST: "There was an error with your request. Please try again.",
  UNAUTHORIZED: "You are not authorized to access this resource. Please log in.",
  PAYMENT_REQUIRED: "Payment is required to access this resource.",
  FORBIDDEN: "You do not have permission to access this resource.",
  NOT_FOUND: "The resource you requested could not be found.",
  METHOD_NOT_ALLOWED: "The method you used to access this resource is not allowed.",
  NOT_ACCEPTABLE:
    "The resource you requested is not available in a format that can be served.",
  PROXY_AUTHENTICATION_REQUIRED:
    "You must be authenticated through a proxy to access this resource.",
  REQUEST_TIMEOUT: "Your request timed out. Please try again later.",
  CONFLICT: "There was a conflict processing your request. Please try again.",
  GONE: "The resource you requested is no longer available.",
  LENGTH_REQUIRED: "The length of your request is required to access this resource.",
  PRECONDITION_FAILED: "The precondition of your request was not met. Please try again.",
  PAYLOAD_TOO_LARGE: "The payload of your request is too large to be processed.",
  URI_TOO_LONG: "The URI of your request is too long to be processed.",
  UNSUPPORTED_MEDIA_TYPE: "The media type of your request is not supported.",
  RANGE_NOT_SATISFIABLE: "The range of your request cannot be satisfied.",
  EXPECTATION_FAILED:
    "The expectation of your request cannot be satisfied. Please try again.",
  IM_A_TEAPOT:
    "I am a teapot. The requested entity is not capable of producing coffee or tea.",
  MISDIRECTED_REQUEST:
    "The request was directed at a server that is not able to produce a response.",
  UNPROCESSABLE_ENTITY:
    "The server cannot process the request because it is semantically incorrect or syntactically malformed.",
  LOCKED: "The resource that is being accessed is locked.",
  FAILED_DEPENDENCY:
    "The requested resource depends on another resource that has failed.",
  TOO_EARLY: "The request was too early for the server to respond.",
  UPGRADE_REQUIRED:
    "The client should switch to a different protocol such as TLS/1.0, given in the Upgrade header field.",
  PRECONDITION_REQUIRED: "The origin server requires the request to be conditional.",
  TOO_MANY_REQUESTS: "The user has sent too many requests in a given amount of time.",
  REQUEST_HEADER_FIELDS_TOO_LARGE:
    "The server is unwilling to process the request because its header fields are too large.",
  UNAVAILABLE_FOR_LEGAL_REASONS:
    "The server is denying access to the resource as a consequence of a legal demand.",
  INTERNAL_SERVER_ERROR:
    "The server encountered an unexpected condition that prevented it from fulfilling the request.",
  NOT_IMPLEMENTED:
    "The server does not support the functionality required to fulfill the request.",
  BAD_GATEWAY:
    "The server, while acting as a gateway or proxy, received an invalid response from the upstream server it accessed.",
  SERVICE_UNAVAILABLE:
    "The server is currently unable to handle the request due to a temporary overload or maintenance of the server.",
  GATEWAY_TIMEOUT:
    "The server, while acting as a gateway or proxy, did not receive a timely response from an upstream server.",
  HTTP_VERSION_NOT_SUPPORTED:
    "The server does not support the HTTP protocol version used in the request.",
  VARIANT_ALSO_NEGOTIATES:
    "The resource is capable of generating only content not acceptable according to the Accept headers sent in the request.",
  INSUFFICIENT_STORAGE:
    "The server is unable to store the representation needed to complete the request.",
  LOOP_DETECTED: "The server detected an infinite loop while processing the request.",
};
