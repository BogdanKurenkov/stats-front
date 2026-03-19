import { FC, useState, useEffect } from 'react';
import {
  TabsContainer,
  TabsList,
  TabButton,
  TabContent,
} from './Tabs.styled';
import { TabsProps } from './Tabs.types';

export const Tabs: FC<TabsProps> = ({
  tabs,
  activeTab: controlledActiveTab,
  defaultTab,
  onChange,
  variant = 'underline',
  className,
}) => {
  const [internalActiveTab, setInternalActiveTab] = useState(defaultTab || tabs[0]?.id);

  const activeTab = controlledActiveTab ?? internalActiveTab;

  useEffect(() => {
    if (controlledActiveTab !== undefined) {
      setInternalActiveTab(controlledActiveTab);
    }
  }, [controlledActiveTab]);

  const handleTabClick = (tabId: string) => {
    if (controlledActiveTab === undefined) {
      setInternalActiveTab(tabId);
    }
    onChange?.(tabId);
  };

  const activeContent = tabs.find(tab => tab.id === activeTab)?.content;

  return (
    <TabsContainer className={className}>
      <TabsList>
        {tabs.map(tab => (
          <TabButton
            key={tab.id}
            $active={activeTab === tab.id}
            $disabled={tab.disabled}
            $variant={variant}
            onClick={() => !tab.disabled && handleTabClick(tab.id)}
            disabled={tab.disabled}
            role="tab"
            aria-selected={activeTab === tab.id}
          >
            {tab.label}
          </TabButton>
        ))}
      </TabsList>
      <TabContent role="tabpanel">
        {activeContent}
      </TabContent>
    </TabsContainer>
  );
};