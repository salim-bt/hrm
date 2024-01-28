/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `leaveType` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "leaveType_name_key" ON "leaveType"("name");
