## sp-active-inactive-indicator-plugin

SailPoint Active / Indicator Plugin

## Synopsis

This is a proof of concept javascript snipped, utilized by the SailPoint Plugin Framework for SailPoint IdentityIQ. The snippet will replace the "Inactive" column on the identity.jsf page with a more useful information.

## Installation

The installation of the plugin does not differ from the installation of other plugins. Head to the plugins page of IdentityIQ and drop the zip file to the drop area.
To activate the True/False indicators on the identity list page (define/identity.jsf), you will also need to modify your UI-Configuration. Lookup the configuration for the identity list view and add one of the supplied renderer to your attribute.
In example, to show the reversed inactive (=active) state, you would add something like
```xml
<ColumnConfig dataIndex="inactive" headerKey="Active" hideable="true" property="inactive" renderer="SailPoint.Define.Grid.Identity.reverseTrueFalseRenderer" sortProperty="inactive" sortable="true" stateId="inactive"/>
```

## License
Copyright (c) 2016 Mario Enrico Ragucci, SailPoint Technologies GmbH

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.