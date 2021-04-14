webpackJsonp([0],{1538:function(t,e,n){var a=n(1),r=n(67),o=n(308).PageRenderer;o.__esModule&&(o=o.default);var i=r({displayName:"WrappedPageRenderer",getInitialState:function(){return{content:n(1594)}},componentWillMount:function(){},render:function(){return a.createElement(o,Object.assign({},this.props,{content:this.state.content}))}});i.__catalog_loader__=!0,t.exports=i},1594:function(t,e){t.exports='Styled-UI includes a [Styled Components](https://www.styled-components.com/docs/advanced#theming) theme object. The theme is designed to work with [Styled System](https://styled-system.com/theme-specification). Most components accept theme-aware style props that can be used to easily access theme data. When possible, prefer to reference the theme rather than hard code specific color codes, pixel values, font families, etc.\n\n## Spacing scale\n\nUse:\n`<Box paddingX={3}>`\n\n```react\n<Box display="flex">\n\t<ThemeList\n\t\titems={theme => theme.space}\n\t\trender={([key, value], i) => (\n\t\t\t<Box\n\t\t\t\tkey={key}\n\t\t\t\tmargin={3}\n\t\t\t\twidth={50}\n\t\t\t\tdisplay="flex"\n\t\t\t\tflexDirection="column"\n\t\t\t\talignItems="stretch"\n\t\t\t>\n\t\t\t\t<Paragraph textAlign="center">{key}</Paragraph>\n\t\t\t\t<Box height={value} backgroundColor="gray66" />\n\t\t\t\t<Paragraph textAlign="center">{value}</Paragraph>\n\t\t\t</Box>\n\t\t)}\n\t/>\n</Box>\n```\n\n## Color scale\n\nUse:\n`<Box backgroundColor="blue2">`\n\n```react\n<Box display="flex" flexWrap="wrap">\n\t<ThemeList\n\t\titems={theme => theme.colors}\n\t\trender={([key, value], i) =>\n\t\t\ttypeof value === \'string\' && (\n\t\t\t\t<Box\n\t\t\t\t\tkey={key}\n\t\t\t\t\twidth={100}\n\t\t\t\t\theight={100}\n\t\t\t\t\tmargin={4}\n\t\t\t\t\tdisplay="flex"\n\t\t\t\t\tflexDirection="column"\n\t\t\t\t\talignItems="stretch"\n\t\t\t\t\tjustifyContent="center"\n\t\t\t\t>\n\t\t\t\t\t<Paragraph textAlign="center">{key}</Paragraph>\n\t\t\t\t\t<Box height="30%" marginY={2} border={1} backgroundColor={value} />\n\t\t\t\t\t<Paragraph textAlign="center">{value}</Paragraph>\n\t\t\t\t</Box>\n\t\t\t)\n\t\t}\n\t/>\n</Box>\n```\n\n## Full default Styled UI theme object\n\n```react\n<Stack spacing={4}>\n\t<ThemeList\n\t\titems={theme => theme}\n\t\trender={([key, value], i) => (\n\t\t\t<Box>\n\t\t\t\t<Heading level={18}>{key}</Heading>\n\t\t\t\t<Paragraph whiteSpace="pre">{JSON.stringify(value, null, 4)}</Paragraph>\n\t\t\t</Box>\n\t\t)}\n\t/>\n</Stack>\n```\n'}});
//# sourceMappingURL=0.a96e99e7.chunk.js.map