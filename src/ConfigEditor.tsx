import React, { ChangeEvent, PureComponent } from 'react';
import { LegacyForms } from '@grafana/ui';
import { DataSourcePluginOptionsEditorProps } from '@grafana/data';
import { StaticDatasourceSourceOptions, JsonConfigParser } from './types';

const { FormField } = LegacyForms;

interface Props extends DataSourcePluginOptionsEditorProps<StaticDatasourceSourceOptions> {}

interface State {}

export class ConfigEditor extends PureComponent<Props, State> {
  onChange = (event: ChangeEvent<HTMLInputElement>) => {
    // Check that the input is valid Map<string,string[]> JSON
    JsonConfigParser.parse(event.target.value);

    const { onOptionsChange, options } = this.props;
    const jsonData = {
      ...options.jsonData,
      data: event.target.value,
    };
    onOptionsChange({ ...options, jsonData });
  };

  render() {
    const { options } = this.props;
    const { jsonData } = options;
    return (
      <div className="gf-form-group">
        <p> {'You MUST past a valid Map<string, string[]> JSON string'} </p>
        <p> {'Use map keys to query the datasource and return the associated values'}</p>
        <div className="gf-form">
          <FormField
            label="Json data"
            labelWidth={6}
            inputWidth={20}
            onChange={this.onChange}
            value={jsonData.data || ''}
            placeholder="Paste valid json here"
          />
        </div>
      </div>
    );
  }
}
