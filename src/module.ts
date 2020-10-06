import { DataQuery, DataSourcePlugin } from '@grafana/data';
import { DataSource } from './DataSource';
import { ConfigEditor } from './ConfigEditor';
import { StaticDatasourceSourceOptions } from './types';

export const plugin = new DataSourcePlugin<DataSource, DataQuery, StaticDatasourceSourceOptions>(
  DataSource
).setConfigEditor(ConfigEditor);
