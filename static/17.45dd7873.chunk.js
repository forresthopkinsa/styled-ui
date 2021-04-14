webpackJsonp([17],{1572:function(e,t,n){var a=n(1),r=n(67),c=n(308).PageRenderer;c.__esModule&&(c=c.default);var s=r({displayName:"WrappedPageRenderer",getInitialState:function(){return{content:n(1628)}},componentWillMount:function(){},render:function(){return a.createElement(c,Object.assign({},this.props,{content:this.state.content}))}});s.__catalog_loader__=!0,e.exports=s},1628:function(e,t){e.exports="```react\nnoSource: true\n---\n<React.Fragment>\n\t<V6Banner>\n\t\t<AcceptsStyledSystemProps />\n\t\t<AriaCompliant />\n\t</V6Banner>\n\t<HelpBox variant=\"warning\">This documentation page was broken by the update to v6. It will be fixed shortly.</HelpBox>\n</React.Fragment>\n```\n\n## Desktop Parameter Sentence\n\nNote to designers: under the hood a parameter sentence is seen as a form by screen readers. Including a small description of each parameter as if it was a form label will go a long way towards keeping it accessible.\n\n```react\nshowSource: true\nstate: {\n\tisOpen: false,\n\tprepost: 'after',\n\tschedule: 'annual',\n\tpercentage: 10,\n\tincome: 55700,\n}\n---\n<ParameterSentenceDemo>\n\t<ParameterSentence accessibilityFormLabel=\"Tithe Calculator\">\n\t\t{'I want to give '}\n\t\t<ParameterSentence.Input\n\t\t\tdefaultValue=\"10\"\n\t\t\tvalue={state.percentage}\n\t\t\tonChange={event => setState({ percentage: event.target.value })}\n\t\t\tformatValue={val => `${val}%`}\n\t\t\twidth=\"30px\"\n\t\t\taccessibilityLabel={'Percent of income to tithe'}\n\t\t/>\n\t\t{' of my '}\n\t\t<ParameterSentence.Select\n\t\t\tselectedId={state.schedule}\n\t\t\tonItemSelect={item => setState({ schedule: item })}\n\t\t\toptions={scheduleOptions}\n\t\t\taccessibilityLabel={'Pay schedule of income'}\n\t\t/>\n\t\t{' income'}\n\t</ParameterSentence>\n</ParameterSentenceDemo>\n```\n\n## Mobile ParameterSelects\n\nIf this is a mobile or touch screen device include the `useNativeSelect` prop to trigger the native select picker.\n\n```react\nshowSource: true\nstate: {\n\tisOpen: false,\n\tprepost: 'after',\n\tschedule: 'annual',\n\tpercentage: 10,\n\tincome: 55700,\n}\n---\n<ParameterSentenceDemo>\n\t<ParameterSentence accessibilityFormLabel=\"Tithe Calculator\">\n\t\t<ParameterSentence.Select\n\t\t\tuseNativeSelect\n\t\t\tselectedId={state.schedule}\n\t\t\tonItemSelect={item => setState({ schedule: item })}\n\t\t\toptions={scheduleOptions}\n\t\t\taccessibilityLabel={'Pay schedule of income'}\n\t\t/>\n\t</ParameterSentence>\n</ParameterSentenceDemo>\n```\n\n## Style variations\n\n```react\nshowSource: true\nstate: {\n\tisOpen: false,\n\tprepost: 'after',\n\tschedule: 'annual',\n\tpercentage: 10,\n\tincome: 55700,\n}\n---\n<ParameterSentenceDemo addMargin>\n\t<ParameterSentence.Select\n\t\tselectedId={state.schedule}\n\t\tonItemSelect={item => setState({ schedule: item })}\n\t\toptions={scheduleOptions}\n\t\taccessibilityLabel={'Pay schedule of income'}\n\t\tstyleOverrides={{ fontSize: '18px' }}\n\t/>\n\t<ParameterSentence.Input\n\t\tdefaultValue=\"10\"\n\t\tvalue={state.percentage}\n\t\tonChange={event => setState({ percentage: event.target.value })}\n\t\tformatValue={val => `${val}%`}\n\t\twidth=\"35px\"\n\t\taccessibilityLabel={'Percent of income to tithe'}\n\t\tstyleOverrides={{ fontSize: '18px' }}\n\t/>\n</ParameterSentenceDemo>\n```\n"}});
//# sourceMappingURL=17.45dd7873.chunk.js.map