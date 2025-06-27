import React, { Suspense, useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import '@patternfly/react-core/dist/styles/base.css';
import '@patternfly/patternfly/patternfly-addons.css';
import { SortAlphaDownIcon, SortAlphaUpIcon } from '@patternfly/react-icons';
import {
  Button,
  Card,
  CardBody,
  CardTitle,
  Content,
  Gallery,
  GalleryItem,
  IconComponentProps,
  Masthead,
  Page,
  PageSection,
  Toolbar,
  ToolbarContent,
  ToolbarItem,
  TextInput,
} from '@patternfly/react-core';

const allIcons = (process.env.COMPONENT_IMPORTS || []) as { componentName: string, componentPath: string }[];
if (!allIcons.length) {
  console.warn('No icons found in process.env.COMPONENT_IMPORTS');
}

const DynamicIcon = ({ name, path }: { name: string, path: string }) => {
  const LazyIcon = useMemo(() => {
    return React.lazy<React.ComponentType<{
      iconProps?: IconComponentProps;
      svgProps?: React.SVGProps<SVGSVGElement>;
    }>>(() => import(`${path}.tsx`));
  }, [path]);

  return (
    <GalleryItem>
      <Card>
        <CardTitle>{name}</CardTitle>
        <CardBody className="pf-v6-u-text-align-center">
          <Suspense fallback={<div>Loading...</div>}>
            <LazyIcon svgProps={{ width: 100, height: 100 }} />
          </Suspense>
        </CardBody>
      </Card>
    </GalleryItem>
  );
};

const masthead = (
  <Masthead>
  </Masthead>
);

const App = () => {
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc' | null>(null);
  const [filterText, setFilterText] = useState('');

  const filteredAndSortedIcons = useMemo(() => {
    let icons = [...allIcons];

    // Apply filter
    if (filterText) {
      const lowerFilter = filterText.toLowerCase();
      icons = icons.filter((icon) =>
        icon.componentName.toLowerCase().includes(lowerFilter)
      );
    }

    // Apply sorting
    if (sortOrder) {
      icons.sort((a, b) =>
        sortOrder === 'asc'
          ? a.componentName.localeCompare(b.componentName)
          : b.componentName.localeCompare(b.componentName)
      );
    }

    return icons;
  }, [sortOrder, filterText]);

  const nodes = useMemo(() => {
    return filteredAndSortedIcons.map((icon, index) => (
      <DynamicIcon key={index} name={icon.componentName} path={icon.componentPath} />
    ));
  }, [filteredAndSortedIcons]);

  const toggleSort = () => {
    setSortOrder((prev) => (prev === 'asc' ? 'desc' : prev === 'desc' ? null : 'asc'));
  };

  const handleFilterChange = (value: string) => {
    setFilterText(value);
  };

  return (
    <Page
      masthead={masthead}
      additionalGroupedContent={
        <PageSection isWidthLimited>
          <Content>
            <h1>Frontend Assets</h1>
          </Content>
        </PageSection>
      }
    >
      <PageSection isWidthLimited>
        <Toolbar>
          <ToolbarContent>
            <ToolbarItem>
              <TextInput
                type="search"
                placeholder="Filter by name..."
                value={filterText}
                onChange={(_event, value) => handleFilterChange(value)}
                aria-label="Filter icons by name"
              />
            </ToolbarItem>
            <ToolbarItem>
              <Button
                variant="plain"
                onClick={toggleSort}
                icon={
                  sortOrder === 'asc' ? (
                    <SortAlphaUpIcon />
                  ) : sortOrder === 'desc' ? (
                    <SortAlphaDownIcon />
                  ) : (
                    <SortAlphaUpIcon />
                  )
                }
                aria-label={`Sort icons by name ${sortOrder === 'asc' ? 'descending' : 'ascending'}`}
              >
                Sort by Name
              </Button>
            </ToolbarItem>
          </ToolbarContent>
        </Toolbar>
        <Gallery
          minWidths={{
            md: '300px',
          }}
          hasGutter
        >
          {nodes.length > 0 ? (
            nodes
          ) : (
            <div>No icons match the filter.</div>
          )}
        </Gallery>
      </PageSection>
    </Page>
  );
};

const rootElement = document.createElement('div');
rootElement.id = 'demo-root';
document.body.appendChild(rootElement);
const root = createRoot(rootElement);
root.render(<App />);
