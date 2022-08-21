import styled from 'styled-components'

export const StyledHeader = styled.header`
   display: flex;
   justify-content: space-evenly;
   align-items: center;
   padding: 10px 15px;
   background: #000;
   padding: 2rem;
   color: #fff; 
`

export const HeaderTitle = styled.h2`
   margin: 1rem;
   a {
      :visited{
         color:#fff;
      }
   }
`

export const AddSiteContainer = styled.div`
   display: flex;
   width: 9rem;
   align-items: center;
   justify-content: space-between;
`

export const AddSiteParagraph = styled.p`
   margin-bottom: 1.2rem;
`

export const AddButton = styled.a`
   &:visited, :active{
      color: #fff;
   }
`
