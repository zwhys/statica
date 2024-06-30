-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "hashed_password" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ExerciseType" (
    "id" SERIAL NOT NULL,
    "exercise_type" TEXT NOT NULL,

    CONSTRAINT "ExerciseType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "records" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "date_of_entry" TIMESTAMP(3) NOT NULL,
    "exercise_type" TEXT NOT NULL,
    "sets" INTEGER NOT NULL,
    "reps" INTEGER NOT NULL,
    "remarks" TEXT,

    CONSTRAINT "records_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "ExerciseType_exercise_type_key" ON "ExerciseType"("exercise_type");

-- CreateIndex
CREATE INDEX "idx_user_id" ON "records"("user_id");

-- CreateIndex
CREATE INDEX "idx_exercise_type" ON "records"("exercise_type");

-- CreateIndex
CREATE UNIQUE INDEX "records_user_id_date_of_entry_exercise_type_key" ON "records"("user_id", "date_of_entry", "exercise_type");

-- AddForeignKey
ALTER TABLE "records" ADD CONSTRAINT "records_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "records" ADD CONSTRAINT "records_exercise_type_fkey" FOREIGN KEY ("exercise_type") REFERENCES "ExerciseType"("exercise_type") ON DELETE RESTRICT ON UPDATE CASCADE;

