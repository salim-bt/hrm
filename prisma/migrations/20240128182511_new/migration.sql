/*
  Warnings:

  - You are about to drop the column `approverId` on the `Leave` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `Leave` table. All the data in the column will be lost.
  - You are about to drop the `Account` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `LeaveBalance` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `LeaveType` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Notification` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Session` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `VerificationToken` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `employeeId` to the `Leave` table without a default value. This is not possible if the table is not empty.
  - Added the required column `receivedBy` to the `Leave` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `leaveTypeId` on the `Leave` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('MALE', 'FEMALE');

-- CreateEnum
CREATE TYPE "MaritalStatus" AS ENUM ('SINGLE', 'MARRIED');

-- DropForeignKey
ALTER TABLE "Account" DROP CONSTRAINT "Account_userId_fkey";

-- DropForeignKey
ALTER TABLE "Leave" DROP CONSTRAINT "Leave_leaveTypeId_fkey";

-- DropForeignKey
ALTER TABLE "Leave" DROP CONSTRAINT "Leave_userId_fkey";

-- DropForeignKey
ALTER TABLE "LeaveBalance" DROP CONSTRAINT "LeaveBalance_leaveTypeId_fkey";

-- DropForeignKey
ALTER TABLE "LeaveBalance" DROP CONSTRAINT "LeaveBalance_userId_fkey";

-- DropForeignKey
ALTER TABLE "Session" DROP CONSTRAINT "Session_userId_fkey";

-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_notificationId_fkey";

-- AlterTable
ALTER TABLE "Leave" DROP COLUMN "approverId",
DROP COLUMN "userId",
ADD COLUMN     "employeeId" TEXT NOT NULL,
ADD COLUMN     "receivedBy" TEXT NOT NULL,
DROP COLUMN "leaveTypeId",
ADD COLUMN     "leaveTypeId" INTEGER NOT NULL;

-- DropTable
DROP TABLE "Account";

-- DropTable
DROP TABLE "LeaveBalance";

-- DropTable
DROP TABLE "LeaveType";

-- DropTable
DROP TABLE "Notification";

-- DropTable
DROP TABLE "Session";

-- DropTable
DROP TABLE "User";

-- DropTable
DROP TABLE "VerificationToken";

-- CreateTable
CREATE TABLE "Employee" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "role" TEXT[],
    "dob" TIMESTAMP(3) NOT NULL,
    "gender" "Gender" NOT NULL DEFAULT 'MALE',
    "supervisorId" INTEGER,
    "phoneNumber" TEXT,
    "address" TEXT,
    "cidOrPassport" TEXT,
    "citenzenship" TEXT,
    "nationality" TEXT,
    "religion" TEXT,
    "maritalStatus" "MaritalStatus" NOT NULL DEFAULT 'SINGLE',
    "bloodGroup" TEXT,
    "emergencyContactName" TEXT,
    "emergencyContactNumber" TEXT,
    "emergencyContactEmail" TEXT,
    "emergencyContactRelation" TEXT,
    "emergencyContactAddress" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "joinedDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Employee_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "leaveType" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "leaveType_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Leave" ADD CONSTRAINT "Leave_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "Employee"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Leave" ADD CONSTRAINT "Leave_leaveTypeId_fkey" FOREIGN KEY ("leaveTypeId") REFERENCES "leaveType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
