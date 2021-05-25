/*
  Warnings:

  - Added the required column `sha` to the `Entry` table without a default value. This is not possible if the table is not empty.
  - Added the required column `filesUrl` to the `Entry` table without a default value. This is not possible if the table is not empty.
  - Added the required column `htmlUrl` to the `Entry` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user` to the `Entry` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Entry" ADD COLUMN     "sha" TEXT NOT NULL,
ADD COLUMN     "filesUrl" TEXT NOT NULL,
ADD COLUMN     "htmlUrl" TEXT NOT NULL,
ADD COLUMN     "user" JSONB NOT NULL;
