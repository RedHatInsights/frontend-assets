import React, { Suspense, useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import '@patternfly/react-core/dist/styles/base.css';
import '@patternfly/patternfly/patternfly-addons.css';
import { SortAlphaDownIcon, SortAlphaUpIcon, ThIcon, ListIcon } from '@patternfly/react-icons';
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Content,
  Flex,
  FlexItem,
  Gallery,
  GalleryItem,
  IconComponentProps,
  Masthead,
  Page,
  PageSection,
  Pagination,
  ToggleGroup,
  ToggleGroupItem,
  Toolbar,
  ToolbarContent,
  ToolbarItem,
  TextInput,
} from '@patternfly/react-core';

type PaginationOption = { title: string; value: number | undefined };

const allIcons = (process.env.COMPONENT_IMPORTS || []) as { componentName: string, componentPath: string }[];
if (!allIcons.length) {
  console.warn('No icons found in process.env.COMPONENT_IMPORTS');
}

// Reusable function for lazy loading icons
const lazyLoadIcon = (name: string, path: string) => {
  return React.lazy<React.ComponentType<{
    iconProps?: IconComponentProps;
    svgProps?: React.SVGProps<SVGSVGElement>;
  }>>(() =>
    import(`${path}.tsx`).catch((err) => {
      console.error(`Failed to load icon ${name}:`, err);
      return { default: () => <div>Error loading icon</div> };
    })
  );
};

const DynamicIcon = ({ name, path }: { name: string, path: string }) => {
  const LazyIcon = useMemo(() => lazyLoadIcon(name, path), [path, name]);

  return (
    <GalleryItem>
      <Card isFullHeight>
        <CardHeader>
          <Content className="pf-v6-u-font-weight-bold pf-v6-u-font-size-sm">
            {name}
          </Content>
        </CardHeader>
        <CardBody className="pf-v6-u-text-align-center">
          <Suspense fallback={<div>Loading...</div>}>
            <LazyIcon svgProps={{ width: 100, height: 100 }} />
          </Suspense>
        </CardBody>
      </Card>
    </GalleryItem>
  );
};

const DynamicIconList = ({ name, path }: { name: string, path: string }) => {
  const LazyIcon = useMemo(() => lazyLoadIcon(name, path), [path, name]);

  return (
    <Flex className="pf-v6-u-mt-md" alignItems={{ default: 'alignItemsCenter' }} spacer={{ default: 'spacerSm' }} flexWrap={{ default: 'nowrap' }}>
      <FlexItem>
        <Suspense fallback={<div>Loading...</div>}>
          <LazyIcon svgProps={{ width: 34, height: 34 }} />
        </Suspense>
      </FlexItem>
      <FlexItem>
        <Content className="pf-v6-u-font-weight-bold pf-v6-u-font-size-sm">
          {name}
        </Content>
      </FlexItem>
    </Flex>
  );
};

const masthead = <Masthead />;

const App = () => {
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [filterText, setFilterText] = useState('');
  const [viewMode, setViewMode] = useState<'cards' | 'list'>('cards');
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState<number | undefined>(undefined);

  const filteredAndSortedIcons = useMemo(() => {
    return allIcons
      .filter(icon => {
        if (!filterText) return true;
        return icon.componentName.toLowerCase().includes(filterText.toLowerCase());
      })
      .sort((a, b) => {
        const nameA = a.componentName.toLowerCase();
        const nameB = b.componentName.toLowerCase();
        return sortOrder === 'asc'
          ? nameA.localeCompare(nameB)
          : nameB.localeCompare(nameA);
      });
  }, [sortOrder, filterText]);

  const totalItems = filteredAndSortedIcons.length;
  const effectivePerPage = perPage === undefined ? totalItems : perPage;
  const startIndex = (page - 1) * effectivePerPage;
  const endIndex = perPage === undefined ? totalItems : startIndex + effectivePerPage;
  const paginatedIcons = filteredAndSortedIcons.slice(startIndex, endIndex);

  const nodes = useMemo(() => {
    return paginatedIcons.map((icon) => (
      viewMode === 'cards' ? (
        <DynamicIcon key={icon.componentPath} name={icon.componentName} path={icon.componentPath} />
      ) : (
        <DynamicIconList key={icon.componentPath} name={icon.componentName} path={icon.componentPath} />
      )
    ));
  }, [paginatedIcons, viewMode]);

  const toggleSort = () => {
    setSortOrder((prev) => (prev === 'asc' ? 'desc' : 'asc'));
  };

  const handleFilterChange = (value: string) => {
    setFilterText(value);
    setPage(1);
  };

  const handleViewToggle = (value: 'cards' | 'list') => {
    setViewMode(value);
    setPage(1);
  };

  const onSetPage = (_event: React.MouseEvent | React.KeyboardEvent | MouseEvent, newPage: number) => {
    setPage(newPage);
  };

  const onPerPageSelect = (_event: React.MouseEvent | React.KeyboardEvent | MouseEvent, newPerPage: number | undefined) => {
    setPerPage(newPerPage);
    setPage(1);
  };

  const paginationOptions: PaginationOption[] = [
    { title: '5', value: 5 },
    { title: '10', value: 10 },
    { title: '20', value: 20 },
    { title: 'All', value: undefined },
  ];

  return (
    <Page
      masthead={masthead}
      additionalGroupedContent={
        <PageSection>
          <Content>
            <h1>Frontend Assets</h1>
          </Content>
        </PageSection>
      }
    >
      <PageSection padding={{ default: 'noPadding' }}>
        <Toolbar className="pf-m-sticky pf-m-elevation-inset pf-v6-u-px-md">
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
                icon={sortOrder === 'asc' ? <SortAlphaUpIcon /> : <SortAlphaDownIcon />}
                aria-label={`Sort icons by name ${sortOrder === 'asc' ? 'ascending' : 'descending'}`}
              >
                Sort by Name
              </Button>
            </ToolbarItem>
            <ToolbarItem align={{ default: 'alignEnd' }}>
              <ToggleGroup aria-label="View toggle">
                <ToggleGroupItem
                  icon={<ThIcon />}
                  buttonId="cards-view"
                  isSelected={viewMode === 'cards'}
                  onChange={() => handleViewToggle('cards')}
                  aria-label="Cards view"
                />
                <ToggleGroupItem
                  icon={<ListIcon />}
                  buttonId="list-view"
                  isSelected={viewMode === 'list'}
                  onChange={() => handleViewToggle('list')}
                  aria-label="List view"
                />
              </ToggleGroup>
            </ToolbarItem>
          </ToolbarContent>
        </Toolbar>
        {viewMode === 'cards' ? (
          <Gallery
            className="pf-v6-u-m-md pf-v6-u-mt-lg"
            minWidths={{ md: '275px' }}
            hasGutter
          >
            {nodes}
          </Gallery>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1rem', padding: '1rem' }}>
            {nodes}
          </div>
        )}
      </PageSection>
      <PageSection
        style={{
          position: 'sticky',
          bottom: 0,
          zIndex: 100,
          boxShadow: '0 -2px 4px rgba(0, 0, 0, 0.1)',
        }}
      >
        <Pagination
          itemCount={totalItems}
          perPage={effectivePerPage}
          page={page}
          onSetPage={onSetPage}
          onPerPageSelect={onPerPageSelect}
          isCompact
          perPageOptions={paginationOptions}
          widgetId="pagination-options-menu"
          titles={{ items: 'icons' }}
        />
      </PageSection>
    </Page>
  );
};

const rootElement = document.createElement('div');
rootElement.id = 'demo-root';
document.body.appendChild(rootElement);
const root = createRoot(rootElement);
root.render(<App />);


