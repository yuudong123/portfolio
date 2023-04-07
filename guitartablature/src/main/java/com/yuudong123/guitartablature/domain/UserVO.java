package com.yuudong123.guitartablature.domain;

import java.util.Date;

import lombok.Data;

@Data
public class UserVO {
  private Long id;
  private String email;
  private String password;
  private String name;
  private Date joinDate;
  private int type;

  public boolean isAdmin() {
    if (type == 1) {
      return true;
    } else {
      return false;
    }
  }
}
