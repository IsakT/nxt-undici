export class UndiciError extends Error {
  constructor(message) {
    super(message)
    this.name = 'UndiciError'
    this.code = 'UND_ERR'
  }
}

export class ConnectTimeoutError extends UndiciError {
  constructor(message) {
    super(message)
    Error.captureStackTrace(this, ConnectTimeoutError)
    this.name = 'ConnectTimeoutError'
    this.message = message || 'Connect Timeout Error'
    this.code = 'UND_ERR_CONNECT_TIMEOUT'
  }
}

export class HeadersTimeoutError extends UndiciError {
  constructor(message) {
    super(message)
    Error.captureStackTrace(this, HeadersTimeoutError)
    this.name = 'HeadersTimeoutError'
    this.message = message || 'Headers Timeout Error'
    this.code = 'UND_ERR_HEADERS_TIMEOUT'
  }
}

export class HeadersOverflowError extends UndiciError {
  constructor(message) {
    super(message)
    Error.captureStackTrace(this, HeadersOverflowError)
    this.name = 'HeadersOverflowError'
    this.message = message || 'Headers Overflow Error'
    this.code = 'UND_ERR_HEADERS_OVERFLOW'
  }
}

export class BodyTimeoutError extends UndiciError {
  constructor(message) {
    super(message)
    Error.captureStackTrace(this, BodyTimeoutError)
    this.name = 'BodyTimeoutError'
    this.message = message || 'Body Timeout Error'
    this.code = 'UND_ERR_BODY_TIMEOUT'
  }
}

export class ResponseStatusCodeError extends UndiciError {
  constructor(message, statusCode, headers, body) {
    super(message)
    Error.captureStackTrace(this, ResponseStatusCodeError)
    this.name = 'ResponseStatusCodeError'
    this.message = message || 'Response Status Code Error'
    this.code = 'UND_ERR_RESPONSE_STATUS_CODE'
    this.body = body
    this.status = statusCode
    this.statusCode = statusCode
    this.headers = headers
  }
}

export class InvalidArgumentError extends UndiciError {
  constructor(message) {
    super(message)
    Error.captureStackTrace(this, InvalidArgumentError)
    this.name = 'InvalidArgumentError'
    this.message = message || 'Invalid Argument Error'
    this.code = 'UND_ERR_INVALID_ARG'
  }
}

export class InvalidReturnValueError extends UndiciError {
  constructor(message) {
    super(message)
    Error.captureStackTrace(this, InvalidReturnValueError)
    this.name = 'InvalidReturnValueError'
    this.message = message || 'Invalid Return Value Error'
    this.code = 'UND_ERR_INVALID_RETURN_VALUE'
  }
}

export class AbortError extends UndiciError {
  constructor(message) {
    super(message)
    Error.captureStackTrace(this, RequestAbortedError)
    this.name = 'AbortError'
    this.message = message || 'The operation was aborted'
  }
}

export class RequestAbortedError extends AbortError {
  constructor(message) {
    super(message)
    Error.captureStackTrace(this, RequestAbortedError)
    this.name = 'AbortError'
    this.message = message || 'Request aborted'
    this.code = 'UND_ERR_ABORTED'
  }
}

export class InformationalError extends UndiciError {
  constructor(message) {
    super(message)
    Error.captureStackTrace(this, InformationalError)
    this.name = 'InformationalError'
    this.message = message || 'Request information'
    this.code = 'UND_ERR_INFO'
  }
}

export class RequestContentLengthMismatchError extends UndiciError {
  constructor(message) {
    super(message)
    Error.captureStackTrace(this, RequestContentLengthMismatchError)
    this.name = 'RequestContentLengthMismatchError'
    this.message = message || 'Request body length does not match content-length header'
    this.code = 'UND_ERR_REQ_CONTENT_LENGTH_MISMATCH'
  }
}

export class ResponseContentLengthMismatchError extends UndiciError {
  constructor(message) {
    super(message)
    Error.captureStackTrace(this, ResponseContentLengthMismatchError)
    this.name = 'ResponseContentLengthMismatchError'
    this.message = message || 'Response body length does not match content-length header'
    this.code = 'UND_ERR_RES_CONTENT_LENGTH_MISMATCH'
  }
}

export class ClientDestroyedError extends UndiciError {
  constructor(message) {
    super(message)
    Error.captureStackTrace(this, ClientDestroyedError)
    this.name = 'ClientDestroyedError'
    this.message = message || 'The client is destroyed'
    this.code = 'UND_ERR_DESTROYED'
  }
}

export class ClientClosedError extends UndiciError {
  constructor(message) {
    super(message)
    Error.captureStackTrace(this, ClientClosedError)
    this.name = 'ClientClosedError'
    this.message = message || 'The client is closed'
    this.code = 'UND_ERR_CLOSED'
  }
}

export class SocketError extends UndiciError {
  constructor(message, socket) {
    super(message)
    Error.captureStackTrace(this, SocketError)
    this.name = 'SocketError'
    this.message = message || 'Socket error'
    this.code = 'UND_ERR_SOCKET'
    this.socket = socket
  }
}

export class NotSupportedError extends UndiciError {
  constructor(message) {
    super(message)
    Error.captureStackTrace(this, NotSupportedError)
    this.name = 'NotSupportedError'
    this.message = message || 'Not supported error'
    this.code = 'UND_ERR_NOT_SUPPORTED'
  }
}

export class BalancedPoolMissingUpstreamError extends UndiciError {
  constructor(message) {
    super(message)
    Error.captureStackTrace(this, NotSupportedError)
    this.name = 'MissingUpstreamError'
    this.message = message || 'No upstream has been added to the BalancedPool'
    this.code = 'UND_ERR_BPL_MISSING_UPSTREAM'
  }
}

export class HTTPParserError extends Error {
  constructor(message, code, data) {
    super(message)
    Error.captureStackTrace(this, HTTPParserError)
    this.name = 'HTTPParserError'
    this.code = code ? `HPE_${code}` : undefined
    this.data = data ? data.toString() : undefined
  }
}

export class ResponseExceededMaxSizeError extends UndiciError {
  constructor(message) {
    super(message)
    Error.captureStackTrace(this, ResponseExceededMaxSizeError)
    this.name = 'ResponseExceededMaxSizeError'
    this.message = message || 'Response content exceeded max size'
    this.code = 'UND_ERR_RES_EXCEEDED_MAX_SIZE'
  }
}

export class RequestRetryError extends UndiciError {
  constructor(message, code, { headers, data }) {
    super(message)
    Error.captureStackTrace(this, RequestRetryError)
    this.name = 'RequestRetryError'
    this.message = message || 'Request retry error'
    this.code = 'UND_ERR_REQ_RETRY'
    this.statusCode = code
    this.data = data
    this.headers = headers
  }
}
