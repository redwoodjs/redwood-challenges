/*
  Warnings:

  - A unique constraint covering the columns `[uid]` on the table `Entry` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `uid` to the `Entry` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Entry" ADD COLUMN     "uid" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Entry.uid_unique" ON "Entry"("uid");
