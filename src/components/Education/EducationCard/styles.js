import styled from "styled-components";

export const EduCard = styled.div`
  margin-bottom: 4rem;
  border-bottom: 0.1px solid rgb(200, 200, 200);
  padding-bottom: 2rem;

  &:last-child {
    margin-bottom: 0;
    border-bottom: 0;
    padding-bottom: 0;
  }

  @media (min-width: 992px) {
    border-bottom: 0;
    padding-bottom: 0;
  }
`;

export const EducationCardRight = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;

  h4 {
    font-size: 1.4rem;
    font-weight: 600;
    color: rgb(30, 30, 30);
    margin: 0;
  }

  .degree {
    font-size: 1rem;
    font-weight: 500;
    color: rgb(50, 50, 50);
  }

  .cpi {
    font-size: 1rem;
    font-weight: 500;
    color: rgb(80, 80, 80);
  }

  @media (max-width: 500px) {
    h4 {
      font-size: 1.2rem;
    }
    .degree {
      font-size: 15px;
    }
    .cpi {
      font-size: 15px;
    }
  }

  @media (min-width: 992px) {
    justify-content: flex-start;
    margin-top: 1rem;
  }
`;

