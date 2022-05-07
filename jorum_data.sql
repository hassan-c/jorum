begin;

insert into category
    (id, name)
values
    (1, 'General'),
    (2, 'Development'),
    (3, 'Off Topic');

insert into section
    (id, name, description, category_id)
values
    (1, 'Announcements', 'Jorum news and announcements', 1),
    (2, 'General Discussion', 'Discussion of topics not covered by other sections', 1),

    (3, 'Backend', 'Discussion about backend development', 2),
    (4, 'Frontend', 'Discussion about frontend development', 2),
    (5, 'Other', 'For all other development-related discussion', 2),

    (6, 'Random', 'For general chit-chat and everything in between', 3);

commit;