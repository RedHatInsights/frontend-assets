# Frontend Assets Icon Components

This file documents the generated React icon components and their usage with ScalprumComponent for dynamic loading.

## Usage

These components are designed to be used with ScalprumComponent for dynamic loading. They are not imported directly.

### Without PatternFly Wrapper (Preserves original SVG dimensions)
```tsx
<ScalprumComponent 
  scope="frontendAssets" 
  module="./ComponentName" 
  svgProps={{width: 50, height: 50}} 
/>
```

### With PatternFly Wrapper (Uses PatternFly Icon styling)
```tsx
<ScalprumComponent 
  scope="frontendAssets" 
  module="./ComponentName" 
  pfIconWrapper={true} 
  iconProps={{size: "lg"}} 
/>
```

### Combined Usage
```tsx
<ScalprumComponent 
  scope="frontendAssets" 
  module="./ComponentName" 
  pfIconWrapper={true}
  iconProps={{size: "md"}}
  svgProps={{className: "custom-icon-class"}} 
/>
```

## Props

All components accept the following props through ScalprumComponent:

- `pfIconWrapper?: boolean` - Whether to wrap the SVG in PatternFly's Icon component
- `iconProps?: IconComponentProps` - Props to pass to the PatternFly Icon wrapper (only used when pfIconWrapper is true)
- `svgProps?: React.SVGProps<SVGSVGElement>` - Props to pass directly to the SVG element

## Module Federation

These components are exposed through module federation with the scope `frontendAssets`. Each component can be loaded using its module name (e.g., `./ComponentName`).

## Component Mappings

| Preview | Component Name | Original SVG Name | Source SVG Path | Generated TSX Path |
|---|---|---|---|---|
| <img src="src/technology-icons/3scale-api-management.svg" alt="3scale-api-management" width="24" height="24" /> | `TechnologyIcons3scaleApiManagementIcon` | `3scale-api-management.svg` | `/technology-icons/3scale-api-management.svg` | `/technology-icons/3scale-api-management.tsx` |
| <img src="src/technology-icons/acm-for-kubernetes.svg" alt="acm-for-kubernetes" width="24" height="24" /> | `TechnologyIconsAcmForKubernetesIcon` | `acm-for-kubernetes.svg` | `/technology-icons/acm-for-kubernetes.svg` | `/technology-icons/acm-for-kubernetes.tsx` |

## Generated Components

Total components generated: 2
