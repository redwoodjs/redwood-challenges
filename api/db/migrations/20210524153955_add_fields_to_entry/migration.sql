/*
  Warnings:

  - Added the required column `approvedAt` to the `Entry` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `Entry` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `Entry` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Entry" ADD COLUMN     "approvedAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "title" TEXT NOT NULL,
ADD COLUMN     "description" TEXT NOT NULL;
