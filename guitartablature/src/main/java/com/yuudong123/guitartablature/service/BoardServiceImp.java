package com.yuudong123.guitartablature.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.yuudong123.guitartablature.domain.BoardVO;
import com.yuudong123.guitartablature.mapper.BoardMapper;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class BoardServiceImp implements BoardService {

  @Autowired
  private BoardMapper mapper;

  @Override
  public List<BoardVO> getList() {
    return mapper.getList();
  }

  @Override
  public void write(BoardVO vo) {
    mapper.write(vo);
  }

  @Override
  public BoardVO read(Long id) {
    return mapper.read(id);
  }

  @Override
  public boolean delete(Long id) {
    return (mapper.delete(id) == 1);
  }

  @Override
  public boolean modify(BoardVO vo) {
    return (mapper.modify(vo) == 1);
  }

}
