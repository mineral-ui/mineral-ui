/* @flow */
import { CardDivider } from '../../../../../../library/Card';
import Tabs, { Tab } from '../../../../../../library/Tabs';
import { ThemeProvider } from '../../../../../../library/themes';
import Text from '../../../../../../library/Text';
import DemoLayout from '../../../shared/DemoLayout';

const rtlContent = (index: number) =>
  `${index} خدمة الجزر أبجد هوز شرب الحالي سمبر مصنوعة من السكر الغاز وكالات التصنيف الائتماني في تأثير تتعهد اللاعبين التمويل الدردشة عن العقارات الكلي الواجبات المنزلية الآن أن شرائح حزينة الكيميائية البيئية قبل التربة خوفا من زين، وعظيم الكرتون الرئيسي الشيخوخة محزن والمرض والجوع والتغذية سكان الفقر القبيح في الواقع، في قطر، في معرف بوروس، لا الاحماء منتصف الجلوس تلقي الكازينو أسد، والكثير من كرة القدم هذا العنصر هو أن البوابة الرئيسية ومع ذلك، فإن الموز التطوير العقاري قوس الصلصة`;

export default {
  id: 'rtl',
  title: 'Bidirectionality',
  description: `Tabs supports right-to-left (RTL) languages. The position and
alignment of [Tabs](/components/tab) and panel content are reversed when the
\`direction\` theme variable is set to \`'rtl'\`.`,
  scope: {
    CardDivider,
    rtlContent,
    DemoLayout,
    Tabs,
    Tab,
    Text,
    ThemeProvider
  },
  source: `() => {
    const tabPanels = [
      <Tab title="علامة التبويب 1" key="1"><Text>{rtlContent(1)}</Text></Tab>,
      <Tab title="علامة التبويب 2" key="2"><Text>{rtlContent(2)}</Text></Tab>,
      <Tab title="علامة التبويب 3" key="3"><Text>{rtlContent(3)}</Text></Tab>
    ];
    return (
      <div dir="rtl">
        <ThemeProvider theme={{direction: 'rtl'}}>
          <DemoLayout>
            <Tabs label="علامات على القمة" height="7.75em">{tabPanels}</Tabs>
            <CardDivider />
            <Tabs position="start" label="علامات التبويب في البداية" height="7.75em">{tabPanels}</Tabs>
          </DemoLayout>
        </ThemeProvider>
      </div>
    );
  }
  `
};
