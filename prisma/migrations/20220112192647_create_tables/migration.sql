-- CreateTable
CREATE TABLE "hero" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "super_power_id" UUID NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "hero_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "power" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "power_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "super_power" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "super_power_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_HeroToPower" (
    "A" UUID NOT NULL,
    "B" UUID NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "power_name_key" ON "power"("name");

-- CreateIndex
CREATE UNIQUE INDEX "super_power_name_key" ON "super_power"("name");

-- CreateIndex
CREATE UNIQUE INDEX "_HeroToPower_AB_unique" ON "_HeroToPower"("A", "B");

-- CreateIndex
CREATE INDEX "_HeroToPower_B_index" ON "_HeroToPower"("B");

-- AddForeignKey
ALTER TABLE "hero" ADD CONSTRAINT "hero_super_power_id_fkey" FOREIGN KEY ("super_power_id") REFERENCES "super_power"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_HeroToPower" ADD FOREIGN KEY ("A") REFERENCES "hero"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_HeroToPower" ADD FOREIGN KEY ("B") REFERENCES "power"("id") ON DELETE CASCADE ON UPDATE CASCADE;
