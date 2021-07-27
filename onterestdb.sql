create database onterestdb;

create table bugReport
(
    id      int auto_increment
        primary key,
    user    varchar(50) not null,
    message text        not null
);

create table club
(
    name varchar(50) not null
        primary key
);

create table member
(
    username  varchar(50) not null
        primary key,
    password  varchar(50) not null,
    type      int         not null,
    email     varchar(50) null,
    birthDate varchar(50) null
);

create table memberofclub
(
    id       int auto_increment
        primary key,
    author   varchar(50) not null,
    clubName varchar(50) not null,
    star     int         null,
    constraint FK2atydoumio3fe2mas0ls75jy4
        foreign key (author) references member (username),
    constraint FKrp4a8t54vb41l8jlbsm25b81v
        foreign key (clubName) references club (name)
);

create table messages
(
    id       int auto_increment
        primary key,
    sender   varchar(50) not null,
    receiver varchar(50) not null,
    content  text        not null,
    sendDate datetime    not null,
    constraint FKk304vjpnwm6ko94th4ymjtdn5
        foreign key (receiver) references member (username),
    constraint FKmyvrt6vfx7fkmkbwwnw7v0lax
        foreign key (sender) references member (username)
);

create table options
(
    selection  varchar(50) not null
        primary key,
    club       varchar(50) not null,
    surveyName varchar(50) not null
);

create table report
(
    id      int auto_increment
        primary key,
    user    varchar(50) null,
    club    varchar(50) null,
    subclub varchar(50) null,
    ontryId int         null,
    message text        not null
);

create table subclub
(
    name     varchar(50) not null
        primary key,
    clubName varchar(50) not null,
    constraint FKk4ed8j2mjkok9a1tc4yg9k7d6
        foreign key (clubName) references club (name)
);

create table memberofsubclub
(
    id          int auto_increment
        primary key,
    author      varchar(50) not null,
    subClubName varchar(50) not null,
    star        int         null,
    constraint FKgdpdtf3cy14spdp7arrahm9ni
        foreign key (subClubName) references subclub (name),
    constraint FKrsauywat6srfpkow8h1acl56i
        foreign key (author) references member (username)
);

create table ontry
(
    id      int auto_increment
        primary key,
    title   varchar(255) null,
    body    text         not null,
    member  varchar(50)  null,
    date    datetime     null,
    club    varchar(50)  null,
    subclub varchar(50)  null,
    constraint FK3wbc2e8jlsg6v971kar9a7a6q
        foreign key (member) references member (username),
    constraint FK471scl1mlk05pkmvidkeddts3
        foreign key (subclub) references subclub (name),
    constraint FKsn8kpiiqc2pjidcj74he3ruqw
        foreign key (club) references club (name)
);

create table comment
(
    id      int auto_increment
        primary key,
    body    text        not null,
    ontryId int         not null,
    member  varchar(50) null,
    constraint FKcttjubxu3lic57mhsrh386a8w
        foreign key (ontryId) references ontry (id)
);

create table survey
(
    name     varchar(50) not null
        primary key,
    question text        not null
);
