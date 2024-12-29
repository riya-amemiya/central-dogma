import { OpenAPIHono } from "@hono/zod-openapi";
import {
  endoflifeAkeneoPimHandler,
  endoflifeAkeneoPimRoute,
} from "@pages/endoflife/akeneo-pim";
import {
  endoflifeAlibabaDragonwellHandler,
  endoflifeAlibabaDragonwellRoute,
} from "@pages/endoflife/alibaba-dragonwell";
import {
  endoflifeAlmalinuxHandler,
  endoflifeAlmalinuxRoute,
} from "@pages/endoflife/almalinux";
import {
  endoflifeAlpineHandler,
  endoflifeAlpineRoute,
} from "@pages/endoflife/alpine";
import {
  endoflifeAmazonCdkHandler,
  endoflifeAmazonCdkRoute,
} from "@pages/endoflife/amazon-cdk";
import {
  endoflifeAmazonCorrettoHandler,
  endoflifeAmazonCorrettoRoute,
} from "@pages/endoflife/amazon-corretto";
import {
  endoflifeAmazonEksHandler,
  endoflifeAmazonEksRoute,
} from "@pages/endoflife/amazon-eks";
import {
  endoflifeAmazonGlueHandler,
  endoflifeAmazonGlueRoute,
} from "@pages/endoflife/amazon-glue";
import {
  endoflifeAmazonLinuxHandler,
  endoflifeAmazonLinuxRoute,
} from "@pages/endoflife/amazon-linux";
import {
  endoflifeAmazonNeptuneHandler,
  endoflifeAmazonNeptuneRoute,
} from "@pages/endoflife/amazon-neptune";
import {
  endoflifeAmazonRdsMariadbHandler,
  endoflifeAmazonRdsMariadbRoute,
} from "@pages/endoflife/amazon-rds-mariadb";
import {
  endoflifeAmazonRdsMysqlHandler,
  endoflifeAmazonRdsMysqlRoute,
} from "@pages/endoflife/amazon-rds-mysql";
import {
  endoflifeAmazonRdsPostgresqlHandler,
  endoflifeAmazonRdsPostgresqlRoute,
} from "@pages/endoflife/amazon-rds-postgresql";
import {
  endoflifeAndroidHandler,
  endoflifeAndroidRoute,
} from "@pages/endoflife/android";
import {
  endoflifeAngularHandler,
  endoflifeAngularRoute,
} from "@pages/endoflife/angular";
import {
  endoflifeAngularjsHandler,
  endoflifeAngularjsRoute,
} from "@pages/endoflife/angularjs";
import {
  endoflifeAnsibleHandler,
  endoflifeAnsibleRoute,
} from "@pages/endoflife/ansible";
import {
  endoflifeAnsibleCoreHandler,
  endoflifeAnsibleCoreRoute,
} from "@pages/endoflife/ansible-core";
import {
  endoflifeAntixHandler,
  endoflifeAntixRoute,
} from "@pages/endoflife/antix";
import {
  endoflifeApacheHandler,
  endoflifeApacheRoute,
} from "@pages/endoflife/apache";
import {
  endoflifeApacheActivemqHandler,
  endoflifeApacheActivemqRoute,
} from "@pages/endoflife/apache-activemq";
import {
  endoflifeApacheAirflowHandler,
  endoflifeApacheAirflowRoute,
} from "@pages/endoflife/apache-airflow";
import {
  endoflifeApacheApisixHandler,
  endoflifeApacheApisixRoute,
} from "@pages/endoflife/apache-apisix";
import {
  endoflifeApacheCamelHandler,
  endoflifeApacheCamelRoute,
} from "@pages/endoflife/apache-camel";
import {
  endoflifeApacheCassandraHandler,
  endoflifeApacheCassandraRoute,
} from "@pages/endoflife/apache-cassandra";
import {
  endoflifeApacheCouchdbHandler,
  endoflifeApacheCouchdbRoute,
} from "@pages/endoflife/apache-couchdb";
import {
  endoflifeApacheFlinkHandler,
  endoflifeApacheFlinkRoute,
} from "@pages/endoflife/apache-flink";
import {
  endoflifeApacheGroovyHandler,
  endoflifeApacheGroovyRoute,
} from "@pages/endoflife/apache-groovy";
import {
  endoflifeApacheHadoopHandler,
  endoflifeApacheHadoopRoute,
} from "@pages/endoflife/apache-hadoop";
import {
  endoflifeApacheHopHandler,
  endoflifeApacheHopRoute,
} from "@pages/endoflife/apache-hop";
import {
  endoflifeApacheKafkaHandler,
  endoflifeApacheKafkaRoute,
} from "@pages/endoflife/apache-kafka";
import {
  endoflifeApacheLuceneHandler,
  endoflifeApacheLuceneRoute,
} from "@pages/endoflife/apache-lucene";
import {
  endoflifeApacheSparkHandler,
  endoflifeApacheSparkRoute,
} from "@pages/endoflife/apache-spark";
import {
  endoflifeApacheStrutsHandler,
  endoflifeApacheStrutsRoute,
} from "@pages/endoflife/apache-struts";
import {
  endoflifeApiPlatformHandler,
  endoflifeApiPlatformRoute,
} from "@pages/endoflife/api-platform";
import {
  endoflifeAppleWatchHandler,
  endoflifeAppleWatchRoute,
} from "@pages/endoflife/apple-watch";
import {
  endoflifeArangodbHandler,
  endoflifeArangodbRoute,
} from "@pages/endoflife/arangodb";
import {
  endoflifeArgoCdHandler,
  endoflifeArgoCdRoute,
} from "@pages/endoflife/argo-cd";
import {
  endoflifeArtifactoryHandler,
  endoflifeArtifactoryRoute,
} from "@pages/endoflife/artifactory";
import {
  endoflifeAwsLambdaHandler,
  endoflifeAwsLambdaRoute,
} from "@pages/endoflife/aws-lambda";
import {
  endoflifeAzulZuluHandler,
  endoflifeAzulZuluRoute,
} from "@pages/endoflife/azul-zulu";
import {
  endoflifeAzureDevopsServerHandler,
  endoflifeAzureDevopsServerRoute,
} from "@pages/endoflife/azure-devops-server";
import {
  endoflifeAzureKubernetesServiceHandler,
  endoflifeAzureKubernetesServiceRoute,
} from "@pages/endoflife/azure-kubernetes-service";
import {
  endoflifeBazelHandler,
  endoflifeBazelRoute,
} from "@pages/endoflife/bazel";
import {
  endoflifeBeatsHandler,
  endoflifeBeatsRoute,
} from "@pages/endoflife/beats";
import {
  endoflifeBellsoftLibericaHandler,
  endoflifeBellsoftLibericaRoute,
} from "@pages/endoflife/bellsoft-liberica";
import {
  endoflifeBlenderHandler,
  endoflifeBlenderRoute,
} from "@pages/endoflife/blender";
import {
  endoflifeBootstrapHandler,
  endoflifeBootstrapRoute,
} from "@pages/endoflife/bootstrap";
import { endoflifeBunHandler, endoflifeBunRoute } from "@pages/endoflife/bun";
import {
  endoflifeCakephpHandler,
  endoflifeCakephpRoute,
} from "@pages/endoflife/cakephp";
import {
  endoflifeCalicoHandler,
  endoflifeCalicoRoute,
} from "@pages/endoflife/calico";
import {
  endoflifeCentosHandler,
  endoflifeCentosRoute,
} from "@pages/endoflife/centos";
import {
  endoflifeCentosStreamHandler,
  endoflifeCentosStreamRoute,
} from "@pages/endoflife/centos-stream";
import {
  endoflifeCentreonHandler,
  endoflifeCentreonRoute,
} from "@pages/endoflife/centreon";
import {
  endoflifeCertManagerHandler,
  endoflifeCertManagerRoute,
} from "@pages/endoflife/cert-manager";
import {
  endoflifeCfengineHandler,
  endoflifeCfengineRoute,
} from "@pages/endoflife/cfengine";
import {
  endoflifeChefInfraClientHandler,
  endoflifeChefInfraClientRoute,
} from "@pages/endoflife/chef-infra-client";
import {
  endoflifeChefInfraServerHandler,
  endoflifeChefInfraServerRoute,
} from "@pages/endoflife/chef-infra-server";
import {
  endoflifeChefInspecHandler,
  endoflifeChefInspecRoute,
} from "@pages/endoflife/chef-inspec";
import {
  endoflifeCitrixVadHandler,
  endoflifeCitrixVadRoute,
} from "@pages/endoflife/citrix-vad";
import {
  endoflifeCkeditorHandler,
  endoflifeCkeditorRoute,
} from "@pages/endoflife/ckeditor";
import {
  endoflifeClamavHandler,
  endoflifeClamavRoute,
} from "@pages/endoflife/clamav";
import {
  endoflifeCockroachdbHandler,
  endoflifeCockroachdbRoute,
} from "@pages/endoflife/cockroachdb";
import {
  endoflifeCoderHandler,
  endoflifeCoderRoute,
} from "@pages/endoflife/coder";
import {
  endoflifeColdfusionHandler,
  endoflifeColdfusionRoute,
} from "@pages/endoflife/coldfusion";
import {
  endoflifeComposerHandler,
  endoflifeComposerRoute,
} from "@pages/endoflife/composer";
import {
  endoflifeConfluenceHandler,
  endoflifeConfluenceRoute,
} from "@pages/endoflife/confluence";
import {
  endoflifeConsulHandler,
  endoflifeConsulRoute,
} from "@pages/endoflife/consul";
import {
  endoflifeContainerdHandler,
  endoflifeContainerdRoute,
} from "@pages/endoflife/containerd";
import {
  endoflifeContaoHandler,
  endoflifeContaoRoute,
} from "@pages/endoflife/contao";
import {
  endoflifeContourHandler,
  endoflifeContourRoute,
} from "@pages/endoflife/contour";
import {
  endoflifeControlmHandler,
  endoflifeControlmRoute,
} from "@pages/endoflife/controlm";
import {
  endoflifeCortexXdrHandler,
  endoflifeCortexXdrRoute,
} from "@pages/endoflife/cortex-xdr";
import { endoflifeCosHandler, endoflifeCosRoute } from "@pages/endoflife/cos";
import {
  endoflifeCouchbaseServerHandler,
  endoflifeCouchbaseServerRoute,
} from "@pages/endoflife/couchbase-server";
import {
  endoflifeCraftCmsHandler,
  endoflifeCraftCmsRoute,
} from "@pages/endoflife/craft-cms";
import {
  endoflifeDbtCoreHandler,
  endoflifeDbtCoreRoute,
} from "@pages/endoflife/dbt-core";
import { endoflifeDceHandler, endoflifeDceRoute } from "@pages/endoflife/dce";
import {
  endoflifeDebianHandler,
  endoflifeDebianRoute,
} from "@pages/endoflife/debian";
import {
  endoflifeDependencyTrackHandler,
  endoflifeDependencyTrackRoute,
} from "@pages/endoflife/dependency-track";
import {
  endoflifeDevuanHandler,
  endoflifeDevuanRoute,
} from "@pages/endoflife/devuan";
import {
  endoflifeDjangoHandler,
  endoflifeDjangoRoute,
} from "@pages/endoflife/django";
import {
  endoflifeDockerEngineHandler,
  endoflifeDockerEngineRoute,
} from "@pages/endoflife/docker-engine";
import {
  endoflifeDotnetHandler,
  endoflifeDotnetRoute,
} from "@pages/endoflife/dotnet";
import {
  endoflifeDotnetfxHandler,
  endoflifeDotnetfxRoute,
} from "@pages/endoflife/dotnetfx";
import {
  endoflifeDrupalHandler,
  endoflifeDrupalRoute,
} from "@pages/endoflife/drupal";
import {
  endoflifeDrushHandler,
  endoflifeDrushRoute,
} from "@pages/endoflife/drush";
import {
  endoflifeEclipseJettyHandler,
  endoflifeEclipseJettyRoute,
} from "@pages/endoflife/eclipse-jetty";
import {
  endoflifeEclipseTemurinHandler,
  endoflifeEclipseTemurinRoute,
} from "@pages/endoflife/eclipse-temurin";
import {
  endoflifeElasticsearchHandler,
  endoflifeElasticsearchRoute,
} from "@pages/endoflife/elasticsearch";
import {
  endoflifeElectronHandler,
  endoflifeElectronRoute,
} from "@pages/endoflife/electron";
import {
  endoflifeElixirHandler,
  endoflifeElixirRoute,
} from "@pages/endoflife/elixir";
import {
  endoflifeEmberjsHandler,
  endoflifeEmberjsRoute,
} from "@pages/endoflife/emberjs";
import {
  endoflifeEnvoyHandler,
  endoflifeEnvoyRoute,
} from "@pages/endoflife/envoy";
import {
  endoflifeErlangHandler,
  endoflifeErlangRoute,
} from "@pages/endoflife/erlang";
import {
  endoflifeEsxiHandler,
  endoflifeEsxiRoute,
} from "@pages/endoflife/esxi";
import {
  endoflifeEtcdHandler,
  endoflifeEtcdRoute,
} from "@pages/endoflife/etcd";
import {
  endoflifeEurolinuxHandler,
  endoflifeEurolinuxRoute,
} from "@pages/endoflife/eurolinux";
import {
  endoflifeEximHandler,
  endoflifeEximRoute,
} from "@pages/endoflife/exim";
import {
  endoflifeFairphoneHandler,
  endoflifeFairphoneRoute,
} from "@pages/endoflife/fairphone";
import {
  endoflifeFedoraHandler,
  endoflifeFedoraRoute,
} from "@pages/endoflife/fedora";
import {
  endoflifeFfmpegHandler,
  endoflifeFfmpegRoute,
} from "@pages/endoflife/ffmpeg";
import {
  endoflifeFilemakerHandler,
  endoflifeFilemakerRoute,
} from "@pages/endoflife/filemaker";
import {
  endoflifeFirefoxHandler,
  endoflifeFirefoxRoute,
} from "@pages/endoflife/firefox";
import {
  endoflifeFluentBitHandler,
  endoflifeFluentBitRoute,
} from "@pages/endoflife/fluent-bit";
import {
  endoflifeFluxHandler,
  endoflifeFluxRoute,
} from "@pages/endoflife/flux";
import {
  endoflifeForgejoHandler,
  endoflifeForgejoRoute,
} from "@pages/endoflife/forgejo";
import {
  endoflifeFortiosHandler,
  endoflifeFortiosRoute,
} from "@pages/endoflife/fortios";
import {
  endoflifeFreebsdHandler,
  endoflifeFreebsdRoute,
} from "@pages/endoflife/freebsd";
import {
  endoflifeGerritHandler,
  endoflifeGerritRoute,
} from "@pages/endoflife/gerrit";
import { endoflifeGhcHandler, endoflifeGhcRoute } from "@pages/endoflife/ghc";
import {
  endoflifeGitlabHandler,
  endoflifeGitlabRoute,
} from "@pages/endoflife/gitlab";
import { endoflifeGoHandler, endoflifeGoRoute } from "@pages/endoflife/go";
import {
  endoflifeGoaccessHandler,
  endoflifeGoaccessRoute,
} from "@pages/endoflife/goaccess";
import {
  endoflifeGodotHandler,
  endoflifeGodotRoute,
} from "@pages/endoflife/godot";
import {
  endoflifeGoogleKubernetesEngineHandler,
  endoflifeGoogleKubernetesEngineRoute,
} from "@pages/endoflife/google-kubernetes-engine";
import {
  endoflifeGoogleNexusHandler,
  endoflifeGoogleNexusRoute,
} from "@pages/endoflife/google-nexus";
import {
  endoflifeGorillaHandler,
  endoflifeGorillaRoute,
} from "@pages/endoflife/gorilla";
import {
  endoflifeGraalvmHandler,
  endoflifeGraalvmRoute,
} from "@pages/endoflife/graalvm";
import {
  endoflifeGradleHandler,
  endoflifeGradleRoute,
} from "@pages/endoflife/gradle";
import {
  endoflifeGrafanaHandler,
  endoflifeGrafanaRoute,
} from "@pages/endoflife/grafana";
import {
  endoflifeGrafanaLokiHandler,
  endoflifeGrafanaLokiRoute,
} from "@pages/endoflife/grafana-loki";
import {
  endoflifeGrailsHandler,
  endoflifeGrailsRoute,
} from "@pages/endoflife/grails";
import {
  endoflifeGraylogHandler,
  endoflifeGraylogRoute,
} from "@pages/endoflife/graylog";
import {
  endoflifeGstreamerHandler,
  endoflifeGstreamerRoute,
} from "@pages/endoflife/gstreamer";
import {
  endoflifeHaproxyHandler,
  endoflifeHaproxyRoute,
} from "@pages/endoflife/haproxy";
import {
  endoflifeHarborHandler,
  endoflifeHarborRoute,
} from "@pages/endoflife/harbor";
import {
  endoflifeHashicorpPackerHandler,
  endoflifeHashicorpPackerRoute,
} from "@pages/endoflife/hashicorp-packer";
import {
  endoflifeHashicorpVaultHandler,
  endoflifeHashicorpVaultRoute,
} from "@pages/endoflife/hashicorp-vault";
import {
  endoflifeHbaseHandler,
  endoflifeHbaseRoute,
} from "@pages/endoflife/hbase";
import {
  endoflifeHorizonHandler,
  endoflifeHorizonRoute,
} from "@pages/endoflife/horizon";
import {
  endoflifeIbmAixHandler,
  endoflifeIbmAixRoute,
} from "@pages/endoflife/ibm-aix";
import {
  endoflifeIbmIHandler,
  endoflifeIbmIRoute,
} from "@pages/endoflife/ibm-i";
import {
  endoflifeIbmSemeruRuntimeHandler,
  endoflifeIbmSemeruRuntimeRoute,
} from "@pages/endoflife/ibm-semeru-runtime";
import {
  endoflifeIcingaHandler,
  endoflifeIcingaRoute,
} from "@pages/endoflife/icinga";
import {
  endoflifeIcingaWebHandler,
  endoflifeIcingaWebRoute,
} from "@pages/endoflife/icinga-web";
import {
  endoflifeIntelProcessorsHandler,
  endoflifeIntelProcessorsRoute,
} from "@pages/endoflife/intel-processors";
import {
  endoflifeInternetExplorerHandler,
  endoflifeInternetExplorerRoute,
} from "@pages/endoflife/internet-explorer";
import {
  endoflifeIonicHandler,
  endoflifeIonicRoute,
} from "@pages/endoflife/ionic";
import { endoflifeIosHandler, endoflifeIosRoute } from "@pages/endoflife/ios";
import {
  endoflifeIpadHandler,
  endoflifeIpadRoute,
} from "@pages/endoflife/ipad";
import {
  endoflifeIpadosHandler,
  endoflifeIpadosRoute,
} from "@pages/endoflife/ipados";
import {
  endoflifeIphoneHandler,
  endoflifeIphoneRoute,
} from "@pages/endoflife/iphone";
import {
  endoflifeIscDhcpHandler,
  endoflifeIscDhcpRoute,
} from "@pages/endoflife/isc-dhcp";
import {
  endoflifeIstioHandler,
  endoflifeIstioRoute,
} from "@pages/endoflife/istio";
import {
  endoflifeJekyllHandler,
  endoflifeJekyllRoute,
} from "@pages/endoflife/jekyll";
import {
  endoflifeJenkinsHandler,
  endoflifeJenkinsRoute,
} from "@pages/endoflife/jenkins";
import {
  endoflifeJhipsterHandler,
  endoflifeJhipsterRoute,
} from "@pages/endoflife/jhipster";
import {
  endoflifeJiraSoftwareHandler,
  endoflifeJiraSoftwareRoute,
} from "@pages/endoflife/jira-software";
import {
  endoflifeJoomlaHandler,
  endoflifeJoomlaRoute,
} from "@pages/endoflife/joomla";
import {
  endoflifeJqueryHandler,
  endoflifeJqueryRoute,
} from "@pages/endoflife/jquery";
import {
  endoflifeJqueryUiHandler,
  endoflifeJqueryUiRoute,
} from "@pages/endoflife/jquery-ui";
import {
  endoflifeJreleaserHandler,
  endoflifeJreleaserRoute,
} from "@pages/endoflife/jreleaser";
import {
  endoflifeKdePlasmaHandler,
  endoflifeKdePlasmaRoute,
} from "@pages/endoflife/kde-plasma";
import {
  endoflifeKedaHandler,
  endoflifeKedaRoute,
} from "@pages/endoflife/keda";
import {
  endoflifeKeycloakHandler,
  endoflifeKeycloakRoute,
} from "@pages/endoflife/keycloak";
import {
  endoflifeKibanaHandler,
  endoflifeKibanaRoute,
} from "@pages/endoflife/kibana";
import {
  endoflifeKindleHandler,
  endoflifeKindleRoute,
} from "@pages/endoflife/kindle";
import {
  endoflifeKirbyHandler,
  endoflifeKirbyRoute,
} from "@pages/endoflife/kirby";
import {
  endoflifeKongGatewayHandler,
  endoflifeKongGatewayRoute,
} from "@pages/endoflife/kong-gateway";
import {
  endoflifeKotlinHandler,
  endoflifeKotlinRoute,
} from "@pages/endoflife/kotlin";
import {
  endoflifeKubernetesHandler,
  endoflifeKubernetesRoute,
} from "@pages/endoflife/kubernetes";
import {
  endoflifeKubernetesCsiNodeDriverRegistrarHandler,
  endoflifeKubernetesCsiNodeDriverRegistrarRoute,
} from "@pages/endoflife/kubernetes-csi-node-driver-registrar";
import {
  endoflifeKubernetesNodeFeatureDiscoveryHandler,
  endoflifeKubernetesNodeFeatureDiscoveryRoute,
} from "@pages/endoflife/kubernetes-node-feature-discovery";
import {
  endoflifeKumaHandler,
  endoflifeKumaRoute,
} from "@pages/endoflife/kuma";
import {
  endoflifeKyvernoHandler,
  endoflifeKyvernoRoute,
} from "@pages/endoflife/kyverno";
import {
  endoflifeLaravelHandler,
  endoflifeLaravelRoute,
} from "@pages/endoflife/laravel";
import {
  endoflifeLibreofficeHandler,
  endoflifeLibreofficeRoute,
} from "@pages/endoflife/libreoffice";
import {
  endoflifeLineageosHandler,
  endoflifeLineageosRoute,
} from "@pages/endoflife/lineageos";
import {
  endoflifeLinuxHandler,
  endoflifeLinuxRoute,
} from "@pages/endoflife/linux";
import {
  endoflifeLinuxmintHandler,
  endoflifeLinuxmintRoute,
} from "@pages/endoflife/linuxmint";
import {
  endoflifeLog4jHandler,
  endoflifeLog4jRoute,
} from "@pages/endoflife/log4j";
import {
  endoflifeLogstashHandler,
  endoflifeLogstashRoute,
} from "@pages/endoflife/logstash";
import {
  endoflifeLookerHandler,
  endoflifeLookerRoute,
} from "@pages/endoflife/looker";
import { endoflifeLuaHandler, endoflifeLuaRoute } from "@pages/endoflife/lua";
import {
  endoflifeMacosHandler,
  endoflifeMacosRoute,
} from "@pages/endoflife/macos";
import {
  endoflifeMageiaHandler,
  endoflifeMageiaRoute,
} from "@pages/endoflife/mageia";
import {
  endoflifeMagentoHandler,
  endoflifeMagentoRoute,
} from "@pages/endoflife/magento";
import {
  endoflifeMandrelHandler,
  endoflifeMandrelRoute,
} from "@pages/endoflife/mandrel";
import {
  endoflifeMariadbHandler,
  endoflifeMariadbRoute,
} from "@pages/endoflife/mariadb";
import {
  endoflifeMastodonHandler,
  endoflifeMastodonRoute,
} from "@pages/endoflife/mastodon";
import {
  endoflifeMatomoHandler,
  endoflifeMatomoRoute,
} from "@pages/endoflife/matomo";
import {
  endoflifeMattermostHandler,
  endoflifeMattermostRoute,
} from "@pages/endoflife/mattermost";
import {
  endoflifeMauticHandler,
  endoflifeMauticRoute,
} from "@pages/endoflife/mautic";
import {
  endoflifeMavenHandler,
  endoflifeMavenRoute,
} from "@pages/endoflife/maven";
import {
  endoflifeMediawikiHandler,
  endoflifeMediawikiRoute,
} from "@pages/endoflife/mediawiki";
import {
  endoflifeMeilisearchHandler,
  endoflifeMeilisearchRoute,
} from "@pages/endoflife/meilisearch";
import {
  endoflifeMemcachedHandler,
  endoflifeMemcachedRoute,
} from "@pages/endoflife/memcached";
import {
  endoflifeMicronautHandler,
  endoflifeMicronautRoute,
} from "@pages/endoflife/micronaut";
import {
  endoflifeMicrosoftBuildOfOpenjdkHandler,
  endoflifeMicrosoftBuildOfOpenjdkRoute,
} from "@pages/endoflife/microsoft-build-of-openjdk";
import {
  endoflifeMongodbHandler,
  endoflifeMongodbRoute,
} from "@pages/endoflife/mongodb";
import {
  endoflifeMoodleHandler,
  endoflifeMoodleRoute,
} from "@pages/endoflife/moodle";
import {
  endoflifeMotorolaMobilityHandler,
  endoflifeMotorolaMobilityRoute,
} from "@pages/endoflife/motorola-mobility";
import {
  endoflifeMsexchangeHandler,
  endoflifeMsexchangeRoute,
} from "@pages/endoflife/msexchange";
import {
  endoflifeMssqlserverHandler,
  endoflifeMssqlserverRoute,
} from "@pages/endoflife/mssqlserver";
import {
  endoflifeMulesoftRuntimeHandler,
  endoflifeMulesoftRuntimeRoute,
} from "@pages/endoflife/mulesoft-runtime";
import {
  endoflifeMxlinuxHandler,
  endoflifeMxlinuxRoute,
} from "@pages/endoflife/mxlinux";
import {
  endoflifeMysqlHandler,
  endoflifeMysqlRoute,
} from "@pages/endoflife/mysql";
import {
  endoflifeNeo4jHandler,
  endoflifeNeo4jRoute,
} from "@pages/endoflife/neo4j";
import {
  endoflifeNeosHandler,
  endoflifeNeosRoute,
} from "@pages/endoflife/neos";
import {
  endoflifeNetbsdHandler,
  endoflifeNetbsdRoute,
} from "@pages/endoflife/netbsd";
import {
  endoflifeNextcloudHandler,
  endoflifeNextcloudRoute,
} from "@pages/endoflife/nextcloud";
import {
  endoflifeNextjsHandler,
  endoflifeNextjsRoute,
} from "@pages/endoflife/nextjs";
import {
  endoflifeNexusHandler,
  endoflifeNexusRoute,
} from "@pages/endoflife/nexus";
import {
  endoflifeNginxHandler,
  endoflifeNginxRoute,
} from "@pages/endoflife/nginx";
import { endoflifeNixHandler, endoflifeNixRoute } from "@pages/endoflife/nix";
import {
  endoflifeNixosHandler,
  endoflifeNixosRoute,
} from "@pages/endoflife/nixos";
import {
  endoflifeNodejsHandler,
  endoflifeNodejsRoute,
} from "@pages/endoflife/nodejs";
import {
  endoflifeNokiaHandler,
  endoflifeNokiaRoute,
} from "@pages/endoflife/nokia";
import {
  endoflifeNomadHandler,
  endoflifeNomadRoute,
} from "@pages/endoflife/nomad";
import {
  endoflifeNumpyHandler,
  endoflifeNumpyRoute,
} from "@pages/endoflife/numpy";
import {
  endoflifeNutanixAosHandler,
  endoflifeNutanixAosRoute,
} from "@pages/endoflife/nutanix-aos";
import {
  endoflifeNutanixFilesHandler,
  endoflifeNutanixFilesRoute,
} from "@pages/endoflife/nutanix-files";
import {
  endoflifeNutanixPrismHandler,
  endoflifeNutanixPrismRoute,
} from "@pages/endoflife/nutanix-prism";
import {
  endoflifeNuxtHandler,
  endoflifeNuxtRoute,
} from "@pages/endoflife/nuxt";
import {
  endoflifeNvidiaHandler,
  endoflifeNvidiaRoute,
} from "@pages/endoflife/nvidia";
import {
  endoflifeNvidiaGpuHandler,
  endoflifeNvidiaGpuRoute,
} from "@pages/endoflife/nvidia-gpu";
import { endoflifeNvmHandler, endoflifeNvmRoute } from "@pages/endoflife/nvm";
import {
  endoflifeOfficeHandler,
  endoflifeOfficeRoute,
} from "@pages/endoflife/office";
import {
  endoflifeOneplusHandler,
  endoflifeOneplusRoute,
} from "@pages/endoflife/oneplus";
import {
  endoflifeOpenbsdHandler,
  endoflifeOpenbsdRoute,
} from "@pages/endoflife/openbsd";
import {
  endoflifeOpenjdkBuildsFromOracleHandler,
  endoflifeOpenjdkBuildsFromOracleRoute,
} from "@pages/endoflife/openjdk-builds-from-oracle";
import {
  endoflifeOpensearchHandler,
  endoflifeOpensearchRoute,
} from "@pages/endoflife/opensearch";
import {
  endoflifeOpensslHandler,
  endoflifeOpensslRoute,
} from "@pages/endoflife/openssl";
import {
  endoflifeOpensuseHandler,
  endoflifeOpensuseRoute,
} from "@pages/endoflife/opensuse";
import {
  endoflifeOpentofuHandler,
  endoflifeOpentofuRoute,
} from "@pages/endoflife/opentofu";
import {
  endoflifeOpenvpnHandler,
  endoflifeOpenvpnRoute,
} from "@pages/endoflife/openvpn";
import {
  endoflifeOpenwrtHandler,
  endoflifeOpenwrtRoute,
} from "@pages/endoflife/openwrt";
import {
  endoflifeOpenzfsHandler,
  endoflifeOpenzfsRoute,
} from "@pages/endoflife/openzfs";
import {
  endoflifeOpnsenseHandler,
  endoflifeOpnsenseRoute,
} from "@pages/endoflife/opnsense";
import {
  endoflifeOracleApexHandler,
  endoflifeOracleApexRoute,
} from "@pages/endoflife/oracle-apex";
import {
  endoflifeOracleDatabaseHandler,
  endoflifeOracleDatabaseRoute,
} from "@pages/endoflife/oracle-database";
import {
  endoflifeOracleJdkHandler,
  endoflifeOracleJdkRoute,
} from "@pages/endoflife/oracle-jdk";
import {
  endoflifeOracleLinuxHandler,
  endoflifeOracleLinuxRoute,
} from "@pages/endoflife/oracle-linux";
import {
  endoflifeOracleSolarisHandler,
  endoflifeOracleSolarisRoute,
} from "@pages/endoflife/oracle-solaris";
import {
  endoflifeOvirtHandler,
  endoflifeOvirtRoute,
} from "@pages/endoflife/ovirt";
import {
  endoflifePangpHandler,
  endoflifePangpRoute,
} from "@pages/endoflife/pangp";
import {
  endoflifePanosHandler,
  endoflifePanosRoute,
} from "@pages/endoflife/panos";
import {
  endoflifePciDssHandler,
  endoflifePciDssRoute,
} from "@pages/endoflife/pci-dss";
import {
  endoflifePerlHandler,
  endoflifePerlRoute,
} from "@pages/endoflife/perl";
import {
  endoflifePhotonHandler,
  endoflifePhotonRoute,
} from "@pages/endoflife/photon";
import { endoflifePhpHandler, endoflifePhpRoute } from "@pages/endoflife/php";
import {
  endoflifePhpbbHandler,
  endoflifePhpbbRoute,
} from "@pages/endoflife/phpbb";
import {
  endoflifePhpmyadminHandler,
  endoflifePhpmyadminRoute,
} from "@pages/endoflife/phpmyadmin";
import {
  endoflifePixelHandler,
  endoflifePixelRoute,
} from "@pages/endoflife/pixel";
import {
  endoflifePixelWatchHandler,
  endoflifePixelWatchRoute,
} from "@pages/endoflife/pixel-watch";
import {
  endoflifePleskHandler,
  endoflifePleskRoute,
} from "@pages/endoflife/plesk";
import {
  endoflifePnpmHandler,
  endoflifePnpmRoute,
} from "@pages/endoflife/pnpm";
import {
  endoflifePodmanHandler,
  endoflifePodmanRoute,
} from "@pages/endoflife/podman";
import {
  endoflifePopOsHandler,
  endoflifePopOsRoute,
} from "@pages/endoflife/pop-os";
import {
  endoflifePostfixHandler,
  endoflifePostfixRoute,
} from "@pages/endoflife/postfix";
import {
  endoflifePostgresqlHandler,
  endoflifePostgresqlRoute,
} from "@pages/endoflife/postgresql";
import {
  endoflifePostmarketosHandler,
  endoflifePostmarketosRoute,
} from "@pages/endoflife/postmarketos";
import {
  endoflifePowershellHandler,
  endoflifePowershellRoute,
} from "@pages/endoflife/powershell";
import {
  endoflifePrivatebinHandler,
  endoflifePrivatebinRoute,
} from "@pages/endoflife/privatebin";
import {
  endoflifePrometheusHandler,
  endoflifePrometheusRoute,
} from "@pages/endoflife/prometheus";
import {
  endoflifeProtractorHandler,
  endoflifeProtractorRoute,
} from "@pages/endoflife/protractor";
import {
  endoflifeProxmoxVeHandler,
  endoflifeProxmoxVeRoute,
} from "@pages/endoflife/proxmox-ve";
import {
  endoflifePuppetHandler,
  endoflifePuppetRoute,
} from "@pages/endoflife/puppet";
import {
  endoflifePythonHandler,
  endoflifePythonRoute,
} from "@pages/endoflife/python";
import { endoflifeQtHandler, endoflifeQtRoute } from "@pages/endoflife/qt";
import {
  endoflifeQuarkusFrameworkHandler,
  endoflifeQuarkusFrameworkRoute,
} from "@pages/endoflife/quarkus-framework";
import {
  endoflifeQuasarHandler,
  endoflifeQuasarRoute,
} from "@pages/endoflife/quasar";
import {
  endoflifeRabbitmqHandler,
  endoflifeRabbitmqRoute,
} from "@pages/endoflife/rabbitmq";
import {
  endoflifeRailsHandler,
  endoflifeRailsRoute,
} from "@pages/endoflife/rails";
import {
  endoflifeRancherHandler,
  endoflifeRancherRoute,
} from "@pages/endoflife/rancher";
import {
  endoflifeRaspberryPiHandler,
  endoflifeRaspberryPiRoute,
} from "@pages/endoflife/raspberry-pi";
import {
  endoflifeReactHandler,
  endoflifeReactRoute,
} from "@pages/endoflife/react";
import {
  endoflifeReactNativeHandler,
  endoflifeReactNativeRoute,
} from "@pages/endoflife/react-native";
import {
  endoflifeReadynasHandler,
  endoflifeReadynasRoute,
} from "@pages/endoflife/readynas";
import {
  endoflifeRedHatOpenshiftHandler,
  endoflifeRedHatOpenshiftRoute,
} from "@pages/endoflife/red-hat-openshift";
import {
  endoflifeRedhatBuildOfOpenjdkHandler,
  endoflifeRedhatBuildOfOpenjdkRoute,
} from "@pages/endoflife/redhat-build-of-openjdk";
import {
  endoflifeRedhatJbossEapHandler,
  endoflifeRedhatJbossEapRoute,
} from "@pages/endoflife/redhat-jboss-eap";
import {
  endoflifeRedhatSatelliteHandler,
  endoflifeRedhatSatelliteRoute,
} from "@pages/endoflife/redhat-satellite";
import {
  endoflifeRedisHandler,
  endoflifeRedisRoute,
} from "@pages/endoflife/redis";
import {
  endoflifeRedmineHandler,
  endoflifeRedmineRoute,
} from "@pages/endoflife/redmine";
import {
  endoflifeRhelHandler,
  endoflifeRhelRoute,
} from "@pages/endoflife/rhel";
import {
  endoflifeRoboHandler,
  endoflifeRoboRoute,
} from "@pages/endoflife/robo";
import {
  endoflifeRocketChatHandler,
  endoflifeRocketChatRoute,
} from "@pages/endoflife/rocket-chat";
import {
  endoflifeRockyLinuxHandler,
  endoflifeRockyLinuxRoute,
} from "@pages/endoflife/rocky-linux";
import { endoflifeRosHandler, endoflifeRosRoute } from "@pages/endoflife/ros";
import {
  endoflifeRos2Handler,
  endoflifeRos2Route,
} from "@pages/endoflife/ros-2";
import {
  endoflifeRoundcubeHandler,
  endoflifeRoundcubeRoute,
} from "@pages/endoflife/roundcube";
import {
  endoflifeRubyHandler,
  endoflifeRubyRoute,
} from "@pages/endoflife/ruby";
import {
  endoflifeRustHandler,
  endoflifeRustRoute,
} from "@pages/endoflife/rust";
import {
  endoflifeSaltHandler,
  endoflifeSaltRoute,
} from "@pages/endoflife/salt";
import {
  endoflifeSamsungMobileHandler,
  endoflifeSamsungMobileRoute,
} from "@pages/endoflife/samsung-mobile";
import {
  endoflifeSapmachineHandler,
  endoflifeSapmachineRoute,
} from "@pages/endoflife/sapmachine";
import {
  endoflifeScalaHandler,
  endoflifeScalaRoute,
} from "@pages/endoflife/scala";
import {
  endoflifeSharepointHandler,
  endoflifeSharepointRoute,
} from "@pages/endoflife/sharepoint";
import {
  endoflifeShopwareHandler,
  endoflifeShopwareRoute,
} from "@pages/endoflife/shopware";
import {
  endoflifeSilverstripeHandler,
  endoflifeSilverstripeRoute,
} from "@pages/endoflife/silverstripe";
import {
  endoflifeSlackwareHandler,
  endoflifeSlackwareRoute,
} from "@pages/endoflife/slackware";
import {
  endoflifeSlesHandler,
  endoflifeSlesRoute,
} from "@pages/endoflife/sles";
import {
  endoflifeSolrHandler,
  endoflifeSolrRoute,
} from "@pages/endoflife/solr";
import {
  endoflifeSonarHandler,
  endoflifeSonarRoute,
} from "@pages/endoflife/sonar";
import {
  endoflifeSourcegraphHandler,
  endoflifeSourcegraphRoute,
} from "@pages/endoflife/sourcegraph";
import {
  endoflifeSplunkHandler,
  endoflifeSplunkRoute,
} from "@pages/endoflife/splunk";
import {
  endoflifeSpringBootHandler,
  endoflifeSpringBootRoute,
} from "@pages/endoflife/spring-boot";
import {
  endoflifeSpringFrameworkHandler,
  endoflifeSpringFrameworkRoute,
} from "@pages/endoflife/spring-framework";
import {
  endoflifeSqliteHandler,
  endoflifeSqliteRoute,
} from "@pages/endoflife/sqlite";
import {
  endoflifeSquidHandler,
  endoflifeSquidRoute,
} from "@pages/endoflife/squid";
import {
  endoflifeSteamosHandler,
  endoflifeSteamosRoute,
} from "@pages/endoflife/steamos";
import {
  endoflifeSubversionHandler,
  endoflifeSubversionRoute,
} from "@pages/endoflife/subversion";
import {
  endoflifeSurfaceHandler,
  endoflifeSurfaceRoute,
} from "@pages/endoflife/surface";
import {
  endoflifeSuseManagerHandler,
  endoflifeSuseManagerRoute,
} from "@pages/endoflife/suse-manager";
import {
  endoflifeSvelteHandler,
  endoflifeSvelteRoute,
} from "@pages/endoflife/svelte";
import {
  endoflifeSymfonyHandler,
  endoflifeSymfonyRoute,
} from "@pages/endoflife/symfony";
import {
  endoflifeTailsHandler,
  endoflifeTailsRoute,
} from "@pages/endoflife/tails";
import {
  endoflifeTarantoolHandler,
  endoflifeTarantoolRoute,
} from "@pages/endoflife/tarantool";
import {
  endoflifeTelegrafHandler,
  endoflifeTelegrafRoute,
} from "@pages/endoflife/telegraf";
import {
  endoflifeTerraformHandler,
  endoflifeTerraformRoute,
} from "@pages/endoflife/terraform";
import {
  endoflifeTomcatHandler,
  endoflifeTomcatRoute,
} from "@pages/endoflife/tomcat";
import {
  endoflifeTraefikHandler,
  endoflifeTraefikRoute,
} from "@pages/endoflife/traefik";
import {
  endoflifeTwigHandler,
  endoflifeTwigRoute,
} from "@pages/endoflife/twig";
import {
  endoflifeTypo3Handler,
  endoflifeTypo3Route,
} from "@pages/endoflife/typo3";
import {
  endoflifeUbuntuHandler,
  endoflifeUbuntuRoute,
} from "@pages/endoflife/ubuntu";
import {
  endoflifeUmbracoHandler,
  endoflifeUmbracoRoute,
} from "@pages/endoflife/umbraco";
import {
  endoflifeUnityHandler,
  endoflifeUnityRoute,
} from "@pages/endoflife/unity";
import {
  endoflifeUnrealircdHandler,
  endoflifeUnrealircdRoute,
} from "@pages/endoflife/unrealircd";
import {
  endoflifeVarnishHandler,
  endoflifeVarnishRoute,
} from "@pages/endoflife/varnish";
import {
  endoflifeVcenterHandler,
  endoflifeVcenterRoute,
} from "@pages/endoflife/vcenter";
import {
  endoflifeVeeamBackupAndReplicationHandler,
  endoflifeVeeamBackupAndReplicationRoute,
} from "@pages/endoflife/veeam-backup-and-replication";
import {
  endoflifeVisionosHandler,
  endoflifeVisionosRoute,
} from "@pages/endoflife/visionos";
import {
  endoflifeVisualCobolHandler,
  endoflifeVisualCobolRoute,
} from "@pages/endoflife/visual-cobol";
import {
  endoflifeVisualStudioHandler,
  endoflifeVisualStudioRoute,
} from "@pages/endoflife/visual-studio";
import {
  endoflifeVmwareCloudFoundationHandler,
  endoflifeVmwareCloudFoundationRoute,
} from "@pages/endoflife/vmware-cloud-foundation";
import {
  endoflifeVmwareHarborRegistryHandler,
  endoflifeVmwareHarborRegistryRoute,
} from "@pages/endoflife/vmware-harbor-registry";
import {
  endoflifeVmwareSrmHandler,
  endoflifeVmwareSrmRoute,
} from "@pages/endoflife/vmware-srm";
import { endoflifeVueHandler, endoflifeVueRoute } from "@pages/endoflife/vue";
import {
  endoflifeVuetifyHandler,
  endoflifeVuetifyRoute,
} from "@pages/endoflife/vuetify";
import {
  endoflifeWagtailHandler,
  endoflifeWagtailRoute,
} from "@pages/endoflife/wagtail";
import {
  endoflifeWatchosHandler,
  endoflifeWatchosRoute,
} from "@pages/endoflife/watchos";
import {
  endoflifeWeechatHandler,
  endoflifeWeechatRoute,
} from "@pages/endoflife/weechat";
import {
  endoflifeWindowsHandler,
  endoflifeWindowsRoute,
} from "@pages/endoflife/windows";
import {
  endoflifeWindowsEmbeddedHandler,
  endoflifeWindowsEmbeddedRoute,
} from "@pages/endoflife/windows-embedded";
import {
  endoflifeWindowsNanoServerHandler,
  endoflifeWindowsNanoServerRoute,
} from "@pages/endoflife/windows-nano-server";
import {
  endoflifeWindowsServerHandler,
  endoflifeWindowsServerRoute,
} from "@pages/endoflife/windows-server";
import {
  endoflifeWindowsServerCoreHandler,
  endoflifeWindowsServerCoreRoute,
} from "@pages/endoflife/windows-server-core";
import {
  endoflifeWiresharkHandler,
  endoflifeWiresharkRoute,
} from "@pages/endoflife/wireshark";
import {
  endoflifeWordpressHandler,
  endoflifeWordpressRoute,
} from "@pages/endoflife/wordpress";
import {
  endoflifeXcpNgHandler,
  endoflifeXcpNgRoute,
} from "@pages/endoflife/xcp-ng";
import {
  endoflifeYarnHandler,
  endoflifeYarnRoute,
} from "@pages/endoflife/yarn";
import {
  endoflifeYoctoHandler,
  endoflifeYoctoRoute,
} from "@pages/endoflife/yocto";
import {
  endoflifeZabbixHandler,
  endoflifeZabbixRoute,
} from "@pages/endoflife/zabbix";
import {
  endoflifeZentyalHandler,
  endoflifeZentyalRoute,
} from "@pages/endoflife/zentyal";
import {
  endoflifeZertoHandler,
  endoflifeZertoRoute,
} from "@pages/endoflife/zerto";
import {
  endoflifeZookeeperHandler,
  endoflifeZookeeperRoute,
} from "@pages/endoflife/zookeeper";

const appEndoflife = new OpenAPIHono();

appEndoflife.openapi(endoflifeAkeneoPimRoute, endoflifeAkeneoPimHandler);
appEndoflife.openapi(
  endoflifeAlibabaDragonwellRoute,
  endoflifeAlibabaDragonwellHandler,
);
appEndoflife.openapi(endoflifeAlmalinuxRoute, endoflifeAlmalinuxHandler);
appEndoflife.openapi(endoflifeAlpineRoute, endoflifeAlpineHandler);
appEndoflife.openapi(endoflifeAmazonCdkRoute, endoflifeAmazonCdkHandler);
appEndoflife.openapi(
  endoflifeAmazonCorrettoRoute,
  endoflifeAmazonCorrettoHandler,
);
appEndoflife.openapi(endoflifeAmazonEksRoute, endoflifeAmazonEksHandler);
appEndoflife.openapi(endoflifeAmazonGlueRoute, endoflifeAmazonGlueHandler);
appEndoflife.openapi(endoflifeAmazonLinuxRoute, endoflifeAmazonLinuxHandler);
appEndoflife.openapi(
  endoflifeAmazonNeptuneRoute,
  endoflifeAmazonNeptuneHandler,
);
appEndoflife.openapi(
  endoflifeAmazonRdsMariadbRoute,
  endoflifeAmazonRdsMariadbHandler,
);
appEndoflife.openapi(
  endoflifeAmazonRdsMysqlRoute,
  endoflifeAmazonRdsMysqlHandler,
);
appEndoflife.openapi(
  endoflifeAmazonRdsPostgresqlRoute,
  endoflifeAmazonRdsPostgresqlHandler,
);
appEndoflife.openapi(endoflifeAndroidRoute, endoflifeAndroidHandler);
appEndoflife.openapi(endoflifeAngularRoute, endoflifeAngularHandler);
appEndoflife.openapi(endoflifeAngularjsRoute, endoflifeAngularjsHandler);
appEndoflife.openapi(endoflifeAnsibleRoute, endoflifeAnsibleHandler);
appEndoflife.openapi(endoflifeAnsibleCoreRoute, endoflifeAnsibleCoreHandler);
appEndoflife.openapi(endoflifeAntixRoute, endoflifeAntixHandler);
appEndoflife.openapi(endoflifeApacheRoute, endoflifeApacheHandler);
appEndoflife.openapi(
  endoflifeApacheActivemqRoute,
  endoflifeApacheActivemqHandler,
);
appEndoflife.openapi(
  endoflifeApacheAirflowRoute,
  endoflifeApacheAirflowHandler,
);
appEndoflife.openapi(endoflifeApacheApisixRoute, endoflifeApacheApisixHandler);
appEndoflife.openapi(endoflifeApacheCamelRoute, endoflifeApacheCamelHandler);
appEndoflife.openapi(
  endoflifeApacheCassandraRoute,
  endoflifeApacheCassandraHandler,
);
appEndoflife.openapi(
  endoflifeApacheCouchdbRoute,
  endoflifeApacheCouchdbHandler,
);
appEndoflife.openapi(endoflifeApacheFlinkRoute, endoflifeApacheFlinkHandler);
appEndoflife.openapi(endoflifeApacheGroovyRoute, endoflifeApacheGroovyHandler);
appEndoflife.openapi(endoflifeApacheHadoopRoute, endoflifeApacheHadoopHandler);
appEndoflife.openapi(endoflifeApacheHopRoute, endoflifeApacheHopHandler);
appEndoflife.openapi(endoflifeApacheKafkaRoute, endoflifeApacheKafkaHandler);
appEndoflife.openapi(endoflifeApacheLuceneRoute, endoflifeApacheLuceneHandler);
appEndoflife.openapi(endoflifeApacheSparkRoute, endoflifeApacheSparkHandler);
appEndoflife.openapi(endoflifeApacheStrutsRoute, endoflifeApacheStrutsHandler);
appEndoflife.openapi(endoflifeApiPlatformRoute, endoflifeApiPlatformHandler);
appEndoflife.openapi(endoflifeAppleWatchRoute, endoflifeAppleWatchHandler);
appEndoflife.openapi(endoflifeArangodbRoute, endoflifeArangodbHandler);
appEndoflife.openapi(endoflifeArgoCdRoute, endoflifeArgoCdHandler);
appEndoflife.openapi(endoflifeArtifactoryRoute, endoflifeArtifactoryHandler);
appEndoflife.openapi(endoflifeAwsLambdaRoute, endoflifeAwsLambdaHandler);
appEndoflife.openapi(endoflifeAzulZuluRoute, endoflifeAzulZuluHandler);
appEndoflife.openapi(
  endoflifeAzureDevopsServerRoute,
  endoflifeAzureDevopsServerHandler,
);
appEndoflife.openapi(
  endoflifeAzureKubernetesServiceRoute,
  endoflifeAzureKubernetesServiceHandler,
);
appEndoflife.openapi(endoflifeBazelRoute, endoflifeBazelHandler);
appEndoflife.openapi(endoflifeBeatsRoute, endoflifeBeatsHandler);
appEndoflife.openapi(
  endoflifeBellsoftLibericaRoute,
  endoflifeBellsoftLibericaHandler,
);
appEndoflife.openapi(endoflifeBlenderRoute, endoflifeBlenderHandler);
appEndoflife.openapi(endoflifeBootstrapRoute, endoflifeBootstrapHandler);
appEndoflife.openapi(endoflifeBunRoute, endoflifeBunHandler);
appEndoflife.openapi(endoflifeCakephpRoute, endoflifeCakephpHandler);
appEndoflife.openapi(endoflifeCalicoRoute, endoflifeCalicoHandler);
appEndoflife.openapi(endoflifeCentosRoute, endoflifeCentosHandler);
appEndoflife.openapi(endoflifeCentosStreamRoute, endoflifeCentosStreamHandler);
appEndoflife.openapi(endoflifeCentreonRoute, endoflifeCentreonHandler);
appEndoflife.openapi(endoflifeCertManagerRoute, endoflifeCertManagerHandler);
appEndoflife.openapi(endoflifeCfengineRoute, endoflifeCfengineHandler);
appEndoflife.openapi(
  endoflifeChefInfraClientRoute,
  endoflifeChefInfraClientHandler,
);
appEndoflife.openapi(
  endoflifeChefInfraServerRoute,
  endoflifeChefInfraServerHandler,
);
appEndoflife.openapi(endoflifeChefInspecRoute, endoflifeChefInspecHandler);
appEndoflife.openapi(endoflifeCitrixVadRoute, endoflifeCitrixVadHandler);
appEndoflife.openapi(endoflifeCkeditorRoute, endoflifeCkeditorHandler);
appEndoflife.openapi(endoflifeClamavRoute, endoflifeClamavHandler);
appEndoflife.openapi(endoflifeCockroachdbRoute, endoflifeCockroachdbHandler);
appEndoflife.openapi(endoflifeCoderRoute, endoflifeCoderHandler);
appEndoflife.openapi(endoflifeColdfusionRoute, endoflifeColdfusionHandler);
appEndoflife.openapi(endoflifeComposerRoute, endoflifeComposerHandler);
appEndoflife.openapi(endoflifeConfluenceRoute, endoflifeConfluenceHandler);
appEndoflife.openapi(endoflifeConsulRoute, endoflifeConsulHandler);
appEndoflife.openapi(endoflifeContainerdRoute, endoflifeContainerdHandler);
appEndoflife.openapi(endoflifeContaoRoute, endoflifeContaoHandler);
appEndoflife.openapi(endoflifeContourRoute, endoflifeContourHandler);
appEndoflife.openapi(endoflifeControlmRoute, endoflifeControlmHandler);
appEndoflife.openapi(endoflifeCortexXdrRoute, endoflifeCortexXdrHandler);
appEndoflife.openapi(endoflifeCosRoute, endoflifeCosHandler);
appEndoflife.openapi(
  endoflifeCouchbaseServerRoute,
  endoflifeCouchbaseServerHandler,
);
appEndoflife.openapi(endoflifeCraftCmsRoute, endoflifeCraftCmsHandler);
appEndoflife.openapi(endoflifeDbtCoreRoute, endoflifeDbtCoreHandler);
appEndoflife.openapi(endoflifeDceRoute, endoflifeDceHandler);
appEndoflife.openapi(endoflifeDebianRoute, endoflifeDebianHandler);
appEndoflife.openapi(
  endoflifeDependencyTrackRoute,
  endoflifeDependencyTrackHandler,
);
appEndoflife.openapi(endoflifeDevuanRoute, endoflifeDevuanHandler);
appEndoflife.openapi(endoflifeDjangoRoute, endoflifeDjangoHandler);
appEndoflife.openapi(endoflifeDockerEngineRoute, endoflifeDockerEngineHandler);
appEndoflife.openapi(endoflifeDotnetRoute, endoflifeDotnetHandler);
appEndoflife.openapi(endoflifeDotnetfxRoute, endoflifeDotnetfxHandler);
appEndoflife.openapi(endoflifeDrupalRoute, endoflifeDrupalHandler);
appEndoflife.openapi(endoflifeDrushRoute, endoflifeDrushHandler);
appEndoflife.openapi(endoflifeEclipseJettyRoute, endoflifeEclipseJettyHandler);
appEndoflife.openapi(
  endoflifeEclipseTemurinRoute,
  endoflifeEclipseTemurinHandler,
);
appEndoflife.openapi(
  endoflifeElasticsearchRoute,
  endoflifeElasticsearchHandler,
);
appEndoflife.openapi(endoflifeElectronRoute, endoflifeElectronHandler);
appEndoflife.openapi(endoflifeElixirRoute, endoflifeElixirHandler);
appEndoflife.openapi(endoflifeEmberjsRoute, endoflifeEmberjsHandler);
appEndoflife.openapi(endoflifeEnvoyRoute, endoflifeEnvoyHandler);
appEndoflife.openapi(endoflifeErlangRoute, endoflifeErlangHandler);
appEndoflife.openapi(endoflifeEsxiRoute, endoflifeEsxiHandler);
appEndoflife.openapi(endoflifeEtcdRoute, endoflifeEtcdHandler);
appEndoflife.openapi(endoflifeEurolinuxRoute, endoflifeEurolinuxHandler);
appEndoflife.openapi(endoflifeEximRoute, endoflifeEximHandler);
appEndoflife.openapi(endoflifeFairphoneRoute, endoflifeFairphoneHandler);
appEndoflife.openapi(endoflifeFedoraRoute, endoflifeFedoraHandler);
appEndoflife.openapi(endoflifeFfmpegRoute, endoflifeFfmpegHandler);
appEndoflife.openapi(endoflifeFilemakerRoute, endoflifeFilemakerHandler);
appEndoflife.openapi(endoflifeFirefoxRoute, endoflifeFirefoxHandler);
appEndoflife.openapi(endoflifeFluentBitRoute, endoflifeFluentBitHandler);
appEndoflife.openapi(endoflifeFluxRoute, endoflifeFluxHandler);
appEndoflife.openapi(endoflifeForgejoRoute, endoflifeForgejoHandler);
appEndoflife.openapi(endoflifeFortiosRoute, endoflifeFortiosHandler);
appEndoflife.openapi(endoflifeFreebsdRoute, endoflifeFreebsdHandler);
appEndoflife.openapi(endoflifeGerritRoute, endoflifeGerritHandler);
appEndoflife.openapi(endoflifeGhcRoute, endoflifeGhcHandler);
appEndoflife.openapi(endoflifeGitlabRoute, endoflifeGitlabHandler);
appEndoflife.openapi(endoflifeGoRoute, endoflifeGoHandler);
appEndoflife.openapi(endoflifeGoaccessRoute, endoflifeGoaccessHandler);
appEndoflife.openapi(endoflifeGodotRoute, endoflifeGodotHandler);
appEndoflife.openapi(
  endoflifeGoogleKubernetesEngineRoute,
  endoflifeGoogleKubernetesEngineHandler,
);
appEndoflife.openapi(endoflifeGoogleNexusRoute, endoflifeGoogleNexusHandler);
appEndoflife.openapi(endoflifeGorillaRoute, endoflifeGorillaHandler);
appEndoflife.openapi(endoflifeGraalvmRoute, endoflifeGraalvmHandler);
appEndoflife.openapi(endoflifeGradleRoute, endoflifeGradleHandler);
appEndoflife.openapi(endoflifeGrafanaRoute, endoflifeGrafanaHandler);
appEndoflife.openapi(endoflifeGrafanaLokiRoute, endoflifeGrafanaLokiHandler);
appEndoflife.openapi(endoflifeGrailsRoute, endoflifeGrailsHandler);
appEndoflife.openapi(endoflifeGraylogRoute, endoflifeGraylogHandler);
appEndoflife.openapi(endoflifeGstreamerRoute, endoflifeGstreamerHandler);
appEndoflife.openapi(endoflifeHaproxyRoute, endoflifeHaproxyHandler);
appEndoflife.openapi(endoflifeHarborRoute, endoflifeHarborHandler);
appEndoflife.openapi(
  endoflifeHashicorpPackerRoute,
  endoflifeHashicorpPackerHandler,
);
appEndoflife.openapi(
  endoflifeHashicorpVaultRoute,
  endoflifeHashicorpVaultHandler,
);
appEndoflife.openapi(endoflifeHbaseRoute, endoflifeHbaseHandler);
appEndoflife.openapi(endoflifeHorizonRoute, endoflifeHorizonHandler);
appEndoflife.openapi(endoflifeIbmAixRoute, endoflifeIbmAixHandler);
appEndoflife.openapi(endoflifeIbmIRoute, endoflifeIbmIHandler);
appEndoflife.openapi(
  endoflifeIbmSemeruRuntimeRoute,
  endoflifeIbmSemeruRuntimeHandler,
);
appEndoflife.openapi(endoflifeIcingaRoute, endoflifeIcingaHandler);
appEndoflife.openapi(endoflifeIcingaWebRoute, endoflifeIcingaWebHandler);
appEndoflife.openapi(
  endoflifeIntelProcessorsRoute,
  endoflifeIntelProcessorsHandler,
);
appEndoflife.openapi(
  endoflifeInternetExplorerRoute,
  endoflifeInternetExplorerHandler,
);
appEndoflife.openapi(endoflifeIonicRoute, endoflifeIonicHandler);
appEndoflife.openapi(endoflifeIosRoute, endoflifeIosHandler);
appEndoflife.openapi(endoflifeIpadRoute, endoflifeIpadHandler);
appEndoflife.openapi(endoflifeIpadosRoute, endoflifeIpadosHandler);
appEndoflife.openapi(endoflifeIphoneRoute, endoflifeIphoneHandler);
appEndoflife.openapi(endoflifeIscDhcpRoute, endoflifeIscDhcpHandler);
appEndoflife.openapi(endoflifeIstioRoute, endoflifeIstioHandler);
appEndoflife.openapi(endoflifeJekyllRoute, endoflifeJekyllHandler);
appEndoflife.openapi(endoflifeJenkinsRoute, endoflifeJenkinsHandler);
appEndoflife.openapi(endoflifeJhipsterRoute, endoflifeJhipsterHandler);
appEndoflife.openapi(endoflifeJiraSoftwareRoute, endoflifeJiraSoftwareHandler);
appEndoflife.openapi(endoflifeJoomlaRoute, endoflifeJoomlaHandler);
appEndoflife.openapi(endoflifeJqueryRoute, endoflifeJqueryHandler);
appEndoflife.openapi(endoflifeJqueryUiRoute, endoflifeJqueryUiHandler);
appEndoflife.openapi(endoflifeJreleaserRoute, endoflifeJreleaserHandler);
appEndoflife.openapi(endoflifeKdePlasmaRoute, endoflifeKdePlasmaHandler);
appEndoflife.openapi(endoflifeKedaRoute, endoflifeKedaHandler);
appEndoflife.openapi(endoflifeKeycloakRoute, endoflifeKeycloakHandler);
appEndoflife.openapi(endoflifeKibanaRoute, endoflifeKibanaHandler);
appEndoflife.openapi(endoflifeKindleRoute, endoflifeKindleHandler);
appEndoflife.openapi(endoflifeKirbyRoute, endoflifeKirbyHandler);
appEndoflife.openapi(endoflifeKongGatewayRoute, endoflifeKongGatewayHandler);
appEndoflife.openapi(endoflifeKotlinRoute, endoflifeKotlinHandler);
appEndoflife.openapi(endoflifeKubernetesRoute, endoflifeKubernetesHandler);
appEndoflife.openapi(
  endoflifeKubernetesCsiNodeDriverRegistrarRoute,
  endoflifeKubernetesCsiNodeDriverRegistrarHandler,
);
appEndoflife.openapi(
  endoflifeKubernetesNodeFeatureDiscoveryRoute,
  endoflifeKubernetesNodeFeatureDiscoveryHandler,
);
appEndoflife.openapi(endoflifeKumaRoute, endoflifeKumaHandler);
appEndoflife.openapi(endoflifeKyvernoRoute, endoflifeKyvernoHandler);
appEndoflife.openapi(endoflifeLaravelRoute, endoflifeLaravelHandler);
appEndoflife.openapi(endoflifeLibreofficeRoute, endoflifeLibreofficeHandler);
appEndoflife.openapi(endoflifeLineageosRoute, endoflifeLineageosHandler);
appEndoflife.openapi(endoflifeLinuxRoute, endoflifeLinuxHandler);
appEndoflife.openapi(endoflifeLinuxmintRoute, endoflifeLinuxmintHandler);
appEndoflife.openapi(endoflifeLog4jRoute, endoflifeLog4jHandler);
appEndoflife.openapi(endoflifeLogstashRoute, endoflifeLogstashHandler);
appEndoflife.openapi(endoflifeLookerRoute, endoflifeLookerHandler);
appEndoflife.openapi(endoflifeLuaRoute, endoflifeLuaHandler);
appEndoflife.openapi(endoflifeMacosRoute, endoflifeMacosHandler);
appEndoflife.openapi(endoflifeMageiaRoute, endoflifeMageiaHandler);
appEndoflife.openapi(endoflifeMagentoRoute, endoflifeMagentoHandler);
appEndoflife.openapi(endoflifeMandrelRoute, endoflifeMandrelHandler);
appEndoflife.openapi(endoflifeMariadbRoute, endoflifeMariadbHandler);
appEndoflife.openapi(endoflifeMastodonRoute, endoflifeMastodonHandler);
appEndoflife.openapi(endoflifeMatomoRoute, endoflifeMatomoHandler);
appEndoflife.openapi(endoflifeMattermostRoute, endoflifeMattermostHandler);
appEndoflife.openapi(endoflifeMauticRoute, endoflifeMauticHandler);
appEndoflife.openapi(endoflifeMavenRoute, endoflifeMavenHandler);
appEndoflife.openapi(endoflifeMediawikiRoute, endoflifeMediawikiHandler);
appEndoflife.openapi(endoflifeMeilisearchRoute, endoflifeMeilisearchHandler);
appEndoflife.openapi(endoflifeMemcachedRoute, endoflifeMemcachedHandler);
appEndoflife.openapi(endoflifeMicronautRoute, endoflifeMicronautHandler);
appEndoflife.openapi(
  endoflifeMicrosoftBuildOfOpenjdkRoute,
  endoflifeMicrosoftBuildOfOpenjdkHandler,
);
appEndoflife.openapi(endoflifeMongodbRoute, endoflifeMongodbHandler);
appEndoflife.openapi(endoflifeMoodleRoute, endoflifeMoodleHandler);
appEndoflife.openapi(
  endoflifeMotorolaMobilityRoute,
  endoflifeMotorolaMobilityHandler,
);
appEndoflife.openapi(endoflifeMsexchangeRoute, endoflifeMsexchangeHandler);
appEndoflife.openapi(endoflifeMssqlserverRoute, endoflifeMssqlserverHandler);
appEndoflife.openapi(
  endoflifeMulesoftRuntimeRoute,
  endoflifeMulesoftRuntimeHandler,
);
appEndoflife.openapi(endoflifeMxlinuxRoute, endoflifeMxlinuxHandler);
appEndoflife.openapi(endoflifeMysqlRoute, endoflifeMysqlHandler);
appEndoflife.openapi(endoflifeNeo4jRoute, endoflifeNeo4jHandler);
appEndoflife.openapi(endoflifeNeosRoute, endoflifeNeosHandler);
appEndoflife.openapi(endoflifeNetbsdRoute, endoflifeNetbsdHandler);
appEndoflife.openapi(endoflifeNextcloudRoute, endoflifeNextcloudHandler);
appEndoflife.openapi(endoflifeNextjsRoute, endoflifeNextjsHandler);
appEndoflife.openapi(endoflifeNexusRoute, endoflifeNexusHandler);
appEndoflife.openapi(endoflifeNginxRoute, endoflifeNginxHandler);
appEndoflife.openapi(endoflifeNixRoute, endoflifeNixHandler);
appEndoflife.openapi(endoflifeNixosRoute, endoflifeNixosHandler);
appEndoflife.openapi(endoflifeNodejsRoute, endoflifeNodejsHandler);
appEndoflife.openapi(endoflifeNokiaRoute, endoflifeNokiaHandler);
appEndoflife.openapi(endoflifeNomadRoute, endoflifeNomadHandler);
appEndoflife.openapi(endoflifeNumpyRoute, endoflifeNumpyHandler);
appEndoflife.openapi(endoflifeNutanixAosRoute, endoflifeNutanixAosHandler);
appEndoflife.openapi(endoflifeNutanixFilesRoute, endoflifeNutanixFilesHandler);
appEndoflife.openapi(endoflifeNutanixPrismRoute, endoflifeNutanixPrismHandler);
appEndoflife.openapi(endoflifeNuxtRoute, endoflifeNuxtHandler);
appEndoflife.openapi(endoflifeNvidiaRoute, endoflifeNvidiaHandler);
appEndoflife.openapi(endoflifeNvidiaGpuRoute, endoflifeNvidiaGpuHandler);
appEndoflife.openapi(endoflifeNvmRoute, endoflifeNvmHandler);
appEndoflife.openapi(endoflifeOfficeRoute, endoflifeOfficeHandler);
appEndoflife.openapi(endoflifeOneplusRoute, endoflifeOneplusHandler);
appEndoflife.openapi(endoflifeOpenbsdRoute, endoflifeOpenbsdHandler);
appEndoflife.openapi(
  endoflifeOpenjdkBuildsFromOracleRoute,
  endoflifeOpenjdkBuildsFromOracleHandler,
);
appEndoflife.openapi(endoflifeOpensearchRoute, endoflifeOpensearchHandler);
appEndoflife.openapi(endoflifeOpensslRoute, endoflifeOpensslHandler);
appEndoflife.openapi(endoflifeOpensuseRoute, endoflifeOpensuseHandler);
appEndoflife.openapi(endoflifeOpentofuRoute, endoflifeOpentofuHandler);
appEndoflife.openapi(endoflifeOpenvpnRoute, endoflifeOpenvpnHandler);
appEndoflife.openapi(endoflifeOpenwrtRoute, endoflifeOpenwrtHandler);
appEndoflife.openapi(endoflifeOpenzfsRoute, endoflifeOpenzfsHandler);
appEndoflife.openapi(endoflifeOpnsenseRoute, endoflifeOpnsenseHandler);
appEndoflife.openapi(endoflifeOracleApexRoute, endoflifeOracleApexHandler);
appEndoflife.openapi(
  endoflifeOracleDatabaseRoute,
  endoflifeOracleDatabaseHandler,
);
appEndoflife.openapi(endoflifeOracleJdkRoute, endoflifeOracleJdkHandler);
appEndoflife.openapi(endoflifeOracleLinuxRoute, endoflifeOracleLinuxHandler);
appEndoflife.openapi(
  endoflifeOracleSolarisRoute,
  endoflifeOracleSolarisHandler,
);
appEndoflife.openapi(endoflifeOvirtRoute, endoflifeOvirtHandler);
appEndoflife.openapi(endoflifePangpRoute, endoflifePangpHandler);
appEndoflife.openapi(endoflifePanosRoute, endoflifePanosHandler);
appEndoflife.openapi(endoflifePciDssRoute, endoflifePciDssHandler);
appEndoflife.openapi(endoflifePerlRoute, endoflifePerlHandler);
appEndoflife.openapi(endoflifePhotonRoute, endoflifePhotonHandler);
appEndoflife.openapi(endoflifePhpRoute, endoflifePhpHandler);
appEndoflife.openapi(endoflifePhpbbRoute, endoflifePhpbbHandler);
appEndoflife.openapi(endoflifePhpmyadminRoute, endoflifePhpmyadminHandler);
appEndoflife.openapi(endoflifePixelRoute, endoflifePixelHandler);
appEndoflife.openapi(endoflifePixelWatchRoute, endoflifePixelWatchHandler);
appEndoflife.openapi(endoflifePleskRoute, endoflifePleskHandler);
appEndoflife.openapi(endoflifePnpmRoute, endoflifePnpmHandler);
appEndoflife.openapi(endoflifePodmanRoute, endoflifePodmanHandler);
appEndoflife.openapi(endoflifePopOsRoute, endoflifePopOsHandler);
appEndoflife.openapi(endoflifePostfixRoute, endoflifePostfixHandler);
appEndoflife.openapi(endoflifePostgresqlRoute, endoflifePostgresqlHandler);
appEndoflife.openapi(endoflifePostmarketosRoute, endoflifePostmarketosHandler);
appEndoflife.openapi(endoflifePowershellRoute, endoflifePowershellHandler);
appEndoflife.openapi(endoflifePrivatebinRoute, endoflifePrivatebinHandler);
appEndoflife.openapi(endoflifePrometheusRoute, endoflifePrometheusHandler);
appEndoflife.openapi(endoflifeProtractorRoute, endoflifeProtractorHandler);
appEndoflife.openapi(endoflifeProxmoxVeRoute, endoflifeProxmoxVeHandler);
appEndoflife.openapi(endoflifePuppetRoute, endoflifePuppetHandler);
appEndoflife.openapi(endoflifePythonRoute, endoflifePythonHandler);
appEndoflife.openapi(endoflifeQtRoute, endoflifeQtHandler);
appEndoflife.openapi(
  endoflifeQuarkusFrameworkRoute,
  endoflifeQuarkusFrameworkHandler,
);
appEndoflife.openapi(endoflifeQuasarRoute, endoflifeQuasarHandler);
appEndoflife.openapi(endoflifeRabbitmqRoute, endoflifeRabbitmqHandler);
appEndoflife.openapi(endoflifeRailsRoute, endoflifeRailsHandler);
appEndoflife.openapi(endoflifeRancherRoute, endoflifeRancherHandler);
appEndoflife.openapi(endoflifeRaspberryPiRoute, endoflifeRaspberryPiHandler);
appEndoflife.openapi(endoflifeReactRoute, endoflifeReactHandler);
appEndoflife.openapi(endoflifeReactNativeRoute, endoflifeReactNativeHandler);
appEndoflife.openapi(endoflifeReadynasRoute, endoflifeReadynasHandler);
appEndoflife.openapi(
  endoflifeRedHatOpenshiftRoute,
  endoflifeRedHatOpenshiftHandler,
);
appEndoflife.openapi(
  endoflifeRedhatBuildOfOpenjdkRoute,
  endoflifeRedhatBuildOfOpenjdkHandler,
);
appEndoflife.openapi(
  endoflifeRedhatJbossEapRoute,
  endoflifeRedhatJbossEapHandler,
);
appEndoflife.openapi(
  endoflifeRedhatSatelliteRoute,
  endoflifeRedhatSatelliteHandler,
);
appEndoflife.openapi(endoflifeRedisRoute, endoflifeRedisHandler);
appEndoflife.openapi(endoflifeRedmineRoute, endoflifeRedmineHandler);
appEndoflife.openapi(endoflifeRhelRoute, endoflifeRhelHandler);
appEndoflife.openapi(endoflifeRoboRoute, endoflifeRoboHandler);
appEndoflife.openapi(endoflifeRocketChatRoute, endoflifeRocketChatHandler);
appEndoflife.openapi(endoflifeRockyLinuxRoute, endoflifeRockyLinuxHandler);
appEndoflife.openapi(endoflifeRosRoute, endoflifeRosHandler);
appEndoflife.openapi(endoflifeRos2Route, endoflifeRos2Handler);
appEndoflife.openapi(endoflifeRoundcubeRoute, endoflifeRoundcubeHandler);
appEndoflife.openapi(endoflifeRubyRoute, endoflifeRubyHandler);
appEndoflife.openapi(endoflifeRustRoute, endoflifeRustHandler);
appEndoflife.openapi(endoflifeSaltRoute, endoflifeSaltHandler);
appEndoflife.openapi(
  endoflifeSamsungMobileRoute,
  endoflifeSamsungMobileHandler,
);
appEndoflife.openapi(endoflifeSapmachineRoute, endoflifeSapmachineHandler);
appEndoflife.openapi(endoflifeScalaRoute, endoflifeScalaHandler);
appEndoflife.openapi(endoflifeSharepointRoute, endoflifeSharepointHandler);
appEndoflife.openapi(endoflifeShopwareRoute, endoflifeShopwareHandler);
appEndoflife.openapi(endoflifeSilverstripeRoute, endoflifeSilverstripeHandler);
appEndoflife.openapi(endoflifeSlackwareRoute, endoflifeSlackwareHandler);
appEndoflife.openapi(endoflifeSlesRoute, endoflifeSlesHandler);
appEndoflife.openapi(endoflifeSolrRoute, endoflifeSolrHandler);
appEndoflife.openapi(endoflifeSonarRoute, endoflifeSonarHandler);
appEndoflife.openapi(endoflifeSourcegraphRoute, endoflifeSourcegraphHandler);
appEndoflife.openapi(endoflifeSplunkRoute, endoflifeSplunkHandler);
appEndoflife.openapi(endoflifeSpringBootRoute, endoflifeSpringBootHandler);
appEndoflife.openapi(
  endoflifeSpringFrameworkRoute,
  endoflifeSpringFrameworkHandler,
);
appEndoflife.openapi(endoflifeSqliteRoute, endoflifeSqliteHandler);
appEndoflife.openapi(endoflifeSquidRoute, endoflifeSquidHandler);
appEndoflife.openapi(endoflifeSteamosRoute, endoflifeSteamosHandler);
appEndoflife.openapi(endoflifeSubversionRoute, endoflifeSubversionHandler);
appEndoflife.openapi(endoflifeSurfaceRoute, endoflifeSurfaceHandler);
appEndoflife.openapi(endoflifeSuseManagerRoute, endoflifeSuseManagerHandler);
appEndoflife.openapi(endoflifeSvelteRoute, endoflifeSvelteHandler);
appEndoflife.openapi(endoflifeSymfonyRoute, endoflifeSymfonyHandler);
appEndoflife.openapi(endoflifeTailsRoute, endoflifeTailsHandler);
appEndoflife.openapi(endoflifeTarantoolRoute, endoflifeTarantoolHandler);
appEndoflife.openapi(endoflifeTelegrafRoute, endoflifeTelegrafHandler);
appEndoflife.openapi(endoflifeTerraformRoute, endoflifeTerraformHandler);
appEndoflife.openapi(endoflifeTomcatRoute, endoflifeTomcatHandler);
appEndoflife.openapi(endoflifeTraefikRoute, endoflifeTraefikHandler);
appEndoflife.openapi(endoflifeTwigRoute, endoflifeTwigHandler);
appEndoflife.openapi(endoflifeTypo3Route, endoflifeTypo3Handler);
appEndoflife.openapi(endoflifeUbuntuRoute, endoflifeUbuntuHandler);
appEndoflife.openapi(endoflifeUmbracoRoute, endoflifeUmbracoHandler);
appEndoflife.openapi(endoflifeUnityRoute, endoflifeUnityHandler);
appEndoflife.openapi(endoflifeUnrealircdRoute, endoflifeUnrealircdHandler);
appEndoflife.openapi(endoflifeVarnishRoute, endoflifeVarnishHandler);
appEndoflife.openapi(endoflifeVcenterRoute, endoflifeVcenterHandler);
appEndoflife.openapi(
  endoflifeVeeamBackupAndReplicationRoute,
  endoflifeVeeamBackupAndReplicationHandler,
);
appEndoflife.openapi(endoflifeVisionosRoute, endoflifeVisionosHandler);
appEndoflife.openapi(endoflifeVisualCobolRoute, endoflifeVisualCobolHandler);
appEndoflife.openapi(endoflifeVisualStudioRoute, endoflifeVisualStudioHandler);
appEndoflife.openapi(
  endoflifeVmwareCloudFoundationRoute,
  endoflifeVmwareCloudFoundationHandler,
);
appEndoflife.openapi(
  endoflifeVmwareHarborRegistryRoute,
  endoflifeVmwareHarborRegistryHandler,
);
appEndoflife.openapi(endoflifeVmwareSrmRoute, endoflifeVmwareSrmHandler);
appEndoflife.openapi(endoflifeVueRoute, endoflifeVueHandler);
appEndoflife.openapi(endoflifeVuetifyRoute, endoflifeVuetifyHandler);
appEndoflife.openapi(endoflifeWagtailRoute, endoflifeWagtailHandler);
appEndoflife.openapi(endoflifeWatchosRoute, endoflifeWatchosHandler);
appEndoflife.openapi(endoflifeWeechatRoute, endoflifeWeechatHandler);
appEndoflife.openapi(endoflifeWindowsRoute, endoflifeWindowsHandler);
appEndoflife.openapi(
  endoflifeWindowsEmbeddedRoute,
  endoflifeWindowsEmbeddedHandler,
);
appEndoflife.openapi(
  endoflifeWindowsNanoServerRoute,
  endoflifeWindowsNanoServerHandler,
);
appEndoflife.openapi(
  endoflifeWindowsServerRoute,
  endoflifeWindowsServerHandler,
);
appEndoflife.openapi(
  endoflifeWindowsServerCoreRoute,
  endoflifeWindowsServerCoreHandler,
);
appEndoflife.openapi(endoflifeWiresharkRoute, endoflifeWiresharkHandler);
appEndoflife.openapi(endoflifeWordpressRoute, endoflifeWordpressHandler);
appEndoflife.openapi(endoflifeXcpNgRoute, endoflifeXcpNgHandler);
appEndoflife.openapi(endoflifeYarnRoute, endoflifeYarnHandler);
appEndoflife.openapi(endoflifeYoctoRoute, endoflifeYoctoHandler);
appEndoflife.openapi(endoflifeZabbixRoute, endoflifeZabbixHandler);
appEndoflife.openapi(endoflifeZentyalRoute, endoflifeZentyalHandler);
appEndoflife.openapi(endoflifeZertoRoute, endoflifeZertoHandler);
appEndoflife.openapi(endoflifeZookeeperRoute, endoflifeZookeeperHandler);

export { appEndoflife };
