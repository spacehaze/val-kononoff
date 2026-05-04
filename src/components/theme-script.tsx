/**
 * Inline script that runs before hydration to set the initial theme on
 * <html data-theme=...>. This prevents a flash-of-wrong-theme on first paint.
 */
export function ThemeScript() {
  const code = `(function(){try{
    var s=localStorage.getItem('theme');
    var prefersDark=window.matchMedia('(prefers-color-scheme: dark)').matches;
    var t=s==='dark'||s==='light'?s:(prefersDark?'dark':'light');
    document.documentElement.setAttribute('data-theme',t);
  }catch(e){}})();`;
  return <script dangerouslySetInnerHTML={{ __html: code }} />;
}
