CREATE TABLE "listings" (
"id" SERIAL PRIMARY KEY,
"cost" INTEGER,
"sqft" INTEGER,
"kind" VARCHAR(4),
"city" VARCHAR(120),
"image_path" VARCHAR(120)
);
