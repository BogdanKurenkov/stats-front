import styled from "styled-components";
import { Title, Paragraph, CustomLink } from "@/shared/ui";

export const NewsGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const NewsCard = styled(CustomLink)`
  display: block;
  background-color: ${({ theme }) => theme.colors.black.secondary};
  border-radius: 16px;
  border: 1px solid ${({ theme }) => theme.colors.gray[800]};
  padding: 24px;
  transition: all 0.2s ease;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    border-color: ${({ theme }) => theme.colors.orange.primary};
    transform: translateY(-2px);
  }
`;

export const NewsTitle = styled(Title)`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 12px;
  color: ${({ theme }) => theme.colors.gray[100]};
`;

export const NewsDescription = styled(Paragraph)`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.gray[400]};
  margin-bottom: 16px;
  line-height: 1.5;
`;

export const NewsMeta = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.gray[600]};
`;

export const NewsSource = styled.span`
  &::before {
    content: "🏷️ ";
  }
`;

export const NewsDate = styled.span`
  &::before {
    content: "📅 ";
  }
`;

export const NewsLink = styled.span`
  &::before {
    content: "🔗 ";
  }
`;
