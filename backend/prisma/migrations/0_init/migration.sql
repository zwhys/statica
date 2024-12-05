-- CreateTable
CREATE TABLE "exercise_types" (
    "id" SERIAL NOT NULL,
    "exercise_type" VARCHAR(50) NOT NULL,
    "colour" VARCHAR(7) NOT NULL,

    CONSTRAINT "exercise_types_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "records" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "date_of_entry" DATE NOT NULL,
    "exercise_type" VARCHAR(50) NOT NULL,
    "sets" SMALLINT NOT NULL,
    "reps" SMALLINT NOT NULL,
    "remarks" TEXT,
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(6) NOT NULL,
    "deleted_at" TIMESTAMP(6),

    CONSTRAINT "records_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "username" VARCHAR(50) NOT NULL,
    "preferredname" VARCHAR(50),
    "hashed_password" TEXT NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "exercise_types_exercise_type_key" ON "exercise_types"("exercise_type");

-- CreateIndex
CREATE UNIQUE INDEX "users_username_key" ON "users"("username");

-- AddForeignKey
ALTER TABLE "records" ADD CONSTRAINT "records_exercise_type_fkey" FOREIGN KEY ("exercise_type") REFERENCES "exercise_types"("exercise_type") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "records" ADD CONSTRAINT "records_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

