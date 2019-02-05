/* @flow */
import IconSentimentSatisfied from 'mineral-ui-icons/IconSentimentSatisfied';

export default {
  id: 'sizes',
  title: 'Sizes',
  description: `Icons are available in three preset sizes, or you can supply your own custom size.`,
  scope: { IconSentimentSatisfied },
  source: `
    <div>
      <IconSentimentSatisfied size="small" />
      <IconSentimentSatisfied />
      <IconSentimentSatisfied size="large" />
      <IconSentimentSatisfied size="7em" />
    </div>`
};
