import {
  DataQuery,
  DataQueryRequest,
  DataQueryResponse,
  DataSourceApi,
  DataSourceInstanceSettings,
  MetricFindValue,
} from '@grafana/data';

import { StaticDatasourceSourceOptions, JsonConfigParser } from './types';

export class DataSource extends DataSourceApi<DataQuery, StaticDatasourceSourceOptions> {
  data: Map<string, string[]>;

  constructor(instanceSettings: DataSourceInstanceSettings<StaticDatasourceSourceOptions>) {
    super(instanceSettings);

    this.data = JsonConfigParser.parse(instanceSettings.jsonData.data || '{}');
  }

  async query(options: DataQueryRequest): Promise<DataQueryResponse> {
    throw new Error('Not implemented');
  }

  async metricFindQuery(query: any, options?: any): Promise<MetricFindValue[]> {
    if (!query) {
      return [];
    }

    const values = this.data.get(query);
    if (!values) {
      throw new Error('no static data found');
    }

    return values.map(value => ({ text: value }));
  }

  async testDatasource() {
    // Implement a health check for your data source.
    return {
      status: 'success',
      message: 'Success',
    };
  }
}
