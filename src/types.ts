import { DataSourceJsonData } from '@grafana/data';

/**
 * These are options configured for each DataSource instance
 */
export interface StaticDatasourceSourceOptions extends DataSourceJsonData {
  data?: string;
}

/**
 * These is a helper to cast a JSON string to Map<string,string[]>
 */
export class JsonConfigParser {
  static parse(json: string): Map<string, string[]> {
    let map: Map<string, string[]> = new Map<string, string[]>();
    if (!json) {
      return map;
    }

    let data = JSON.parse(json);
    for (let key in data) {
      if (data.hasOwnProperty(key)) {
        if (!Array.isArray(data[key])) {
          throw new Error('Map value is not an array');
        }
        map.set(key, data[key]);
      }
    }

    return map;
  }
}
