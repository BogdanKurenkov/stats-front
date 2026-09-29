import type { FC } from 'react';

import { Container, Section, Title, Paragraph, CustomLink } from '@/shared/ui';

import type { LegalBlock, LegalDocumentProps } from './LegalDocument.types';

import {
  PolicyWrapper,
  SectionBlock,
  Subtitle,
  List,
  ListItem,
  LastUpdate,
  TableWrapper,
  Table,
  TableHeader,
  TableRow,
  TableCell,
  NoteBox,
} from './LegalDocument.styled';

const BlockContent: FC<{ block: LegalBlock }> = ({ block }) => (
  <>
    {block.paragraphs?.map((paragraph, index) => (
      <Paragraph key={index} dangerouslySetInnerHTML={{ __html: paragraph }} />
    ))}

    {block.items && (
      <List>
        {block.items.map((item, index) => (
          <ListItem key={index} dangerouslySetInnerHTML={{ __html: item }} />
        ))}
      </List>
    )}

    {block.table && (
      <TableWrapper>
        <Table>
          <thead>
            <TableRow>
              {block.table.headers.map((header, index) => (
                <TableHeader key={index}>{header}</TableHeader>
              ))}
            </TableRow>
          </thead>
          <tbody>
            {block.table.rows.map((row, rowIndex) => (
              <TableRow key={rowIndex}>
                {row.map((cell, cellIndex) => (
                  <TableCell key={cellIndex} dangerouslySetInnerHTML={{ __html: cell }} />
                ))}
              </TableRow>
            ))}
          </tbody>
        </Table>
      </TableWrapper>
    )}

    {block.note && (
      <NoteBox>
        <Paragraph dangerouslySetInnerHTML={{ __html: block.note }} />
      </NoteBox>
    )}

    {block.links?.map((link) => (
      <Paragraph key={link.href}>
        <CustomLink href={link.href} variant="underline">
          {link.label}
        </CustomLink>
      </Paragraph>
    ))}
  </>
);

export const LegalDocument: FC<LegalDocumentProps> = ({ document }) => (
  <Section pt pb>
    <Container>
      <PolicyWrapper>
        <Title as="h1" level="h1">
          {document.title}
        </Title>
        <LastUpdate>
          {document.lastUpdate} {document.lastUpdateDate}
        </LastUpdate>

        {document.intro?.map((paragraph, index) => (
          <Paragraph key={index} dangerouslySetInnerHTML={{ __html: paragraph }} />
        ))}

        {Array.isArray(document.sections) && document.sections.map((section, index) => (
          <SectionBlock key={index}>
            <Title as="h2" level="h2">{section.title}</Title>
            <BlockContent block={section} />

            {section.subsections?.map((subsection, subIndex) => (
              <SectionBlock key={subIndex}>
                {subsection.title && (
                  <Subtitle as="h3" level="h3">{subsection.title}</Subtitle>
                )}
                <BlockContent block={subsection} />
              </SectionBlock>
            ))}
          </SectionBlock>
        ))}
      </PolicyWrapper>
    </Container>
  </Section>
);
