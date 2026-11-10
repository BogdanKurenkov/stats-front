import type { FC } from "react";
import { Target } from "lucide-react";
import { useDictionary } from "@/shared/lib/localization";
import { Container } from "@/shared";

import {
  MissionWrapper,
  MissionCard,
  HeaderRow,
  IconBox,
  MissionTitle,
  TextBox,
  MissionText,
} from "./AboutMission.styled";

export const AboutMission: FC = () => {
  const dict = useDictionary();
  const mission = dict.about.mission;

  return (
    <MissionWrapper>
      <Container>
        <MissionCard>
          <HeaderRow>
            <IconBox>
              <Target />
            </IconBox>
            <MissionTitle as="h2" level="h2">
              {mission.title}
            </MissionTitle>
          </HeaderRow>

          <TextBox>
            <MissionText size="md">{mission.description}</MissionText>
          </TextBox>
        </MissionCard>
      </Container>
    </MissionWrapper>
  );
};
