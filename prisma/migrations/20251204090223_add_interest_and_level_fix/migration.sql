/*
  Warnings:

  - You are about to drop the column `interest` on the `WaitlistSignup` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "WaitlistSignup" DROP COLUMN "interest",
ADD COLUMN     "interests" TEXT;
