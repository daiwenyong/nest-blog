/*
  Warnings:

  - You are about to alter the column `userName` on the `user` table. The data in that column could be lost. The data in that column will be cast from `Char(50)` to `Char(20)`.

*/
-- AlterTable
ALTER TABLE `user` MODIFY `email` VARCHAR(20) NULL,
    MODIFY `userName` CHAR(20) NOT NULL;
