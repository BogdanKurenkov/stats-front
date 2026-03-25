import styled from "styled-components";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";

export const StyledAccordionItem = styled(AccordionPrimitive.Item)`
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray[800]};
  overflow: hidden;

  &:focus-within {
    position: relative;
    z-index: 1;
  }
`;

export const StyledAccordionHeader = styled(AccordionPrimitive.Header)`
  display: flex;
`;

export const StyledAccordionTrigger = styled(AccordionPrimitive.Trigger)`
  font-family: inherit;
  background-color: transparent;
  padding: 20px 0;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: start;
  font-size: 18px;
  font-weight: 500;
  line-height: 1;
  color: ${({ theme }) => theme.colors.gray[100]};
  cursor: pointer;
  gap: 20px;

  @media (hover: hover) {
    &:hover {
      color: ${({ theme }) => theme.colors.orange.primary};
    }
  }

  &[data-state="open"] {
    svg {
      transform: rotate(180deg);
    }
  }
`;

export const StyledChevron = styled(ChevronDown)`
  width: 20px;
  height: 20px;
  color: ${({ theme }) => theme.colors.gray[400]};
  transition: transform 300ms cubic-bezier(0.87, 0, 0.13, 1);
  flex-shrink: 0;
`;

export const StyledAccordionContent = styled(AccordionPrimitive.Content)`
  overflow: hidden;
  font-size: 15px;
  color: ${({ theme }) => theme.colors.gray[400]};
  background-color: transparent;

  &[data-state="open"] {
    animation: slideDown 300ms cubic-bezier(0.87, 0, 0.13, 1);
  }

  &[data-state="closed"] {
    animation: slideUp 300ms cubic-bezier(0.87, 0, 0.13, 1);
  }

  @keyframes slideDown {
    from {
      height: 0;
    }
    to {
      height: var(--radix-accordion-content-height);
    }
  }

  @keyframes slideUp {
    from {
      height: var(--radix-accordion-content-height);
    }
    to {
      height: 0;
    }
  }
`;

export const StyledAccordionContentText = styled.div`
  padding-bottom: 20px;
  line-height: 1.6;
`;
