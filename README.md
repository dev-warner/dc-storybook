# dc-storybook

### installation

```bash
npm i -D dc-storybook
```

### Setup

Add `dc-storybook` to your addons in `.storybook/main.js`

```js
module.exports = {
  addons: [
    // your addons
    "dc-storybook",
  ],
};
```

Add .env varibles for your hub/staging env

```
HUB_NAME="<hub>"
STAGING_ENVIRONMENT="<vse>"
```

Add a schema to your parameters under `DynamicContent`

```ts
export default {
  component: YouComponent,
  parameters: {
    DynamicContent: {
      schema: "https://bigcontent.io/carousel.com",
    },
  },
};

const Template = (args) => <YouComponent {...args} />;

export const Primary = Template.bind({});

Primary.args = {};
```

## Example

You should now see content from Dynamic Content under a tab on `storybook`
![Tux, the Linux mascot](/example.png)

### Controlling/Merging Arguments

You can pass a callback to `DynamicContent` to augment whats passed to the component

```js
export default {
  component: YouComponent,
  parameters: {
    DynamicContent: {
      schema: "https://bigcontent.io/carousel.com",
      transformer: (args, response) => {
        /**
         *  args are the current arguments, if you
         *  have arguments other than DC content you can merge them in here
         */

        /**
         *  response is the item of content selected
         *  if you don't need all the content you can return it here
         */

        return {
          productId: args.sku,
          productImage: response.content.productImage,
        };
      },
    },
  },
};
```

### Sort the content

You can sort the items using [trait:sortable](https://amplience.com/docs/development/contentdelivery/filterandsort.html#sorting) by adding a sortKe

```js
export default {
  component: YouComponent,
  parameters: {
    DynamicContent: {
      schema: "https://bigcontent.io/carousel.com",
      sortKey: "/title"
      },
    },
  },
};
```
