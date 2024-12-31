import { getQueryClient } from "./get-query-client";
import { homepageQuery } from "./homepageQuery";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { HomepageInfo } from "./homepageInfo";

export default async function Page() {
  const queryClient = getQueryClient();
  void queryClient.prefetchQuery(homepageQuery);
  return <HydrationBoundary state={dehydrate(queryClient)}>
    <HomepageInfo />
  </HydrationBoundary>
}
