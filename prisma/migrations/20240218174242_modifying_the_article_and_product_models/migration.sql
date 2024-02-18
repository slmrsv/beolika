/*
  Warnings:

  - You are about to drop the column `categoryId` on the `ItemCategory` table. All the data in the column will be lost.
  - You are about to drop the column `productId` on the `ProductCategory` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "ItemCategory" DROP CONSTRAINT "ItemCategory_categoryId_fkey";

-- DropForeignKey
ALTER TABLE "ProductCategory" DROP CONSTRAINT "ProductCategory_productId_fkey";

-- AlterTable
ALTER TABLE "Article" ADD COLUMN     "categoryId" INTEGER NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE "ItemCategory" DROP COLUMN "categoryId";

-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "productId" INTEGER NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE "ProductCategory" DROP COLUMN "productId";

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_productId_fkey" FOREIGN KEY ("productId") REFERENCES "ProductCategory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Article" ADD CONSTRAINT "Article_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "ItemCategory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
