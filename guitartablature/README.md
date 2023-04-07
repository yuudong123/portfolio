# guitar-tablature-springboot

## DB Setting

### Account

- yuudong123 / 0000

### BOARD Table

- board_id number not null pk
- board_title varchar2(50) not null
- board_author number not null fk_board_member_id
- board_write_date date not null
- board_modify_date date not null
- board_content varchar2(2000) not null

### TABLATURE Table

- tab_id number not null pk
- tab_title varchar2(50) not null
- tab_author number not null fk_tab_member_id
- tab_write_date date not null
- tab_modify_date date not null
- tab_content varchar2(2000) not null
- tab_line number not null
- tab_input number not null

### MEMBER Table

- member_id number not null pk
- member_email varchar2(50) not null unique
- member_pw varchar2(30) not null
- member_name varchar2(30) not null nuique
- member_join_date date not null
- member_type number not null 0:default 1:admin
