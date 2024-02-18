/*
  Warnings:

  - You are about to drop the column `productId` on the `Product` table. All the data in the column will be lost.
  - Added the required column `categoryId` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Product" DROP CONSTRAINT "Product_productId_fkey";

-- AlterTable
ALTER TABLE "Article" ALTER COLUMN "categoryId" DROP DEFAULT;

-- AlterTable
ALTER TABLE "Product" DROP COLUMN "productId",
ADD COLUMN     "categoryId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "ProductCategory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
