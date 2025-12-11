import withLoadingSkeleton from "../../hoc/withLoadingSkeleton";
import GitHubRepoGrid from "./GitHubRepoGrid";
import GitHubSkeletonGrid from "./GitHubSkeletonGrid";

export default withLoadingSkeleton(GitHubRepoGrid, GitHubSkeletonGrid);
