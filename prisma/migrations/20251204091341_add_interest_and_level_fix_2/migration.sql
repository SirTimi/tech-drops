/*
  Warnings:

  - You are about to drop the column `level` on the `WaitlistSignup` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "WaitlistSignup" DROP COLUMN "level",
ADD COLUMN     "experienceLevel" TEXT;
