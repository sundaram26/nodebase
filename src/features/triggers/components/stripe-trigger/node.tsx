import { NodeProps } from "@xyflow/react";
import { memo, useState } from "react";
import { BaseTriggerNode } from "../base-trigger-node";
import { StripeTriggerDialog } from "./dialog";
import { useNodeStatus } from "@/features/executions/hooks/use-node-status";
import { fetchStripeTriggerRealtimeToken } from "./actions";
import { STRIPE_TRIGGER_CHANNEL_NAME } from "@/inngest/channels/stripe-trigger";

export const StripeTriggerNode = memo((props: NodeProps) => {
    const [dialogGroup, setDialogGroup] = useState(false);
    const nodeStatus = useNodeStatus({
        nodeId: props.id,
        channel: STRIPE_TRIGGER_CHANNEL_NAME,
        topic: "status",
        refreshToken: fetchStripeTriggerRealtimeToken,
    });

    const handleOpenSettings = () => {
        setDialogGroup(true);
    }
        
    return (
        <>
            <StripeTriggerDialog
                open={dialogGroup}
                onOpenChange={setDialogGroup}
            />
            <BaseTriggerNode
                {...props}
                icon="/logos/stripe.svg"
                name="Stripe"
                description="When stripe event is captured"
                status={nodeStatus}
                onSettings={handleOpenSettings}
                onDoubleClick={handleOpenSettings}
            />
        </>
    )
})