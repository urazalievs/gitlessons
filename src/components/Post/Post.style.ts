import styled, { css } from "styled-components";

interface SPostProps {
    $isLiked?: boolean,
    $isMarket?: boolean,
}
export const SPost = styled.div<SPostProps>`
    .Post {
  box-shadow: 0 0 10px ${props=>props.theme.color.lightGray};;
  padding: calc(1vw + 11px);
  background-color: var(--elems-bgc);
  border-radius: 20px;
  margin-bottom: 20px;

  position: relative;
  ${(props) => props.$isLiked &&
        css`
     &._liked {
    .icon-wrapper {
      .icon-like {
        fill: var(--red);
        stroke: 0;
        stroke-width: 0;
      }

      .likes-count {
        color: var(--red);
      }
    }
  }
    `
    }
    ${(props) => props.$isMarket &&
        css`
         &._marked {
    .icon-wrapper {
      .icon-mark {
        fill: var(--prime-color);
        stroke: 0;
        stroke-width: 0;
      }
    }
  }
        `
    }

  /* &._liked {
    .icon-wrapper {
      .icon-like {
        fill: var(--red);
        stroke: 0;
        stroke-width: 0;
      }

      .likes-count {
        color: var(--red);
      }
    }
  }

  &._marked {
    .icon-wrapper {
      .icon-mark {
        fill: var(--prime-color);
        stroke: 0;
        stroke-width: 0;
      }
    }
  } */

  // .UserElem {
  //   cursor: default;
  //   padding: 0;
  //   margin-bottom: 30px;

  //   &:hover {
  //     background-color: initial;
  //     scale: 1;
  //   }

  //   &::after {
  //     display: none; //? нижняя полоса в списке
  //   }

  //   img {
  //     flex: 0 0 60px;
  //     height: 60px;
  //     border-radius: 50%;
  //     object-fit: cover;
  //   }
  // }

  &__text {
    margin-bottom: 20px;
  }
 
}
.UserElSet{
    width:30px;
    height:30px;
    display:flex;
    justify-content:space-between;
    align-items:center;
    /* background-color:black; */
    div{
      width: 7px;
      height:5px;
      background-color: #4e4e4e;
      border-radius: 10px;
    }
  }
  .postSet{
    display:flex;
    gap:5px;
  }
  
`

export const SPostSetting = styled.span`
      font-size: 16px;
      color: ${(props)=>props.theme.color.blue};
      border: 1px solid ${(props)=>props.theme.color.gray};
      cursor: pointer;
      transition: color .5s;
      padding: 5px;
      border-radius: 15px;
      &:hover{
        color: white;
        background-color: orange;
      }
`