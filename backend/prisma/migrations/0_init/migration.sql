-- CreateTable
CREATE TABLE
    "exercise_types" (
        "id" SERIAL NOT NULL,
        "exerciseType" VARCHAR(50) NOT NULL,
        "color" VARCHAR(7) NOT NULL,
        CONSTRAINT "exercise_types_pkey" PRIMARY KEY ("id")
    );

-- CreateTable
CREATE TABLE
    "records" (
        "id" SERIAL NOT NULL,
        "userId" INTEGER NOT NULL,
        "dateOfEntry" DATE NOT NULL,
        "exerciseType" VARCHAR(50) NOT NULL,
        "sets" SMALLINT NOT NULL,
        "reps" SMALLINT NOT NULL,
        "remarks" TEXT,
        "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
        "updated_at" TIMESTAMP(6) NOT NULL,
        "deleted_at" TIMESTAMP(6),
        CONSTRAINT "records_pkey" PRIMARY KEY ("id")
    );

-- CreateTable
CREATE TABLE
    "users" (
        "id" SERIAL NOT NULL,
        "username" VARCHAR(50) NOT NULL,
        "hashedPassword" TEXT NOT NULL,
        "age" INT DEFAULT NULL,
        "weight" FLOAT DEFAULT NULL,
        "additionalInfo" TEXT DEFAULT NULL,
        CONSTRAINT "users_pkey" PRIMARY KEY ("id")
    );

-- CreateIndex
CREATE UNIQUE INDEX "exercise_types_exerciseType_key" ON "exercise_types" ("exerciseType");

-- CreateIndex
CREATE UNIQUE INDEX "users_username_key" ON "users" ("username");

-- AddForeignKey
ALTER TABLE "records" ADD CONSTRAINT "records_exerciseType_fkey" FOREIGN KEY ("exerciseType") REFERENCES "exercise_types" ("exerciseType") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "records" ADD CONSTRAINT "records_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users" ("id") ON DELETE CASCADE ON UPDATE NO ACTION;