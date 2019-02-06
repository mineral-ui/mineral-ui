export default function hasDisplayName<P = {}>(
  element: any,
  matcher?: RegExp
): element is React.ReactElement<P> {
  const found =
    element != null && element.type != null && element.type.displayName != null;
  return matcher ? matcher.test(element.type.displayName) : found;
}
