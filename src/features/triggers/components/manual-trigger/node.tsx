import { NodeProps } from "@xyflow/react";
import { memo, useState } from "react";
import { BaseTriggerNode } from "../base-trigger-node";
import { MousePointerIcon } from "lucide-react";
import { ManualTriggerDialog } from "./dialog";

export const ManualTriggerNode = memo((props: NodeProps) => {
    const [dialogGroup, setDialogGroup] = useState(false);
    const nodestatus = "initial";
    const handleOpenSettings = () => {
        setDialogGroup(true);
    }
    
    
    
    return (
        <>
            <ManualTriggerDialog
                open={dialogGroup}
                onOpenChange={setDialogGroup}
            />
            <BaseTriggerNode
                {...props}
                icon={MousePointerIcon}
                name="When clicking 'Execute workflow'"
                status={nodestatus}
                onSettings={handleOpenSettings}
                onDoubleClick={handleOpenSettings}
            />
        </>
    )
})