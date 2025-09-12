import React, { Suspense, useMemo, useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import '@patternfly/react-core/dist/styles/base.css';
import '@patternfly/patternfly/patternfly-addons.css';
import { SortAlphaDownIcon, SortAlphaUpIcon, ThIcon, ListIcon, CubesIcon, InfoCircleIcon, ExternalLinkAltIcon } from '@patternfly/react-icons';
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  ClipboardCopy,
  Content,
  Divider,
  EmptyState,
  EmptyStateActions,
  EmptyStateBody,
  EmptyStateFooter,
  Flex,
  FlexItem,
  Gallery,
  GalleryItem,
  IconComponentProps,
  Label,
  Masthead,
  MenuToggle,
  MenuToggleElement,
  Modal,
  ModalVariant,
  Page,
  PageSection,
  Pagination,
  Select,
  SelectList,
  SelectOption,
  Title,
  ToggleGroup,
  ToggleGroupItem,
  Toolbar,
  ToolbarContent,
  ToolbarItem,
  TextInput,
} from '@patternfly/react-core';

type PaginationOption = { title: string; value: number | undefined };

type FolderType = {
  key: string;
  label: string;
  color: 'blue' | 'green' | 'orange' | 'purple' | 'red' | 'teal';
};

// Include technology, partners, and patternfly folders
const FOLDER_TYPES: FolderType[] = [
  { key: 'console', label: 'Console Logos', color: 'purple' },
  { key: 'partners', label: 'Partner logos', color: 'green' },
  { key: 'patternfly', label: 'PatternFly icons', color: 'orange' },
  { key: 'red-hat', label: 'Red Hat Logos', color: 'red' },
  { key: 'technology', label: 'Technology icons', color: 'blue' },
];

const allIcons = (process.env.COMPONENT_IMPORTS || []) as { componentName: string, componentPath: string }[];
if (!allIcons.length) {
  console.warn('No icons found in process.env.COMPONENT_IMPORTS');
}

// Function to determine folder type from component path
const getFolderLabel = (componentPath: string): { text: string; color: 'blue' | 'green' | 'orange' | 'purple' | 'red' | 'teal'; key: string } => {
  if (componentPath.includes('partners-icons/')) {
    return { text: 'Partner logos', color: 'green', key: 'partners' };
  }
  if (componentPath.includes('patternfly-icons/')) {
    return { text: 'PatternFly icons', color: 'orange', key: 'patternfly' };
  }
  if (componentPath.includes('console-logos/')) {
    return { text: 'Console Logos', color: 'purple', key: 'console' };
  }
  if (componentPath.includes('red-hat-logos/')) {
    return { text: 'Red Hat Logos', color: 'red', key: 'red-hat' };
  }
  // Default to technology for all other paths
  return { text: 'Technology icons', color: 'blue', key: 'technology' };
};



const lazyLoadIcon = (name: string, path: string) => {
  return React.lazy<React.ComponentType<{
    iconProps?: IconComponentProps;
    svgProps?: React.SVGProps<SVGSVGElement>;
  }>>(() =>
    import(`${path}.tsx`).catch((err) => {
      console.error(`Failed to load icon ${name}:`, err);
      return { default: () => <div>Failed to load {name}</div> };
    })
  );
};

// Convert component path to proper module name for federation
// Memoized for performance with 289+ icons
const moduleNameCache = new Map<string, string>();

const getModuleName = (path: string): string => {
  if (moduleNameCache.has(path)) {
    return moduleNameCache.get(path)!;
  }
  
  // Extract filename without extension and directory
  const filename = path.split('/').pop()?.replace('./', '') || '';
  
  // Convert kebab-case to PascalCase and add Icon suffix
  const pascalCase = filename
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join('');
  
  const moduleName = `./${pascalCase}Icon`;
  moduleNameCache.set(path, moduleName);
  return moduleName;
};


// Optimized cache for SVG dark background metadata
const svgMetadataCache = new Map<string, boolean | null>();

// Pre-compiled regex for better performance than string.includes()
const DARK_BACKGROUND_REGEX = /<desc>background:dark<\/desc>/;

// Function to parse SVG content and extract dark background metadata
const parseSvgMetadata = async (path: string): Promise<boolean | null> => {
  const cached = svgMetadataCache.get(path);
  if (cached !== undefined) {
    return cached;
  }
  
  try {
    const svgPath = path.startsWith('./') ? path.slice(2) : path;
    const response = await fetch(`/${svgPath}`);
    if (response.ok) {
      const svgText = await response.text();
      const needsDarkBackground = DARK_BACKGROUND_REGEX.test(svgText);
      svgMetadataCache.set(path, needsDarkBackground);
      return needsDarkBackground;
    }
  } catch (error) {
    console.warn(`Error parsing SVG metadata for ${path}:`, error);
  }
  
  // Cache null result to avoid repeated failed fetches
  svgMetadataCache.set(path, null);
  return null;
};

// Pre-defined style objects for icon backgrounds
const DARK_STYLE = { 
  backgroundColor: '#2d3748', 
  border: '1px solid rgba(255, 255, 255, 0.1)' 
};
const LIGHT_STYLE = { 
  backgroundColor: '#f7f7f7', 
  border: '1px solid rgba(0, 0, 0, 0.1)' 
};

// Pre-compiled regex for better performance
const WHITE_REVERSE_REGEX = /\b(white|reverse)\b/i;

// Optimized function to determine background treatment for icons
const getBackgroundStyle = (name: string, path: string, needsDarkBackground?: boolean | null) => {
  // Optimized dark background detection:
  // 1. If SVG metadata is explicitly true -> dark
  // 2. If no metadata available (null/undefined) -> use filename detection
  // 3. If metadata is false -> light (explicit choice)
  const needsDark = needsDarkBackground === true || 
                   (needsDarkBackground == null && WHITE_REVERSE_REGEX.test(name));
  
  return needsDark ? DARK_STYLE : LIGHT_STYLE;
};

const DynamicIcon = ({ name, path }: { name: string, path: string }) => {
  const LazyIcon = useMemo(() => lazyLoadIcon(name, path), [path, name]);
  const folderLabel = useMemo(() => getFolderLabel(path), [path]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [needsDarkBackground, setNeedsDarkBackground] = useState<boolean | null | undefined>(undefined);
  const moduleName = useMemo(() => getModuleName(path), [path]);
  const backgroundStyle = useMemo(() => getBackgroundStyle(name, path, needsDarkBackground), [name, path, needsDarkBackground]);

  // Load SVG metadata asynchronously
  useEffect(() => {
    parseSvgMetadata(path).then(setNeedsDarkBackground);
  }, [path]);

  const handleInfoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsModalOpen(true);
  };

  return (
    <>
      <GalleryItem>
        <Card isFullHeight style={{ minWidth: '280px' }}>
          <CardHeader>
            <Flex justifyContent={{ default: 'justifyContentSpaceBetween' }} alignItems={{ default: 'alignItemsCenter' }}>
              <FlexItem flex={{ default: 'flex_1' }}>
                <Content 
                  className="pf-v6-u-font-weight-bold pf-v6-u-font-size-sm"
                  style={{
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    maxWidth: '100%',
                    color: 'var(--pf-v6-global--Color--100)'
                  }}
                >
                  {name}
                </Content>
              </FlexItem>
              <FlexItem>
                <Button
                  variant="plain"
                  icon={<InfoCircleIcon />}
                  onClick={handleInfoClick}
                  aria-label={`Show details for ${name}`}
                  style={{ 
                    padding: '4px',
                    fontSize: '14px',
                    color: 'var(--pf-v6-global--Color--200)'
                  }}
                />
              </FlexItem>
            </Flex>
          </CardHeader>
          <CardBody className="pf-v6-u-text-align-center">
            <div className="pf-v6-u-display-flex pf-v6-u-align-items-center pf-v6-u-justify-content-center pf-v6-u-p-md pf-v6-u-border-radius-sm" style={{
              backgroundColor: backgroundStyle.backgroundColor,
              border: backgroundStyle.border,
              minHeight: '132px',
              minWidth: '132px',
              transition: 'all 0.2s ease'
            }}>
            <Suspense fallback={<div>Loading...</div>}>
              <LazyIcon svgProps={{ 
                width: 'auto', 
                height: 80 
              }} />
            </Suspense>
            </div>
          </CardBody>
          <CardFooter>
            <Label 
              color={folderLabel.color} 
              isCompact
              style={{
                maxWidth: '100%',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis'
              }}
            >
              {folderLabel.text}
            </Label>
          </CardFooter>
        </Card>
      </GalleryItem>

      <Modal
        variant={ModalVariant.large}
        title={`Icon Details: ${name}`}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      >
        <div className="pf-v6-u-p-lg">
          <Title headingLevel="h4" size="md" className="pf-v6-u-mb-md">
            Usage Examples
          </Title>
          <p style={{ marginBottom: '16px', fontSize: '14px', color: 'var(--pf-v6-global--Color--200)' }}>
            Copy any of these code examples to use the icon in your application:
          </p>
          
          <div className="pf-v6-u-mb-lg">
            <Title headingLevel="h5" size="md" className="pf-v6-u-mb-sm">
              Without PatternFly Wrapper (Preserves original SVG dimensions)
            </Title>
            <ClipboardCopy isReadOnly>
{`<ScalprumComponent 
  scope="frontendAssets" 
  module="${moduleName}" 
  svgProps={{width: 50, height: 50}} 
/>`}
            </ClipboardCopy>
          </div>

          <div className="pf-v6-u-mb-lg">
            <Title headingLevel="h5" size="md" className="pf-v6-u-mb-sm">
              With PatternFly Wrapper (Uses PatternFly Icon styling)
            </Title>
            <ClipboardCopy isReadOnly>
{`<ScalprumComponent 
  scope="frontendAssets" 
  module="${moduleName}" 
  pfIconWrapper={true} 
  iconProps={{size: "lg"}} 
/>`}
            </ClipboardCopy>
          </div>

          <div className="pf-v6-u-mb-lg">
            <Title headingLevel="h5" size="md" className="pf-v6-u-mb-sm">
              Combined Usage (PatternFly wrapper + custom SVG props)
            </Title>
            <ClipboardCopy isReadOnly>
{`<ScalprumComponent 
  scope="frontendAssets" 
  module="${moduleName}" 
  pfIconWrapper={true}
  iconProps={{size: "md"}}
  svgProps={{className: "custom-icon-class"}} 
/>`}
            </ClipboardCopy>
          </div>

          <div className="pf-v6-u-mb-lg">
            <Title headingLevel="h5" size="md" className="pf-v6-u-mb-sm">
              Full URL
            </Title>
            <ClipboardCopy isReadOnly>
{`https://console.redhat.com/apps/frontend-assets/${path.replace('src/', '').replace('./', '')}.svg`}
            </ClipboardCopy>
          </div>

          <div>
            <Title headingLevel="h5" size="md" className="pf-v6-u-mb-sm">
              Root-Relative URL
            </Title>
            <ClipboardCopy isReadOnly>
{`/apps/frontend-assets/${path.replace('src/', '').replace('./', '')}.svg`}
            </ClipboardCopy>
          </div>
        </div>
      </Modal>
    </>
  );
};

const DynamicIconList = ({ name, path }: { name: string, path: string }) => {
  const LazyIcon = useMemo(() => lazyLoadIcon(name, path), [path, name]);
  const folderLabel = useMemo(() => getFolderLabel(path), [path]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [needsDarkBackground, setNeedsDarkBackground] = useState<boolean | null | undefined>(undefined);
  const moduleName = useMemo(() => getModuleName(path), [path]);
  const backgroundStyle = useMemo(() => getBackgroundStyle(name, path, needsDarkBackground), [name, path, needsDarkBackground]);

  // Load SVG metadata asynchronously
  useEffect(() => {
    parseSvgMetadata(path).then(setNeedsDarkBackground);
  }, [path]);

  const handleInfoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsModalOpen(true);
  };

  return (
    <>
      <Flex alignItems={{ default: 'alignItemsFlexStart' }} spacer={{ default: 'spacerSm' }} flexWrap={{ default: 'nowrap' }} style={{ minHeight: '82px', paddingTop: '8px', paddingBottom: '8px' }}>
        <FlexItem>
          <div className="pf-v6-u-display-flex pf-v6-u-align-items-center pf-v6-u-justify-content-center pf-v6-u-p-sm pf-v6-u-border-radius-sm pf-v6-u-flex-shrink-0" style={{
            backgroundColor: backgroundStyle.backgroundColor,
            border: backgroundStyle.border,
            minHeight: '66px',
            minWidth: '66px',
            transition: 'all 0.2s ease'
          }}>
            <Suspense fallback={<div>Loading...</div>}>
              <LazyIcon svgProps={{ 
                width: 50, 
                height: 50 
              }} />
            </Suspense>
          </div>
        </FlexItem>
        <FlexItem flex={{ default: 'flex_1' }}>
          <Flex direction={{ default: 'column' }}>
            <FlexItem>
              <Content 
                className="pf-v6-u-font-weight-bold pf-v6-u-font-size-sm"
                style={{
                  wordBreak: 'break-word',
                  lineHeight: '1.3',
                  maxWidth: '100%',
                  display: '-webkit-box',
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden'
                }}
                title={name} // Show full name on hover
              >
                {name}
              </Content>
            </FlexItem>
            <FlexItem>
              <Label 
                color={folderLabel.color} 
                isCompact
                style={{
                  maxWidth: '200px',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis'
                }}
              >
                {folderLabel.text}
              </Label>
            </FlexItem>
          </Flex>
        </FlexItem>
        <FlexItem>
          <Button
            variant="plain"
            icon={<InfoCircleIcon />}
            onClick={handleInfoClick}
            aria-label={`Show details for ${name}`}
            style={{ 
              padding: '4px',
              fontSize: '14px',
              color: 'var(--pf-v6-global--Color--200)'
            }}
          />
        </FlexItem>
      </Flex>

      <Modal
        variant={ModalVariant.large}
        title={`Icon Details: ${name}`}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      >
        <div className="pf-v6-u-p-lg">
          <Title headingLevel="h4" size="md" className="pf-v6-u-mb-md">
            Usage Examples
          </Title>
          <p style={{ marginBottom: '16px', fontSize: '14px', color: 'var(--pf-v6-global--Color--200)' }}>
            Copy any of these code examples to use the icon in your application:
          </p>
          
          <div className="pf-v6-u-mb-lg">
            <Title headingLevel="h5" size="md" className="pf-v6-u-mb-sm">
              Without PatternFly Wrapper (Preserves original SVG dimensions)
            </Title>
            <ClipboardCopy isReadOnly>
{`<ScalprumComponent 
  scope="frontendAssets" 
  module="${moduleName}" 
  svgProps={{width: 50, height: 50}} 
/>`}
            </ClipboardCopy>
          </div>

          <div className="pf-v6-u-mb-lg">
            <Title headingLevel="h5" size="md" className="pf-v6-u-mb-sm">
              With PatternFly Wrapper (Uses PatternFly Icon styling)
            </Title>
            <ClipboardCopy isReadOnly>
{`<ScalprumComponent 
  scope="frontendAssets" 
  module="${moduleName}" 
  pfIconWrapper={true} 
  iconProps={{size: "lg"}} 
/>`}
            </ClipboardCopy>
          </div>

          <div className="pf-v6-u-mb-lg">
            <Title headingLevel="h5" size="md" className="pf-v6-u-mb-sm">
              Combined Usage (PatternFly wrapper + custom SVG props)
            </Title>
            <ClipboardCopy isReadOnly>
{`<ScalprumComponent 
  scope="frontendAssets" 
  module="${moduleName}" 
  pfIconWrapper={true}
  iconProps={{size: "md"}}
  svgProps={{className: "custom-icon-class"}} 
/>`}
            </ClipboardCopy>
          </div>

          <div className="pf-v6-u-mb-lg">
            <Title headingLevel="h5" size="md" className="pf-v6-u-mb-sm">
              Full URL
            </Title>
            <ClipboardCopy isReadOnly>
{`https://console.redhat.com/apps/frontend-assets/${path.replace('src/', '').replace('./', '')}.svg`}
            </ClipboardCopy>
          </div>

          <div>
            <Title headingLevel="h5" size="md" className="pf-v6-u-mb-sm">
              Root-Relative URL
            </Title>
            <ClipboardCopy isReadOnly>
{`/apps/frontend-assets/${path.replace('src/', '').replace('./', '')}.svg`}
            </ClipboardCopy>
          </div>
        </div>
      </Modal>
    </>
  );
};


const masthead = <Masthead />;

// Custom hook for persistent state
function usePersistentState<T>(key: string, initialValue: T): [T, (value: T | ((prev: T) => T)) => void] {
  const [state, setState] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.warn(`Error reading localStorage key "${key}":`, error);
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(state));
    } catch (error) {
      console.warn(`Error setting localStorage key "${key}":`, error);
    }
  }, [key, state]);

  return [state, setState];
}

// Custom hook for persistent Set state
function usePersistentSetState(key: string, initialValue: Set<string>): [Set<string>, (value: Set<string> | ((prev: Set<string>) => Set<string>)) => void] {
  const [state, setState] = useState<Set<string>>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? new Set(JSON.parse(item)) : initialValue;
    } catch (error) {
      console.warn(`Error reading localStorage key "${key}":`, error);
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(Array.from(state)));
    } catch (error) {
      console.warn(`Error setting localStorage key "${key}":`, error);
    }
  }, [key, state]);

  return [state, setState];
}

const App = () => {
  const [sortOrder, setSortOrder] = usePersistentState<'asc' | 'desc'>('demo-sort-order', 'asc');
  const [filterText, setFilterText] = usePersistentState<string>('demo-filter-text', '');
  const [viewMode, setViewMode] = usePersistentState<'cards' | 'list'>('demo-view-mode', 'cards');
  const [page, setPage] = usePersistentState<number>('demo-page', 1);
  const [perPage, setPerPage] = usePersistentState<number | undefined>('demo-per-page', undefined);
  
  // Get all available folder types (technology and partners)
  const availableFolderTypes = FOLDER_TYPES;
  
  // Initialize selectedImageTypes with all available types by default
  const [selectedImageTypes, setSelectedImageTypes] = usePersistentSetState(
    'demo-selected-image-types',
    new Set(availableFolderTypes.map(f => f.key))
  );
  const [isSelectOpen, setIsSelectOpen] = useState(false);
  
  const filteredAndSortedIcons = useMemo(() => {
    return allIcons
      .filter(icon => {
        // Filter by text
        if (filterText && !icon.componentName.toLowerCase().includes(filterText.toLowerCase())) {
          return false;
        }
        
        // Filter by image types - show only if icon's type is selected
        if (selectedImageTypes.size === 0) {
          return false;
        }
        
        const folderLabel = getFolderLabel(icon.componentPath);
        return selectedImageTypes.has(folderLabel.key);
      })
      .sort((a, b) => {
        const nameA = a.componentName.toLowerCase();
        const nameB = b.componentName.toLowerCase();
        return sortOrder === 'asc'
          ? nameA.localeCompare(nameB)
          : nameB.localeCompare(nameA);
      });
  }, [sortOrder, filterText, selectedImageTypes]);

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
    if (value !== filterText) {
      setFilterText(value);
      setPage(1);
    }
  };

  const handleViewToggle = (value: 'cards' | 'list') => {
    if (value !== viewMode) {
      setViewMode(value);
      setPage(1);
    }
  };

  const handleImageTypeSelect = (_event: React.MouseEvent<Element, MouseEvent> | undefined, value: string | number | undefined) => {
    if (typeof value === 'string') {
      const newSelectedTypes = new Set(selectedImageTypes);
      if (newSelectedTypes.has(value)) {
        newSelectedTypes.delete(value);
      } else {
        newSelectedTypes.add(value);
      }
      setSelectedImageTypes(newSelectedTypes);
      setPage(1);
    }
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

  // Get display text for multiselect - simplified since we only have Technology
  const getSelectedText = () => {
    if (selectedImageTypes.size === 0) {
      return 'No types selected';
    }
    
    // If all available types are selected, show "Select image types"
    if (selectedImageTypes.size === availableFolderTypes.length) {
      return 'Select image types';
    }
    
    // If only one type is selected, show its name
    if (selectedImageTypes.size === 1) {
      const selectedType = Array.from(selectedImageTypes)[0];
      const folderType = availableFolderTypes.find(f => f.key === selectedType);
      return folderType ? folderType.label : 'Unknown type';
    }
    
    // If multiple but not all types are selected, show count
    return `${selectedImageTypes.size} types selected`;
  };

  return (
    <Page
      masthead={masthead}
      additionalGroupedContent={
        <PageSection>
          <Content>
            <h1>Hybrid Cloud Console Image Library</h1>
          </Content>
        </PageSection>
      }
    >
      <PageSection padding={{ default: 'noPadding' }} style={{ display: 'flex', flexDirection: 'column', height: 'calc(100vh - var(--pf-v6-global--spacer--3xl))', backgroundColor: 'var(--pf-v6-global--BackgroundColor--100)' }}>
        <Toolbar className="pf-m-sticky pf-m-elevation-inset pf-v6-u-px-md">
          <ToolbarContent>
            <ToolbarItem className="pf-v6-u-display-flex pf-v6-u-align-items-center">
              <TextInput
                type="search"
                placeholder="Filter by name..."
                value={filterText}
                onChange={(_event, value) => handleFilterChange(value)}
                aria-label="Filter icons by name"
                style={{ width: '400px' }}
              />
            </ToolbarItem>
            <ToolbarItem>
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                height: 'var(--pf-v6-global--target--size--MinHeight)'
              }}>
                <Select
                  id="image-type-select"
                  isOpen={isSelectOpen}
                  selected={Array.from(selectedImageTypes)}
                  onSelect={handleImageTypeSelect}
                  onOpenChange={(isOpen) => setIsSelectOpen(isOpen)}
                  toggle={(toggleRef: React.Ref<MenuToggleElement>) => (
                    <MenuToggle
                      ref={toggleRef}
                      onClick={() => setIsSelectOpen(!isSelectOpen)}
                      isExpanded={isSelectOpen}
                      style={{ 
                        fontSize: 'var(--pf-v6-global--FontSize--sm)', 
                        lineHeight: 'var(--pf-v6-global--LineHeight--md)', 
                        width: 'var(--pf-v6-global--spacer--5xl)' 
                      }}
                    >
                      {getSelectedText()}
                    </MenuToggle>
                  )}
                  shouldFocusToggleOnSelect
                >
                  <SelectList>
                    {availableFolderTypes.map(folderType => (
                      <SelectOption
                        key={folderType.key}
                        value={folderType.key}
                        isSelected={selectedImageTypes.has(folderType.key)}
                      >
                        {folderType.label}
                      </SelectOption>
                    ))}
                  </SelectList>
                </Select>
              </div>
            </ToolbarItem>
            <ToolbarItem className="pf-v6-u-display-flex pf-v6-u-align-items-center">
              <Button
                variant="plain"
                onClick={toggleSort}
                icon={sortOrder === 'asc' ? <SortAlphaUpIcon /> : <SortAlphaDownIcon />}
                aria-label={`Sort icons by name ${sortOrder === 'asc' ? 'ascending' : 'descending'}`}
              >
                Sort by Name
              </Button>
            </ToolbarItem>
            <ToolbarItem className="pf-v6-u-display-flex pf-v6-u-align-items-center">
              <Button
                variant="primary"
                component="a"
                href="https://www.patternfly.org/design-foundations/icons"
                target="_blank"
                rel="noopener noreferrer"
                icon={<ExternalLinkAltIcon />}
                iconPosition="end"
              >
                PF Icons Guide
              </Button>
            </ToolbarItem>
            <ToolbarItem className="pf-v6-u-display-flex pf-v6-u-align-items-center">
              <Button
                variant="primary"
                component="a"
                href="https://patternfly-react.surge.sh/icons/"
                target="_blank"
                rel="noopener noreferrer"
                icon={<ExternalLinkAltIcon />}
                iconPosition="end"
              >
                Full PF Library
              </Button>
            </ToolbarItem>
            <ToolbarItem align={{ default: 'alignEnd' }} className="pf-v6-u-display-flex pf-v6-u-align-items-center">
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
        {nodes.length === 0 ? (
          <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            flex: 1,
            height: '100%',
            padding: '32px'
          }}>
            <EmptyState variant="lg">
              <CubesIcon 
                style={{ 
                  fontSize: '80px', 
                  color: 'var(--pf-v6-global--Color--200)', 
                  marginBottom: 'var(--pf-v6-global--spacer--xl)' 
                }} 
              />
              <Title headingLevel="h2" size="xl">
                {selectedImageTypes.size === 0 
                  ? "No image types selected"
                  : filterText 
                    ? "No matching icons"
                    : "No icons found"
                }
              </Title>
              <EmptyStateBody>
                {selectedImageTypes.size === 0 
                  ? "Select image types from the dropdown above to view available icons and components."
                  : filterText 
                    ? `No icons match your search for "${filterText}". Try adjusting your search terms or clearing the filter to see all available icons.`
                    : "No icons are currently available for the selected image types. Check back later or select different types."
                }
              </EmptyStateBody>
              <EmptyStateFooter>
                <EmptyStateActions>
                  {filterText ? (
                    <Button variant="primary" onClick={() => {
                      setFilterText('');
                      setPage(1);
                    }}>
                      Clear search
                    </Button>
                  ) : selectedImageTypes.size === 0 ? (
                    <Button variant="primary" onClick={() => {
                      setSelectedImageTypes(new Set(availableFolderTypes.map(f => f.key)));
                      setPage(1);
                    }}>
                      Show all icons
                    </Button>
                  ) : null}
                  {filterText && selectedImageTypes.size === 0 && (
                    <Button variant="secondary" onClick={() => {
                      setSelectedImageTypes(new Set(availableFolderTypes.map(f => f.key)));
                      setPage(1);
                    }}>
                      Select All Types
                    </Button>
                  )}
                </EmptyStateActions>
              </EmptyStateFooter>
            </EmptyState>
          </div>
        ) : (
          <div style={{ flex: 1, overflow: 'auto', paddingBottom: 'var(--pf-v6-global--spacer--2xl)' }}>
            {viewMode === 'cards' ? (
              <Gallery
                className="pf-v6-u-m-md pf-v6-u-mt-lg"
                minWidths={{ md: '450px' }}
                hasGutter
              >
                {nodes}
              </Gallery>
            ) : (
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', 
                gap: '24px', 
                padding: '32px 24px' 
              }}>
                {nodes}
              </div>
            )}
          </div>
        )}
        <div
          style={{
            position: 'sticky',
            bottom: 0,
            zIndex: 100,
            backgroundColor: 'var(--pf-v6-global--BackgroundColor--100)',
            boxShadow: 'var(--pf-v6-global--BoxShadow--sm)',
            padding: 'var(--pf-v6-global--spacer--sm) var(--pf-v6-global--spacer--md)',
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
        </div>
      </PageSection>
    </Page>
  );
};

const rootElement = document.createElement('div');
rootElement.id = 'demo-root';
document.body.appendChild(rootElement);
const root = createRoot(rootElement);
root.render(<App />);


