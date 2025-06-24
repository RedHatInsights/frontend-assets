import '@patternfly/react-core/dist/styles/base.css'
import React, { Suspense, useMemo } from 'react';
import {createRoot} from 'react-dom/client'

import { Grid, GridItem, IconComponentProps, Label } from '@patternfly/react-core';



const allIcons = process.env.COMPONENT_IMPORTS as unknown as {componentName: string, componentPath: string}[];
console.log(allIcons);

// Dynamic import component - currently disabled to avoid webpack parsing all files
const DynamicIcon = ({ name, path }: { name: string, path: string }) => {
  const LazyIcon = useMemo(() => {
    console.log(path);
    return React.lazy<React.ComponentType<{
      iconProps?: IconComponentProps;
      svgProps?: React.SVGProps<SVGSVGElement>;
    }>>(() => import(`${path}.tsx`));
  }, [path]);

  return (
    <GridItem style={{border: '1px solid red', width: '140px', height: '140px' }} span={3}>
          <Label>{name}</Label>
          <div style={{padding: 50}}>
            <Suspense fallback={<div>Loading...</div>}>
              <LazyIcon svgProps={{ width: 100, height: 100 }} />
          </Suspense>
          </div>
    </GridItem>
  );
}

const App = () => {
  const nodes = useMemo(() => {
    return allIcons.map((icon, index) => {
      return <DynamicIcon key={index} name={icon.componentName} path={icon.componentPath} />
    })
  }, [allIcons])

  return (
    <Grid>

      {nodes}
    </Grid>
  );
}

const rootElement = document.createElement('div');
rootElement.id = 'demo-root';
document.body.appendChild(rootElement);
const root = createRoot(rootElement);
root.render(<App />);
