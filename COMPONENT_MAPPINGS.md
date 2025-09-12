# Frontend Assets Icon Components

This file documents the generated React icon components and their usage with ScalprumComponent for dynamic loading.

## Usage

These components are designed to be used with ScalprumComponent for dynamic loading. They are not imported directly.

### Without PatternFly Wrapper (Preserves original SVG dimensions)
```tsx
<ScalprumComponent 
  scope="frontendAssets" 
  module="./IconComponentName" 
  svgProps={{width: 50, height: 50}} 
/>
```

### With PatternFly Wrapper (Uses PatternFly Icon styling)
```tsx
<ScalprumComponent 
  scope="frontendAssets" 
  module="./IconComponentName" 
  pfIconWrapper={true} 
  iconProps={{size: "lg"}} 
/>
```

### Combined Usage
```tsx
<ScalprumComponent 
  scope="frontendAssets" 
  module="./IconComponentName" 
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
| <img src="src/partners-icons/a10-networks.svg" alt="a10-networks" width="24" height="24" /> | `A10NetworksIcon` | `a10-networks.svg` | `/partners-icons/a10-networks.svg` | `/partners-icons/a10-networks.tsx` |
| <img src="src/technology-icons/acm-for-kubernetes.svg" alt="acm-for-kubernetes" width="24" height="24" /> | `AcmForKubernetesIcon` | `acm-for-kubernetes.svg` | `/technology-icons/acm-for-kubernetes.svg` | `/technology-icons/acm-for-kubernetes.tsx` |
| <img src="src/technology-icons/acs.svg" alt="acs" width="24" height="24" /> | `AcsIcon` | `acs.svg` | `/technology-icons/acs.svg` | `/technology-icons/acs.tsx` |
| <img src="src/partners-icons/amazon.svg" alt="amazon" width="24" height="24" /> | `AmazonIcon` | `amazon.svg` | `/partners-icons/amazon.svg` | `/partners-icons/amazon.tsx` |
| <img src="src/technology-icons/amq.svg" alt="amq" width="24" height="24" /> | `AmqIcon` | `amq.svg` | `/technology-icons/amq.svg` | `/technology-icons/amq.tsx` |
| <img src="src/technology-icons/ansible-automation-hub-hosted.svg" alt="ansible-automation-hub-hosted" width="24" height="24" /> | `AnsibleAutomationHubHostedIcon` | `ansible-automation-hub-hosted.svg` | `/technology-icons/ansible-automation-hub-hosted.svg` | `/technology-icons/ansible-automation-hub-hosted.tsx` |
| <img src="src/technology-icons/ansible-automation-platform-operator.svg" alt="ansible-automation-platform-operator" width="24" height="24" /> | `AnsibleAutomationPlatformOperatorIcon` | `ansible-automation-platform-operator.svg` | `/technology-icons/ansible-automation-platform-operator.svg` | `/technology-icons/ansible-automation-platform-operator.tsx` |
| <img src="src/technology-icons/ansible-community-mark.svg" alt="ansible-community-mark" width="24" height="24" /> | `AnsibleCommunityMarkIcon` | `ansible-community-mark.svg` | `/technology-icons/ansible-community-mark.svg` | `/technology-icons/ansible-community-mark.tsx` |
| <img src="src/technology-icons/ansible-content-collections.svg" alt="ansible-content-collections" width="24" height="24" /> | `AnsibleContentCollectionsIcon` | `ansible-content-collections.svg` | `/technology-icons/ansible-content-collections.svg` | `/technology-icons/ansible-content-collections.tsx` |
| <img src="src/technology-icons/ansible-content-tools.svg" alt="ansible-content-tools" width="24" height="24" /> | `AnsibleContentToolsIcon` | `ansible-content-tools.svg` | `/technology-icons/ansible-content-tools.svg` | `/technology-icons/ansible-content-tools.tsx` |
| <img src="src/technology-icons/ansible-core.svg" alt="ansible-core" width="24" height="24" /> | `AnsibleCoreIcon` | `ansible-core.svg` | `/technology-icons/ansible-core.svg` | `/technology-icons/ansible-core.tsx` |
| <img src="src/technology-icons/ansible.svg" alt="ansible" width="24" height="24" /> | `AnsibleIcon` | `ansible.svg` | `/technology-icons/ansible.svg` | `/technology-icons/ansible.tsx` |
| <img src="src/technology-icons/ansible-playbooks.svg" alt="ansible-playbooks" width="24" height="24" /> | `AnsiblePlaybooksIcon` | `ansible-playbooks.svg` | `/technology-icons/ansible-playbooks.svg` | `/technology-icons/ansible-playbooks.tsx` |
| <img src="src/technology-icons/ansible-rulebook.svg" alt="ansible-rulebook" width="24" height="24" /> | `AnsibleRulebookIcon` | `ansible-rulebook.svg` | `/technology-icons/ansible-rulebook.svg` | `/technology-icons/ansible-rulebook.tsx` |
| <img src="src/technology-icons/ansible-tower.svg" alt="ansible-tower" width="24" height="24" /> | `AnsibleTowerIcon` | `ansible-tower.svg` | `/technology-icons/ansible-tower.svg` | `/technology-icons/ansible-tower.tsx` |
| <img src="src/technology-icons/ansible-tower-red.svg" alt="ansible-tower-red" width="24" height="24" /> | `AnsibleTowerRedIcon` | `ansible-tower-red.svg` | `/technology-icons/ansible-tower-red.svg` | `/technology-icons/ansible-tower-red.tsx` |
| <img src="src/technology-icons/apache-kafka.svg" alt="apache-kafka" width="24" height="24" /> | `ApacheKafkaIcon` | `apache-kafka.svg` | `/technology-icons/apache-kafka.svg` | `/technology-icons/apache-kafka.tsx` |
| <img src="src/technology-icons/app-services.svg" alt="app-services" width="24" height="24" /> | `AppServicesIcon` | `app-services.svg` | `/technology-icons/app-services.svg` | `/technology-icons/app-services.tsx` |
| <img src="src/partners-icons/arista.svg" alt="arista" width="24" height="24" /> | `AristaIcon` | `arista.svg` | `/partners-icons/arista.svg` | `/partners-icons/arista.tsx` |
| <img src="src/partners-icons/aruba-networks.svg" alt="aruba-networks" width="24" height="24" /> | `ArubaNetworksIcon` | `aruba-networks.svg` | `/partners-icons/aruba-networks.svg` | `/partners-icons/aruba-networks.tsx` |
| <img src="src/technology-icons/automation-content-navigator.svg" alt="automation-content-navigator" width="24" height="24" /> | `AutomationContentNavigatorIcon` | `automation-content-navigator.svg` | `/technology-icons/automation-content-navigator.svg` | `/technology-icons/automation-content-navigator.tsx` |
| <img src="src/technology-icons/automation-controller.svg" alt="automation-controller" width="24" height="24" /> | `AutomationControllerIcon` | `automation-controller.svg` | `/technology-icons/automation-controller.svg` | `/technology-icons/automation-controller.tsx` |
| <img src="src/technology-icons/automation-execution-environments.svg" alt="automation-execution-environments" width="24" height="24" /> | `AutomationExecutionEnvironmentsIcon` | `automation-execution-environments.svg` | `/technology-icons/automation-execution-environments.svg` | `/technology-icons/automation-execution-environments.tsx` |
| <img src="src/technology-icons/automation-mesh.svg" alt="automation-mesh" width="24" height="24" /> | `AutomationMeshIcon` | `automation-mesh.svg` | `/technology-icons/automation-mesh.svg` | `/technology-icons/automation-mesh.tsx` |
| <img src="src/partners-icons/Avantra.svg" alt="Avantra" width="24" height="24" /> | `AvantraIcon` | `Avantra.svg` | `/partners-icons/Avantra.svg` | `/partners-icons/Avantra.tsx` |
| <img src="src/partners-icons/aws.svg" alt="aws" width="24" height="24" /> | `AwsIcon` | `aws.svg` | `/partners-icons/aws.svg` | `/partners-icons/aws.tsx` |
| <img src="src/partners-icons/aws-logomark.svg" alt="aws-logomark" width="24" height="24" /> | `AwsLogomarkIcon` | `aws-logomark.svg` | `/partners-icons/aws-logomark.svg` | `/partners-icons/aws-logomark.tsx` |
| <img src="src/partners-icons/aws-long.svg" alt="aws-long" width="24" height="24" /> | `AwsLongIcon` | `aws-long.svg` | `/partners-icons/aws-long.svg` | `/partners-icons/aws-long.tsx` |
| <img src="src/partners-icons/bigpandaio.svg" alt="bigpandaio" width="24" height="24" /> | `BigpandaioIcon` | `bigpandaio.svg` | `/partners-icons/bigpandaio.svg` | `/partners-icons/bigpandaio.tsx` |
| <img src="src/partners-icons/bigpandaio-logomark.svg" alt="bigpandaio-logomark" width="24" height="24" /> | `BigpandaioLogomarkIcon` | `bigpandaio-logomark.svg` | `/partners-icons/bigpandaio-logomark.svg` | `/partners-icons/bigpandaio-logomark.tsx` |
| <img src="src/technology-icons/build-of-apache-camel.svg" alt="build-of-apache-camel" width="24" height="24" /> | `BuildOfApacheCamelIcon` | `build-of-apache-camel.svg` | `/technology-icons/build-of-apache-camel.svg` | `/technology-icons/build-of-apache-camel.tsx` |
| <img src="src/technology-icons/build-of-open-telemetry.svg" alt="build-of-open-telemetry" width="24" height="24" /> | `BuildOfOpenTelemetryIcon` | `build-of-open-telemetry.svg` | `/technology-icons/build-of-open-telemetry.svg` | `/technology-icons/build-of-open-telemetry.tsx` |
| <img src="src/technology-icons/build-of-quarkus.svg" alt="build-of-quarkus" width="24" height="24" /> | `BuildOfQuarkusIcon` | `build-of-quarkus.svg` | `/technology-icons/build-of-quarkus.svg` | `/technology-icons/build-of-quarkus.tsx` |
| <img src="src/technology-icons/builds-for-openshift.svg" alt="builds-for-openshift" width="24" height="24" /> | `BuildsForOpenshiftIcon` | `builds-for-openshift.svg` | `/technology-icons/builds-for-openshift.svg` | `/technology-icons/builds-for-openshift.tsx` |
| <img src="src/partners-icons/check-point-technologies.svg" alt="check-point-technologies" width="24" height="24" /> | `CheckPointTechnologiesIcon` | `check-point-technologies.svg` | `/partners-icons/check-point-technologies.svg` | `/partners-icons/check-point-technologies.tsx` |
| <img src="src/partners-icons/chocolatey.svg" alt="chocolatey" width="24" height="24" /> | `ChocolateyIcon` | `chocolatey.svg` | `/partners-icons/chocolatey.svg` | `/partners-icons/chocolatey.tsx` |
| <img src="src/partners-icons/citrix.svg" alt="citrix" width="24" height="24" /> | `CitrixIcon` | `citrix.svg` | `/partners-icons/citrix.svg` | `/partners-icons/citrix.tsx` |
| <img src="src/partners-icons/cohesity.svg" alt="cohesity" width="24" height="24" /> | `CohesityIcon` | `cohesity.svg` | `/partners-icons/cohesity.svg` | `/partners-icons/cohesity.tsx` |
| <img src="src/technology-icons/compliance-operator.svg" alt="compliance-operator" width="24" height="24" /> | `ComplianceOperatorIcon` | `compliance-operator.svg` | `/technology-icons/compliance-operator.svg` | `/technology-icons/compliance-operator.tsx` |
| <img src="src/partners-icons/confluent.svg" alt="confluent" width="24" height="24" /> | `ConfluentIcon` | `confluent.svg` | `/partners-icons/confluent.svg` | `/partners-icons/confluent.tsx` |
| <img src="src/partners-icons/confluent-logomark.svg" alt="confluent-logomark" width="24" height="24" /> | `ConfluentLogomarkIcon` | `confluent-logomark.svg` | `/partners-icons/confluent-logomark.svg` | `/partners-icons/confluent-logomark.tsx` |
| <img src="src/partners-icons/crowdstrike-2.svg" alt="crowdstrike-2" width="24" height="24" /> | `Crowdstrike2Icon` | `crowdstrike-2.svg` | `/partners-icons/crowdstrike-2.svg` | `/partners-icons/crowdstrike-2.tsx` |
| <img src="src/partners-icons/crowdstrike.svg" alt="crowdstrike" width="24" height="24" /> | `CrowdstrikeIcon` | `crowdstrike.svg` | `/partners-icons/crowdstrike.svg` | `/partners-icons/crowdstrike.tsx` |
| <img src="src/technology-icons/custom-metrics-autoscaler.svg" alt="custom-metrics-autoscaler" width="24" height="24" /> | `CustomMetricsAutoscalerIcon` | `custom-metrics-autoscaler.svg` | `/technology-icons/custom-metrics-autoscaler.svg` | `/technology-icons/custom-metrics-autoscaler.tsx` |
| <img src="src/partners-icons/cyberark.svg" alt="cyberark" width="24" height="24" /> | `CyberarkIcon` | `cyberark.svg` | `/partners-icons/cyberark.svg` | `/partners-icons/cyberark.tsx` |
| <img src="src/partners-icons/cyberark-logomark.svg" alt="cyberark-logomark" width="24" height="24" /> | `CyberarkLogomarkIcon` | `cyberark-logomark.svg` | `/partners-icons/cyberark-logomark.svg` | `/partners-icons/cyberark-logomark.tsx` |
| <img src="src/partners-icons/datadog.svg" alt="datadog" width="24" height="24" /> | `DatadogIcon` | `datadog.svg` | `/partners-icons/datadog.svg` | `/partners-icons/datadog.tsx` |
| <img src="src/partners-icons/datadog-logomark.svg" alt="datadog-logomark" width="24" height="24" /> | `DatadogLogomarkIcon` | `datadog-logomark.svg` | `/partners-icons/datadog-logomark.svg` | `/partners-icons/datadog-logomark.tsx` |
| <img src="src/technology-icons/data-science.svg" alt="data-science" width="24" height="24" /> | `DataScienceIcon` | `data-science.svg` | `/technology-icons/data-science.svg` | `/technology-icons/data-science.tsx` |
| <img src="src/partners-icons/delinea.svg" alt="delinea" width="24" height="24" /> | `DelineaIcon` | `delinea.svg` | `/partners-icons/delinea.svg` | `/partners-icons/delinea.tsx` |
| <img src="src/partners-icons/delinea-logomark.svg" alt="delinea-logomark" width="24" height="24" /> | `DelineaLogomarkIcon` | `delinea-logomark.svg` | `/partners-icons/delinea-logomark.svg` | `/partners-icons/delinea-logomark.tsx` |
| <img src="src/partners-icons/dell-technologies-2.svg" alt="dell-technologies-2" width="24" height="24" /> | `DellTechnologies2Icon` | `dell-technologies-2.svg` | `/partners-icons/dell-technologies-2.svg` | `/partners-icons/dell-technologies-2.tsx` |
| <img src="src/partners-icons/dell-technologies.svg" alt="dell-technologies" width="24" height="24" /> | `DellTechnologiesIcon` | `dell-technologies.svg` | `/partners-icons/dell-technologies.svg` | `/partners-icons/dell-technologies.tsx` |
| <img src="src/technology-icons/dependency-analytics.svg" alt="dependency-analytics" width="24" height="24" /> | `DependencyAnalyticsIcon` | `dependency-analytics.svg` | `/technology-icons/dependency-analytics.svg` | `/technology-icons/dependency-analytics.tsx` |
| <img src="src/technology-icons/developer-hub.svg" alt="developer-hub" width="24" height="24" /> | `DeveloperHubIcon` | `developer-hub.svg` | `/technology-icons/developer-hub.svg` | `/technology-icons/developer-hub.tsx` |
| <img src="src/technology-icons/device-edge.svg" alt="device-edge" width="24" height="24" /> | `DeviceEdgeIcon` | `device-edge.svg` | `/technology-icons/device-edge.svg` | `/technology-icons/device-edge.tsx` |
| <img src="src/technology-icons/distributed-tracing.svg" alt="distributed-tracing" width="24" height="24" /> | `DistributedTracingIcon` | `distributed-tracing.svg` | `/technology-icons/distributed-tracing.svg` | `/technology-icons/distributed-tracing.tsx` |
| <img src="src/partners-icons/dynatrace.svg" alt="dynatrace" width="24" height="24" /> | `DynatraceIcon` | `dynatrace.svg` | `/partners-icons/dynatrace.svg` | `/partners-icons/dynatrace.tsx` |
| <img src="src/partners-icons/dynatrace-logomark.svg" alt="dynatrace-logomark" width="24" height="24" /> | `DynatraceLogomarkIcon` | `dynatrace-logomark.svg` | `/partners-icons/dynatrace-logomark.svg` | `/partners-icons/dynatrace-logomark.tsx` |
| <img src="src/technology-icons/edge.svg" alt="edge" width="24" height="24" /> | `EdgeIcon` | `edge.svg` | `/technology-icons/edge.svg` | `/technology-icons/edge.tsx` |
| <img src="src/partners-icons/entrust.svg" alt="entrust" width="24" height="24" /> | `EntrustIcon` | `entrust.svg` | `/partners-icons/entrust.svg` | `/partners-icons/entrust.tsx` |
| <img src="src/partners-icons/entrust-logomark.svg" alt="entrust-logomark" width="24" height="24" /> | `EntrustLogomarkIcon` | `entrust-logomark.svg` | `/partners-icons/entrust-logomark.svg` | `/partners-icons/entrust-logomark.tsx` |
| <img src="src/technology-icons/event-driven-ansible-controller.svg" alt="event-driven-ansible-controller" width="24" height="24" /> | `EventDrivenAnsibleControllerIcon` | `event-driven-ansible-controller.svg` | `/technology-icons/event-driven-ansible-controller.svg` | `/technology-icons/event-driven-ansible-controller.tsx` |
| <img src="src/technology-icons/execution-environment-builder.svg" alt="execution-environment-builder" width="24" height="24" /> | `ExecutionEnvironmentBuilderIcon` | `execution-environment-builder.svg` | `/technology-icons/execution-environment-builder.svg` | `/technology-icons/execution-environment-builder.tsx` |
| <img src="src/partners-icons/f5.svg" alt="f5" width="24" height="24" /> | `F5Icon` | `f5.svg` | `/partners-icons/f5.svg` | `/partners-icons/f5.tsx` |
| <img src="src/technology-icons/file-integrity-operator.svg" alt="file-integrity-operator" width="24" height="24" /> | `FileIntegrityOperatorIcon` | `file-integrity-operator.svg` | `/technology-icons/file-integrity-operator.svg` | `/technology-icons/file-integrity-operator.tsx` |
| <img src="src/partners-icons/fortinet.svg" alt="fortinet" width="24" height="24" /> | `FortinetIcon` | `fortinet.svg` | `/partners-icons/fortinet.svg` | `/partners-icons/fortinet.tsx` |
| <img src="src/partners-icons/fortinet-logomark.svg" alt="fortinet-logomark" width="24" height="24" /> | `FortinetLogomarkIcon` | `fortinet-logomark.svg` | `/partners-icons/fortinet-logomark.svg` | `/partners-icons/fortinet-logomark.tsx` |
| <img src="src/partners-icons/frrouting.svg" alt="frrouting" width="24" height="24" /> | `FrroutingIcon` | `frrouting.svg` | `/partners-icons/frrouting.svg` | `/partners-icons/frrouting.tsx` |
| <img src="src/partners-icons/google-chat.svg" alt="google-chat" width="24" height="24" /> | `GoogleChatIcon` | `google-chat.svg` | `/partners-icons/google-chat.svg` | `/partners-icons/google-chat.tsx` |
| <img src="src/partners-icons/google-cloud.svg" alt="google-cloud" width="24" height="24" /> | `GoogleCloudIcon` | `google-cloud.svg` | `/partners-icons/google-cloud.svg` | `/partners-icons/google-cloud.tsx` |
| <img src="src/partners-icons/google-cloud-logomark.svg" alt="google-cloud-logomark" width="24" height="24" /> | `GoogleCloudLogomarkIcon` | `google-cloud-logomark.svg` | `/partners-icons/google-cloud-logomark.svg` | `/partners-icons/google-cloud-logomark.tsx` |
| <img src="src/partners-icons/google-cloud-short.svg" alt="google-cloud-short" width="24" height="24" /> | `GoogleCloudShortIcon` | `google-cloud-short.svg` | `/partners-icons/google-cloud-short.svg` | `/partners-icons/google-cloud-short.tsx` |
| <img src="src/partners-icons/h3c-1.svg" alt="h3c-1" width="24" height="24" /> | `H3c1Icon` | `h3c-1.svg` | `/partners-icons/h3c-1.svg` | `/partners-icons/h3c-1.tsx` |
| <img src="src/partners-icons/h3c-2.svg" alt="h3c-2" width="24" height="24" /> | `H3c2Icon` | `h3c-2.svg` | `/partners-icons/h3c-2.svg` | `/partners-icons/h3c-2.tsx` |
| <img src="src/partners-icons/hp-enterprise-2.svg" alt="hp-enterprise-2" width="24" height="24" /> | `HpEnterprise2Icon` | `hp-enterprise-2.svg` | `/partners-icons/hp-enterprise-2.svg` | `/partners-icons/hp-enterprise-2.tsx` |
| <img src="src/partners-icons/hp-enterprise.svg" alt="hp-enterprise" width="24" height="24" /> | `HpEnterpriseIcon` | `hp-enterprise.svg` | `/partners-icons/hp-enterprise.svg` | `/partners-icons/hp-enterprise.tsx` |
| <img src="src/technology-icons/iam.svg" alt="iam" width="24" height="24" /> | `IamIcon` | `iam.svg` | `/technology-icons/iam.svg` | `/technology-icons/iam.tsx` |
| <img src="src/partners-icons/ibm-cloud.svg" alt="ibm-cloud" width="24" height="24" /> | `IbmCloudIcon` | `ibm-cloud.svg` | `/partners-icons/ibm-cloud.svg` | `/partners-icons/ibm-cloud.tsx` |
| <img src="src/partners-icons/ibm.svg" alt="ibm" width="24" height="24" /> | `IbmIcon` | `ibm.svg` | `/partners-icons/ibm.svg` | `/partners-icons/ibm.tsx` |
| <img src="src/technology-icons/image-mode.svg" alt="image-mode" width="24" height="24" /> | `ImageModeIcon` | `image-mode.svg` | `/technology-icons/image-mode.svg` | `/technology-icons/image-mode.tsx` |
| <img src="src/partners-icons/infiidat.svg" alt="infiidat" width="24" height="24" /> | `InfiidatIcon` | `infiidat.svg` | `/partners-icons/infiidat.svg` | `/partners-icons/infiidat.tsx` |
| <img src="src/partners-icons/infoblox.svg" alt="infoblox" width="24" height="24" /> | `InfobloxIcon` | `infoblox.svg` | `/partners-icons/infoblox.svg` | `/partners-icons/infoblox.tsx` |
| <img src="src/technology-icons/infrared-intelligence-feature.svg" alt="infrared-intelligence-feature" width="24" height="24" /> | `InfraredIntelligenceFeatureIcon` | `infrared-intelligence-feature.svg` | `/technology-icons/infrared-intelligence-feature.svg` | `/technology-icons/infrared-intelligence-feature.tsx` |
| <img src="src/technology-icons/infrastructure-operator-for-openshift.svg" alt="infrastructure-operator-for-openshift" width="24" height="24" /> | `InfrastructureOperatorForOpenshiftIcon` | `infrastructure-operator-for-openshift.svg` | `/technology-icons/infrastructure-operator-for-openshift.svg` | `/technology-icons/infrastructure-operator-for-openshift.tsx` |
| <img src="src/technology-icons/insights.svg" alt="insights" width="24" height="24" /> | `InsightsIcon` | `insights.svg` | `/technology-icons/insights.svg` | `/technology-icons/insights.tsx` |
| <img src="src/partners-icons/inspur.svg" alt="inspur" width="24" height="24" /> | `InspurIcon` | `inspur.svg` | `/partners-icons/inspur.svg` | `/partners-icons/inspur.tsx` |
| <img src="src/technology-icons/integrations.svg" alt="integrations" width="24" height="24" /> | `IntegrationsIcon` | `integrations.svg` | `/technology-icons/integrations.svg` | `/technology-icons/integrations.tsx` |
| <img src="src/technology-icons/jboss-eap.svg" alt="jboss-eap" width="24" height="24" /> | `JbossEapIcon` | `jboss-eap.svg` | `/technology-icons/jboss-eap.svg` | `/technology-icons/jboss-eap.tsx` |
| <img src="src/partners-icons/juniper-networks.svg" alt="juniper-networks" width="24" height="24" /> | `JuniperNetworksIcon` | `juniper-networks.svg` | `/partners-icons/juniper-networks.svg` | `/partners-icons/juniper-networks.tsx` |
| <img src="src/partners-icons/kentik.svg" alt="kentik" width="24" height="24" /> | `KentikIcon` | `kentik.svg` | `/partners-icons/kentik.svg` | `/partners-icons/kentik.tsx` |
| <img src="src/partners-icons/kentik-logomark.svg" alt="kentik-logomark" width="24" height="24" /> | `KentikLogomarkIcon` | `kentik-logomark.svg` | `/partners-icons/kentik-logomark.svg` | `/partners-icons/kentik-logomark.tsx` |
| <img src="src/partners-icons/kong-short.svg" alt="kong-short" width="24" height="24" /> | `KongShortIcon` | `kong-short.svg` | `/partners-icons/kong-short.svg` | `/partners-icons/kong-short.tsx` |
| <img src="src/technology-icons/learning-resources.svg" alt="learning-resources" width="24" height="24" /> | `LearningResourcesIcon` | `learning-resources.svg` | `/technology-icons/learning-resources.svg` | `/technology-icons/learning-resources.tsx` |
| <img src="src/technology-icons/lightspeed.svg" alt="lightspeed" width="24" height="24" /> | `LightspeedIcon` | `lightspeed.svg` | `/technology-icons/lightspeed.svg` | `/technology-icons/lightspeed.tsx` |
| <img src="src/console-logos/Logo-Red_Hat-A-Standard-RGB.svg" alt="Logo-Red_Hat-A-Standard-RGB" width="24" height="24" /> | `LogoRedHatAStandardRGBIcon` | `Logo-Red_Hat-A-Standard-RGB.svg` | `/console-logos/Logo-Red_Hat-A-Standard-RGB.svg` | `/console-logos/Logo-Red_Hat-A-Standard-RGB.tsx` |
| <img src="src/console-logos/Logo-Red_Hat-Hybrid_Cloud_Console-A-Black-RGB.svg" alt="Logo-Red_Hat-Hybrid_Cloud_Console-A-Black-RGB" width="24" height="24" /> | `LogoRedHatHybridCloudConsoleABlackRGBIcon` | `Logo-Red_Hat-Hybrid_Cloud_Console-A-Black-RGB.svg` | `/console-logos/Logo-Red_Hat-Hybrid_Cloud_Console-A-Black-RGB.svg` | `/console-logos/Logo-Red_Hat-Hybrid_Cloud_Console-A-Black-RGB.tsx` |
| <img src="src/console-logos/Logo-Red_Hat-Hybrid-Cloud-Console-A-Black-RGB.svg" alt="Logo-Red_Hat-Hybrid-Cloud-Console-A-Black-RGB" width="24" height="24" /> | `LogoRedHatHybridCloudConsoleABlackRGBIcon` | `Logo-Red_Hat-Hybrid-Cloud-Console-A-Black-RGB.svg` | `/console-logos/Logo-Red_Hat-Hybrid-Cloud-Console-A-Black-RGB.svg` | `/console-logos/Logo-Red_Hat-Hybrid-Cloud-Console-A-Black-RGB.tsx` |
| <img src="src/console-logos/Logo-Red_Hat-Hybrid_Cloud_Console-A-Red-RGB.svg" alt="Logo-Red_Hat-Hybrid_Cloud_Console-A-Red-RGB" width="24" height="24" /> | `LogoRedHatHybridCloudConsoleARedRGBIcon` | `Logo-Red_Hat-Hybrid_Cloud_Console-A-Red-RGB.svg` | `/console-logos/Logo-Red_Hat-Hybrid_Cloud_Console-A-Red-RGB.svg` | `/console-logos/Logo-Red_Hat-Hybrid_Cloud_Console-A-Red-RGB.tsx` |
| <img src="src/console-logos/Logo-Red_Hat-Hybrid-Cloud-Console-A-Red-RGB.svg" alt="Logo-Red_Hat-Hybrid-Cloud-Console-A-Red-RGB" width="24" height="24" /> | `LogoRedHatHybridCloudConsoleARedRGBIcon` | `Logo-Red_Hat-Hybrid-Cloud-Console-A-Red-RGB.svg` | `/console-logos/Logo-Red_Hat-Hybrid-Cloud-Console-A-Red-RGB.svg` | `/console-logos/Logo-Red_Hat-Hybrid-Cloud-Console-A-Red-RGB.tsx` |
| <img src="src/console-logos/Logo-Red_Hat-Hybrid_Cloud_Console-A-Reverse-RGB.svg" alt="Logo-Red_Hat-Hybrid_Cloud_Console-A-Reverse-RGB" width="24" height="24" /> | `LogoRedHatHybridCloudConsoleAReverseRGBIcon` | `Logo-Red_Hat-Hybrid_Cloud_Console-A-Reverse-RGB.svg` | `/console-logos/Logo-Red_Hat-Hybrid_Cloud_Console-A-Reverse-RGB.svg` | `/console-logos/Logo-Red_Hat-Hybrid_Cloud_Console-A-Reverse-RGB.tsx` |
| <img src="src/console-logos/Logo-Red_Hat-Hybrid-Cloud-Console-A-Reverse-RGB.svg" alt="Logo-Red_Hat-Hybrid-Cloud-Console-A-Reverse-RGB" width="24" height="24" /> | `LogoRedHatHybridCloudConsoleAReverseRGBIcon` | `Logo-Red_Hat-Hybrid-Cloud-Console-A-Reverse-RGB.svg` | `/console-logos/Logo-Red_Hat-Hybrid-Cloud-Console-A-Reverse-RGB.svg` | `/console-logos/Logo-Red_Hat-Hybrid-Cloud-Console-A-Reverse-RGB.tsx` |
| <img src="src/console-logos/Logo-Red_Hat-Hybrid_Cloud_Console-A-Standard-RGB.svg" alt="Logo-Red_Hat-Hybrid_Cloud_Console-A-Standard-RGB" width="24" height="24" /> | `LogoRedHatHybridCloudConsoleAStandardRGBIcon` | `Logo-Red_Hat-Hybrid_Cloud_Console-A-Standard-RGB.svg` | `/console-logos/Logo-Red_Hat-Hybrid_Cloud_Console-A-Standard-RGB.svg` | `/console-logos/Logo-Red_Hat-Hybrid_Cloud_Console-A-Standard-RGB.tsx` |
| <img src="src/console-logos/Logo-Red_Hat-Hybrid-Cloud-Console-A-Standard-RGB.svg" alt="Logo-Red_Hat-Hybrid-Cloud-Console-A-Standard-RGB" width="24" height="24" /> | `LogoRedHatHybridCloudConsoleAStandardRGBIcon` | `Logo-Red_Hat-Hybrid-Cloud-Console-A-Standard-RGB.svg` | `/console-logos/Logo-Red_Hat-Hybrid-Cloud-Console-A-Standard-RGB.svg` | `/console-logos/Logo-Red_Hat-Hybrid-Cloud-Console-A-Standard-RGB.tsx` |
| <img src="src/console-logos/Logo-Red_Hat-Hybrid_Cloud_Console-A-White-RGB.svg" alt="Logo-Red_Hat-Hybrid_Cloud_Console-A-White-RGB" width="24" height="24" /> | `LogoRedHatHybridCloudConsoleAWhiteRGBIcon` | `Logo-Red_Hat-Hybrid_Cloud_Console-A-White-RGB.svg` | `/console-logos/Logo-Red_Hat-Hybrid_Cloud_Console-A-White-RGB.svg` | `/console-logos/Logo-Red_Hat-Hybrid_Cloud_Console-A-White-RGB.tsx` |
| <img src="src/console-logos/Logo-Red_Hat-Hybrid-Cloud-Console-A-White-RGB.svg" alt="Logo-Red_Hat-Hybrid-Cloud-Console-A-White-RGB" width="24" height="24" /> | `LogoRedHatHybridCloudConsoleAWhiteRGBIcon` | `Logo-Red_Hat-Hybrid-Cloud-Console-A-White-RGB.svg` | `/console-logos/Logo-Red_Hat-Hybrid-Cloud-Console-A-White-RGB.svg` | `/console-logos/Logo-Red_Hat-Hybrid-Cloud-Console-A-White-RGB.tsx` |
| <img src="src/console-logos/Logo-Red_Hat-Hybrid_Cloud_Console-B-Black-RGB.svg" alt="Logo-Red_Hat-Hybrid_Cloud_Console-B-Black-RGB" width="24" height="24" /> | `LogoRedHatHybridCloudConsoleBBlackRGBIcon` | `Logo-Red_Hat-Hybrid_Cloud_Console-B-Black-RGB.svg` | `/console-logos/Logo-Red_Hat-Hybrid_Cloud_Console-B-Black-RGB.svg` | `/console-logos/Logo-Red_Hat-Hybrid_Cloud_Console-B-Black-RGB.tsx` |
| <img src="src/console-logos/Logo-Red_Hat-Hybrid_Cloud_Console-B-Red-RGB.svg" alt="Logo-Red_Hat-Hybrid_Cloud_Console-B-Red-RGB" width="24" height="24" /> | `LogoRedHatHybridCloudConsoleBRedRGBIcon` | `Logo-Red_Hat-Hybrid_Cloud_Console-B-Red-RGB.svg` | `/console-logos/Logo-Red_Hat-Hybrid_Cloud_Console-B-Red-RGB.svg` | `/console-logos/Logo-Red_Hat-Hybrid_Cloud_Console-B-Red-RGB.tsx` |
| <img src="src/console-logos/Logo-Red_Hat-Hybrid_Cloud_Console-B-Reverse-RGB.svg" alt="Logo-Red_Hat-Hybrid_Cloud_Console-B-Reverse-RGB" width="24" height="24" /> | `LogoRedHatHybridCloudConsoleBReverseRGBIcon` | `Logo-Red_Hat-Hybrid_Cloud_Console-B-Reverse-RGB.svg` | `/console-logos/Logo-Red_Hat-Hybrid_Cloud_Console-B-Reverse-RGB.svg` | `/console-logos/Logo-Red_Hat-Hybrid_Cloud_Console-B-Reverse-RGB.tsx` |
| <img src="src/console-logos/Logo-Red_Hat-Hybrid_Cloud_Console-B-Standard-RGB.svg" alt="Logo-Red_Hat-Hybrid_Cloud_Console-B-Standard-RGB" width="24" height="24" /> | `LogoRedHatHybridCloudConsoleBStandardRGBIcon` | `Logo-Red_Hat-Hybrid_Cloud_Console-B-Standard-RGB.svg` | `/console-logos/Logo-Red_Hat-Hybrid_Cloud_Console-B-Standard-RGB.svg` | `/console-logos/Logo-Red_Hat-Hybrid_Cloud_Console-B-Standard-RGB.tsx` |
| <img src="src/console-logos/Logo-Red_Hat-Hybrid_Cloud_Console-B-White-RGB.svg" alt="Logo-Red_Hat-Hybrid_Cloud_Console-B-White-RGB" width="24" height="24" /> | `LogoRedHatHybridCloudConsoleBWhiteRGBIcon` | `Logo-Red_Hat-Hybrid_Cloud_Console-B-White-RGB.svg` | `/console-logos/Logo-Red_Hat-Hybrid_Cloud_Console-B-White-RGB.svg` | `/console-logos/Logo-Red_Hat-Hybrid_Cloud_Console-B-White-RGB.tsx` |
| <img src="src/patternfly-icons/mail.svg" alt="mail" width="24" height="24" /> | `MailIcon` | `mail.svg` | `/patternfly-icons/mail.svg` | `/patternfly-icons/mail.tsx` |
| <img src="src/partners-icons/microsoft-azure.svg" alt="microsoft-azure" width="24" height="24" /> | `MicrosoftAzureIcon` | `microsoft-azure.svg` | `/partners-icons/microsoft-azure.svg` | `/partners-icons/microsoft-azure.tsx` |
| <img src="src/partners-icons/microsoft-azure-logomark.svg" alt="microsoft-azure-logomark" width="24" height="24" /> | `MicrosoftAzureLogomarkIcon` | `microsoft-azure-logomark.svg` | `/partners-icons/microsoft-azure-logomark.svg` | `/partners-icons/microsoft-azure-logomark.tsx` |
| <img src="src/partners-icons/microsoft-azure-short.svg" alt="microsoft-azure-short" width="24" height="24" /> | `MicrosoftAzureShortIcon` | `microsoft-azure-short.svg` | `/partners-icons/microsoft-azure-short.svg` | `/partners-icons/microsoft-azure-short.tsx` |
| <img src="src/partners-icons/microsoft.svg" alt="microsoft" width="24" height="24" /> | `MicrosoftIcon` | `microsoft.svg` | `/partners-icons/microsoft.svg` | `/partners-icons/microsoft.tsx` |
| <img src="src/partners-icons/microsoft-logomark.svg" alt="microsoft-logomark" width="24" height="24" /> | `MicrosoftLogomarkIcon` | `microsoft-logomark.svg` | `/partners-icons/microsoft-logomark.svg` | `/partners-icons/microsoft-logomark.tsx` |
| <img src="src/partners-icons/microsoft-office-teams.svg" alt="microsoft-office-teams" width="24" height="24" /> | `MicrosoftOfficeTeamsIcon` | `microsoft-office-teams.svg` | `/partners-icons/microsoft-office-teams.svg` | `/partners-icons/microsoft-office-teams.tsx` |
| <img src="src/partners-icons/microsoft-short.svg" alt="microsoft-short" width="24" height="24" /> | `MicrosoftShortIcon` | `microsoft-short.svg` | `/partners-icons/microsoft-short.svg` | `/partners-icons/microsoft-short.tsx` |
| <img src="src/technology-icons/migrations-namespace.svg" alt="migrations-namespace" width="24" height="24" /> | `MigrationsNamespaceIcon` | `migrations-namespace.svg` | `/technology-icons/migrations-namespace.svg` | `/technology-icons/migrations-namespace.tsx` |
| <img src="src/technology-icons/migration-toolkit.svg" alt="migration-toolkit" width="24" height="24" /> | `MigrationToolkitIcon` | `migration-toolkit.svg` | `/technology-icons/migration-toolkit.svg` | `/technology-icons/migration-toolkit.tsx` |
| <img src="src/partners-icons/netapp.svg" alt="netapp" width="24" height="24" /> | `NetappIcon` | `netapp.svg` | `/partners-icons/netapp.svg` | `/partners-icons/netapp.tsx` |
| <img src="src/partners-icons/netapp-logomark.svg" alt="netapp-logomark" width="24" height="24" /> | `NetappLogomarkIcon` | `netapp-logomark.svg` | `/partners-icons/netapp-logomark.svg` | `/partners-icons/netapp-logomark.tsx` |
| <img src="src/partners-icons/netbox-labs.svg" alt="netbox-labs" width="24" height="24" /> | `NetboxLabsIcon` | `netbox-labs.svg` | `/partners-icons/netbox-labs.svg` | `/partners-icons/netbox-labs.tsx` |
| <img src="src/partners-icons/netscaler.svg" alt="netscaler" width="24" height="24" /> | `NetscalerIcon` | `netscaler.svg` | `/partners-icons/netscaler.svg` | `/partners-icons/netscaler.tsx` |
| <img src="src/partners-icons/netscaler-logomark.svg" alt="netscaler-logomark" width="24" height="24" /> | `NetscalerLogomarkIcon` | `netscaler-logomark.svg` | `/partners-icons/netscaler-logomark.svg` | `/partners-icons/netscaler-logomark.tsx` |
| <img src="src/partners-icons/new-relic.svg" alt="new-relic" width="24" height="24" /> | `NewRelicIcon` | `new-relic.svg` | `/partners-icons/new-relic.svg` | `/partners-icons/new-relic.tsx` |
| <img src="src/partners-icons/new-relic-logomark.svg" alt="new-relic-logomark" width="24" height="24" /> | `NewRelicLogomarkIcon` | `new-relic-logomark.svg` | `/partners-icons/new-relic-logomark.svg` | `/partners-icons/new-relic-logomark.tsx` |
| <img src="src/partners-icons/nginx.svg" alt="nginx" width="24" height="24" /> | `NginxIcon` | `nginx.svg` | `/partners-icons/nginx.svg` | `/partners-icons/nginx.tsx` |
| <img src="src/partners-icons/nginx-logomark.svg" alt="nginx-logomark" width="24" height="24" /> | `NginxLogomarkIcon` | `nginx-logomark.svg` | `/partners-icons/nginx-logomark.svg` | `/partners-icons/nginx-logomark.tsx` |
| <img src="src/partners-icons/nokia.svg" alt="nokia" width="24" height="24" /> | `NokiaIcon` | `nokia.svg` | `/partners-icons/nokia.svg` | `/partners-icons/nokia.tsx` |
| <img src="src/partners-icons/nokia-logomark.svg" alt="nokia-logomark" width="24" height="24" /> | `NokiaLogomarkIcon` | `nokia-logomark.svg` | `/partners-icons/nokia-logomark.svg` | `/partners-icons/nokia-logomark.tsx` |
| <img src="src/technology-icons/notifications.svg" alt="notifications" width="24" height="24" /> | `NotificationsIcon` | `notifications.svg` | `/technology-icons/notifications.svg` | `/technology-icons/notifications.tsx` |
| <img src="src/partners-icons/nutanix.svg" alt="nutanix" width="24" height="24" /> | `NutanixIcon` | `nutanix.svg` | `/partners-icons/nutanix.svg` | `/partners-icons/nutanix.tsx` |
| <img src="src/partners-icons/nutanix-logomark.svg" alt="nutanix-logomark" width="24" height="24" /> | `NutanixLogomarkIcon` | `nutanix-logomark.svg` | `/partners-icons/nutanix-logomark.svg` | `/partners-icons/nutanix-logomark.tsx` |
| <img src="src/partners-icons/Nvidia.svg" alt="Nvidia" width="24" height="24" /> | `NvidiaIcon` | `Nvidia.svg` | `/partners-icons/Nvidia.svg` | `/partners-icons/Nvidia.tsx` |
| <img src="src/partners-icons/one-password.svg" alt="one-password" width="24" height="24" /> | `OnePasswordIcon` | `one-password.svg` | `/partners-icons/one-password.svg` | `/partners-icons/one-password.tsx` |
| <img src="src/technology-icons/openshift-2.svg" alt="openshift-2" width="24" height="24" /> | `Openshift2Icon` | `openshift-2.svg` | `/technology-icons/openshift-2.svg` | `/technology-icons/openshift-2.tsx` |
| <img src="src/technology-icons/openshift-ai.svg" alt="openshift-ai" width="24" height="24" /> | `OpenshiftAiIcon` | `openshift-ai.svg` | `/technology-icons/openshift-ai.svg` | `/technology-icons/openshift-ai.tsx` |
| <img src="src/technology-icons/openshift-api-designer.svg" alt="openshift-api-designer" width="24" height="24" /> | `OpenshiftApiDesignerIcon` | `openshift-api-designer.svg` | `/technology-icons/openshift-api-designer.svg` | `/technology-icons/openshift-api-designer.tsx` |
| <img src="src/technology-icons/openshift-connectors.svg" alt="openshift-connectors" width="24" height="24" /> | `OpenshiftConnectorsIcon` | `openshift-connectors.svg` | `/technology-icons/openshift-connectors.svg` | `/technology-icons/openshift-connectors.tsx` |
| <img src="src/technology-icons/openshift-database-access.svg" alt="openshift-database-access" width="24" height="24" /> | `OpenshiftDatabaseAccessIcon` | `openshift-database-access.svg` | `/technology-icons/openshift-database-access.svg` | `/technology-icons/openshift-database-access.tsx` |
| <img src="src/technology-icons/openshift-dev-spaces.svg" alt="openshift-dev-spaces" width="24" height="24" /> | `OpenshiftDevSpacesIcon` | `openshift-dev-spaces.svg` | `/technology-icons/openshift-dev-spaces.svg` | `/technology-icons/openshift-dev-spaces.tsx` |
| <img src="src/technology-icons/openshift-git-ops.svg" alt="openshift-git-ops" width="24" height="24" /> | `OpenshiftGitOpsIcon` | `openshift-git-ops.svg` | `/technology-icons/openshift-git-ops.svg` | `/technology-icons/openshift-git-ops.tsx` |
| <img src="src/technology-icons/openshift.svg" alt="openshift" width="24" height="24" /> | `OpenshiftIcon` | `openshift.svg` | `/technology-icons/openshift.svg` | `/technology-icons/openshift.tsx` |
| <img src="src/technology-icons/openshift-pipelines.svg" alt="openshift-pipelines" width="24" height="24" /> | `OpenshiftPipelinesIcon` | `openshift-pipelines.svg` | `/technology-icons/openshift-pipelines.svg` | `/technology-icons/openshift-pipelines.tsx` |
| <img src="src/technology-icons/openshift-sandboxed-containers.svg" alt="openshift-sandboxed-containers" width="24" height="24" /> | `OpenshiftSandboxedContainersIcon` | `openshift-sandboxed-containers.svg` | `/technology-icons/openshift-sandboxed-containers.svg` | `/technology-icons/openshift-sandboxed-containers.tsx` |
| <img src="src/technology-icons/openshift-serverless.svg" alt="openshift-serverless" width="24" height="24" /> | `OpenshiftServerlessIcon` | `openshift-serverless.svg` | `/technology-icons/openshift-serverless.svg` | `/technology-icons/openshift-serverless.tsx` |
| <img src="src/technology-icons/openshift-service-mesh.svg" alt="openshift-service-mesh" width="24" height="24" /> | `OpenshiftServiceMeshIcon` | `openshift-service-mesh.svg` | `/technology-icons/openshift-service-mesh.svg` | `/technology-icons/openshift-service-mesh.tsx` |
| <img src="src/technology-icons/openshift-service-registry.svg" alt="openshift-service-registry" width="24" height="24" /> | `OpenshiftServiceRegistryIcon` | `openshift-service-registry.svg` | `/technology-icons/openshift-service-registry.svg` | `/technology-icons/openshift-service-registry.tsx` |
| <img src="src/technology-icons/openshift-smart-events.svg" alt="openshift-smart-events" width="24" height="24" /> | `OpenshiftSmartEventsIcon` | `openshift-smart-events.svg` | `/technology-icons/openshift-smart-events.svg` | `/technology-icons/openshift-smart-events.tsx` |
| <img src="src/technology-icons/openshift-virtualization.svg" alt="openshift-virtualization" width="24" height="24" /> | `OpenshiftVirtualizationIcon` | `openshift-virtualization.svg` | `/technology-icons/openshift-virtualization.svg` | `/technology-icons/openshift-virtualization.tsx` |
| <img src="src/partners-icons/openstack.svg" alt="openstack" width="24" height="24" /> | `OpenstackIcon` | `openstack.svg` | `/partners-icons/openstack.svg` | `/partners-icons/openstack.tsx` |
| <img src="src/technology-icons/openstack-platform.svg" alt="openstack-platform" width="24" height="24" /> | `OpenstackPlatformIcon` | `openstack-platform.svg` | `/technology-icons/openstack-platform.svg` | `/technology-icons/openstack-platform.tsx` |
| <img src="src/partners-icons/opensvc.svg" alt="opensvc" width="24" height="24" /> | `OpensvcIcon` | `opensvc.svg` | `/partners-icons/opensvc.svg` | `/partners-icons/opensvc.tsx` |
| <img src="src/partners-icons/open-vswitch.svg" alt="open-vswitch" width="24" height="24" /> | `OpenVswitchIcon` | `open-vswitch.svg` | `/partners-icons/open-vswitch.svg` | `/partners-icons/open-vswitch.tsx` |
| <img src="src/partners-icons/oracle-cloud-infra-stacked.svg" alt="oracle-cloud-infra-stacked" width="24" height="24" /> | `OracleCloudInfraStackedIcon` | `oracle-cloud-infra-stacked.svg` | `/partners-icons/oracle-cloud-infra-stacked.svg` | `/partners-icons/oracle-cloud-infra-stacked.tsx` |
| <img src="src/partners-icons/Oracle.svg" alt="Oracle" width="24" height="24" /> | `OracleIcon` | `Oracle.svg` | `/partners-icons/Oracle.svg` | `/partners-icons/Oracle.tsx` |
| <img src="src/partners-icons/oracle-short.svg" alt="oracle-short" width="24" height="24" /> | `OracleShortIcon` | `oracle-short.svg` | `/partners-icons/oracle-short.svg` | `/partners-icons/oracle-short.tsx` |
| <img src="src/technology-icons/os-migrate.svg" alt="os-migrate" width="24" height="24" /> | `OsMigrateIcon` | `os-migrate.svg` | `/technology-icons/os-migrate.svg` | `/technology-icons/os-migrate.tsx` |
| <img src="src/partners-icons/ovirt.svg" alt="ovirt" width="24" height="24" /> | `OvirtIcon` | `ovirt.svg` | `/partners-icons/ovirt.svg` | `/partners-icons/ovirt.tsx` |
| <img src="src/partners-icons/pagerduty.svg" alt="pagerduty" width="24" height="24" /> | `PagerdutyIcon` | `pagerduty.svg` | `/partners-icons/pagerduty.svg` | `/partners-icons/pagerduty.tsx` |
| <img src="src/partners-icons/pagerduty-short.svg" alt="pagerduty-short" width="24" height="24" /> | `PagerdutyShortIcon` | `pagerduty-short.svg` | `/partners-icons/pagerduty-short.svg` | `/partners-icons/pagerduty-short.tsx` |
| <img src="src/partners-icons/palo-alto-networks.svg" alt="palo-alto-networks" width="24" height="24" /> | `PaloAltoNetworksIcon` | `palo-alto-networks.svg` | `/partners-icons/palo-alto-networks.svg` | `/partners-icons/palo-alto-networks.tsx` |
| <img src="src/partners-icons/palo-alto-networks-logomark.svg" alt="palo-alto-networks-logomark" width="24" height="24" /> | `PaloAltoNetworksLogomarkIcon` | `palo-alto-networks-logomark.svg` | `/partners-icons/palo-alto-networks-logomark.svg` | `/partners-icons/palo-alto-networks-logomark.tsx` |
| <img src="src/partners-icons/phoenix-nap.svg" alt="phoenix-nap" width="24" height="24" /> | `PhoenixNapIcon` | `phoenix-nap.svg` | `/partners-icons/phoenix-nap.svg` | `/partners-icons/phoenix-nap.tsx` |
| <img src="src/partners-icons/phoenix-nap-logomark.svg" alt="phoenix-nap-logomark" width="24" height="24" /> | `PhoenixNapLogomarkIcon` | `phoenix-nap-logomark.svg` | `/partners-icons/phoenix-nap-logomark.svg` | `/partners-icons/phoenix-nap-logomark.tsx` |
| <img src="src/technology-icons/placeholder-1.svg" alt="placeholder-1" width="24" height="24" /> | `Placeholder1Icon` | `placeholder-1.svg` | `/technology-icons/placeholder-1.svg` | `/technology-icons/placeholder-1.tsx` |
| <img src="src/technology-icons/placeholder-2.svg" alt="placeholder-2" width="24" height="24" /> | `Placeholder2Icon` | `placeholder-2.svg` | `/technology-icons/placeholder-2.svg` | `/technology-icons/placeholder-2.tsx` |
| <img src="src/technology-icons/private-automation-hub.svg" alt="private-automation-hub" width="24" height="24" /> | `PrivateAutomationHubIcon` | `private-automation-hub.svg` | `/technology-icons/private-automation-hub.svg` | `/technology-icons/private-automation-hub.tsx` |
| <img src="src/partners-icons/pure-storage.svg" alt="pure-storage" width="24" height="24" /> | `PureStorageIcon` | `pure-storage.svg` | `/partners-icons/pure-storage.svg` | `/partners-icons/pure-storage.tsx` |
| <img src="src/partners-icons/pure-storage-logomark.svg" alt="pure-storage-logomark" width="24" height="24" /> | `PureStorageLogomarkIcon` | `pure-storage-logomark.svg` | `/partners-icons/pure-storage-logomark.svg` | `/partners-icons/pure-storage-logomark.tsx` |
| <img src="src/technology-icons/quay-io.svg" alt="quay-io" width="24" height="24" /> | `QuayIoIcon` | `quay-io.svg` | `/technology-icons/quay-io.svg` | `/technology-icons/quay-io.tsx` |
| <img src="src/technology-icons/red-hat-badge.svg" alt="red-hat-badge" width="24" height="24" /> | `RedHatBadgeIcon` | `red-hat-badge.svg` | `/technology-icons/red-hat-badge.svg` | `/technology-icons/red-hat-badge.tsx` |
| <img src="src/technology-icons/rhel.svg" alt="rhel" width="24" height="24" /> | `RhelIcon` | `rhel.svg` | `/technology-icons/rhel.svg` | `/technology-icons/rhel.tsx` |
| <img src="src/technology-icons/rhel-linux-for-workstations.svg" alt="rhel-linux-for-workstations" width="24" height="24" /> | `RhelLinuxForWorkstationsIcon` | `rhel-linux-for-workstations.svg` | `/technology-icons/rhel-linux-for-workstations.svg` | `/technology-icons/rhel-linux-for-workstations.tsx` |
| <img src="src/technology-icons/rhtap.svg" alt="rhtap" width="24" height="24" /> | `RhtapIcon` | `rhtap.svg` | `/technology-icons/rhtap.svg` | `/technology-icons/rhtap.tsx` |
| <img src="src/patternfly-icons/rocket.svg" alt="rocket" width="24" height="24" /> | `RocketIcon` | `rocket.svg` | `/patternfly-icons/rocket.svg` | `/patternfly-icons/rocket.tsx` |
| <img src="src/partners-icons/rubrik.svg" alt="rubrik" width="24" height="24" /> | `RubrikIcon` | `rubrik.svg` | `/partners-icons/rubrik.svg` | `/partners-icons/rubrik.tsx` |
| <img src="src/partners-icons/rubrik-logomark.svg" alt="rubrik-logomark" width="24" height="24" /> | `RubrikLogomarkIcon` | `rubrik-logomark.svg` | `/partners-icons/rubrik-logomark.svg` | `/partners-icons/rubrik-logomark.tsx` |
| <img src="src/technology-icons/runtimes.svg" alt="runtimes" width="24" height="24" /> | `RuntimesIcon` | `runtimes.svg` | `/technology-icons/runtimes.svg` | `/technology-icons/runtimes.tsx` |
| <img src="src/technology-icons/satellite.svg" alt="satellite" width="24" height="24" /> | `SatelliteIcon` | `satellite.svg` | `/technology-icons/satellite.svg` | `/technology-icons/satellite.tsx` |
| <img src="src/partners-icons/scale-computing.svg" alt="scale-computing" width="24" height="24" /> | `ScaleComputingIcon` | `scale-computing.svg` | `/partners-icons/scale-computing.svg` | `/partners-icons/scale-computing.tsx` |
| <img src="src/partners-icons/scale-computing-logomark.svg" alt="scale-computing-logomark" width="24" height="24" /> | `ScaleComputingLogomarkIcon` | `scale-computing-logomark.svg` | `/partners-icons/scale-computing-logomark.svg` | `/partners-icons/scale-computing-logomark.tsx` |
| <img src="src/technology-icons/security-profile-operator.svg" alt="security-profile-operator" width="24" height="24" /> | `SecurityProfileOperatorIcon` | `security-profile-operator.svg` | `/technology-icons/security-profile-operator.svg` | `/technology-icons/security-profile-operator.tsx` |
| <img src="src/partners-icons/seiko.svg" alt="seiko" width="24" height="24" /> | `SeikoIcon` | `seiko.svg` | `/partners-icons/seiko.svg` | `/partners-icons/seiko.tsx` |
| <img src="src/partners-icons/sensu.svg" alt="sensu" width="24" height="24" /> | `SensuIcon` | `sensu.svg` | `/partners-icons/sensu.svg` | `/partners-icons/sensu.tsx` |
| <img src="src/partners-icons/servicenow.svg" alt="servicenow" width="24" height="24" /> | `ServicenowIcon` | `servicenow.svg` | `/partners-icons/servicenow.svg` | `/partners-icons/servicenow.tsx` |
| <img src="src/partners-icons/service-now.svg" alt="service-now" width="24" height="24" /> | `ServiceNowIcon` | `service-now.svg` | `/partners-icons/service-now.svg` | `/partners-icons/service-now.tsx` |
| <img src="src/partners-icons/service-now-logomark.svg" alt="service-now-logomark" width="24" height="24" /> | `ServiceNowLogomarkIcon` | `service-now-logomark.svg` | `/partners-icons/service-now-logomark.svg` | `/partners-icons/service-now-logomark.tsx` |
| <img src="src/technology-icons/settings.svg" alt="settings" width="24" height="24" /> | `SettingsIcon` | `settings.svg` | `/technology-icons/settings.svg` | `/technology-icons/settings.tsx` |
| <img src="src/technology-icons/single-sign-on.svg" alt="single-sign-on" width="24" height="24" /> | `SingleSignOnIcon` | `single-sign-on.svg` | `/technology-icons/single-sign-on.svg` | `/technology-icons/single-sign-on.tsx` |
| <img src="src/partners-icons/slack.svg" alt="slack" width="24" height="24" /> | `SlackIcon` | `slack.svg` | `/partners-icons/slack.svg` | `/partners-icons/slack.tsx` |
| <img src="src/partners-icons/splunk.svg" alt="splunk" width="24" height="24" /> | `SplunkIcon` | `splunk.svg` | `/partners-icons/splunk.svg` | `/partners-icons/splunk.tsx` |
| <img src="src/partners-icons/splunk-logomark.svg" alt="splunk-logomark" width="24" height="24" /> | `SplunkLogomarkIcon` | `splunk-logomark.svg` | `/partners-icons/splunk-logomark.svg` | `/partners-icons/splunk-logomark.tsx` |
| <img src="src/partners-icons/styra.svg" alt="styra" width="24" height="24" /> | `StyraIcon` | `styra.svg` | `/partners-icons/styra.svg` | `/partners-icons/styra.tsx` |
| <img src="src/partners-icons/styra-logomark.svg" alt="styra-logomark" width="24" height="24" /> | `StyraLogomarkIcon` | `styra-logomark.svg` | `/partners-icons/styra-logomark.svg` | `/partners-icons/styra-logomark.tsx` |
| <img src="src/technology-icons/subscriptions.svg" alt="subscriptions" width="24" height="24" /> | `SubscriptionsIcon` | `subscriptions.svg` | `/technology-icons/subscriptions.svg` | `/technology-icons/subscriptions.tsx` |
| <img src="src/partners-icons/thales-group.svg" alt="thales-group" width="24" height="24" /> | `ThalesGroupIcon` | `thales-group.svg` | `/partners-icons/thales-group.svg` | `/partners-icons/thales-group.tsx` |
| <img src="src/technology-icons/threescale-api-management.svg" alt="threescale-api-management" width="24" height="24" /> | `ThreescaleApiManagementIcon` | `threescale-api-management.svg` | `/technology-icons/threescale-api-management.svg` | `/technology-icons/threescale-api-management.tsx` |
| <img src="src/partners-icons/trilio.svg" alt="trilio" width="24" height="24" /> | `TrilioIcon` | `trilio.svg` | `/partners-icons/trilio.svg` | `/partners-icons/trilio.tsx` |
| <img src="src/partners-icons/trilio-logomark.svg" alt="trilio-logomark" width="24" height="24" /> | `TrilioLogomarkIcon` | `trilio-logomark.svg` | `/partners-icons/trilio-logomark.svg` | `/partners-icons/trilio-logomark.tsx` |
| <img src="src/technology-icons/trusted-artifact.svg" alt="trusted-artifact" width="24" height="24" /> | `TrustedArtifactIcon` | `trusted-artifact.svg` | `/technology-icons/trusted-artifact.svg` | `/technology-icons/trusted-artifact.tsx` |
| <img src="src/technology-icons/trusted-artifact-signer.svg" alt="trusted-artifact-signer" width="24" height="24" /> | `TrustedArtifactSignerIcon` | `trusted-artifact-signer.svg` | `/technology-icons/trusted-artifact-signer.svg` | `/technology-icons/trusted-artifact-signer.tsx` |
| <img src="src/technology-icons/trusted-content-1.svg" alt="trusted-content-1" width="24" height="24" /> | `TrustedContent1Icon` | `trusted-content-1.svg` | `/technology-icons/trusted-content-1.svg` | `/technology-icons/trusted-content-1.tsx` |
| <img src="src/technology-icons/trusted-content-2.svg" alt="trusted-content-2" width="24" height="24" /> | `TrustedContent2Icon` | `trusted-content-2.svg` | `/technology-icons/trusted-content-2.svg` | `/technology-icons/trusted-content-2.tsx` |
| <img src="src/partners-icons/venafi.svg" alt="venafi" width="24" height="24" /> | `VenafiIcon` | `venafi.svg` | `/partners-icons/venafi.svg` | `/partners-icons/venafi.tsx` |
| <img src="src/partners-icons/venafi-logomark.svg" alt="venafi-logomark" width="24" height="24" /> | `VenafiLogomarkIcon` | `venafi-logomark.svg` | `/partners-icons/venafi-logomark.svg` | `/partners-icons/venafi-logomark.tsx` |
| <img src="src/partners-icons/vertice.svg" alt="vertice" width="24" height="24" /> | `VerticeIcon` | `vertice.svg` | `/partners-icons/vertice.svg` | `/partners-icons/vertice.tsx` |
| <img src="src/partners-icons/vertice-logomark.svg" alt="vertice-logomark" width="24" height="24" /> | `VerticeLogomarkIcon` | `vertice-logomark.svg` | `/partners-icons/vertice-logomark.svg` | `/partners-icons/vertice-logomark.tsx` |
| <img src="src/partners-icons/vmware-2.svg" alt="vmware-2" width="24" height="24" /> | `Vmware2Icon` | `vmware-2.svg` | `/partners-icons/vmware-2.svg` | `/partners-icons/vmware-2.tsx` |
| <img src="src/partners-icons/vmware.svg" alt="vmware" width="24" height="24" /> | `VmwareIcon` | `vmware.svg` | `/partners-icons/vmware.svg` | `/partners-icons/vmware.tsx` |
| <img src="src/partners-icons/vyos.svg" alt="vyos" width="24" height="24" /> | `VyosIcon` | `vyos.svg` | `/partners-icons/vyos.svg` | `/partners-icons/vyos.tsx` |
| <img src="src/technology-icons/webhook-integrations-1.svg" alt="webhook-integrations-1" width="24" height="24" /> | `WebhookIntegrations1Icon` | `webhook-integrations-1.svg` | `/technology-icons/webhook-integrations-1.svg` | `/technology-icons/webhook-integrations-1.tsx` |
| <img src="src/technology-icons/webhook-integrations-2.svg" alt="webhook-integrations-2" width="24" height="24" /> | `WebhookIntegrations2Icon` | `webhook-integrations-2.svg` | `/technology-icons/webhook-integrations-2.svg` | `/technology-icons/webhook-integrations-2.tsx` |
| <img src="src/partners-icons/wti.svg" alt="wti" width="24" height="24" /> | `WtiIcon` | `wti.svg` | `/partners-icons/wti.svg` | `/partners-icons/wti.tsx` |
| <img src="src/partners-icons/zabbix.svg" alt="zabbix" width="24" height="24" /> | `ZabbixIcon` | `zabbix.svg` | `/partners-icons/zabbix.svg` | `/partners-icons/zabbix.tsx` |
| <img src="src/partners-icons/Zscaler.svg" alt="Zscaler" width="24" height="24" /> | `ZscalerIcon` | `Zscaler.svg` | `/partners-icons/Zscaler.svg` | `/partners-icons/Zscaler.tsx` |
| <img src="src/partners-icons/zscaler-logomark.svg" alt="zscaler-logomark" width="24" height="24" /> | `ZscalerLogomarkIcon` | `zscaler-logomark.svg` | `/partners-icons/zscaler-logomark.svg` | `/partners-icons/zscaler-logomark.tsx` |

## Generated Components

Total components generated: 219
