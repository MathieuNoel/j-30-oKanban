BEGIN;

DROP TABLE IF EXISTS "list", "card", "label", "card_own_label";

CREATE TABLE IF NOT EXISTS "list" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR(25) NOT NULL UNIQUE,
    "position" INTEGER NOT NULL UNIQUE,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    "updated_at" TIMESTAMPTZ
);

CREATE TABLE IF NOT EXISTS "card" (
    "id" SERIAL PRIMARY KEY,
    "description" TEXT,
    "color" VARCHAR(25),
    "position" INTEGER NOT NULL,
    "list_id" INT REFERENCES "list"("id"),
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    "updated_at" TIMESTAMPTZ
);

CREATE TABLE IF NOT EXISTS "label" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR(25) NOT NULL UNIQUE,
    "color" VARCHAR(25),
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    "updated_at" TIMESTAMPTZ
);

CREATE TABLE IF NOT EXISTS "card_own_label" (
    "label_id" INT REFERENCES "label"("id"),
    "card_id" INT REFERENCES "card"("id"),
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    "updated_at" TIMESTAMPTZ
);

INSERT INTO "list" ("name", "position") VALUES 
('pim', 1),
('pam', 2),
('prout', 3);

INSERT INTO "card" ("description", "color", "position", "list_id" )
VALUES ('premiere description', 'blue', 1, 1),
       ('deuxieme description', 'red', 2, 2),
       ('troisieme description', 'green', 3, 3);

INSERT INTO "label" ("name", "color")
VALUES ('1ere liste','FF5733'),
       ('2eme liste','33FF47'),
       ('3eme liste','FF33E4');

INSERT INTO "card_own_label" ("label_id", "card_id")
VALUES (1, 1),
       (2, 2),
       (3, 3);

COMMIT;