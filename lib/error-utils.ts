export function normalizeError(error: unknown, context: string): Error {
  if (error instanceof Error) {
    return error;
  }

  if (typeof Event !== "undefined" && error instanceof Event) {
    const target = error.target;
    const source =
      target instanceof HTMLImageElement
        ? target.currentSrc || target.src || "unknown image source"
        : target instanceof HTMLScriptElement
          ? target.src || "unknown script source"
          : "unknown event target";

    return new Error(`${context}: ${error.type} event from ${source}`);
  }

  if (typeof ProgressEvent !== "undefined" && error instanceof ProgressEvent) {
    return new Error(`${context}: ${error.type} progress event`);
  }

  if (typeof error === "string") {
    return new Error(`${context}: ${error}`);
  }

  return new Error(`${context}: ${String(error)}`);
}

export function logNormalizedError(error: unknown, context: string): Error {
  const normalizedError = normalizeError(error, context);
  console.error(normalizedError);
  console.log(normalizedError.stack);
  return normalizedError;
}
