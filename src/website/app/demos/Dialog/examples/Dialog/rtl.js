/* @flow */
import { ThemeProvider } from '../../../../../../library/themes';
import Text from '../../../../../../library/Text';
import DemoLayout from '../../components/DemoLayout';
import Dialog from '../../components/DemoDialog';

export default {
  id: 'rtl',
  title: 'Bidirectionality',
  description: `Dialog reverses its alignment when the \`direction\` theme
variable is set to \`rtl\` (right-to-left).`,
  scope: {
    DemoLayout,
    Dialog,
    Text,
    ThemeProvider
  },
  source: `
    <div dir="rtl">
      <ThemeProvider theme={{ direction: 'rtl' }}>
        <DemoLayout>
          <Dialog
            title="الأحكام والشروط"
            actions={[
              { text: 'إلغاء' },
              { text: 'قبول الشروط' }
            ]}>
            <Text>
              ان يبق إستعمل بأضرار الإحتفاظ, هذا إذ ا وبالرغم. أوسع الشهيرة ٣٠ تلك, بحث ثم أوسع أجزاء, مع فصل ودول وسوء الحيلولة. عن مكن المارق واتّجه الإقتصادي, رئيس يعادل الأسيوي كان من, المحيط بتحدّي إذ جُل. تم يتم فرنسا العالم. فقد قد تمهيد الأرواح. ليركز تغييرات أخذ ما, عن جعل بمباركة الولايات.
            </Text>
          </Dialog>
        </DemoLayout>
      </ThemeProvider>
    </div>`
};
