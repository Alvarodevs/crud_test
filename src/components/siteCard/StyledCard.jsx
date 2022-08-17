import styled from "styled-components";

export const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0.2rem;
  min-width: 9rem;
  height: 15rem;
  border: 1px #575757 solid;
  padding: 0.5rem;
  color: #fff;
  border-radius: 5px;

  &:hover{
    transition: 0.3s ease-in-out;
    width: 9rem;
    height: 16rem;
    color: #fff;
    overflow: hidden;
    box-shadow: 0px 0px 5px #fff;
  }
`

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
`
export const DeleteButton = styled.button`
  background-color: transparent;
  width: fit-content;

  &:hover{
    cursor: pointer;
  }
`

export const EditButton = styled.button`
  background-color: transparent;
  width: fit-content;

  &:hover{
    cursor: pointer;
  }
`

export const ContentContainer = styled.div`
  height: 100%;
  &:hover{
    cursor: pointer;
  }
`
export const Paragraph = styled.p`
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
`