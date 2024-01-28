/*
  Warnings:

  - Added the required column `allowDays` to the `leaveType` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Employee" ADD COLUMN     "department" TEXT;

-- AlterTable
ALTER TABLE "leaveType" ADD COLUMN     "allowDays" INTEGER NOT NULL;
