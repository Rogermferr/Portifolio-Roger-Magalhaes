import styled from 'styled-components'

export const FeaturedProjectsStyle = styled.div`
  height: 400px;
  width: 800px;

  margin-bottom: 150px;

  h2 {
    color: var(--color-white);
    font-size: 2rem;
    font-weight: bold;
    text-align: center;
    margin: 32px 0;
  }

  @media (max-width: 769px) {
    text-align: center;
    /* margin: 150px 0 0 0; */

    width: 100%;
    height: 100%;
    margin-bottom: 32px;

    h2 {
      margin: 16px;
    }
  }
`

export const SwiperPagination = styled.div`
  .swiper-pagination-bullet {
    width: 10px;
    height: 50px;
    margin: 0 5px;
    border-radius: 50%;
    background-color: #fff;
    cursor: pointer;
  }
  .swiper-pagination-bullet-active {
    background-color: #555;
  }
`
