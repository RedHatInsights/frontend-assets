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
| <img src="src/ansible-hub/partner-logos/aruba.svg" alt="aruba" width="24" height="24" /> | `AnsibleHubPartnerLogosArubaIcon` | `aruba.svg` | `/ansible-hub/partner-logos/aruba.svg` | `/ansible-hub/partner-logos/aruba.tsx` |
| <img src="src/ansible-hub/partner-logos/Avantra-logo-stacked-full-colours.svg" alt="Avantra-logo-stacked-full-colours" width="24" height="24" /> | `AnsibleHubPartnerLogosAvantraLogoStackedFullColoursIcon` | `Avantra-logo-stacked-full-colours.svg` | `/ansible-hub/partner-logos/Avantra-logo-stacked-full-colours.svg` | `/ansible-hub/partner-logos/Avantra-logo-stacked-full-colours.tsx` |
| <img src="src/ansible-hub/partner-logos/cohesity_logo.svg" alt="cohesity_logo" width="24" height="24" /> | `AnsibleHubPartnerLogosCohesityLogoIcon` | `cohesity_logo.svg` | `/ansible-hub/partner-logos/cohesity_logo.svg` | `/ansible-hub/partner-logos/cohesity_logo.tsx` |
| <img src="src/ansible-hub/partner-logos/crowdstrike-logo.svg" alt="crowdstrike-logo" width="24" height="24" /> | `AnsibleHubPartnerLogosCrowdstrikeLogoIcon` | `crowdstrike-logo.svg` | `/ansible-hub/partner-logos/crowdstrike-logo.svg` | `/ansible-hub/partner-logos/crowdstrike-logo.tsx` |
| <img src="src/ansible-hub/partner-logos/default-logo.svg" alt="default-logo" width="24" height="24" /> | `AnsibleHubPartnerLogosDefaultLogoIcon` | `default-logo.svg` | `/ansible-hub/partner-logos/default-logo.svg` | `/ansible-hub/partner-logos/default-logo.tsx` |
| <img src="src/ansible-hub/partner-logos/f5.svg" alt="f5" width="24" height="24" /> | `AnsibleHubPartnerLogosF5Icon` | `f5.svg` | `/ansible-hub/partner-logos/f5.svg` | `/ansible-hub/partner-logos/f5.tsx` |
| <img src="src/ansible-hub/partner-logos/frrouting.svg" alt="frrouting" width="24" height="24" /> | `AnsibleHubPartnerLogosFrroutingIcon` | `frrouting.svg` | `/ansible-hub/partner-logos/frrouting.svg` | `/ansible-hub/partner-logos/frrouting.tsx` |
| <img src="src/ansible-hub/partner-logos/Juniper_Networks_logo.svg" alt="Juniper_Networks_logo" width="24" height="24" /> | `AnsibleHubPartnerLogosJuniperNetworksLogoIcon` | `Juniper_Networks_logo.svg` | `/ansible-hub/partner-logos/Juniper_Networks_logo.svg` | `/ansible-hub/partner-logos/Juniper_Networks_logo.tsx` |
| <img src="src/ansible-hub/partner-logos/logo2022.svg" alt="logo2022" width="24" height="24" /> | `AnsibleHubPartnerLogosLogo2022Icon` | `logo2022.svg` | `/ansible-hub/partner-logos/logo2022.svg` | `/ansible-hub/partner-logos/logo2022.tsx` |
| <img src="src/ansible-hub/partner-logos/netapp.svg" alt="netapp" width="24" height="24" /> | `AnsibleHubPartnerLogosNetappIcon` | `netapp.svg` | `/ansible-hub/partner-logos/netapp.svg` | `/ansible-hub/partner-logos/netapp.tsx` |
| <img src="src/ansible-hub/partner-logos/Nutanix_Logo.svg" alt="Nutanix_Logo" width="24" height="24" /> | `AnsibleHubPartnerLogosNutanixLogoIcon` | `Nutanix_Logo.svg` | `/ansible-hub/partner-logos/Nutanix_Logo.svg` | `/ansible-hub/partner-logos/Nutanix_Logo.tsx` |
| <img src="src/ansible-hub/partner-logos/Nvidia_logo.svg" alt="Nvidia_logo" width="24" height="24" /> | `AnsibleHubPartnerLogosNvidiaLogoIcon` | `Nvidia_logo.svg` | `/ansible-hub/partner-logos/Nvidia_logo.svg` | `/ansible-hub/partner-logos/Nvidia_logo.tsx` |
| <img src="src/ansible-hub/partner-logos/opensvc-logo-2018.svg" alt="opensvc-logo-2018" width="24" height="24" /> | `AnsibleHubPartnerLogosOpensvcLogo2018Icon` | `opensvc-logo-2018.svg` | `/ansible-hub/partner-logos/opensvc-logo-2018.svg` | `/ansible-hub/partner-logos/opensvc-logo-2018.tsx` |
| <img src="src/ansible-hub/partner-logos/sensu.svg" alt="sensu" width="24" height="24" /> | `AnsibleHubPartnerLogosSensuIcon` | `sensu.svg` | `/ansible-hub/partner-logos/sensu.svg` | `/ansible-hub/partner-logos/sensu.tsx` |
| <img src="src/ansible-hub/partner-logos/vyos-logo.svg" alt="vyos-logo" width="24" height="24" /> | `AnsibleHubPartnerLogosVyosLogoIcon` | `vyos-logo.svg` | `/ansible-hub/partner-logos/vyos-logo.svg` | `/ansible-hub/partner-logos/vyos-logo.tsx` |
| <img src="src/ask-red-hat/icon.svg" alt="icon" width="24" height="24" /> | `AskRedHatIconIcon` | `icon.svg` | `/ask-red-hat/icon.svg` | `/ask-red-hat/icon.tsx` |
| <img src="src/background-images/bg__hero.svg" alt="bg__hero" width="24" height="24" /> | `BackgroundImagesBgHeroIcon` | `bg__hero.svg` | `/background-images/bg__hero.svg` | `/background-images/bg__hero.tsx` |
| <img src="src/background-images/fedora-background.svg" alt="fedora-background" width="24" height="24" /> | `BackgroundImagesFedoraBackgroundIcon` | `fedora-background.svg` | `/background-images/fedora-background.svg` | `/background-images/fedora-background.tsx` |
| <img src="src/background-images/fedora-background-left.svg" alt="fedora-background-left" width="24" height="24" /> | `BackgroundImagesFedoraBackgroundLeftIcon` | `fedora-background-left.svg` | `/background-images/fedora-background-left.svg` | `/background-images/fedora-background-left.tsx` |
| <img src="src/background-images/img__cloud-containers.svg" alt="img__cloud-containers" width="24" height="24" /> | `BackgroundImagesImgCloudContainersIcon` | `img__cloud-containers.svg` | `/background-images/img__cloud-containers.svg` | `/background-images/img__cloud-containers.tsx` |
| <img src="src/background-images/img__hybrid-cloud.svg" alt="img__hybrid-cloud" width="24" height="24" /> | `BackgroundImagesImgHybridCloudIcon` | `img__hybrid-cloud.svg` | `/background-images/img__hybrid-cloud.svg` | `/background-images/img__hybrid-cloud.tsx` |
| <img src="src/console-landing/ansible.svg" alt="ansible" width="24" height="24" /> | `ConsoleLandingAnsibleIcon` | `ansible.svg` | `/console-landing/ansible.svg` | `/console-landing/ansible.tsx` |
| <img src="src/console-landing/insights.svg" alt="insights" width="24" height="24" /> | `ConsoleLandingInsightsIcon` | `insights.svg` | `/console-landing/insights.svg` | `/console-landing/insights.tsx` |
| <img src="src/console-landing/openshift.svg" alt="openshift" width="24" height="24" /> | `ConsoleLandingOpenshiftIcon` | `openshift.svg` | `/console-landing/openshift.svg` | `/console-landing/openshift.tsx` |
| <img src="src/console-landing/widget-explore/Explore_CentOS-to-RHEL.svg" alt="Explore_CentOS-to-RHEL" width="24" height="24" /> | `ConsoleLandingWidgetExploreExploreCentOSToRHELIcon` | `Explore_CentOS-to-RHEL.svg` | `/console-landing/widget-explore/Explore_CentOS-to-RHEL.svg` | `/console-landing/widget-explore/Explore_CentOS-to-RHEL.tsx` |
| <img src="src/console-landing/widget-explore/Explore_Insights-analyze.svg" alt="Explore_Insights-analyze" width="24" height="24" /> | `ConsoleLandingWidgetExploreExploreInsightsAnalyzeIcon` | `Explore_Insights-analyze.svg` | `/console-landing/widget-explore/Explore_Insights-analyze.svg` | `/console-landing/widget-explore/Explore_Insights-analyze.tsx` |
| <img src="src/console-landing/widget-explore/Explore_subs.svg" alt="Explore_subs" width="24" height="24" /> | `ConsoleLandingWidgetExploreExploreSubsIcon` | `Explore_subs.svg` | `/console-landing/widget-explore/Explore_subs.svg` | `/console-landing/widget-explore/Explore_subs.tsx` |
| <img src="src/console-landing/widget-explore/logo_hat-only.svg" alt="logo_hat-only" width="24" height="24" /> | `ConsoleLandingWidgetExploreLogoHatOnlyIcon` | `logo_hat-only.svg` | `/console-landing/widget-explore/logo_hat-only.svg` | `/console-landing/widget-explore/logo_hat-only.tsx` |
| <img src="src/console-landing/widget-explore/Logo-Red_Hat-AWS-A-Standard-RGB.svg" alt="Logo-Red_Hat-AWS-A-Standard-RGB" width="24" height="24" /> | `ConsoleLandingWidgetExploreLogoRedHatAWSAStandardRGBIcon` | `Logo-Red_Hat-AWS-A-Standard-RGB.svg` | `/console-landing/widget-explore/Logo-Red_Hat-AWS-A-Standard-RGB.svg` | `/console-landing/widget-explore/Logo-Red_Hat-AWS-A-Standard-RGB.tsx` |
| <img src="src/console-landing/widget-explore/Logo-Red_Hat-Developer-A-Standard-RGB.svg" alt="Logo-Red_Hat-Developer-A-Standard-RGB" width="24" height="24" /> | `ConsoleLandingWidgetExploreLogoRedHatDeveloperAStandardRGBIcon` | `Logo-Red_Hat-Developer-A-Standard-RGB.svg` | `/console-landing/widget-explore/Logo-Red_Hat-Developer-A-Standard-RGB.svg` | `/console-landing/widget-explore/Logo-Red_Hat-Developer-A-Standard-RGB.tsx` |
| <img src="src/console-landing/widget-explore/rocket.svg" alt="rocket" width="24" height="24" /> | `ConsoleLandingWidgetExploreRocketIcon` | `rocket.svg` | `/console-landing/widget-explore/rocket.svg` | `/console-landing/widget-explore/rocket.tsx` |
| <img src="src/console-logos/Logo-Red_Hat-A-Standard-RGB.svg" alt="Logo-Red_Hat-A-Standard-RGB" width="24" height="24" /> | `ConsoleLogosLogoRedHatAStandardRGBIcon` | `Logo-Red_Hat-A-Standard-RGB.svg` | `/console-logos/Logo-Red_Hat-A-Standard-RGB.svg` | `/console-logos/Logo-Red_Hat-A-Standard-RGB.tsx` |
| <img src="src/console-logos/Logo-Red_Hat-Hybrid_Cloud_Console-A-Black-RGB.svg" alt="Logo-Red_Hat-Hybrid_Cloud_Console-A-Black-RGB" width="24" height="24" /> | `ConsoleLogosLogoRedHatHybridCloudConsoleABlackRGBIcon` | `Logo-Red_Hat-Hybrid_Cloud_Console-A-Black-RGB.svg` | `/console-logos/Logo-Red_Hat-Hybrid_Cloud_Console-A-Black-RGB.svg` | `/console-logos/Logo-Red_Hat-Hybrid_Cloud_Console-A-Black-RGB.tsx` |
| <img src="src/console-logos/Logo-Red_Hat-Hybrid-Cloud-Console-A-Black-RGB.svg" alt="Logo-Red_Hat-Hybrid-Cloud-Console-A-Black-RGB" width="24" height="24" /> | `ConsoleLogosLogoRedHatHybridCloudConsoleABlackRGBIcon` | `Logo-Red_Hat-Hybrid-Cloud-Console-A-Black-RGB.svg` | `/console-logos/Logo-Red_Hat-Hybrid-Cloud-Console-A-Black-RGB.svg` | `/console-logos/Logo-Red_Hat-Hybrid-Cloud-Console-A-Black-RGB.tsx` |
| <img src="src/console-logos/Logo-Red_Hat-Hybrid_Cloud_Console-A-Red-RGB.svg" alt="Logo-Red_Hat-Hybrid_Cloud_Console-A-Red-RGB" width="24" height="24" /> | `ConsoleLogosLogoRedHatHybridCloudConsoleARedRGBIcon` | `Logo-Red_Hat-Hybrid_Cloud_Console-A-Red-RGB.svg` | `/console-logos/Logo-Red_Hat-Hybrid_Cloud_Console-A-Red-RGB.svg` | `/console-logos/Logo-Red_Hat-Hybrid_Cloud_Console-A-Red-RGB.tsx` |
| <img src="src/console-logos/Logo-Red_Hat-Hybrid-Cloud-Console-A-Red-RGB.svg" alt="Logo-Red_Hat-Hybrid-Cloud-Console-A-Red-RGB" width="24" height="24" /> | `ConsoleLogosLogoRedHatHybridCloudConsoleARedRGBIcon` | `Logo-Red_Hat-Hybrid-Cloud-Console-A-Red-RGB.svg` | `/console-logos/Logo-Red_Hat-Hybrid-Cloud-Console-A-Red-RGB.svg` | `/console-logos/Logo-Red_Hat-Hybrid-Cloud-Console-A-Red-RGB.tsx` |
| <img src="src/console-logos/Logo-Red_Hat-Hybrid_Cloud_Console-A-Reverse-RGB.svg" alt="Logo-Red_Hat-Hybrid_Cloud_Console-A-Reverse-RGB" width="24" height="24" /> | `ConsoleLogosLogoRedHatHybridCloudConsoleAReverseRGBIcon` | `Logo-Red_Hat-Hybrid_Cloud_Console-A-Reverse-RGB.svg` | `/console-logos/Logo-Red_Hat-Hybrid_Cloud_Console-A-Reverse-RGB.svg` | `/console-logos/Logo-Red_Hat-Hybrid_Cloud_Console-A-Reverse-RGB.tsx` |
| <img src="src/console-logos/Logo-Red_Hat-Hybrid-Cloud-Console-A-Reverse-RGB.svg" alt="Logo-Red_Hat-Hybrid-Cloud-Console-A-Reverse-RGB" width="24" height="24" /> | `ConsoleLogosLogoRedHatHybridCloudConsoleAReverseRGBIcon` | `Logo-Red_Hat-Hybrid-Cloud-Console-A-Reverse-RGB.svg` | `/console-logos/Logo-Red_Hat-Hybrid-Cloud-Console-A-Reverse-RGB.svg` | `/console-logos/Logo-Red_Hat-Hybrid-Cloud-Console-A-Reverse-RGB.tsx` |
| <img src="src/console-logos/Logo-Red_Hat-Hybrid_Cloud_Console-A-Standard-RGB.svg" alt="Logo-Red_Hat-Hybrid_Cloud_Console-A-Standard-RGB" width="24" height="24" /> | `ConsoleLogosLogoRedHatHybridCloudConsoleAStandardRGBIcon` | `Logo-Red_Hat-Hybrid_Cloud_Console-A-Standard-RGB.svg` | `/console-logos/Logo-Red_Hat-Hybrid_Cloud_Console-A-Standard-RGB.svg` | `/console-logos/Logo-Red_Hat-Hybrid_Cloud_Console-A-Standard-RGB.tsx` |
| <img src="src/console-logos/Logo-Red_Hat-Hybrid-Cloud-Console-A-Standard-RGB.svg" alt="Logo-Red_Hat-Hybrid-Cloud-Console-A-Standard-RGB" width="24" height="24" /> | `ConsoleLogosLogoRedHatHybridCloudConsoleAStandardRGBIcon` | `Logo-Red_Hat-Hybrid-Cloud-Console-A-Standard-RGB.svg` | `/console-logos/Logo-Red_Hat-Hybrid-Cloud-Console-A-Standard-RGB.svg` | `/console-logos/Logo-Red_Hat-Hybrid-Cloud-Console-A-Standard-RGB.tsx` |
| <img src="src/console-logos/Logo-Red_Hat-Hybrid_Cloud_Console-A-White-RGB.svg" alt="Logo-Red_Hat-Hybrid_Cloud_Console-A-White-RGB" width="24" height="24" /> | `ConsoleLogosLogoRedHatHybridCloudConsoleAWhiteRGBIcon` | `Logo-Red_Hat-Hybrid_Cloud_Console-A-White-RGB.svg` | `/console-logos/Logo-Red_Hat-Hybrid_Cloud_Console-A-White-RGB.svg` | `/console-logos/Logo-Red_Hat-Hybrid_Cloud_Console-A-White-RGB.tsx` |
| <img src="src/console-logos/Logo-Red_Hat-Hybrid-Cloud-Console-A-White-RGB.svg" alt="Logo-Red_Hat-Hybrid-Cloud-Console-A-White-RGB" width="24" height="24" /> | `ConsoleLogosLogoRedHatHybridCloudConsoleAWhiteRGBIcon` | `Logo-Red_Hat-Hybrid-Cloud-Console-A-White-RGB.svg` | `/console-logos/Logo-Red_Hat-Hybrid-Cloud-Console-A-White-RGB.svg` | `/console-logos/Logo-Red_Hat-Hybrid-Cloud-Console-A-White-RGB.tsx` |
| <img src="src/console-logos/Logo-Red_Hat-Hybrid_Cloud_Console-B-Black-RGB.svg" alt="Logo-Red_Hat-Hybrid_Cloud_Console-B-Black-RGB" width="24" height="24" /> | `ConsoleLogosLogoRedHatHybridCloudConsoleBBlackRGBIcon` | `Logo-Red_Hat-Hybrid_Cloud_Console-B-Black-RGB.svg` | `/console-logos/Logo-Red_Hat-Hybrid_Cloud_Console-B-Black-RGB.svg` | `/console-logos/Logo-Red_Hat-Hybrid_Cloud_Console-B-Black-RGB.tsx` |
| <img src="src/console-logos/Logo-Red_Hat-Hybrid_Cloud_Console-B-Red-RGB.svg" alt="Logo-Red_Hat-Hybrid_Cloud_Console-B-Red-RGB" width="24" height="24" /> | `ConsoleLogosLogoRedHatHybridCloudConsoleBRedRGBIcon` | `Logo-Red_Hat-Hybrid_Cloud_Console-B-Red-RGB.svg` | `/console-logos/Logo-Red_Hat-Hybrid_Cloud_Console-B-Red-RGB.svg` | `/console-logos/Logo-Red_Hat-Hybrid_Cloud_Console-B-Red-RGB.tsx` |
| <img src="src/console-logos/Logo-Red_Hat-Hybrid_Cloud_Console-B-Reverse-RGB.svg" alt="Logo-Red_Hat-Hybrid_Cloud_Console-B-Reverse-RGB" width="24" height="24" /> | `ConsoleLogosLogoRedHatHybridCloudConsoleBReverseRGBIcon` | `Logo-Red_Hat-Hybrid_Cloud_Console-B-Reverse-RGB.svg` | `/console-logos/Logo-Red_Hat-Hybrid_Cloud_Console-B-Reverse-RGB.svg` | `/console-logos/Logo-Red_Hat-Hybrid_Cloud_Console-B-Reverse-RGB.tsx` |
| <img src="src/console-logos/Logo-Red_Hat-Hybrid_Cloud_Console-B-Standard-RGB.svg" alt="Logo-Red_Hat-Hybrid_Cloud_Console-B-Standard-RGB" width="24" height="24" /> | `ConsoleLogosLogoRedHatHybridCloudConsoleBStandardRGBIcon` | `Logo-Red_Hat-Hybrid_Cloud_Console-B-Standard-RGB.svg` | `/console-logos/Logo-Red_Hat-Hybrid_Cloud_Console-B-Standard-RGB.svg` | `/console-logos/Logo-Red_Hat-Hybrid_Cloud_Console-B-Standard-RGB.tsx` |
| <img src="src/console-logos/Logo-Red_Hat-Hybrid_Cloud_Console-B-White-RGB.svg" alt="Logo-Red_Hat-Hybrid_Cloud_Console-B-White-RGB" width="24" height="24" /> | `ConsoleLogosLogoRedHatHybridCloudConsoleBWhiteRGBIcon` | `Logo-Red_Hat-Hybrid_Cloud_Console-B-White-RGB.svg` | `/console-logos/Logo-Red_Hat-Hybrid_Cloud_Console-B-White-RGB.svg` | `/console-logos/Logo-Red_Hat-Hybrid_Cloud_Console-B-White-RGB.tsx` |
| <img src="src/favoritedservices/favoriting-emptystate.svg" alt="favoriting-emptystate" width="24" height="24" /> | `FavoritedservicesFavoritingEmptystateIcon` | `favoriting-emptystate.svg` | `/favoritedservices/favoriting-emptystate.svg` | `/favoritedservices/favoriting-emptystate.tsx` |
| <img src="src/icons/icon__automation.svg" alt="icon__automation" width="24" height="24" /> | `IconsIconAutomationIcon` | `icon__automation.svg` | `/icons/icon__automation.svg` | `/icons/icon__automation.tsx` |
| <img src="src/icons/icon__const.svg" alt="icon__const" width="24" height="24" /> | `IconsIconConstIcon` | `icon__const.svg` | `/icons/icon__const.svg` | `/icons/icon__const.tsx` |
| <img src="src/icons/icon__exp-up.svg" alt="icon__exp-up" width="24" height="24" /> | `IconsIconExpUpIcon` | `icon__exp-up.svg` | `/icons/icon__exp-up.svg` | `/icons/icon__exp-up.tsx` |
| <img src="src/icons/icon__subscriptions.svg" alt="icon__subscriptions" width="24" height="24" /> | `IconsIconSubscriptionsIcon` | `icon__subscriptions.svg` | `/icons/icon__subscriptions.svg` | `/icons/icon__subscriptions.tsx` |
| <img src="src/integrations/integrations-webhook-icon.svg" alt="integrations-webhook-icon" width="24" height="24" /> | `IntegrationsIntegrationsWebhookIconIcon` | `integrations-webhook-icon.svg` | `/integrations/integrations-webhook-icon.svg` | `/integrations/integrations-webhook-icon.tsx` |
| <img src="src/integrations-landing/integrations-landing-minispot.svg" alt="integrations-landing-minispot" width="24" height="24" /> | `IntegrationsLandingIntegrationsLandingMinispotIcon` | `integrations-landing-minispot.svg` | `/integrations-landing/integrations-landing-minispot.svg` | `/integrations-landing/integrations-landing-minispot.tsx` |
| <img src="src/integrations-landing/integrations-landing-webhook-icon.svg" alt="integrations-landing-webhook-icon" width="24" height="24" /> | `IntegrationsLandingIntegrationsLandingWebhookIconIcon` | `integrations-landing-webhook-icon.svg` | `/integrations-landing/integrations-landing-webhook-icon.svg` | `/integrations-landing/integrations-landing-webhook-icon.tsx` |
| <img src="src/learning-resources/IAM.svg" alt="IAM" width="24" height="24" /> | `LearningResourcesIamIcon` | `IAM.svg` | `/learning-resources/IAM.svg` | `/learning-resources/IAM.tsx` |
| <img src="src/learning-resources/LearningResources.svg" alt="LearningResources" width="24" height="24" /> | `LearningResourcesLearningresourcesIcon` | `LearningResources.svg` | `/learning-resources/LearningResources.svg` | `/learning-resources/LearningResources.tsx` |
| <img src="src/learning-resources/RHEL-icon.svg" alt="RHEL-icon" width="24" height="24" /> | `LearningResourcesRhelIconIcon` | `RHEL-icon.svg` | `/learning-resources/RHEL-icon.svg` | `/learning-resources/RHEL-icon.tsx` |
| <img src="src/learning-resources/RH-icon.svg" alt="RH-icon" width="24" height="24" /> | `LearningResourcesRhIconIcon` | `RH-icon.svg` | `/learning-resources/RH-icon.svg` | `/learning-resources/RH-icon.tsx` |
| <img src="src/learning-resources/settings.svg" alt="settings" width="24" height="24" /> | `LearningResourcesSettingsIcon` | `settings.svg` | `/learning-resources/settings.svg` | `/learning-resources/settings.tsx` |
| <img src="src/learning-resources/subs.svg" alt="subs" width="24" height="24" /> | `LearningResourcesSubsIcon` | `subs.svg` | `/learning-resources/subs.svg` | `/learning-resources/subs.tsx` |
| <img src="src/logos/logo__ansible-automation.svg" alt="logo__ansible-automation" width="24" height="24" /> | `LogosLogoAnsibleAutomationIcon` | `logo__ansible-automation.svg` | `/logos/logo__ansible-automation.svg` | `/logos/logo__ansible-automation.tsx` |
| <img src="src/logos/logo__application-services.svg" alt="logo__application-services" width="24" height="24" /> | `LogosLogoApplicationServicesIcon` | `logo__application-services.svg` | `/logos/logo__application-services.svg` | `/logos/logo__application-services.tsx` |
| <img src="src/logos/logo__insights.svg" alt="logo__insights" width="24" height="24" /> | `LogosLogoInsightsIcon` | `logo__insights.svg` | `/logos/logo__insights.svg` | `/logos/logo__insights.tsx` |
| <img src="src/logos/logo__openshift.svg" alt="logo__openshift" width="24" height="24" /> | `LogosLogoOpenshiftIcon` | `logo__openshift.svg` | `/logos/logo__openshift.svg` | `/logos/logo__openshift.tsx` |
| <img src="src/logos/logo__osas.svg" alt="logo__osas" width="24" height="24" /> | `LogosLogoOsasIcon` | `logo__osas.svg` | `/logos/logo__osas.svg` | `/logos/logo__osas.tsx` |
| <img src="src/logos/logo__rhel.svg" alt="logo__rhel" width="24" height="24" /> | `LogosLogoRhelIcon` | `logo__rhel.svg` | `/logos/logo__rhel.svg` | `/logos/logo__rhel.tsx` |
| <img src="src/logos/logo__smart-mgmt.svg" alt="logo__smart-mgmt" width="24" height="24" /> | `LogosLogoSmartMgmtIcon` | `logo__smart-mgmt.svg` | `/logos/logo__smart-mgmt.svg` | `/logos/logo__smart-mgmt.tsx` |
| <img src="src/partners-icons/aws.svg" alt="aws" width="24" height="24" /> | `PartnersIconsAwsIcon` | `aws.svg` | `/partners-icons/aws.svg` | `/partners-icons/aws.tsx` |
| <img src="src/partners-icons/aws-long.svg" alt="aws-long" width="24" height="24" /> | `PartnersIconsAwsLongIcon` | `aws-long.svg` | `/partners-icons/aws-long.svg` | `/partners-icons/aws-long.tsx` |
| <img src="src/partners-icons/google-cloud.svg" alt="google-cloud" width="24" height="24" /> | `PartnersIconsGoogleCloudIcon` | `google-cloud.svg` | `/partners-icons/google-cloud.svg` | `/partners-icons/google-cloud.tsx` |
| <img src="src/partners-icons/google-cloud-short.svg" alt="google-cloud-short" width="24" height="24" /> | `PartnersIconsGoogleCloudShortIcon` | `google-cloud-short.svg` | `/partners-icons/google-cloud-short.svg` | `/partners-icons/google-cloud-short.tsx` |
| <img src="src/partners-icons/ibm-cloud.svg" alt="ibm-cloud" width="24" height="24" /> | `PartnersIconsIbmCloudIcon` | `ibm-cloud.svg` | `/partners-icons/ibm-cloud.svg` | `/partners-icons/ibm-cloud.tsx` |
| <img src="src/partners-icons/Logo-Red_Hat-Marketplace-A-Red-RGB.svg" alt="Logo-Red_Hat-Marketplace-A-Red-RGB" width="24" height="24" /> | `PartnersIconsLogoRedHatMarketplaceARedRGBIcon` | `Logo-Red_Hat-Marketplace-A-Red-RGB.svg` | `/partners-icons/Logo-Red_Hat-Marketplace-A-Red-RGB.svg` | `/partners-icons/Logo-Red_Hat-Marketplace-A-Red-RGB.tsx` |
| <img src="src/partners-icons/microsoft-azure.svg" alt="microsoft-azure" width="24" height="24" /> | `PartnersIconsMicrosoftAzureIcon` | `microsoft-azure.svg` | `/partners-icons/microsoft-azure.svg` | `/partners-icons/microsoft-azure.tsx` |
| <img src="src/partners-icons/microsoft-azure-short.svg" alt="microsoft-azure-short" width="24" height="24" /> | `PartnersIconsMicrosoftAzureShortIcon` | `microsoft-azure-short.svg` | `/partners-icons/microsoft-azure-short.svg` | `/partners-icons/microsoft-azure-short.tsx` |
| <img src="src/partners-icons/oracle-cloud-infra.svg" alt="oracle-cloud-infra" width="24" height="24" /> | `PartnersIconsOracleCloudInfraIcon` | `oracle-cloud-infra.svg` | `/partners-icons/oracle-cloud-infra.svg` | `/partners-icons/oracle-cloud-infra.tsx` |
| <img src="src/partners-icons/oracle-short.svg" alt="oracle-short" width="24" height="24" /> | `PartnersIconsOracleShortIcon` | `oracle-short.svg` | `/partners-icons/oracle-short.svg` | `/partners-icons/oracle-short.tsx` |
| <img src="src/partners-icons/vmware.svg" alt="vmware" width="24" height="24" /> | `PartnersIconsVmwareIcon` | `vmware.svg` | `/partners-icons/vmware.svg` | `/partners-icons/vmware.tsx` |
| <img src="src/pendo/exclamation-triangle.svg" alt="exclamation-triangle" width="24" height="24" /> | `PendoExclamationTriangleIcon` | `exclamation-triangle.svg` | `/pendo/exclamation-triangle.svg` | `/pendo/exclamation-triangle.tsx` |
| <img src="src/pendo/kafkalogo.svg" alt="kafkalogo" width="24" height="24" /> | `PendoKafkalogoIcon` | `kafkalogo.svg` | `/pendo/kafkalogo.svg` | `/pendo/kafkalogo.tsx` |
| <img src="src/pendo/kafkatour1step1.svg" alt="kafkatour1step1" width="24" height="24" /> | `PendoKafkatour1step1Icon` | `kafkatour1step1.svg` | `/pendo/kafkatour1step1.svg` | `/pendo/kafkatour1step1.tsx` |
| <img src="src/pendo/kafkatour1step2.svg" alt="kafkatour1step2" width="24" height="24" /> | `PendoKafkatour1step2Icon` | `kafkatour1step2.svg` | `/pendo/kafkatour1step2.svg` | `/pendo/kafkatour1step2.tsx` |
| <img src="src/pendo/kafkatour2step1.svg" alt="kafkatour2step1" width="24" height="24" /> | `PendoKafkatour2step1Icon` | `kafkatour2step1.svg` | `/pendo/kafkatour2step1.svg` | `/pendo/kafkatour2step1.tsx` |
| <img src="src/pendo/kafkatour2step2.svg" alt="kafkatour2step2" width="24" height="24" /> | `PendoKafkatour2step2Icon` | `kafkatour2step2.svg` | `/pendo/kafkatour2step2.svg` | `/pendo/kafkatour2step2.tsx` |
| <img src="src/pendo/ocm-expiration.svg" alt="ocm-expiration" width="24" height="24" /> | `PendoOcmExpirationIcon` | `ocm-expiration.svg` | `/pendo/ocm-expiration.svg` | `/pendo/ocm-expiration.tsx` |
| <img src="src/pendo/ocm-ocp.svg" alt="ocm-ocp" width="24" height="24" /> | `PendoOcmOcpIcon` | `ocm-ocp.svg` | `/pendo/ocm-ocp.svg` | `/pendo/ocm-ocp.tsx` |
| <img src="src/pendo/ocm-osd.svg" alt="ocm-osd" width="24" height="24" /> | `PendoOcmOsdIcon` | `ocm-osd.svg` | `/pendo/ocm-osd.svg` | `/pendo/ocm-osd.tsx` |
| <img src="src/pendo/Pic1.svg" alt="Pic1" width="24" height="24" /> | `PendoPic1Icon` | `Pic1.svg` | `/pendo/Pic1.svg` | `/pendo/Pic1.tsx` |
| <img src="src/pendo/Pic2.svg" alt="Pic2" width="24" height="24" /> | `PendoPic2Icon` | `Pic2.svg` | `/pendo/Pic2.svg` | `/pendo/Pic2.tsx` |
| <img src="src/pendo/Pic3.svg" alt="Pic3" width="24" height="24" /> | `PendoPic3Icon` | `Pic3.svg` | `/pendo/Pic3.svg` | `/pendo/Pic3.tsx` |
| <img src="src/pendo/Pic4.svg" alt="Pic4" width="24" height="24" /> | `PendoPic4Icon` | `Pic4.svg` | `/pendo/Pic4.svg` | `/pendo/Pic4.tsx` |
| <img src="src/platform-icons/faq-button.svg" alt="faq-button" width="24" height="24" /> | `PlatformIconsFaqButtonIcon` | `faq-button.svg` | `/platform-icons/faq-button.svg` | `/platform-icons/faq-button.tsx` |
| <img src="src/platform-icons/feedback_illo.svg" alt="feedback_illo" width="24" height="24" /> | `PlatformIconsFeedbackIlloIcon` | `feedback_illo.svg` | `/platform-icons/feedback_illo.svg` | `/platform-icons/feedback_illo.tsx` |
| <img src="src/platform-icons/home.svg" alt="home" width="24" height="24" /> | `PlatformIconsHomeIcon` | `home.svg` | `/platform-icons/home.svg` | `/platform-icons/home.tsx` |
| <img src="src/platform-icons/Hourglass-Minispot.svg" alt="Hourglass-Minispot" width="24" height="24" /> | `PlatformIconsHourglassMinispotIcon` | `Hourglass-Minispot.svg` | `/platform-icons/Hourglass-Minispot.svg` | `/platform-icons/Hourglass-Minispot.tsx` |
| <img src="src/platform-icons/img_avatar.svg" alt="img_avatar" width="24" height="24" /> | `PlatformIconsImgAvatarIcon` | `img_avatar.svg` | `/platform-icons/img_avatar.svg` | `/platform-icons/img_avatar.tsx` |
| <img src="src/platform-icons/nav-expand-chevron.svg" alt="nav-expand-chevron" width="24" height="24" /> | `PlatformIconsNavExpandChevronIcon` | `nav-expand-chevron.svg` | `/platform-icons/nav-expand-chevron.svg` | `/platform-icons/nav-expand-chevron.tsx` |
| <img src="src/platform-icons/overflow-actions-lg.svg" alt="overflow-actions-lg" width="24" height="24" /> | `PlatformIconsOverflowActionsLgIcon` | `overflow-actions-lg.svg` | `/platform-icons/overflow-actions-lg.svg` | `/platform-icons/overflow-actions-lg.tsx` |
| <img src="src/platform-icons/overflow-actions-sm.svg" alt="overflow-actions-sm" width="24" height="24" /> | `PlatformIconsOverflowActionsSmIcon` | `overflow-actions-sm.svg` | `/platform-icons/overflow-actions-sm.svg` | `/platform-icons/overflow-actions-sm.tsx` |
| <img src="src/platform-icons/primary-nav-hamburger-toggle.svg" alt="primary-nav-hamburger-toggle" width="24" height="24" /> | `PlatformIconsPrimaryNavHamburgerToggleIcon` | `primary-nav-hamburger-toggle.svg` | `/platform-icons/primary-nav-hamburger-toggle.svg` | `/platform-icons/primary-nav-hamburger-toggle.tsx` |
| <img src="src/platform-icons/settings-button.svg" alt="settings-button" width="24" height="24" /> | `PlatformIconsSettingsButtonIcon` | `settings-button.svg` | `/platform-icons/settings-button.svg` | `/platform-icons/settings-button.tsx` |
| <img src="src/platform-logos/ansible-automation-platform.svg" alt="ansible-automation-platform" width="24" height="24" /> | `PlatformLogosAnsibleAutomationPlatformIcon` | `ansible-automation-platform.svg` | `/platform-logos/ansible-automation-platform.svg` | `/platform-logos/ansible-automation-platform.tsx` |
| <img src="src/platform-logos/ansible.svg" alt="ansible" width="24" height="24" /> | `PlatformLogosAnsibleIcon` | `ansible.svg` | `/platform-logos/ansible.svg` | `/platform-logos/ansible.tsx` |
| <img src="src/platform-logos/ansible-tower.svg" alt="ansible-tower" width="24" height="24" /> | `PlatformLogosAnsibleTowerIcon` | `ansible-tower.svg` | `/platform-logos/ansible-tower.svg` | `/platform-logos/ansible-tower.tsx` |
| <img src="src/platform-logos/ansible-tower-red.svg" alt="ansible-tower-red" width="24" height="24" /> | `PlatformLogosAnsibleTowerRedIcon` | `ansible-tower-red.svg` | `/platform-logos/ansible-tower-red.svg` | `/platform-logos/ansible-tower-red.tsx` |
| <img src="src/platform-logos/cost-management.svg" alt="cost-management" width="24" height="24" /> | `PlatformLogosCostManagementIcon` | `cost-management.svg` | `/platform-logos/cost-management.svg` | `/platform-logos/cost-management.tsx` |
| <img src="src/platform-logos/hcm-namespace.svg" alt="hcm-namespace" width="24" height="24" /> | `PlatformLogosHcmNamespaceIcon` | `hcm-namespace.svg` | `/platform-logos/hcm-namespace.svg` | `/platform-logos/hcm-namespace.tsx` |
| <img src="src/platform-logos/Insights.svg" alt="Insights" width="24" height="24" /> | `PlatformLogosInsightsIcon` | `Insights.svg` | `/platform-logos/Insights.svg` | `/platform-logos/Insights.tsx` |
| <img src="src/platform-logos/migrations-namespace.svg" alt="migrations-namespace" width="24" height="24" /> | `PlatformLogosMigrationsNamespaceIcon` | `migrations-namespace.svg` | `/platform-logos/migrations-namespace.svg` | `/platform-logos/migrations-namespace.tsx` |
| <img src="src/platform-logos/openshift-container-platform.svg" alt="openshift-container-platform" width="24" height="24" /> | `PlatformLogosOpenshiftContainerPlatformIcon` | `openshift-container-platform.svg` | `/platform-logos/openshift-container-platform.svg` | `/platform-logos/openshift-container-platform.tsx` |
| <img src="src/platform-logos/openshift.svg" alt="openshift" width="24" height="24" /> | `PlatformLogosOpenshiftIcon` | `openshift.svg` | `/platform-logos/openshift.svg` | `/platform-logos/openshift.tsx` |
| <img src="src/platform-logos/openstack.svg" alt="openstack" width="24" height="24" /> | `PlatformLogosOpenstackIcon` | `openstack.svg` | `/platform-logos/openstack.svg` | `/platform-logos/openstack.tsx` |
| <img src="src/platform-logos/ovirt.svg" alt="ovirt" width="24" height="24" /> | `PlatformLogosOvirtIcon` | `ovirt.svg` | `/platform-logos/ovirt.svg` | `/platform-logos/ovirt.tsx` |
| <img src="src/platform-logos/rhel-cs-namespace.svg" alt="rhel-cs-namespace" width="24" height="24" /> | `PlatformLogosRhelCsNamespaceIcon` | `rhel-cs-namespace.svg` | `/platform-logos/rhel-cs-namespace.svg` | `/platform-logos/rhel-cs-namespace.tsx` |
| <img src="src/platform-logos/satellite.svg" alt="satellite" width="24" height="24" /> | `PlatformLogosSatelliteIcon` | `satellite.svg` | `/platform-logos/satellite.svg` | `/platform-logos/satellite.tsx` |
| <img src="src/rbac-landing/rbac-landing-icon.svg" alt="rbac-landing-icon" width="24" height="24" /> | `RbacLandingRbacLandingIconIcon` | `rbac-landing-icon.svg` | `/rbac-landing/rbac-landing-icon.svg` | `/rbac-landing/rbac-landing-icon.tsx` |
| <img src="src/rbac-landing/rbac-landing-minispot.svg" alt="rbac-landing-minispot" width="24" height="24" /> | `RbacLandingRbacLandingMinispotIcon` | `rbac-landing-minispot.svg` | `/rbac-landing/rbac-landing-minispot.svg` | `/rbac-landing/rbac-landing-minispot.tsx` |
| <img src="src/rbac-landing/workspaces-bindings-icon.svg" alt="workspaces-bindings-icon" width="24" height="24" /> | `RbacLandingWorkspacesBindingsIconIcon` | `workspaces-bindings-icon.svg` | `/rbac-landing/workspaces-bindings-icon.svg` | `/rbac-landing/workspaces-bindings-icon.tsx` |
| <img src="src/rbac-landing/workspaces-roles-icon.svg" alt="workspaces-roles-icon" width="24" height="24" /> | `RbacLandingWorkspacesRolesIconIcon` | `workspaces-roles-icon.svg` | `/rbac-landing/workspaces-roles-icon.svg` | `/rbac-landing/workspaces-roles-icon.tsx` |
| <img src="src/red-hat-logos/logo_hat-only.svg" alt="logo_hat-only" width="24" height="24" /> | `RedHatLogosLogoHatOnlyIcon` | `logo_hat-only.svg` | `/red-hat-logos/logo_hat-only.svg` | `/red-hat-logos/logo_hat-only.tsx` |
| <img src="src/red-hat-logos/logo.svg" alt="logo" width="24" height="24" /> | `RedHatLogosLogoIcon` | `logo.svg` | `/red-hat-logos/logo.svg` | `/red-hat-logos/logo.tsx` |
| <img src="src/red-hat-logos/stacked.svg" alt="stacked" width="24" height="24" /> | `RedHatLogosStackedIcon` | `stacked.svg` | `/red-hat-logos/stacked.svg` | `/red-hat-logos/stacked.tsx` |
| <img src="src/sources-integrations/ansible.svg" alt="ansible" width="24" height="24" /> | `SourcesIntegrationsAnsibleIcon` | `ansible.svg` | `/sources-integrations/ansible.svg` | `/sources-integrations/ansible.tsx` |
| <img src="src/sources-integrations/google-chat.svg" alt="google-chat" width="24" height="24" /> | `SourcesIntegrationsGoogleChatIcon` | `google-chat.svg` | `/sources-integrations/google-chat.svg` | `/sources-integrations/google-chat.tsx` |
| <img src="src/sources-integrations/integrations-icon.svg" alt="integrations-icon" width="24" height="24" /> | `SourcesIntegrationsIntegrationsIconIcon` | `integrations-icon.svg` | `/sources-integrations/integrations-icon.svg` | `/sources-integrations/integrations-icon.tsx` |
| <img src="src/sources-integrations/microsoft-office-teams.svg" alt="microsoft-office-teams" width="24" height="24" /> | `SourcesIntegrationsMicrosoftOfficeTeamsIcon` | `microsoft-office-teams.svg` | `/sources-integrations/microsoft-office-teams.svg` | `/sources-integrations/microsoft-office-teams.tsx` |
| <img src="src/sources-integrations/pagerduty.svg" alt="pagerduty" width="24" height="24" /> | `SourcesIntegrationsPagerdutyIcon` | `pagerduty.svg` | `/sources-integrations/pagerduty.svg` | `/sources-integrations/pagerduty.tsx` |
| <img src="src/sources-integrations/pagerduty-widget2.svg" alt="pagerduty-widget2" width="24" height="24" /> | `SourcesIntegrationsPagerdutyWidget2Icon` | `pagerduty-widget2.svg` | `/sources-integrations/pagerduty-widget2.svg` | `/sources-integrations/pagerduty-widget2.tsx` |
| <img src="src/sources-integrations/pagerduty-widget.svg" alt="pagerduty-widget" width="24" height="24" /> | `SourcesIntegrationsPagerdutyWidgetIcon` | `pagerduty-widget.svg` | `/sources-integrations/pagerduty-widget.svg` | `/sources-integrations/pagerduty-widget.tsx` |
| <img src="src/sources-integrations/service-now.svg" alt="service-now" width="24" height="24" /> | `SourcesIntegrationsServiceNowIcon` | `service-now.svg` | `/sources-integrations/service-now.svg` | `/sources-integrations/service-now.tsx` |
| <img src="src/sources-integrations/slack.svg" alt="slack" width="24" height="24" /> | `SourcesIntegrationsSlackIcon` | `slack.svg` | `/sources-integrations/slack.svg` | `/sources-integrations/slack.tsx` |
| <img src="src/sources-integrations/splunk.svg" alt="splunk" width="24" height="24" /> | `SourcesIntegrationsSplunkIcon` | `splunk.svg` | `/sources-integrations/splunk.svg` | `/sources-integrations/splunk.tsx` |

## Generated Components

Total components generated: 133
