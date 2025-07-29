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
| <img src="src/technology-icons/acm-for-kubernetes.svg" alt="acm-for-kubernetes" width="24" height="24" /> | `AcmForKubernetesIcon` | `acm-for-kubernetes.svg` | `/technology-icons/acm-for-kubernetes.svg` | `/technology-icons/acm-for-kubernetes.tsx` |
| <img src="src/technology-icons/acs.svg" alt="acs" width="24" height="24" /> | `AcsIcon` | `acs.svg` | `/technology-icons/acs.svg` | `/technology-icons/acs.tsx` |
| <img src="src/technology-icons/amq.svg" alt="amq" width="24" height="24" /> | `AmqIcon` | `amq.svg` | `/technology-icons/amq.svg` | `/technology-icons/amq.tsx` |
| <img src="src/technology-icons/ansible-automation-hub-hosted.svg" alt="ansible-automation-hub-hosted" width="24" height="24" /> | `AnsibleAutomationHubHostedIcon` | `ansible-automation-hub-hosted.svg` | `/technology-icons/ansible-automation-hub-hosted.svg` | `/technology-icons/ansible-automation-hub-hosted.tsx` |
| <img src="src/technology-icons/ansible-automation-platform-operator.svg" alt="ansible-automation-platform-operator" width="24" height="24" /> | `AnsibleAutomationPlatformOperatorIcon` | `ansible-automation-platform-operator.svg` | `/technology-icons/ansible-automation-platform-operator.svg` | `/technology-icons/ansible-automation-platform-operator.tsx` |
| <img src="src/technology-icons/ansible-content-collections.svg" alt="ansible-content-collections" width="24" height="24" /> | `AnsibleContentCollectionsIcon` | `ansible-content-collections.svg` | `/technology-icons/ansible-content-collections.svg` | `/technology-icons/ansible-content-collections.tsx` |
| <img src="src/technology-icons/ansible-content-tools.svg" alt="ansible-content-tools" width="24" height="24" /> | `AnsibleContentToolsIcon` | `ansible-content-tools.svg` | `/technology-icons/ansible-content-tools.svg` | `/technology-icons/ansible-content-tools.tsx` |
| <img src="src/technology-icons/ansible-core.svg" alt="ansible-core" width="24" height="24" /> | `AnsibleCoreIcon` | `ansible-core.svg` | `/technology-icons/ansible-core.svg` | `/technology-icons/ansible-core.tsx` |
| <img src="src/technology-icons/ansible.svg" alt="ansible" width="24" height="24" /> | `AnsibleIcon` | `ansible.svg` | `/technology-icons/ansible.svg` | `/technology-icons/ansible.tsx` |
| <img src="src/technology-icons/ansible-playbooks.svg" alt="ansible-playbooks" width="24" height="24" /> | `AnsiblePlaybooksIcon` | `ansible-playbooks.svg` | `/technology-icons/ansible-playbooks.svg` | `/technology-icons/ansible-playbooks.tsx` |
| <img src="src/technology-icons/ansible-rulebook.svg" alt="ansible-rulebook" width="24" height="24" /> | `AnsibleRulebookIcon` | `ansible-rulebook.svg` | `/technology-icons/ansible-rulebook.svg` | `/technology-icons/ansible-rulebook.tsx` |
| <img src="src/technology-icons/apache-kafka.svg" alt="apache-kafka" width="24" height="24" /> | `ApacheKafkaIcon` | `apache-kafka.svg` | `/technology-icons/apache-kafka.svg` | `/technology-icons/apache-kafka.tsx` |
| <img src="src/technology-icons/app-services.svg" alt="app-services" width="24" height="24" /> | `AppServicesIcon` | `app-services.svg` | `/technology-icons/app-services.svg` | `/technology-icons/app-services.tsx` |
| <img src="src/technology-icons/automation-content-navigator.svg" alt="automation-content-navigator" width="24" height="24" /> | `AutomationContentNavigatorIcon` | `automation-content-navigator.svg` | `/technology-icons/automation-content-navigator.svg` | `/technology-icons/automation-content-navigator.tsx` |
| <img src="src/technology-icons/automation-controller.svg" alt="automation-controller" width="24" height="24" /> | `AutomationControllerIcon` | `automation-controller.svg` | `/technology-icons/automation-controller.svg` | `/technology-icons/automation-controller.tsx` |
| <img src="src/technology-icons/automation-execution-environments.svg" alt="automation-execution-environments" width="24" height="24" /> | `AutomationExecutionEnvironmentsIcon` | `automation-execution-environments.svg` | `/technology-icons/automation-execution-environments.svg` | `/technology-icons/automation-execution-environments.tsx` |
| <img src="src/technology-icons/automation-mesh.svg" alt="automation-mesh" width="24" height="24" /> | `AutomationMeshIcon` | `automation-mesh.svg` | `/technology-icons/automation-mesh.svg` | `/technology-icons/automation-mesh.tsx` |
| <img src="src/partners/aws.svg" alt="aws" width="24" height="24" /> | `AwsIcon` | `aws.svg` | `/partners/aws.svg` | `/partners/aws.tsx` |
| <img src="src/technology-icons/build-of-apache-camel.svg" alt="build-of-apache-camel" width="24" height="24" /> | `BuildOfApacheCamelIcon` | `build-of-apache-camel.svg` | `/technology-icons/build-of-apache-camel.svg` | `/technology-icons/build-of-apache-camel.tsx` |
| <img src="src/technology-icons/build-of-open-telemetry.svg" alt="build-of-open-telemetry" width="24" height="24" /> | `BuildOfOpenTelemetryIcon` | `build-of-open-telemetry.svg` | `/technology-icons/build-of-open-telemetry.svg` | `/technology-icons/build-of-open-telemetry.tsx` |
| <img src="src/technology-icons/build-of-quarkus.svg" alt="build-of-quarkus" width="24" height="24" /> | `BuildOfQuarkusIcon` | `build-of-quarkus.svg` | `/technology-icons/build-of-quarkus.svg` | `/technology-icons/build-of-quarkus.tsx` |
| <img src="src/technology-icons/builds-for-openshift.svg" alt="builds-for-openshift" width="24" height="24" /> | `BuildsForOpenshiftIcon` | `builds-for-openshift.svg` | `/technology-icons/builds-for-openshift.svg` | `/technology-icons/builds-for-openshift.tsx` |
| <img src="src/technology-icons/compliance-operator.svg" alt="compliance-operator" width="24" height="24" /> | `ComplianceOperatorIcon` | `compliance-operator.svg` | `/technology-icons/compliance-operator.svg` | `/technology-icons/compliance-operator.tsx` |
| <img src="src/technology-icons/custom-metrics-autoscaler.svg" alt="custom-metrics-autoscaler" width="24" height="24" /> | `CustomMetricsAutoscalerIcon` | `custom-metrics-autoscaler.svg` | `/technology-icons/custom-metrics-autoscaler.svg` | `/technology-icons/custom-metrics-autoscaler.tsx` |
| <img src="src/technology-icons/data-science.svg" alt="data-science" width="24" height="24" /> | `DataScienceIcon` | `data-science.svg` | `/technology-icons/data-science.svg` | `/technology-icons/data-science.tsx` |
| <img src="src/technology-icons/dependency-analytics.svg" alt="dependency-analytics" width="24" height="24" /> | `DependencyAnalyticsIcon` | `dependency-analytics.svg` | `/technology-icons/dependency-analytics.svg` | `/technology-icons/dependency-analytics.tsx` |
| <img src="src/technology-icons/developer-hub.svg" alt="developer-hub" width="24" height="24" /> | `DeveloperHubIcon` | `developer-hub.svg` | `/technology-icons/developer-hub.svg` | `/technology-icons/developer-hub.tsx` |
| <img src="src/technology-icons/device-edge.svg" alt="device-edge" width="24" height="24" /> | `DeviceEdgeIcon` | `device-edge.svg` | `/technology-icons/device-edge.svg` | `/technology-icons/device-edge.tsx` |
| <img src="src/technology-icons/distributed-tracing.svg" alt="distributed-tracing" width="24" height="24" /> | `DistributedTracingIcon` | `distributed-tracing.svg` | `/technology-icons/distributed-tracing.svg` | `/technology-icons/distributed-tracing.tsx` |
| <img src="src/technology-icons/edge.svg" alt="edge" width="24" height="24" /> | `EdgeIcon` | `edge.svg` | `/technology-icons/edge.svg` | `/technology-icons/edge.tsx` |
| <img src="src/technology-icons/event-driven-ansible-controller.svg" alt="event-driven-ansible-controller" width="24" height="24" /> | `EventDrivenAnsibleControllerIcon` | `event-driven-ansible-controller.svg` | `/technology-icons/event-driven-ansible-controller.svg` | `/technology-icons/event-driven-ansible-controller.tsx` |
| <img src="src/technology-icons/execution-environment-builder.svg" alt="execution-environment-builder" width="24" height="24" /> | `ExecutionEnvironmentBuilderIcon` | `execution-environment-builder.svg` | `/technology-icons/execution-environment-builder.svg` | `/technology-icons/execution-environment-builder.tsx` |
| <img src="src/technology-icons/file-integrity-operator.svg" alt="file-integrity-operator" width="24" height="24" /> | `FileIntegrityOperatorIcon` | `file-integrity-operator.svg` | `/technology-icons/file-integrity-operator.svg` | `/technology-icons/file-integrity-operator.tsx` |
| <img src="src/technology-icons/iam.svg" alt="iam" width="24" height="24" /> | `IamIcon` | `iam.svg` | `/technology-icons/iam.svg` | `/technology-icons/iam.tsx` |
| <img src="src/technology-icons/image-mode.svg" alt="image-mode" width="24" height="24" /> | `ImageModeIcon` | `image-mode.svg` | `/technology-icons/image-mode.svg` | `/technology-icons/image-mode.tsx` |
| <img src="src/technology-icons/infrared-intelligence-feature.svg" alt="infrared-intelligence-feature" width="24" height="24" /> | `InfraredIntelligenceFeatureIcon` | `infrared-intelligence-feature.svg` | `/technology-icons/infrared-intelligence-feature.svg` | `/technology-icons/infrared-intelligence-feature.tsx` |
| <img src="src/technology-icons/infrastructure-operator-for-openshift.svg" alt="infrastructure-operator-for-openshift" width="24" height="24" /> | `InfrastructureOperatorForOpenshiftIcon` | `infrastructure-operator-for-openshift.svg` | `/technology-icons/infrastructure-operator-for-openshift.svg` | `/technology-icons/infrastructure-operator-for-openshift.tsx` |
| <img src="src/technology-icons/insights.svg" alt="insights" width="24" height="24" /> | `InsightsIcon` | `insights.svg` | `/technology-icons/insights.svg` | `/technology-icons/insights.tsx` |
| <img src="src/technology-icons/integrations.svg" alt="integrations" width="24" height="24" /> | `IntegrationsIcon` | `integrations.svg` | `/technology-icons/integrations.svg` | `/technology-icons/integrations.tsx` |
| <img src="src/technology-icons/jboss-eap.svg" alt="jboss-eap" width="24" height="24" /> | `JbossEapIcon` | `jboss-eap.svg` | `/technology-icons/jboss-eap.svg` | `/technology-icons/jboss-eap.tsx` |
| <img src="src/technology-icons/learning-resources.svg" alt="learning-resources" width="24" height="24" /> | `LearningResourcesIcon` | `learning-resources.svg` | `/technology-icons/learning-resources.svg` | `/technology-icons/learning-resources.tsx` |
| <img src="src/technology-icons/lightspeed.svg" alt="lightspeed" width="24" height="24" /> | `LightspeedIcon` | `lightspeed.svg` | `/technology-icons/lightspeed.svg` | `/technology-icons/lightspeed.tsx` |
| <img src="src/technology-icons/migration-toolkit.svg" alt="migration-toolkit" width="24" height="24" /> | `MigrationToolkitIcon` | `migration-toolkit.svg` | `/technology-icons/migration-toolkit.svg` | `/technology-icons/migration-toolkit.tsx` |
| <img src="src/technology-icons/notifications.svg" alt="notifications" width="24" height="24" /> | `NotificationsIcon` | `notifications.svg` | `/technology-icons/notifications.svg` | `/technology-icons/notifications.tsx` |
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
| <img src="src/technology-icons/openstack-platform.svg" alt="openstack-platform" width="24" height="24" /> | `OpenstackPlatformIcon` | `openstack-platform.svg` | `/technology-icons/openstack-platform.svg` | `/technology-icons/openstack-platform.tsx` |
| <img src="src/technology-icons/placeholder-1.svg" alt="placeholder-1" width="24" height="24" /> | `Placeholder1Icon` | `placeholder-1.svg` | `/technology-icons/placeholder-1.svg` | `/technology-icons/placeholder-1.tsx` |
| <img src="src/technology-icons/placeholder-2.svg" alt="placeholder-2" width="24" height="24" /> | `Placeholder2Icon` | `placeholder-2.svg` | `/technology-icons/placeholder-2.svg` | `/technology-icons/placeholder-2.tsx` |
| <img src="src/technology-icons/private-automation-hub.svg" alt="private-automation-hub" width="24" height="24" /> | `PrivateAutomationHubIcon` | `private-automation-hub.svg` | `/technology-icons/private-automation-hub.svg` | `/technology-icons/private-automation-hub.tsx` |
| <img src="src/technology-icons/quay-io.svg" alt="quay-io" width="24" height="24" /> | `QuayIoIcon` | `quay-io.svg` | `/technology-icons/quay-io.svg` | `/technology-icons/quay-io.tsx` |
| <img src="src/technology-icons/rhel.svg" alt="rhel" width="24" height="24" /> | `RhelIcon` | `rhel.svg` | `/technology-icons/rhel.svg` | `/technology-icons/rhel.tsx` |
| <img src="src/technology-icons/rhel-linux-for-workstations.svg" alt="rhel-linux-for-workstations" width="24" height="24" /> | `RhelLinuxForWorkstationsIcon` | `rhel-linux-for-workstations.svg` | `/technology-icons/rhel-linux-for-workstations.svg` | `/technology-icons/rhel-linux-for-workstations.tsx` |
| <img src="src/technology-icons/rh.svg" alt="rh" width="24" height="24" /> | `RhIcon` | `rh.svg` | `/technology-icons/rh.svg` | `/technology-icons/rh.tsx` |
| <img src="src/technology-icons/rhtap.svg" alt="rhtap" width="24" height="24" /> | `RhtapIcon` | `rhtap.svg` | `/technology-icons/rhtap.svg` | `/technology-icons/rhtap.tsx` |
| <img src="src/technology-icons/runtimes.svg" alt="runtimes" width="24" height="24" /> | `RuntimesIcon` | `runtimes.svg` | `/technology-icons/runtimes.svg` | `/technology-icons/runtimes.tsx` |
| <img src="src/technology-icons/satellite.svg" alt="satellite" width="24" height="24" /> | `SatelliteIcon` | `satellite.svg` | `/technology-icons/satellite.svg` | `/technology-icons/satellite.tsx` |
| <img src="src/technology-icons/security-profile-operator.svg" alt="security-profile-operator" width="24" height="24" /> | `SecurityProfileOperatorIcon` | `security-profile-operator.svg` | `/technology-icons/security-profile-operator.svg` | `/technology-icons/security-profile-operator.tsx` |
| <img src="src/technology-icons/settings.svg" alt="settings" width="24" height="24" /> | `SettingsIcon` | `settings.svg` | `/technology-icons/settings.svg` | `/technology-icons/settings.tsx` |
| <img src="src/technology-icons/single-sign-on.svg" alt="single-sign-on" width="24" height="24" /> | `SingleSignOnIcon` | `single-sign-on.svg` | `/technology-icons/single-sign-on.svg` | `/technology-icons/single-sign-on.tsx` |
| <img src="src/technology-icons/subscriptions.svg" alt="subscriptions" width="24" height="24" /> | `SubscriptionsIcon` | `subscriptions.svg` | `/technology-icons/subscriptions.svg` | `/technology-icons/subscriptions.tsx` |
| <img src="src/technology-icons/3scale-api-management.svg" alt="3scale-api-management" width="24" height="24" /> | `ThreeScaleApiManagementIcon` | `3scale-api-management.svg` | `/technology-icons/3scale-api-management.svg` | `/technology-icons/3scale-api-management.tsx` |
| <img src="src/technology-icons/trusted-artifact.svg" alt="trusted-artifact" width="24" height="24" /> | `TrustedArtifactIcon` | `trusted-artifact.svg` | `/technology-icons/trusted-artifact.svg` | `/technology-icons/trusted-artifact.tsx` |
| <img src="src/technology-icons/trusted-artifact-signer.svg" alt="trusted-artifact-signer" width="24" height="24" /> | `TrustedArtifactSignerIcon` | `trusted-artifact-signer.svg` | `/technology-icons/trusted-artifact-signer.svg` | `/technology-icons/trusted-artifact-signer.tsx` |
| <img src="src/technology-icons/trusted-content-1.svg" alt="trusted-content-1" width="24" height="24" /> | `TrustedContent1Icon` | `trusted-content-1.svg` | `/technology-icons/trusted-content-1.svg` | `/technology-icons/trusted-content-1.tsx` |
| <img src="src/technology-icons/trusted-content-2.svg" alt="trusted-content-2" width="24" height="24" /> | `TrustedContent2Icon` | `trusted-content-2.svg` | `/technology-icons/trusted-content-2.svg` | `/technology-icons/trusted-content-2.tsx` |

## Generated Components

Total components generated: 78
