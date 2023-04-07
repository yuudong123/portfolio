package com.yuudong123.guitartablature.domain;

import java.util.Date;

import lombok.Data;

@Data
public class BoardVO {
  private Long boardId;
  private String boardTitle;
  private String boardAuthor;
  private Date boardWriteDate;
  private Date boardModifyDate;
  private String boardContent;
}
