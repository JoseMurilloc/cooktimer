import { 
  Html,
  Head,
  Main,
  NextScript 
} from 'next/document'
import { getCssText } from '../styles';

export default function Document() {
    return (
      <Html>
        <Head>
          <link rel="manifest" href="/manifest.json" />
          <link rel="apple-touch-icon" href="/icon.png" />
          <link rel="theme-color" href="#FFF" />

          <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssText() }} />
          <link href="https://fonts.googleapis.com/css?family=Nunito:200,300,regular,500,600,700,800,900,200italic,300italic,italic,500italic,600italic,700italic,800italic,900italic" rel="stylesheet" />
          
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
}