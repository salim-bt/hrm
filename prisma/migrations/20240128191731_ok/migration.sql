/*
  Warnings:

  - Added the required column `approverId` to the `Leave` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Leave" ADD COLUMN     "approverId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Leave" ADD CONSTRAINT "Leave_approverId_fkey" FOREIGN KEY ("approverId") REFERENCES "Employee"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
