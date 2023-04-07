package com.yuudong123.guitartablature.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class PageController {

  @GetMapping("/")
  public String homepage() {
    return "/page/index";
  }

  @GetMapping("/maker")
  public String makerpage() {
    return "/page/maker";
  }

}
