-- AlterTable
ALTER TABLE "Product"
    ADD COLUMN "price" integer
        GENERATED ALWAYS AS (
            "basePrice" - ("basePrice" * "discount" / 100)
            ) STORED;
