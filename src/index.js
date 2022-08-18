import React from "react";
import ReactDOM from "react-dom";

import {
  FlexBox,
  Heading,
  SpectacleLogo,
  UnorderedList,
  CodeSpan,
  OrderedList,
  ListItem,
  FullScreen,
  Progress,
  Appear,
  Stepper,
  Slide,
  Deck,
  Text,
  Grid,
  Box,
  Image,
  CodePane,
  MarkdownSlide,
  MarkdownSlideSet,
  Notes,
} from "spectacle";

import Sandbox from "./components/Sandbox";

// Sandbox Data
import sb1 from "./sandboxes/1-menu-component.json";
import sb2 from "./sandboxes/2-get-object-fetch.json";
import sb3 from "./sandboxes/3-include-data-fetch.json";
import sb4 from "./sandboxes/4-limit-fields-fetch.json";
import sb5 from "./sandboxes/5-ds-quickstart.json";
import sb6 from "./sandboxes/6-include-data.json";
import sb7 from "./sandboxes/7-by-path.json";
import sb7a from "./sandboxes/7a-path-util.json";
import sb8 from "./sandboxes/8-query.json";
import sb9 from "./sandboxes/9-provider.json";

// GDWC Sandboxes
import gdwcsb1 from "./sandboxes/gdwc/1-html-example.json";
import gdwcsb1a from "./sandboxes/gdwc/1a-html-example.json";
import gdwcsb2 from "./sandboxes/gdwc/2-vue-example.json";
import gdwcsb3 from "./sandboxes/gdwc/3-react-example.json";

// Assets
const pantheon = require("./assets/pantheon.jpg");
const npmDrupal = require("./assets/drupal-npm.png");
const npmAtDrupal = require("./assets/@drupal-npm.png");
const wp = require("./assets/wp.png");
const aem = require("./assets/aem.png");
const sitecore = require("./assets/sitecore.png");
const contentful = require("./assets/contentful.png");
const pyramid = require("./assets/pyramid.png");
const title = require("./assets/dc-title.png");

// GDWC Assets
const drupalRendered = require("./assets/gdwc/drupal-rendered.png");
const openProps = require("./assets/gdwc/open-props.png");

const formidableLogo =
  "https://avatars2.githubusercontent.com/u/5078602?s=280&v=4";

// SPECTACLE_CLI_THEME_START
const theme = {
  fonts: {
    header: '"Open Sans Condensed", Helvetica, Arial, sans-serif',
    text: '"Open Sans Condensed", Helvetica, Arial, sans-serif',
  },
};
// SPECTACLE_CLI_THEME_END

// SPECTACLE_CLI_TEMPLATE_START
const template = () => (
  <FlexBox
    justifyContent="space-between"
    position="absolute"
    bottom={0}
    width={1}
  >
    <Box padding="0 1em">
      <FullScreen />
    </Box>
    <Box padding="1em">
      <Progress />
    </Box>
  </FlexBox>
);
// SPECTACLE_CLI_TEMPLATE_END

const SlideFragments = () => (
  <>
    <Slide>
      <Text>This is a slide fragment.</Text>
    </Slide>
    <Slide>
      <Text>This is also a slide fragment.</Text>
      <Appear>
        <Text>This item shows up!</Text>
      </Appear>
      <Appear>
        <Text>This item also shows up!</Text>
      </Appear>
    </Slide>
  </>
);

const Presentation = () => (
  <Deck theme={theme} template={template}>
    <Slide>
      <Heading margin="8rem 2rem 0">
        Envisioning a Design System Maintained by the Drupal Community
      </Heading>
      <Text textAlign="center">
        Brian Perry
        <br />
        Decoupled Days 2022
        <br />
        Slides: https://bit.ly/drupal-ds-dd
      </Text>
    </Slide>
    <MarkdownSlide>
      {`
        # Brian!
        * I'm a Sr. Software Engineer at Pantheon
        * I'm an Initiative coordinator for Drupal's Decoupled Menus Initiative
        * I live in the Chicago suburbs
        * I enjoy Drupal, JavaScript, and Nintendo
        * I own the domain webcomponents.wtf

        brianperry.dev, @bricomedy, d.o: brianperry
      `}
    </MarkdownSlide>
    <Slide
      backgroundColor="tertiary"
      backgroundImage="url(https://ok6static.oktacdn.com/fs/bco/7/fs0eurcntlVV4NwN92p7)"
    >
      <Heading margin="0px" fontSize="h2" color="primary">
        Pantheon
      </Heading>
      <Grid gridTemplateColumns="1fr 1fr" gridColumnGap={50}>
        <Box>
          <Text color="primary">
            Pantheon is the WebOps platform where marketers and developers drive
            results, reaching billions globally with Dynamic WordPress and
            Drupal sites. Learn more at Pantheon.io.
          </Text>
          <Text>Front-end sites in early access!</Text>
        </Box>
      </Grid>
    </Slide>
    <MarkdownSlideSet>
      {`
        The title of this talk is<br />
        **'Envisioning a Design System Maintained by the Drupal Community'**<br />
        so...
        # ...let's start envisioning

        ---

        # What If...
        - ...there were a set of Drupal-friendly components that anyone could use
        - ...and they could be used in Twig
        - ...and the same components could be used with any JS framework
        - ...and it was easy to extend components or contribute new ones

        ---

        # What if web components made this possible?

        ---

        # Web Components

        **A set of web platform APIs.**

        - Custom Elements
        - Shadow DOM
        - HTML Templates

        *Not tied to a specific framework.*

        `}
    </MarkdownSlideSet>
    <Slide>
      <Sandbox config={gdwcsb1a} openPaths={["/index.html", "/index.js"]} />
    </Slide>
    <Slide>
      <Image
        src={drupalRendered.default}
        style={{ width: "auto", height: "100%" }}
      />
    </Slide>
    <Slide>
      <CodePane language="yml">{`
        # gdwc_example.libraries.yml

        global:
          css:
            base:
              https://unpkg.com/@gdwc/components@3.6.0/dist/style.css: { type: external, minified: true }
          js:
            https://unpkg.com/@gdwc/components@3.6.0/dist/components.umd.js: { type: external }
      `}</CodePane>
      <CodePane language="html">{`
        {# node--article--teaser.html.twig #}

        {% set card_attributes = create_attribute() %}
        {% set imageSrc = file_url(content.field_image['#items'].entity.uri.value) %}

        <gdwc-card
          {{ attributes.addClass(classes) }}
          {{ card_attributes.setAttribute('imgSrc', imageSrc).setAttribute('headline', label|render|striptags|trim).setAttribute('linkHref', url) }}>
          <p>{{ content.body|render|striptags|trim }}</p>
        </gdwc-card>
      `}</CodePane>
    </Slide>
    <Slide>
      <Sandbox config={gdwcsb2} openPaths={["/src/App.vue"]} />
    </Slide>
    {/* <Slide>
      <Sandbox config={gdwcsb3} openPaths={["/src/App.js"]} />
    </Slide> */}
    <MarkdownSlideSet>
      {`
        # Web Component Pros

        - Core web APIs
        - Wide browser support
        - Shadow DOM = true encapsulation
        - Write once, use anywhere

        ---

        # Web Component Cons

        - Ergonomics are rough without a supporting library like Lit
        - Styling can be unintuitive
        - Doesn't have the DX of a framework
        - Server side rendering challenges


        ---

        # On an infinite time scale...

        - Browser native components will be an important part of building for the web.
        - But how much will web components evolve along the way?

        ## On a much shorter time scale...

        - Web components will be a growing part of your bundle, event if you don't know it.

        ---

        # Want to know more?

        In-depth web components talk from last year: http://bit.ly/wc-dd

        ---

        # What if we made a Drupal menu web component?

        `}
    </MarkdownSlideSet>
    <Slide>
      <Sandbox config={sb1} openPaths={["/index.html", "/index.js"]} />
    </Slide>
    <MarkdownSlideSet>
      {`

        # Let's make more!

        We moved forward with the **Generic Drupal Web Components** project.

        Unfortunately the approach we took for menus quickly proved hard to scale.

        ---

        # What if we wanted to re-style these components?

        [https://project.pages.drupalcode.org/gdwc](https://project.pages.drupalcode.org/gdwc)

        [Let's look at gdwc-menu in Storybook](https://project.pages.drupalcode.org/gdwc/?path=/story/components-menu--primary)

        ---

        ## Too many options, too much responsibility for consumers.

        Most web component styling options require exposing a styling hook:

        - CSS Custom Properties (variables)
        - Classes
        - Shadow Parts
        - Slots

        ---

        # Gravitating to CSS Custom Properties

        CSS Custom Properties:

        - Are inherited - inherited properties pierce the shadow DOM
        - Provides a level playing field for entire DOM
        - Still requires variables to be defined and used by components

        `}
    </MarkdownSlideSet>
    <Slide>
      <Image
        src={openProps.default}
        style={{ margin: "auto", width: "85%", height: "auto" }}
      />
    </Slide>
    <MarkdownSlideSet>
      {`

        # Open Props

        - Provides default styles that can be scoped to Shadow DOM (or global DOM)
        - CSS variables can be defined at any level and will cascade
        - System allows GDWC components to opt in to Open Props theme controls

        [Let's look at gdwc-card in Storybook](https://project.pages.drupalcode.org/gdwc/?path=/story/components-card--primary)
        `}
    </MarkdownSlideSet>
    <Slide>
      <Sandbox config={gdwcsb2} openPaths={["/src/App.vue"]} />
    </Slide>
    <MarkdownSlideSet>
      {`
        # What if these components could work with any data?
        # But also *optionally* knew a few things about Drupal?

        [See Link component in Storybook](https://project.pages.drupalcode.org/gdwc/?path=/story/elements-link--primary)
      `}
    </MarkdownSlideSet>
    <Slide>
      <CodePane language="javascript">{`
          // From gdwc-link.js

          render() {
            // If link field data is passed, use that to populate props.
            if (this.data) {
              this.processData(this.data);
            }

            return html\`
              <a
                href="\${ifDefined(this.href)}"
                rel="\${ifDefined(this.rel)}"
                target="\${ifDefined(this.target)}"
                title="\${ifDefined(this.title)}"
                ><slot></slot
              ></a>
            \`;
          }
      `}</CodePane>
    </Slide>
    <Slide>
      <CodePane language="javascript">{`
          // From gdwc-link.js

          /**
           * Processes data object and the related component properties.
           *
           * @param {object} data
           */
          processData(data) {
            if (data?.uri) {
              const customizedUri = data.uri
                .replace('entity:', '/')
                .replace('internal:', '');
              this.href = customizedUri;
            }

            if (data?.title) {
              this.title = data.title;
            }
          }
      `}</CodePane>
    </Slide>
    <MarkdownSlideSet>
      {`

        # What if we wanted to manage state across multiple components?

        `}
    </MarkdownSlideSet>
    <Slide>
      <Sandbox config={sb1} openPaths={["/index.html", "/index.js"]} />
    </Slide>
    <Slide>
      <CodePane language="javascript">{`
        fetchData(baseURL, menuID) {
          this.isLoading = true;
          const url = \`\${baseURL}/system/menu/\${menuID}/linkset\`;
          fetch(url, {})
            .then(response => {
              if (response.ok) {
                return response.json();
              }
              this.isLoading = false;
              throw new Error(
                \`Unable to fetch \${url}. \${response.status} \${response.statusText}\`
              );
            })
            .then(json => {
              try {
                const denormalized = denormalize(json, menuID);
                this.tree = denormalized.tree;
              } catch (e) {
                throw new Error('Unable to denormalize menu.');
              }
              this.isLoading = false;
            });
        }
        `}</CodePane>
    </Slide>
    <MarkdownSlideSet>
      {`
        ## This doesn't scale
        Consider a card component.
        - 1 card = 1 fetch
        - 10 cards = 10 fetches
        - 100 cards = you DDOSed yo' self

      `}
    </MarkdownSlideSet>
    <MarkdownSlideSet>
      {`

        ## Drupal State
        - Framework agnostic and universal (server and client)
        - Retrieve an object from Drupal’s API, then serve all future requests from local state.
        - Data is represented in a simplified, deserialized structure

        DrupalCon Talk: [https://bit.ly/ds-sdk-pdx](https://bit.ly/ds-sdk-pdx)

      `}
    </MarkdownSlideSet>
    <Slide>
      <Sandbox config={sb5} openPaths={["/index.js"]}></Sandbox>
    </Slide>
    {/* <Slide>
      <Sandbox config={sb6} openPaths={["/index.js"]}></Sandbox>
    </Slide> */}
    <MarkdownSlideSet>
      {`

        # What if we created a web component that could source data from Drupal?

        `}
    </MarkdownSlideSet>
    <Slide>
      <Sandbox config={sb9} openPaths={["/index.html"]}></Sandbox>
    </Slide>
    {/* <MarkdownSlideSet>
      {`
        # Page Template Example

        [See Homepage example in Storybook](http://localhost:6006/?path=/story/templates-homepage--primary)

        `}
    </MarkdownSlideSet> */}
    <MarkdownSlideSet>
      {`
        # What if we wanted this project to be sustainable?

        - Needs to be a community effort, not a solo project :)
        - Meta issue: what components would you want to see?
        - Better yet - jump in and try making a component!
          - \`npm run create-component\`

        ---

        # What if we wanted to make an important impact for the PHP community?

        ---

        # Web Component Server Side Rendering in PHP

        - By default, web components mount client side, which can present problems.
        - Declarative Shadow DOM solves this, and is gaining browser adoption.
        - Existing solutions for SSR require Node.

        **Could Drupal play a key role in improving PHP SSR for Web Components?**

        ---

        # Thanks Contributors!

        - Menu Web Component - nod_, baddysonja, gabesuillice cosmicdreams, knowak, joegraduate, hedrickbt, D34dMan, jenniferaube, lhockley, darren-oh
        - Summer of Code - @muthu12345
        - GDWC - andy-blum, finnsky
        - Drupal State - coby.sher, jayhuskins
        - Anyone I missed, and almost certainly you.

        ---

        # What if the talk was over, but you had questions?
      `}
    </MarkdownSlideSet>
    <Slide
      backgroundColor="tertiary"
      backgroundImage="url(https://slideplayer.com/slide/269033/1/images/15/Discussion+Time%21.jpg)"
    ></Slide>
  </Deck>
);

ReactDOM.render(<Presentation />, document.getElementById("root"));
