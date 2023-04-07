package com.yuudong123.guitartablature.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.yuudong123.guitartablature.domain.BoardVO;

@Mapper
public interface BoardMapper {
  public List<BoardVO> getList();

  public void write(BoardVO vo);

  public BoardVO read(Long id);

  public int delete(Long id);

  public int modify(BoardVO vo);
}
