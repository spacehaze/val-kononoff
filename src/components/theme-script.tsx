/**
 * Inline script that runs before hydration to set the initial theme on
 * <html data-theme=...>. This prevents a flash-of-wrong-theme on first paint.
 */
export function ThemeScript() {
  const code = `(function(){try{
    var s=localStorage.getItem('theme');
    var t=s==='dark'||s==='light'?s:'light';
    document.documentElement.setAttribute('data-theme',t);
  }catch(e){}})();`;
  return <script dangerouslySetInnerHTML={{ __html: code }} />;
}
