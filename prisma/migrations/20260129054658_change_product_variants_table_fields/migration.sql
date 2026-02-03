/*
  Warnings:

  - You are about to drop the column `quantity` on the `ProductVariant` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[productId,sizeId,colorHex]` on the table `ProductVariant` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `Size` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `stock` to the `ProductVariant` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `name` on the `Size` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropIndex
DROP INDEX "ProductVariant_productId_sizeId_key";

-- AlterTable
ALTER TABLE "ProductVariant" DROP COLUMN "quantity",
ADD COLUMN     "stock" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Size" DROP COLUMN "name",
ADD COLUMN     "name" TEXT NOT NULL;

-- DropEnum
DROP TYPE "ProductSize";

-- CreateIndex
CREATE UNIQUE INDEX "ProductVariant_productId_sizeId_colorHex_key" ON "ProductVariant"("productId", "sizeId", "colorHex");

-- CreateIndex
CREATE UNIQUE INDEX "Size_name_key" ON "Size"("name");
