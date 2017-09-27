DROP TABLE IF EXISTS writing_info;

CREATE TABLE writing_info(
    id serial primary key,
    title text,
    hyperlink text
);

DROP TABLE IF EXISTS about_now_info;

CREATE TABLE about_now_info(
    id serial primary key,
    about_text text
);
