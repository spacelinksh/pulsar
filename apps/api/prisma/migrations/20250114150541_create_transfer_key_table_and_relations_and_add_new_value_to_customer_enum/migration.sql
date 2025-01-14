-- AlterEnum
ALTER TYPE "CustomerStatus" ADD VALUE 'PENDING';

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "walletBalance" SET DEFAULT 0;

-- CreateTable
CREATE TABLE "TransferKey" (
    "id" TEXT NOT NULL,
    "key" TEXT NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "userId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TransferKey_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "TransferKey_key_key" ON "TransferKey"("key");

-- AddForeignKey
ALTER TABLE "TransferKey" ADD CONSTRAINT "TransferKey_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
