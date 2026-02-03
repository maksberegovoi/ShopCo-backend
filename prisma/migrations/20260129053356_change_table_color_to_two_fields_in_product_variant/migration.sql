/*
  Warnings:

  - You are about to drop the column `colorId` on the `ProductVariant` table. All the data in the column will be lost.
  - You are about to drop the `Color` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[productId,sizeId]` on the table `ProductVariant` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `colorHex` to the `ProductVariant` table without a default value. This is not possible if the table is not empty.
  - Added the required column `colorName` to the `ProductVariant` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "ProductVariant" DROP CONSTRAINT "ProductVariant_colorId_fkey";

-- DropIndex
DROP INDEX "ProductVariant_productId_colorId_sizeId_key";

-- AlterTable
ALTER TABLE "ProductVariant" DROP COLUMN "colorId",
ADD COLUMN     "colorHex" TEXT NOT NULL,
ADD COLUMN     "colorName" TEXT NOT NULL;

-- DropTable
DROP TABLE "Color";

-- CreateIndex
CREATE UNIQUE INDEX "ProductVariant_productId_sizeId_key" ON "ProductVariant"("productId", "sizeId");
