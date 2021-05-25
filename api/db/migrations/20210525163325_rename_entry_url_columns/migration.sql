/*
  Warnings:

  - You are about to drop the column `filesUrl` on the `Entry` table. All the data in the column will be lost.
  - You are about to drop the column `htmlUrl` on the `Entry` table. All the data in the column will be lost.
  - Added the required column `pullRequestFilesUrl` to the `Entry` table without a default value. This is not possible if the table is not empty.
  - Added the required column `pullRequestHtmlUrl` to the `Entry` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Entry" DROP COLUMN "filesUrl",
DROP COLUMN "htmlUrl",
ADD COLUMN     "pullRequestFilesUrl" TEXT NOT NULL,
ADD COLUMN     "pullRequestHtmlUrl" TEXT NOT NULL;
