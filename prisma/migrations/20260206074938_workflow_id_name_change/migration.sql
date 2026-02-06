/*
  Warnings:

  - You are about to drop the column `WorkflowId` on the `Connection` table. All the data in the column will be lost.
  - You are about to drop the column `WorkflowId` on the `Node` table. All the data in the column will be lost.
  - Added the required column `workflowId` to the `Connection` table without a default value. This is not possible if the table is not empty.
  - Added the required column `workflowId` to the `Node` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "public"."Connection" DROP CONSTRAINT "Connection_WorkflowId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Node" DROP CONSTRAINT "Node_WorkflowId_fkey";

-- AlterTable
ALTER TABLE "Connection" DROP COLUMN "WorkflowId",
ADD COLUMN     "workflowId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Node" DROP COLUMN "WorkflowId",
ADD COLUMN     "workflowId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Node" ADD CONSTRAINT "Node_workflowId_fkey" FOREIGN KEY ("workflowId") REFERENCES "Workflow"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Connection" ADD CONSTRAINT "Connection_workflowId_fkey" FOREIGN KEY ("workflowId") REFERENCES "Workflow"("id") ON DELETE CASCADE ON UPDATE CASCADE;
