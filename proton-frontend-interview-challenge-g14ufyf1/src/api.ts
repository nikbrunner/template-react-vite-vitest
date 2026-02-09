const DETERMINISTIC_MOCK_RESPONSE_STATUS_CACHE = new Map<string, number>();

/**
 * Options for `mockCallAPI`.
 */
export type MockCallAPIOptions = {
  /**
   * AbortSignal to cancel the request.
   */
  signal?: AbortSignal;
};

/**
 * Simulates an HTTP API call.
 */
export function mockCallAPI(
  /**
   * Any number of string inputs.
   */
  inputs: string[],
  /**
   * Optional options object.
   */
  options: MockCallAPIOptions = {}
): Promise<{ status: number }> {
  const { signal } = options;
  return new Promise((resolve, reject) => {
    if (signal?.aborted) {
      reject(new DOMException('Aborted', 'AbortError'));
      return;
    }

    const delay = Math.random() * 3000;

    const key = inputs.join('|%|');
    const cachedStatus = DETERMINISTIC_MOCK_RESPONSE_STATUS_CACHE.get(key);
    if (cachedStatus) return { status: cachedStatus };

    const successRate = Math.random();

    const timeoutId = setTimeout(() => {
      if (successRate <= 0.5) {
        resolve({ status: 200 });
        DETERMINISTIC_MOCK_RESPONSE_STATUS_CACHE.set(key, 200);
      } else {
        const errorCodes = [400, 500, 501, 503];
        const randomErrorCode =
          errorCodes[Math.floor(Math.random() * errorCodes.length)];
        resolve({ status: randomErrorCode });
        DETERMINISTIC_MOCK_RESPONSE_STATUS_CACHE.set(key, randomErrorCode);
      }
    }, delay);

    if (signal) {
      signal.addEventListener('abort', () => {
        clearTimeout(timeoutId);
        reject(new DOMException('Aborted', 'AbortError'));
      });
    }
  });
}
