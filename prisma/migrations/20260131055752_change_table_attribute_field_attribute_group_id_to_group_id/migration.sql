/*
  Warnings:

  - You are about to drop the column `attributeGroupId` on the `Attribute` table. All the data in the column will be lost.
  - Added the required column `groupId` to the `Attribute` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Attribute" DROP CONSTRAINT "Attribute_attributeGroupId_fkey";

-- AlterTable
ALTER TABLE "Attribute" DROP COLUMN "attributeGroupId",
ADD COLUMN     "groupId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Attribute" ADD CONSTRAINT "Attribute_groupId_fkey" FOREIGN KEY ("groupId") REFERENCES "AttributeGroup"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
