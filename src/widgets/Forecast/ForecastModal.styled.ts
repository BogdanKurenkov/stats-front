import styled from "styled-components";

export const ModalContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
  max-width: 500px;
  color: ${({ theme }) => theme.colors.gray[100]};
`;

export const ModalHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const ModalTitle = styled.h2`
  margin: 0;
  font-size: 22px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.gray[100]};
`;

export const ModalMeta = styled.div`
  font-size: 13px;
  color: ${({ theme }) => theme.colors.gray[400]};
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 4px;
`;

export const ModalGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;

export const ModalInfoCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  background-color: ${({ theme }) => theme.colors.black.card};
  border: 1px solid ${({ theme }) => theme.colors.gray[800]};
  border-radius: 8px;
  padding: 16px;
`;

export const ModalInfoLabel = styled.span`
  font-size: 13px;
  color: ${({ theme }) => theme.colors.gray[400]};
`;

export const ModalInfoValue = styled.span`
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.orange.primary};
`;

export const ModalLogicTitle = styled.h3`
  margin: 0 0 12px ;
  font-size: 15px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.gray[100]};
`;

export const ModalLogicList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const ModalLogicItem = styled.li`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.gray[300]};
  line-height: 1.5;
  position: relative;
  padding-left: 16px;

  &::before {
    content: "•";
    position: absolute;
    left: 0;
    top: 0;
    color: ${({ theme }) => theme.colors.gray[300]};
  }
`;

export const ModalDisclaimer = styled.p`
  margin: 0;
  font-size: 13px;
  color: ${({ theme }) => theme.colors.gray[500]};
  line-height: 1.5;
`;

export const ModalAction = styled.div`
  margin-top: 8px;

  & > button {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
  }
`;
