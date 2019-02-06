/* @flow */
export default `Table is best suited to data in which a user will need to
compare data points or investigate relationships. For simpler data, consider a
list structure; for more complex data or user needs, consider data
visualization, possibly in addition to Table. Don't use Table for data sets with
a blend of text, images, and data visualizations, or content with mixed
formatting; use [Card](/components/card) instead.

For Tables with many columns, [striped](#striped) rows can enhance readability.
Tables that do not have enough columns to fill the width can be hard to read and
should be displayed at a more appropriate width (perhaps using
[Box](/components/box) or other layout components).

Table is designed to optimize performance and minimize excess operations, but
rendering more than 100 rows is still not recommended.`;
