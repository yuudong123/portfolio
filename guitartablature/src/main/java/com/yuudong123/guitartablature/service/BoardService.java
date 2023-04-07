package com.yuudong123.guitartablature.service;

import java.util.List;

import com.yuudong123.guitartablature.domain.BoardVO;

public interface BoardService {
  public List<BoardVO> getList();

  public void write(BoardVO vo);

  public BoardVO read(Long id);

  public boolean delete(Long id);

  public boolean modify(BoardVO vo);
}
