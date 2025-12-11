export default function withLoadingSkeleton(WrappedComponent, SkeletonComponent) {
  return function WithSkeleton({ isLoading, ...props }) {
    if (isLoading) {
      return <SkeletonComponent />;
    }

    return <WrappedComponent {...props} />;
  };
}
