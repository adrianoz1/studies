/*
  Warnings:

  - You are about to drop the column `nome` on the `Recipient` table. All the data in the column will be lost.
  - You are about to drop the column `telefone` on the `Recipient` table. All the data in the column will be lost.
  - Added the required column `name` to the `Recipient` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phone` to the `Recipient` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Recipient" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "email" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_Recipient" ("createdAt", "email", "id") SELECT "createdAt", "email", "id" FROM "Recipient";
DROP TABLE "Recipient";
ALTER TABLE "new_Recipient" RENAME TO "Recipient";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
