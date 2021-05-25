/*
  Warnings:

  - You are about to drop the column `filenames` on the `Entry` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Entry" DROP COLUMN "filenames",
ADD COLUMN     "fileUrls" TEXT[],
ADD COLUMN     "fileUrl" TEXT;
