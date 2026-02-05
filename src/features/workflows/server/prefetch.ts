import type { inferInput } from "@trpc/tanstack-react-query";
import { prefetch, trpc } from "@/trpc/server";
import { Input } from "@/components/ui/input";

type Input = inferInput<typeof trpc.workflows.getMany>

/**
 * Prefetch all workflows
 */

export const prefetchWorkflows = (params: Input) => {
    return prefetch(trpc.workflows.getMany.queryOptions(params));
}

/**
 * Prefetch a single workflows
 */

export const prefetchWorkflow = (id: string) => {
    return prefetch(trpc.workflows.getOne.queryOptions({ id }));
}

